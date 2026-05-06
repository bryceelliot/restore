"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  photos: string[];
  altBase: string;
}

export default function FlooringCarousel({ photos, altBase }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const scrollTo = useCallback((i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const slide = el.children[i] as HTMLElement | undefined;
    if (!slide) return;
    el.scrollTo({ left: slide.offsetLeft, behavior: "smooth" });
  }, []);

  const prev = () => scrollTo((index - 1 + photos.length) % photos.length);
  const next = () => scrollTo((index + 1) % photos.length);

  /* Track which slide is most in view */
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => {
      const mid = el.scrollLeft + el.clientWidth / 2;
      let closest = 0;
      let closestDist = Infinity;
      Array.from(el.children).forEach((c, i) => {
        const child = c as HTMLElement;
        const childMid = child.offsetLeft + child.offsetWidth / 2;
        const d = Math.abs(childMid - mid);
        if (d < closestDist) { closestDist = d; closest = i; }
      });
      setIndex(closest);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  if (photos.length === 0) return null;

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-3 sm:gap-4 scroll-smooth no-scrollbar pb-2"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          touchAction: "pan-x pan-y",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {photos.map((src, i) => (
          <div
            key={src}
            className="snap-center shrink-0 w-[88%] sm:w-[70%] md:w-[60%] lg:w-[55%] aspect-[4/3] relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-gray-100"
          >
            <Image
              src={src}
              alt={`${altBase} ${i + 1} — Kelowna Flooring Superstore showroom`}
              fill
              sizes="(max-width: 640px) 88vw, (max-width: 1024px) 70vw, 55vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {photos.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Previous photo"
            className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 w-11 h-11 rounded-full bg-white/95 hover:bg-white text-charcoal shadow-lg flex items-center justify-center transition-all hover:scale-110 z-10"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={next}
            aria-label="Next photo"
            className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 w-11 h-11 rounded-full bg-white/95 hover:bg-white text-charcoal shadow-lg flex items-center justify-center transition-all hover:scale-110 z-10"
          >
            <ChevronRight size={22} />
          </button>

          <div className="flex items-center justify-center gap-2 mt-5">
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                aria-label={`Go to photo ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "bg-accent w-8" : "bg-gray-300 hover:bg-gray-400 w-2"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
