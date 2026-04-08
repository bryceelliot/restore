"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight, ChevronDown, ChevronLeft, ChevronRight, Star } from "lucide-react";

const slides = [
  {
    src: "/assets/images/hero-walnut.webp",
    product: "Walnut Natural",
    type: "Engineered Hardwood",
    tagline: "Timeless. Warm. Unforgettable.",
    desc: "Rich dark walnut brings drama and elegance to any space.",
    cta: "/flooring/hardwood",
    ctaLabel: "Shop Hardwood",
    focal: "center 60%",
  },
  {
    src: "/assets/images/hero-kurang.webp",
    product: "Wildwood Kurang",
    type: "Luxury Vinyl Plank",
    tagline: "Bright. Modern. Effortless.",
    desc: "Light, airy tones that open up any room — 100% waterproof.",
    cta: "/flooring/vinyl-plank",
    ctaLabel: "Shop Vinyl Plank",
    focal: "center 50%",
  },
  {
    src: "/assets/images/hero-oak.webp",
    product: "Wildwood Oak Natural",
    type: "Engineered Hardwood",
    tagline: "Bold. Sophisticated. Lasting.",
    desc: "Light oak paired with dramatic design — a showstopper in any home.",
    cta: "/flooring/hardwood",
    ctaLabel: "Shop Hardwood",
    focal: "center 40%",
  },
  {
    src: "/assets/images/showroom-01.webp",
    product: "Massive In-Stock Selection",
    type: "Kelowna Showroom",
    tagline: "Everything. In Stock. Today.",
    desc: "Hundreds of flooring styles ready to go home with you — no waiting.",
    cta: "/flooring",
    ctaLabel: "Browse All Flooring",
    focal: "center 50%",
  },
];

const INTERVAL = 5500;

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

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
      {/* Red top stripe */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-accent z-30" />

      {/* ===  SLIDE BACKGROUNDS === */}
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
            alt={slides[current].product}
            fill
            priority={current === 0}
            className="object-cover"
            style={{ objectPosition: slides[current].focal }}
            sizes="100vw"
          />
          {/* Gradient overlay: heavier left, lighter right — text readable, image visible */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(108deg, rgba(13,21,38,0.95) 0%, rgba(13,21,38,0.78) 40%, rgba(13,21,38,0.38) 68%, rgba(13,21,38,0.18) 100%)",
            }}
          />
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-52 bg-gradient-to-t from-[#0d1526] to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* === CONTENT === */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-32">
        <div className="max-w-2xl">

          {/* Franchise logo */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <Image
              src="/logo.webp"
              alt="Flooring Superstores"
              width={280}
              height={77}
              className="h-12 sm:h-14 w-auto brightness-0 invert drop-shadow-2xl"
              priority
            />
          </motion.div>

          {/* Slide type tag — animates on slide change */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`tag-${current}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2.5 bg-accent/20 border border-accent/40 text-white text-xs font-bold tracking-[0.14em] uppercase px-4 py-2 rounded-full mb-5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              {slides[current].type}
            </motion.div>
          </AnimatePresence>

          {/* Tagline — animates on slide change */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`headline-${current}`}
              initial={{ opacity: 0, x: -32 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 16 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="mb-2"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none text-white mb-1">
                {slides[current].tagline.split(" ").slice(0, -1).join(" ")}{" "}
                <span className="text-accent">
                  {slides[current].tagline.split(" ").slice(-1)}
                </span>
              </h1>
            </motion.div>
          </AnimatePresence>

          {/* Product name */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`product-${current}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-white/40 text-sm font-semibold tracking-widest uppercase mb-4"
            >
              {slides[current].product}
            </motion.p>
          </AnimatePresence>

          {/* Description */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`desc-${current}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="text-white/60 text-lg leading-relaxed mb-8 max-w-lg"
            >
              {slides[current].desc}
            </motion.p>
          </AnimatePresence>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={`cta-${current}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <Link
                  href={slides[current].cta}
                  className="group flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-7 py-4 rounded-xl text-base transition-all hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5"
                >
                  {slides[current].ctaLabel}
                  <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </AnimatePresence>
            <Link
              href="/estimates"
              className="flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-7 py-4 rounded-xl text-base transition-all hover:shadow-2xl hover:shadow-accent/30 hover:-translate-y-0.5"
            >
              Free Estimate
            </Link>
            <a
              href="tel:2508607847"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/18 border border-white/20 text-white/85 hover:text-white font-semibold px-6 py-4 rounded-xl text-base transition-all"
            >
              <Phone size={16} />
              (250) 860-7847
            </a>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              {["R", "J", "T", "M"].map((initial, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-primary border-2 border-[#0d1526] flex items-center justify-center text-white text-xs font-black"
                >
                  {initial}
                </div>
              ))}
            </div>
            <div>
              <div className="flex gap-0.5 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-white/50 text-xs">
                <span className="text-white font-bold">5.0</span> · Trusted by hundreds of Kelowna families
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* === LEFT / RIGHT ARROWS — vertically centered on the image === */}
      <button
        onClick={() => { setCurrent((c) => (c - 1 + slides.length) % slides.length); setPaused(true); }}
        aria-label="Previous slide"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/15 hover:bg-white/30 border border-white/30 flex items-center justify-center text-white transition-all hover:scale-110 backdrop-blur-sm shadow-lg"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={() => { setCurrent((c) => (c + 1) % slides.length); setPaused(true); }}
        aria-label="Next slide"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/15 hover:bg-white/30 border border-white/30 flex items-center justify-center text-white transition-all hover:scale-110 backdrop-blur-sm shadow-lg"
      >
        <ChevronRight size={22} />
      </button>

      {/* === BOTTOM — dots + counter + scroll === */}
      <div className="absolute bottom-7 left-0 right-0 z-20 flex items-center justify-center gap-6">
        {/* Dot progress indicators */}
        <div className="flex items-center gap-2.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrent(i); setPaused(true); }}
              aria-label={`Go to slide ${i + 1}`}
              className="relative rounded-full overflow-hidden transition-all duration-300 focus:outline-none"
              style={{
                width: i === current ? 36 : 10,
                height: 10,
                background: i === current ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.3)",
              }}
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
        <span className="text-white/40 text-xs font-bold tracking-widest tabular-nums">
          {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
}
