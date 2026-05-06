"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { projects } from "@/lib/projects";

export default function FeaturedProjects() {
  const [activeProject, setActiveProject] = useState(0);
  const [activePhoto, setActivePhoto] = useState(0);

  const project = projects[activeProject];

  const selectProject = (i: number) => {
    setActiveProject(i);
    setActivePhoto(0);
  };

  const prevPhoto = () =>
    setActivePhoto((p) => (p - 1 + project.photos.length) % project.photos.length);
  const nextPhoto = () =>
    setActivePhoto((p) => (p + 1) % project.photos.length);

  /* Touch/pointer swipe */
  const swipeStart = useRef<{ x: number; y: number } | null>(null);
  const swiping = useRef(false);

  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    swipeStart.current = { x: t.clientX, y: t.clientY };
    swiping.current = false;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (!swipeStart.current) return;
    const t = e.touches[0];
    const dx = t.clientX - swipeStart.current.x;
    const dy = t.clientY - swipeStart.current.y;
    if (!swiping.current && Math.abs(dx) > 8 && Math.abs(dx) > Math.abs(dy)) {
      swiping.current = true;
    }
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (!swipeStart.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - swipeStart.current.x;
    const dy = t.clientY - swipeStart.current.y;
    swipeStart.current = null;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) nextPhoto(); else prevPhoto();
    }
    swiping.current = false;
  };

  return (
    <div className="grid lg:grid-cols-[1fr_360px] gap-4 lg:gap-8">
      {/* Main photo viewer */}
      <div
        className="relative aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl bg-gray-100 border border-gray-100 touch-pan-y select-none"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {project.photos.map((p, i) => (
          <Image
            key={p.src}
            src={p.src}
            alt={p.alt}
            fill
            loading="lazy"
            sizes="(max-width: 1024px) 100vw, 70vw"
            className={`object-cover transition-opacity duration-500 ${
              i === activePhoto ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {project.photos.length > 1 && (
          <>
            <button
              onClick={prevPhoto}
              aria-label="Previous photo"
              className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-white/95 hover:bg-white shadow-lg flex items-center justify-center transition-all hover:scale-110 z-10"
            >
              <ChevronLeft size={18} className="text-charcoal sm:w-[22px] sm:h-[22px]" />
            </button>
            <button
              onClick={nextPhoto}
              aria-label="Next photo"
              className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-white/95 hover:bg-white shadow-lg flex items-center justify-center transition-all hover:scale-110 z-10"
            >
              <ChevronRight size={18} className="text-charcoal sm:w-[22px] sm:h-[22px]" />
            </button>
          </>
        )}

        <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full pointer-events-none">
          {activePhoto + 1} / {project.photos.length}
        </div>

        <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm text-charcoal px-4 py-2 rounded-full pointer-events-none shadow-md">
          <div className="flex items-center gap-2 text-xs font-bold">
            <MapPin size={13} className="text-accent" />
            {project.name}
          </div>
        </div>
      </div>

      {/* Side panel */}
      <div className="flex flex-col gap-3 lg:gap-5">
        <div className="grid grid-cols-3 lg:grid-cols-1 gap-2 lg:gap-3">
          {projects.map((p, i) => (
            <button
              key={p.slug}
              onClick={() => selectProject(i)}
              className={`text-left rounded-lg lg:rounded-xl p-2 lg:p-4 border-2 transition-all ${
                i === activeProject
                  ? "bg-primary text-white border-primary shadow-lg"
                  : "bg-white text-charcoal border-gray-200 hover:border-primary/50"
              }`}
            >
              <div className={`hidden lg:block text-[11px] font-bold tracking-widest uppercase mb-1 ${
                i === activeProject ? "text-white/75" : "text-accent"
              }`}>
                Featured Project
              </div>
              <div className="font-black text-xs lg:text-lg leading-tight">{p.name}</div>
              <div className={`text-[10px] lg:text-xs mt-0.5 ${i === activeProject ? "text-white/70" : "text-gray-500"}`}>
                {p.neighborhood}
              </div>
            </button>
          ))}
        </div>

        {/* Mobile: a single compact link. Desktop: full info card. */}
        <Link
          href={`/projects/${project.slug}`}
          className="lg:hidden inline-flex items-center justify-center gap-1.5 text-accent text-sm font-bold py-2"
        >
          View full project <ArrowRight size={14} />
        </Link>

        <div className="hidden lg:block bg-light border border-gray-100 rounded-xl p-5">
          <div className="text-[10px] font-bold tracking-widest uppercase text-accent mb-2">
            Flooring Used
          </div>
          <div className="font-bold text-charcoal text-sm mb-4">{project.flooringTypes.join(" · ")}</div>
          <p className="text-gray-600 text-sm leading-relaxed">{project.summary}</p>
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 mt-4 text-accent text-sm font-bold hover:translate-x-1 transition-transform"
          >
            View full project <ArrowRight size={13} />
          </Link>
        </div>

        {/* Thumbnail strip — desktop only; mobile uses swipe + photo counter */}
        <div className="hidden lg:flex gap-2 overflow-x-auto pb-1 no-scrollbar" style={{ scrollbarWidth: "none" }}>
          {project.photos.map((p, i) => (
            <button
              key={p.src}
              onClick={() => setActivePhoto(i)}
              aria-label={`View photo ${i + 1}`}
              className={`relative shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                i === activePhoto ? "border-accent ring-2 ring-accent/30" : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={p.src}
                alt=""
                fill
                sizes="80px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
