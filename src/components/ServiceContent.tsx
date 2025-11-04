"use client";

import Image from "next/image";
import ContactForm from "./ContactForm";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import type { Service } from "@/lib/services";

// --- ADDED IMPORTS ---
import Breadcrumbs from "./Breadcrumbs";
import BlurImage from "./BlurImage";
import FAQ from "./FAQ";
// ---------------------

type Point = { clientX: number; clientY: number };

export default function ServiceContent({ svc }: { svc: Service }) {
  // Lightbox state over svc.images
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const dragging = useRef(false);
  const lastPos = useRef({ x: 0, y: 0 });
  const lastTap = useRef<number>(0);

  // pinch
  const pinchStartDist = useRef<number | null>(null);
  const pinchStartZoom = useRef<number>(1);
  const pinchStartOffset = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const pinchCenter = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  function openAt(i: number) {
    setIndex(i);
    resetTransform();
    setOpen(true);
  }
  function next() {
    setIndex((v) => (v + 1) % svc.images.length);
    resetTransform();
  }
  function prev() {
    setIndex((v) => (v - 1 + svc.images.length) % svc.images.length);
    resetTransform();
  }
  function resetTransform() {
    setZoom(1);
    setOffset({ x: 0, y: 0 });
  }
  function toggleZoom() {
    setZoom((z) => {
      const nz = z === 1 ? 2 : 1;
      if (nz === 1) setOffset({ x: 0, y: 0 });
      return nz;
    });
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
  }, [open]);

  // mouse pan
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

  // touch pinch/drag
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

  return (
    <main>
      {/* BREADCRUMBS ADDED HERE */}
      <div className="mx-auto max-w-7xl px-4 pt-6">
        <Breadcrumbs
          trail={[
            { href: "/diensten", label: "Diensten" },
            { href: `/diensten/${svc.slug}`, label: svc.title },
          ]}
        />
      </div>
      
      {/* HERO */}
      <section className="relative" data-reveal>
        <div className="absolute inset-0 -z-10">
          <Image src={svc.img} alt={svc.title} fill className="object-cover" />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="fade-dark rounded-xl p-6 md:p-10 text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-extrabold">{svc.title}</h1>
            <p className="mt-3 text-lg opacity-90">{svc.excerpt}</p>
            {svc.intro && <p className="mt-4 opacity-95">{svc.intro}</p>}
            <div className="mt-6 flex gap-3 flex-wrap">
              <a href="#offerte" className="inline-block bg-bronze text-charcoal px-5 py-3 rounded font-semibold">
                Vrijblijvende offerte
              </a>
              <Link href="/diensten" className="underline underline-offset-4">
                ← Alle diensten
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BODY + OFFERTE */}
      <section className="mx-auto max-w-7xl px-4 py-12 grid md:grid-cols-3 gap-8" data-reveal>
        {/* LEFT CONTENT */}
        <article className="md:col-span-2 space-y-8">
          <div>
            <h2 className="text-2xl font-bold">Waarom kiezen voor Klusdam</h2>
            <ul className="list-disc pl-5 mt-3 space-y-2">
              {svc.bullets.map((b, i) => <li key={i}>{b}</li>)}
              <li>Premium materialen en A-merk gereedschap voor duurzaam resultaat.</li>
              <li>Heldere offertes en planning. Geen verrassingen achteraf.</li>
              <li>Netjes werken: afdekking, stofbeperking en dagelijks schoon.</li>
              <li>Lokale vakmensen met jaren ervaring in Schiedam en regio Rotterdam.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Onze werkwijze</h3>
            <ol className="list-decimal pl-5 mt-3 space-y-2">
              <li>Gratis opname en advies op locatie.</li>
              <li>Transparante offerte met planning en materialen.</li>
              <li>Professionele uitvoering met vaste contactpersoon.</li>
              <li>Oplevering met garantie en nazorg.</li>
            </ol>
          </div>

          {/* FAQ BLOCK: REPLACED with the FAQ component */}
          {svc.faq && <FAQ items={svc.faq} />}

          {/* 6-IMAGE GALLERY */}
          <div>
            <h3 className="text-xl font-semibold">Voorbeelden van ons werk</h3>
            <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-3">
              {svc.images.slice(0, 6).map((src, i) => (
                <button
                  key={src + i}
                  className="relative aspect-[4/3] overflow-hidden rounded-lg group"
                  onClick={() => openAt(i)}
                  aria-label="Open afbeelding"
                >
                  {/* Image tag REPLACED with BlurImage component */}
                  <BlurImage
                    src={src}
                    alt={`${svc.title} voorbeeld ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 33vw"
                    className="object-cover group-hover:scale-105 transition"
                  />
                  {/* End BlurImage */}
                </button>
              ))}
            </div>
          </div>
        </article>

        {/* RIGHT SIDEBAR */}
        <aside className="bg-cream p-6 rounded-xl" id="offerte">
          <h3 className="font-semibold text-lg">Vrijblijvende offerte</h3>
          <p className="text-sm opacity-80">Vul je gegevens in. We reageren snel.</p>
          <div className="mt-4">
            <ContactForm compact />
          </div>
          <div className="mt-4 text-sm">
            <Link href="/diensten" className="underline underline-offset-4">
              ← Terug naar alle diensten
            </Link>
          </div>
        </aside>
      </section>

      {/* LIGHTBOX (kept as-is) */}
      {open && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
          <button
            className="absolute inset-0 cursor-default"
            aria-label="Sluit lightbox"
            onClick={(e) => {
              if (e.target === e.currentTarget) setOpen(false);
            }}
          />
          <button className="absolute top-4 right-4 text-white text-2xl" onClick={() => setOpen(false)}>
            ✕
          </button>
          <button className="absolute left-4 text-white text-3xl" onClick={prev}>
            ‹
          </button>
          <button className="absolute right-4 text-white text-3xl" onClick={next}>
            ›
          </button>

          <div
            className="max-w-5xl max-h-[80vh] overflow-hidden rounded-lg touch-pan-y bg-black/60"
            onWheel={(e) => {
              if (!open || zoom === 1) return;
              e.preventDefault();
              const delta = -e.deltaY * 0.0015;
              setZoom((z) => {
                const nz = clamp(z + delta, 1, 3);
                if (nz === 1) setOffset({ x: 0, y: 0 });
                return nz;
              });
            }}
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
              src={svc.images[index]}
              alt={`${svc.title} voorbeeld ${index + 1}`}
              className="select-none"
              draggable={false}
              style={{
                transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`,
                transformOrigin: "center",
                transition: dragging.current || pinchStartDist.current ? "none" : "transform 120ms ease",
                cursor: zoom > 1 ? "grab" : "zoom-in",
              }}
            />
          </div>
        </div>
      )}
    </main>
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