"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

/* All links point to Canadian manufacturer / brand sites. */
const brands = [
  { name: "Mohawk",             src: "/assets/images/brands/mohawk.svg",      w: 148, h: 42, href: "https://www.mohawkflooring.com/" },
  { name: "Beaulieu Canada",    src: "/assets/images/brands/beaulieu.jpg",    w: 160, h: 42, href: "https://beaulieucanada.com/" },
  { name: "Shaw Floors",        src: "/assets/images/brands/shaw.webp",       w: 130, h: 42, href: "https://shawfloors.com/" },
  { name: "Grandeur Flooring",  src: "/assets/images/brands/grandeur.svg",    w: 152, h: 42, href: "https://grandeurflooring.ca/" },
  { name: "Aladdin Commercial", src: "/assets/images/brands/aladdin.svg",     w: 180, h: 42, href: "https://www.aladdincommercial.com/" },
  { name: "Ames Tile",          src: "/assets/images/brands/ames.png",        w: 110, h: 42, href: "https://amestile.com/" },
  { name: "Daltile",            src: "/assets/images/brands/daltile.png",     w: 110, h: 42, href: "https://www.daltile.com/" },
  { name: "Opus Hardwood",      src: "/assets/images/brands/opus.svg",        w: 188, h: 42, href: "https://opushardwood.com/" },
  { name: "Godfrey Hirst",      src: "/assets/images/brands/godfrey.png",     w: 200, h: 42, href: "https://www.godfreyhirst.com/" },
  { name: "DreamWeaver",        src: "/assets/images/brands/dreamweaver.svg", w: 196, h: 42, href: "https://dreamweavercarpet.com/" },
  { name: "Fuzion Flooring",    src: "/assets/images/brands/fuzion.jpg",      w: 150, h: 42, href: "https://fuzionflooring.com/" },
  { name: "TORLYS",             src: "/assets/images/brands/torlys.svg",      w: 120, h: 42, href: "https://www.torlys.com/" },
];

const doubled = [...brands, ...brands];

export default function BrandPartners() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const [paused, setPaused] = useState(false);
  const startX = useRef(0);
  const startScroll = useRef(0);
  const dragDistance = useRef(0);

  /* Pointer-based drag-to-scroll (works for mouse + touch + pen) */
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el) return;
    setDragging(true);
    setPaused(true);
    startX.current = e.clientX;
    startScroll.current = el.scrollLeft;
    dragDistance.current = 0;
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    const el = trackRef.current;
    if (!el) return;
    const delta = e.clientX - startX.current;
    dragDistance.current = Math.abs(delta);
    el.scrollLeft = startScroll.current - delta;
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setDragging(false);
    try { trackRef.current?.releasePointerCapture(e.pointerId); } catch {}
    /* Resume auto-scroll after 2s of no drag */
    setTimeout(() => setPaused(false), 2000);
  };

  /* If the user drags more than a few pixels, block the anchor click that
   * would otherwise fire on pointerup */
  const onLinkClick = (e: React.MouseEvent) => {
    if (dragDistance.current > 5) {
      e.preventDefault();
    }
  };

  /* Manual auto-scroll (replaces CSS animation so drag + auto coexist) */
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let raf = 0;
    let lastTs = 0;
    const pxPerSec = 45; // scroll speed
    const half = () => el.scrollWidth / 2;

    const step = (ts: number) => {
      if (!lastTs) lastTs = ts;
      const dt = (ts - lastTs) / 1000;
      lastTs = ts;
      if (!paused && !dragging) {
        el.scrollLeft += pxPerSec * dt;
        if (el.scrollLeft >= half()) el.scrollLeft -= half();
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [paused, dragging]);

  return (
    <section className="py-14 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 text-center">
        <p className="text-gray-400 text-sm font-bold tracking-[0.2em] uppercase">
          Trusted Brands We Carry
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div
          ref={trackRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => { if (!dragging) setPaused(false); }}
          className={`flex gap-6 items-center overflow-x-auto no-scrollbar select-none ${
            dragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none", touchAction: "pan-y" }}
        >
          {doubled.map((brand, i) => (
            <a
              key={`${brand.name}-${i}`}
              href={brand.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${brand.name}`}
              onClick={onLinkClick}
              draggable={false}
              className="flex items-center justify-center px-5 py-3 rounded-xl border border-gray-100 bg-gray-50 shrink-0 h-16 hover:border-accent/40 hover:bg-white hover:shadow-md transition-all"
            >
              <Image
                src={brand.src}
                alt={brand.name}
                width={brand.w}
                height={brand.h}
                className="object-contain max-h-10 w-auto pointer-events-none"
                unoptimized
                draggable={false}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
