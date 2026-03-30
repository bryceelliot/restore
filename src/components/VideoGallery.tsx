"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";

const videos = [
  { src: "/assets/videos/showroom-gopro-1.mp4", label: "Showroom Tour", thumb: "/assets/images/showroom-01.webp" },
  { src: "/assets/videos/showroom-gopro-2.mp4", label: "Flooring Displays", thumb: "/assets/images/showroom-03.webp" },
  { src: "/assets/videos/showroom-gopro-3.mp4", label: "Carpet Selection", thumb: "/assets/images/showroom-04.webp" },
  { src: "/assets/videos/showroom-gopro-4.mp4", label: "Hardwood & Laminate", thumb: "/assets/images/showroom-07.webp" },
  { src: "/assets/videos/showroom-walk-1.mp4", label: "Full Walkthrough", thumb: "/assets/images/showroom-09.webp" },
  { src: "/assets/videos/showroom-walk-2.mp4", label: "Tile & Vinyl", thumb: "/assets/images/showroom-11.webp" },
];

export default function VideoGallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {videos.map((v, i) => (
          <motion.button
            key={v.src}
            onClick={() => setActive(i)}
            className="group relative rounded-2xl overflow-hidden aspect-video bg-charcoal cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
          >
            {/* Thumbnail image — no video loaded until user clicks */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={v.thumb}
              alt={v.label}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-white/20 border-2 border-white/50 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300 group-hover:scale-110">
                <Play size={18} className="text-white ml-0.5" fill="white" />
              </div>
            </div>
            <div className="absolute bottom-3 left-3 right-3">
              <span className="text-white font-semibold text-sm">{v.label}</span>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Lightbox player */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/97 flex items-center justify-center p-4"
            onClick={() => setActive(null)}
          >
            <button
              onClick={() => setActive(null)}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors p-2 z-10"
              aria-label="Close video"
            >
              <X size={28} />
            </button>
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={videos[active].src}
                className="w-full h-full object-contain bg-black"
                controls
                autoPlay
                playsInline
                preload="metadata"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
