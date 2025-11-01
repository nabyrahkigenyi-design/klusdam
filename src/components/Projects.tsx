"use client";

import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/lib/i18n";

type Point = { clientX: number; clientY: number };

const imgs = [
  "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1612157777902-5382bc6e864b?q=80&w=1600&auto=format&fit=crop",
];

export default function Projects() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [i, setI] = useState(0);

  // zoom & pan state
  const [zoom, setZoom] = useState(1); // 1..3
  const [offset, setOffset] = useState({ x: 0, y: 0 }); // px translate
  const dragging = useRef(false);
  const lastPos = useRef({ x: 0, y: 0 });
  const lastTap = useRef<number>(0);

  // pinch state
  const pinchStartDist = useRef<number | null>(null);
  const pinchStartZoom = useRef<number>(1);
  const pinchStartOffset = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const pinchCenter = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  function openAt(idx: number) {
    setI(idx);
    resetTransform();
    setOpen(true);
  }
  function next() {
    setI((v) => (v + 1) % imgs.length);
    resetTransform();
  }
  function prev() {
    setI((v) => (v - 1 + imgs.length) % imgs.length);
    resetTransform();
  }
  function resetTransform() {
    setZoom(1);
    setOffset({ x: 0, y: 0 });
  }

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // Mouse drag to pan when zoomed
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

  // ---- Touch helpers use lightweight Point type (fixes React.Touch vs Touch) ----
  function getDistance(t1: Point, t2: Point) {
    const dx = t2.clientX - t1.clientX;
    const dy = t2.clientY - t1.clientY;
    return Math.hypot(dx, dy);
  }
  function getCenter(t1: Point, t2: Point) {
    return { x: (t1.clientX + t2.clientX) / 2, y: (t1.clientY + t2.clientY) / 2 };
  }

  // Touch handlers: double-tap, drag, pinch-to-zoom
  function onTouchStart(e: React.TouchEvent) {
    if (e.touches.length === 2) {
      // start pinch
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
        // double tap
        toggleZoom();
      } else if (zoom > 1) {
        // start drag only when zoomed
        const t = e.touches[0];
        dragging.current = true;
        lastPos.current = { x: t.clientX, y: t.clientY };
      }
      lastTap.current = now;
    }
  }

  function onTouchMove(e: React.TouchEvent) {
    // Pinch zoom
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
        x: clampNumber(
          pinchStartOffset.current.x * zoomRatio + dx,
          -300 * (newZoom - 1),
          300 * (newZoom - 1)
        ),
        y: clampNumber(
          pinchStartOffset.current.y * zoomRatio + dy,
          -300 * (newZoom - 1),
          300 * (newZoom - 1)
        ),
      };

      setZoom(newZoom);
      setOffset(newOffset);
      return;
    }

    // Drag to pan when zoomed
    if (!dragging.current || e.touches.length !== 1 || zoom === 1) return;
    e.preventDefault(); // prevent page scroll only while panning at zoom>1
    const t = e.touches[0];
    const dx = t.clientX - lastPos.current.x;
    const dy = t.clientY - lastPos.current.y;
    lastPos.current = { x: t.clientX, y: t.clientY };
    setOffset((o) => clampOffset({ x: o.x + dx, y: o.y + dy, z: zoom }));
  }

  function onTouchEnd() {
    dragging.current = false;
    pinchStartDist.current = null; // end pinch session
  }

  // Wheel zoom: allow page scroll when zoom === 1; block while zooming
  function onWheel(e: React.WheelEvent) {
    if (!open || zoom === 1) return; // page scrolls normally
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
    <section id="projecten" className="py-16 md:py-20 bg-cream/70" data-reveal>
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold">{t("recent_projects")}</h2>
        <div className="mt-8 grid gap-4 grid-cols-2 md:grid-cols-4">
          {imgs.map((src, idx) => (
            <button
              key={idx}
              className="rounded-lg overflow-hidden group"
              onClick={() => openAt(idx)}
              aria-label="Open afbeelding"
            >
              <img
                src={src}
                className="object-cover w-full h-44 md:h-52 group-hover:scale-105 transition"
                alt={`Project ${idx + 1}`}
              />
            </button>
          ))}
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
          {/* Backdrop to close */}
          <button
            className="absolute inset-0 cursor-default"
            aria-label="Sluit lightbox"
            onClick={(e) => {
              if (e.target === e.currentTarget) setOpen(false);
            }}
          />
          <button className="absolute top-4 right-4 text-white text-2xl" onClick={() => setOpen(false)}>✕</button>
          <button className="absolute left-4 text-white text-3xl" onClick={prev}>‹</button>
          <button className="absolute right-4 text-white text-3xl" onClick={next}>›</button>

          <div
            className="max-w-5xl max-h-[80vh] overflow-hidden rounded-lg touch-pan-y"
            onWheel={onWheel}
            onDoubleClick={toggleZoom}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <img
              src={imgs[i]}
              className="select-none"
              alt=""
              draggable={false}
              style={{
                transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`,
                transformOrigin: "center",
                transition: (dragging.current || pinchStartDist.current) ? "none" : "transform 120ms ease",
                cursor: zoom > 1 ? "grab" : "zoom-in",
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
}

// helpers
function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}
function clampNumber(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}
function clampOffset({ x, y, z }: { x: number; y: number; z: number }) {
  const limit = 300 * (z - 1);
  return { x: clamp(x, -limit, limit), y: clamp(y, -limit, limit) };
}
