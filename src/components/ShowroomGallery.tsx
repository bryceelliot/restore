"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const photos = [
  { src: "/assets/images/showroom-01.webp", alt: "Kelowna Flooring Superstore showroom" },
  { src: "/assets/images/showroom-02.webp", alt: "Flooring display in Kelowna showroom" },
  { src: "/assets/images/showroom-03.webp", alt: "Hardwood flooring samples" },
  { src: "/assets/images/showroom-04.webp", alt: "Carpet selection at Kelowna Flooring Superstore" },
  { src: "/assets/images/showroom-05.webp", alt: "Vinyl plank flooring display" },
  { src: "/assets/images/showroom-06.webp", alt: "Tile and stone flooring options" },
  { src: "/assets/images/showroom-07.webp", alt: "Laminate flooring samples" },
  { src: "/assets/images/showroom-08.webp", alt: "Showroom interior" },
  { src: "/assets/images/showroom-09.webp", alt: "Flooring selection display" },
  { src: "/assets/images/showroom-10.webp", alt: "In-stock flooring Kelowna" },
  { src: "/assets/images/showroom-11.webp", alt: "Kelowna flooring store interior" },
  { src: "/assets/images/showroom-12.webp", alt: "Flooring samples and displays" },
];

export default function ShowroomGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  function prev() {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + photos.length) % photos.length);
  }
  function next() {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % photos.length);
  }

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {photos.map((photo, i) => (
          <motion.button
            key={photo.src}
            onClick={() => setLightboxIndex(i)}
            className="relative overflow-hidden rounded-xl aspect-square bg-gray-100 group cursor-zoom-in"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: (i % 4) * 0.07 }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/25 transition-colors duration-300 flex items-center justify-center">
              <span className="text-white font-bold text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                View
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors z-10 p-2"
              aria-label="Close"
            >
              <X size={28} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 text-white/60 hover:text-white transition-colors z-10 p-3 rounded-full bg-white/5 hover:bg-white/15"
              aria-label="Previous"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 text-white/60 hover:text-white transition-colors z-10 p-3 rounded-full bg-white/5 hover:bg-white/15"
              aria-label="Next"
            >
              <ChevronRight size={28} />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-4xl aspect-[4/3]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={photos[lightboxIndex].src}
                alt={photos[lightboxIndex].alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>

            <div className="absolute bottom-4 text-white/40 text-sm">
              {lightboxIndex + 1} / {photos.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
