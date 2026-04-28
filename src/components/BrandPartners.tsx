"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

/* All logos are real brand marks; hrefs verified to resolve (200/301). */
const brands = [
  { name: "Mohawk",             src: "/assets/images/brands/mohawk-real.svg",        w: 150, h: 42, href: "https://www.mohawkflooring.com/" },
  { name: "Beaulieu Canada",    src: "/assets/images/brands/beaulieu-real.png",      w: 160, h: 42, href: "https://beaulieucanada.com/" },
  { name: "Shaw Floors",        src: "/assets/images/brands/shaw-industries.svg",    w: 140, h: 42, href: "https://shawfloors.com/" },
  { name: "Grandeur Flooring",  src: "/assets/images/brands/grandeur-real.png",      w: 100, h: 42, href: "https://grandeurflooring.ca/" },
  { name: "Aladdin Commercial", src: "/assets/images/brands/aladdin-real.png",       w: 170, h: 42, href: "https://www.aladdincommercial.com/" },
  { name: "Ames Tile",          src: "/assets/images/brands/ames.png",               w: 110, h: 42, href: "https://amestile.com/" },
  { name: "Daltile",            src: "/assets/images/brands/daltile.png",            w: 110, h: 42, href: "https://www.daltile.com/" },
  { name: "Opus Floors Canada", src: "/assets/images/brands/opus-real.png",          w: 160, h: 42, href: "https://opusfloors.ca/" },
  { name: "Godfrey Hirst",      src: "/assets/images/brands/godfrey-hirst.png",      w: 170, h: 42, href: "https://www.godfreyhirst.com/" },
  { name: "DreamWeaver",        src: "/assets/images/brands/dreamweaver-real.svg",   w: 170, h: 42, href: "https://www.dreamweavercarpet.com/" },
  { name: "Fuzion Flooring",    src: "/assets/images/brands/fuzion-real.svg",        w: 150, h: 42, href: "https://fuzionflooring.com/" },
  { name: "TORLYS",             src: "/assets/images/brands/torlys.svg",             w: 120, h: 42, href: "https://www.torlys.com/" },
  { name: "Vidar Flooring",     src: "/assets/images/brands/vidar-real.png",         w: 160, h: 42, href: "https://www.vidarflooring.com/" },
  { name: "Home's Pros",        src: "/assets/images/brands/homespros-real.png",     w: 150, h: 48, href: "https://www.homespros.ca/" },
  { name: "FloorTek",           src: "/assets/images/brands/floortek.svg",           w: 150, h: 42, href: "https://floortek.ca/" },
  { name: "Twelve Oaks",        src: "/assets/images/brands/twelve-oaks-real.png",   w: 160, h: 48, href: "https://twelveoaks.ca/" },
];

const doubled = [...brands, ...brands];

export default function BrandPartners() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const [paused, setPaused] = useState(false);
  const startX = useRef(0);
  const startScroll = useRef(0);
  const dragDistance = useRef(0);

  /* Pointer-based drag-to-scroll (works for mouse + touch + pen).
   * NOTE: we intentionally do NOT call setPointerCapture — doing so routes
   * subsequent pointer events (including the click!) to the track div and
   * blocks the <a> anchors inside from navigating. */
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el) return;
    setPaused(true);
    startX.current = e.clientX;
    startScroll.current = el.scrollLeft;
    dragDistance.current = 0;
    /* Only enter "dragging" once the user has actually moved — lets taps
     * on the logo tiles navigate without being treated as a drag. */
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el) return;
    /* No drag in progress until the pointer is down AND has moved > threshold */
    if (startX.current === 0 && !dragging) return;
    const delta = e.clientX - startX.current;
    const dist = Math.abs(delta);
    if (!dragging && dist < 5) return;
    if (!dragging) setDragging(true);
    dragDistance.current = dist;
    el.scrollLeft = startScroll.current - delta;
  };

  const onPointerUp = () => {
    setDragging(false);
    startX.current = 0;
    /* Resume auto-scroll after a short pause */
    setTimeout(() => setPaused(false), 1500);
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
    <section className="py-16 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10 text-center">
        <p className="text-accent text-xs font-black tracking-[0.25em] uppercase mb-3">
          Authorized Dealer
        </p>
        <h2 className="text-2xl sm:text-3xl font-black text-charcoal">
          The Brands the Pros Trust
        </h2>
        <p className="text-gray-500 text-sm sm:text-base mt-3 max-w-xl mx-auto">
          Every floor we sell is backed by a North-American manufacturer warranty.
          Click any logo to see the manufacturer&apos;s full lineup.
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
              className="group flex items-center justify-center px-5 py-3 rounded-xl border border-gray-100 bg-white shrink-0 w-44 h-20 hover:border-accent/40 hover:shadow-lg transition-all"
            >
              <Image
                src={brand.src}
                alt={brand.name}
                width={brand.w}
                height={brand.h}
                className="object-contain max-h-12 max-w-[140px] w-auto h-auto pointer-events-none transition-transform group-hover:scale-105"
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
