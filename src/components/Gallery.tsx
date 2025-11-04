"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { PROJECT_CATEGORIES, projects, type Project, type Category, categoryCounts } from "@/lib/projects";
import { useI18n } from "@/lib/i18n"; // Import is already present, but confirming use
import { usePathname, useRouter, useSearchParams } from "next/navigation";

// --- ADDED IMPORTS ---
import BlurImage from "./BlurImage";
import Breadcrumbs from "./Breadcrumbs";
// ---------------------

type Point = { clientX: number; clientY: number };
function cx(...cls: (string | false | null | undefined)[]) {
  return cls.filter(Boolean).join(" ");
}

const ALL = "Alle" as const;
type CatFilter = typeof ALL | Category;

type ImageItem = {
  projectId: string;
  title: string;
  category: Category;
  src: string;
  idxInAlbum: number;
};

export default function Gallery() {
  const { t } = useI18n(); // Initialized i18n
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  // Read initial cat from URL (?cat=Vloeren)
  const catFromUrl = decodeURIComponent(params.get("cat") || "") as Category;
  const initialCat: CatFilter = PROJECT_CATEGORIES.includes(catFromUrl) ? catFromUrl : ALL;

  const [category, setCategory] = useState<CatFilter>(initialCat);
  const [query, setQuery] = useState("");

  // Sync URL when category changes
  useEffect(() => {
    const next = new URLSearchParams(params.toString());
    if (category === ALL) next.delete("cat");
    else next.set("cat", encodeURIComponent(category));
    router.replace(`${pathname}?${next.toString()}`, { scroll: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  // Build flattened image items from projects
  const allImageItems: ImageItem[] = useMemo(() => {
    const items: ImageItem[] = [];
    for (const p of projects) {
      p.images.forEach((src, idx) =>
        items.push({
          projectId: p.id,
          title: p.title,
          category: p.category,
          src,
          idxInAlbum: idx,
        })
      );
    }
    return items;
  }, []);

  // Apply filters
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allImageItems.filter((it) => {
      const byCat = category === ALL ? true : it.category === category;
      const byQ = !q || it.title.toLowerCase().includes(q);
      return byCat && byQ;
    });
  }, [allImageItems, category, query]);

  const counts = categoryCounts(); // counts images per category

  // Lightbox state: open index points at filtered[] index
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const dragging = useRef(false);
  const lastPos = useRef({ x: 0, y: 0 });
  const lastTap = useRef<number>(0);

  // Pinch
  const pinchStartDist = useRef<number | null>(null);
  const pinchStartZoom = useRef<number>(1);
  const pinchStartOffset = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const pinchCenter = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  function openAt(idx: number) {
    setIndex(idx);
    resetTransform();
    setOpen(true);
  }
  function next() {
    setIndex((i) => (i + 1) % filtered.length);
    resetTransform();
  }
  function prev() {
    setIndex((i) => (i - 1 + filtered.length) % filtered.length);
    resetTransform();
  }
  function resetTransform() {
    setZoom(1);
    setOffset({ x: 0, y: 0 });
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, filtered.length]);

  // Mouse pan
  function onMouseDown(e: React.MouseEvent) {
    if (zoom === 1) return;
    dragging.current = true;
    lastPos.current = { x: e.clientX, y: e.clientY };
  }
  function onMouseMove(e: React.MouseEvent) {
    if (!dragging.current) return;
    const dx = e.clientX - lastPos.current.x;
    const dy = e.clientY - lastPos.current.y;
    lastPos.current = { x: e.clientX, y: e.clientY };
    setOffset((o) => clampOffset({ x: o.x + dx, y: o.y + dy, z: zoom }));
  }
  function onMouseUp() {
    dragging.current = false;
  }

  // Touch helpers
  function getDistance(t1: Point, t2: Point) {
    const dx = t2.clientX - t1.clientX;
    const dy = t2.clientY - t1.clientY;
    return Math.hypot(dx, dy);
  }
  function getCenter(t1: Point, t2: Point) {
    return { x: (t1.clientX + t2.clientX) / 2, y: (t1.clientY + t2.clientY) / 2 };
  }

  function onTouchStart(e: React.TouchEvent) {
    if (e.touches.length === 2) {
      const [t1, t2] = [e.touches[0], e.touches[1]];
      pinchStartDist.current = getDistance(t1, t2);
      pinchStartZoom.current = zoom;
      pinchStartOffset.current = { ...offset };
      pinchCenter.current = getCenter(t1, t2);
      return;
    }
    if (e.touches.length === 1) {
      const now = Date.now();
      if (now - lastTap.current < 300) {
        toggleZoom();
      } else if (zoom > 1) {
        const t = e.touches[0];
        dragging.current = true;
        lastPos.current = { x: t.clientX, y: t.clientY };
      }
      lastTap.current = now;
    }
  }

  function onTouchMove(e: React.TouchEvent) {
    if (e.touches.length === 2 && pinchStartDist.current) {
      e.preventDefault();
      const [t1, t2] = [e.touches[0], e.touches[1]];
      const dist = getDistance(t1, t2);
      const scaleDelta = dist / pinchStartDist.current;
      const newZoom = clamp(pinchStartZoom.current * scaleDelta, 1, 3);

      const c = getCenter(t1, t2);
      const dx = c.x - pinchCenter.current.x;
      const dy = c.y - pinchCenter.current.y;

      const zoomRatio = newZoom / (pinchStartZoom.current || 1);
      const newOffset = {
        x: clampNumber(pinchStartOffset.current.x * zoomRatio + dx, -300 * (newZoom - 1), 300 * (newZoom - 1)),
        y: clampNumber(pinchStartOffset.current.y * zoomRatio + dy, -300 * (newZoom - 1), 300 * (newZoom - 1)),
      };

      setZoom(newZoom);
      setOffset(newOffset);
      return;
    }

    if (!dragging.current || e.touches.length !== 1 || zoom === 1) return;
    e.preventDefault();
    const t = e.touches[0];
    const dx = t.clientX - lastPos.current.x;
    const dy = t.clientY - lastPos.current.y;
    lastPos.current = { x: t.clientX, y: t.clientY };
    setOffset((o) => clampOffset({ x: o.x + dx, y: o.y + dy, z: zoom }));
  }

  function onTouchEnd() {
    dragging.current = false;
    pinchStartDist.current = null;
  }

  function onWheel(e: React.WheelEvent) {
    if (!open || zoom === 1) return;
    e.preventDefault();
    const delta = -e.deltaY * 0.0015;
    setZoom((z) => {
      const nz = clamp(z + delta, 1, 3);
      if (nz === 1) setOffset({ x: 0, y: 0 });
      return nz;
    });
  }

  function toggleZoom() {
    setZoom((z) => {
      const nz = z === 1 ? 2 : 1;
      if (nz === 1) setOffset({ x: 0, y: 0 });
      return nz;
    });
  }

  return (
    <section className="py-16 md:py-20" data-reveal>
      <div className="mx-auto max-w-7xl px-4">
        
        {/* BREADCRUMBS ADDED */}
        <Breadcrumbs trail={[{ href: "/projecten", label: t("breadcrumbs.projects") }]} />

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mt-4"> {/* Added mt-4 for spacing after breadcrumbs */}
          {/* Section title translated */}
          <h1 className="text-3xl md:text-4xl font-extrabold">{t("breadcrumbs.projects")}</h1>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="flex flex-wrap gap-2">
              {/* Filter pill labels are dynamic, no translation needed here */}
              <FilterPill label={t("gallery.all")} count={allImageItems.length} active={category === ALL} onClick={() => setCategory(ALL)} />
              {PROJECT_CATEGORIES.map((c) => (
                <FilterPill key={c} label={c} count={counts[c] ?? 0} active={category === c} onClick={() => setCategory(c)} />
              ))}
            </div>

            {/* Search placeholder translated */}
            <input 
              value={query} 
              onChange={(e) => setQuery(e.target.value)} 
              placeholder={t("gallery.searchPlaceholder")} 
              className="w-full sm:w-80 rounded-lg border border-black/10 px-3 py-2" 
            />
          </div>
        </div>

        <div className="mt-8 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((item, idx) => (
            <button key={`${item.projectId}-${item.idxInAlbum}`} className="group relative rounded-lg overflow-hidden" onClick={() => openAt(idx)} aria-label={`Open ${item.title}`}>
              
              {/* IMAGE BLOCK REPLACED with BlurImage wrapper */}
              <div className="relative w-full h-44 md:h-56">
                <BlurImage
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover group-hover:scale-105 transition"
                />
              </div>
              {/* END BlurImage wrapper */}
              
              <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-black/50 to-transparent text-white text-xs">
                <div className="font-semibold">{item.title}</div>
                <div className="opacity-80">{item.category}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {open && filtered.length > 0 && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
          <button className="absolute inset-0 cursor-default" aria-label="Sluit lightbox" onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }} />
          <button className="absolute top-4 right-4 text-white text-2xl" onClick={() => setOpen(false)}>✕</button>
          <button className="absolute left-4 text-white text-3xl" onClick={prev}>‹</button>
          <button className="absolute right-4 text-white text-3xl" onClick={next}>›</button>

          <div className="max-w-5xl max-h-[80vh] overflow-hidden rounded-lg touch-pan-y" onWheel={onWheel} onDoubleClick={toggleZoom} onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={onMouseUp} onMouseLeave={onMouseUp} onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
            <img src={filtered[index].src} className="select-none" alt={filtered[index].title} draggable={false} style={{ transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`, transformOrigin: "center", transition: (dragging.current || pinchStartDist.current) ? "none" : "transform 120ms ease", cursor: zoom > 1 ? "grab" : "zoom-in" }} />
          </div>
        </div>
      )}
    </section>
  );
}

function FilterPill({ label, count, active, onClick }: { label: string; count?: number; active?: boolean; onClick: () => void; }) {
  const { t } = useI18n(); // Use i18n for "Alle" (All) label

  // Dynamic translation for "Alle" pill label
  const pillLabel = label === "Alle" ? t("gallery.all") : label;

  return (
    <button onClick={onClick} className={cx("px-3 py-1.5 rounded-full text-sm border inline-flex items-center gap-2", active ? "bg-bronze text-charcoal border-bronze" : "bg-white border-black/10 hover:bg-cream")}>
      <span>{pillLabel}</span>
      {typeof count === "number" && <span className={cx("text-[11px] px-1.5 py-[1px] rounded-full", active ? "bg-charcoal text-bronze" : "bg-black/10 text-charcoal/80")}>{count}</span>}
    </button>
  );
}

// helpers
function clamp(n: number, min: number, max: number) { return Math.max(min, Math.min(max, n)); }
function clampNumber(n: number, min: number, max: number) { return Math.max(min, Math.min(max, n)); }
function clampOffset({ x, y, z }: { x: number; y: number; z: number }) { const limit = 300 * (z - 1); return { x: clamp(x, -limit, limit), y: clamp(y, -limit, limit) }; }
