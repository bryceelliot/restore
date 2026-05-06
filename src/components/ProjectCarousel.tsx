"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ProjectPhoto } from "@/lib/projects";

interface Props {
  name: string;
  photos: ProjectPhoto[];
}

export default function ProjectCarousel({ name, photos }: Props) {
  const [active, setActive] = useState(0);
  const swipeStart = useRef<{ x: number; y: number } | null>(null);

  const prev = () => setActive((p) => (p - 1 + photos.length) % photos.length);
  const next = () => setActive((p) => (p + 1) % photos.length);

  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    swipeStart.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (!swipeStart.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - swipeStart.current.x;
    const dy = t.clientY - swipeStart.current.y;
    swipeStart.current = null;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) next(); else prev();
    }
  };

  if (photos.length === 0) return null;

  return (
    <div>
      <div
        className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100 shadow-xl touch-pan-y select-none"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {photos.map((p, i) => (
          <Image
            key={p.src}
            src={p.src}
            alt={p.alt}
            fill
            loading="lazy"
            sizes="(max-width: 1024px) 100vw, 900px"
            className={`object-cover transition-opacity duration-500 ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {photos.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label={`Previous photo of ${name}`}
              className="absolute top-1/2 -translate-y-1/2 left-3 sm:left-4 w-11 h-11 rounded-full bg-white/95 hover:bg-white shadow-lg flex items-center justify-center transition-all hover:scale-110 z-10"
            >
              <ChevronLeft size={22} className="text-charcoal" />
            </button>
            <button
              onClick={next}
              aria-label={`Next photo of ${name}`}
              className="absolute top-1/2 -translate-y-1/2 right-3 sm:right-4 w-11 h-11 rounded-full bg-white/95 hover:bg-white shadow-lg flex items-center justify-center transition-all hover:scale-110 z-10"
            >
              <ChevronRight size={22} className="text-charcoal" />
            </button>
          </>
        )}

        <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full pointer-events-none">
          {active + 1} / {photos.length}
        </div>
      </div>

      <div className="flex gap-2 mt-3 overflow-x-auto pb-1 no-scrollbar" style={{ scrollbarWidth: "none" }}>
        {photos.map((p, i) => (
          <button
            key={p.src}
            onClick={() => setActive(i)}
            aria-label={`View photo ${i + 1}`}
            className={`relative shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all ${
              i === active ? "border-accent ring-2 ring-accent/30" : "border-transparent opacity-60 hover:opacity-100"
            }`}
          >
            <Image src={p.src} alt="" fill sizes="80px" className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
