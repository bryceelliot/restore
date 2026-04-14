"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight, ChevronLeft, ChevronRight, Star } from "lucide-react";

const slides = [
  { src: "/assets/images/hero-walnut.webp",  type: "Engineered Hardwood", tagline: "Timeless. Warm. Unforgettable.",      focal: "center 60%" },
  { src: "/assets/images/hero-kurang.webp",  type: "Luxury Vinyl Plank",  tagline: "Bright. Modern. Effortless.",          focal: "center 50%" },
  { src: "/assets/images/hero-oak.webp",     type: "Engineered Hardwood", tagline: "Bold. Sophisticated. Lasting.",        focal: "center 40%" },
  { src: "/assets/images/showroom-01.webp",  type: "Kelowna Showroom",    tagline: "Choose a Sample. Arrives in 3–5 Days.", focal: "center 50%" },
];

const INTERVAL = 5500;

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, INTERVAL);
    return () => clearInterval(t);
  }, [next, paused]);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-accent z-30" />

      {/* Backgrounds */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].src}
            alt={slides[current].type}
            fill
            priority={current === 0}
            className="object-cover"
            style={{ objectPosition: slides[current].focal }}
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, rgba(13,21,38,0.78) 0%, rgba(13,21,38,0.55) 50%, rgba(13,21,38,0.70) 100%)" }}
          />
          <div className="absolute bottom-0 left-0 right-0 h-52 bg-gradient-to-t from-[#0d1526] to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Centered content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 pt-32 pb-32 flex flex-col items-center text-center">

        {/* Large centered logo */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-8 py-5 shadow-2xl shadow-black/40 inline-block">
            <Image
              src="/logo.webp"
              alt="Kelowna Flooring Superstore"
              width={340}
              height={94}
              className="h-20 sm:h-24 w-auto"
              priority
            />
          </div>
        </motion.div>

        {/* Slide type badge */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`tag-${current}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2.5 bg-accent/20 border border-accent/40 text-white text-sm font-bold tracking-[0.14em] uppercase px-5 py-2.5 rounded-full mb-5"
          >
            <span className="w-2 h-2 rounded-full bg-accent" />
            {slides[current].type}
          </motion.div>
        </AnimatePresence>

        {/* Tagline */}
        <AnimatePresence mode="wait">
          <motion.h1
            key={`headline-${current}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white mb-10 max-w-3xl"
          >
            {slides[current].tagline.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-accent">{slides[current].tagline.split(" ").slice(-1)}</span>
          </motion.h1>
        </AnimatePresence>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 justify-center mb-10">
          <Link
            href="/flooring"
            className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5"
          >
            Browse Flooring <ArrowRight size={18} />
          </Link>
          <Link
            href="/estimates"
            className="flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:shadow-2xl hover:shadow-accent/30 hover:-translate-y-0.5"
          >
            Free Estimate
          </Link>
          <a
            href="tel:2508607847"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/18 border border-white/20 text-white font-semibold px-7 py-4 rounded-xl text-lg transition-all"
          >
            <Phone size={18} />
            (250) 860-7847
          </a>
        </div>

        {/* Social proof */}
        <div className="flex items-center gap-4 justify-center">
          <div className="flex -space-x-2">
            {["R", "J", "T", "M"].map((initial, i) => (
              <div key={i} className="w-9 h-9 rounded-full bg-primary border-2 border-[#0d1526] flex items-center justify-center text-white text-sm font-black">
                {initial}
              </div>
            ))}
          </div>
          <div>
            <div className="flex gap-0.5 mb-0.5 justify-center">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-amber-400 text-amber-400" />)}
            </div>
            <p className="text-white/60 text-base">
              <span className="text-white font-bold">5.0</span> · Trusted by hundreds of Kelowna families
            </p>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={() => { setCurrent((c) => (c - 1 + slides.length) % slides.length); setPaused(true); }}
        aria-label="Previous slide"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/15 hover:bg-white/30 border border-white/30 flex items-center justify-center text-white transition-all hover:scale-110 backdrop-blur-sm"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => { setCurrent((c) => (c + 1) % slides.length); setPaused(true); }}
        aria-label="Next slide"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/15 hover:bg-white/30 border border-white/30 flex items-center justify-center text-white transition-all hover:scale-110 backdrop-blur-sm"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dot progress */}
      <div className="absolute bottom-7 left-0 right-0 z-20 flex items-center justify-center gap-6">
        <div className="flex items-center gap-2.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrent(i); setPaused(true); }}
              aria-label={`Go to slide ${i + 1}`}
              className="relative rounded-full overflow-hidden transition-all duration-300 focus:outline-none"
              style={{ width: i === current ? 36 : 10, height: 10, background: i === current ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.3)" }}
            >
              {i === current && (
                <motion.div
                  className="absolute inset-y-0 left-0 bg-accent rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: INTERVAL / 1000, ease: "linear" }}
                  key={`progress-${current}`}
                />
              )}
            </button>
          ))}
        </div>
        <span className="text-white/40 text-sm font-bold tracking-widest tabular-nums">
          {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
}
