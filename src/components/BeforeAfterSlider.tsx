"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";

interface Props {
  before: string;
  after: string;
  beforeAlt?: string;
  afterAlt?: string;
}

export default function BeforeAfterSlider({ before, after, beforeAlt = "Before", afterAlt = "After" }: Props) {
  const [position, setPosition] = useState(42); // % from left
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const { left, width } = el.getBoundingClientRect();
    const pct = Math.min(95, Math.max(5, ((clientX - left) / width) * 100));
    setPosition(pct);
  }, []);

  const onMouseDown  = () => { dragging.current = true; };
  const onMouseMove  = (e: React.MouseEvent)  => { if (dragging.current) move(e.clientX); };
  const onMouseUp    = () => { dragging.current = false; };
  const onTouchMove  = (e: React.TouchEvent)  => { move(e.touches[0].clientX); };

  const onKeyDown = (e: React.KeyboardEvent) => {
    const step = e.shiftKey ? 10 : 2;
    if (e.key === "ArrowLeft")  { e.preventDefault(); setPosition((p) => Math.max(5,  p - step)); }
    if (e.key === "ArrowRight") { e.preventDefault(); setPosition((p) => Math.min(95, p + step)); }
    if (e.key === "Home")       { e.preventDefault(); setPosition(5); }
    if (e.key === "End")        { e.preventDefault(); setPosition(95); }
  };

  return (
    <div
      ref={containerRef}
      role="slider"
      tabIndex={0}
      aria-label="Before / after image comparison"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(position)}
      aria-valuetext={`${Math.round(position)}% before, ${Math.round(100 - position)}% after`}
      className="relative w-full h-full select-none cursor-ew-resize overflow-hidden rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onTouchMove={onTouchMove}
      onKeyDown={onKeyDown}
    >
      {/* After (full) */}
      <Image src={after} alt={afterAlt} fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" draggable={false} />

      {/* Before (clipped) */}
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <Image src={before} alt={beforeAlt} fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" draggable={false} />
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.6)]"
        style={{ left: `${position}%` }}
      />

      {/* Handle */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center z-10"
        style={{ left: `${position}%` }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 text-primary fill-none stroke-current stroke-2">
          <polyline points="15 18 9 12 15 6" />
          <polyline points="9 18 3 12 9 6" transform="translate(6,0) scale(-1,1) translate(-6,0)" />
        </svg>
      </div>

      {/* Labels */}
      <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full pointer-events-none">
        Before
      </div>
      <div className="absolute bottom-4 right-4 bg-accent/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full pointer-events-none">
        After
      </div>
    </div>
  );
}
