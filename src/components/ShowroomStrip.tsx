"use client";

import Image from "next/image";
import { useRef } from "react";

const photos = [
  { src: "/assets/images/showroom-05.webp", label: "Vinyl & Hardwood" },
  { src: "/assets/images/showroom-06.webp", label: "Luxury Vinyl" },
  { src: "/assets/images/showroom-08.webp", label: "Laminate Area" },
  { src: "/assets/images/showroom-07.webp", label: "Vinyl & Laminate" },
  { src: "/assets/images/showroom-01.webp", label: "Full Showroom" },
  { src: "/assets/images/showroom-04.webp", label: "Area Rugs" },
  { src: "/assets/images/showroom-09.webp", label: "Carpet — Shaw" },
  { src: "/assets/images/showroom-11.webp", label: "Carpet — Mohawk" },
];

// Duplicate for seamless infinite scroll
const doubled = [...photos, ...photos];

export default function ShowroomStrip() {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-[#0d1526] py-10 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-5">
        <div className="flex items-center justify-between">
          <p className="text-white/40 text-xs font-bold tracking-[0.18em] uppercase">
            Inside Our Showroom
          </p>
          <div className="h-px flex-1 mx-4 bg-white/8" />
          <p className="text-white/25 text-xs">Kelowna, BC</p>
        </div>
      </div>

      {/* Infinite scroll track */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0d1526] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0d1526] to-transparent z-10 pointer-events-none" />

        <div
          ref={trackRef}
          className="flex gap-4 animate-scroll"
          style={{
            width: "max-content",
          }}
        >
          {doubled.map((photo, i) => (
            <div
              key={i}
              className="relative shrink-0 w-64 h-44 rounded-xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={photo.src}
                alt={photo.label}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="256px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-3 text-white text-xs font-bold tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {photo.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 35s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
