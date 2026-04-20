"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight, ChevronLeft, ChevronRight, Star } from "lucide-react";

const slides = [
  { src: "/assets/images/hero-walnut.webp",  type: "Engineered Hardwood", tagline: "Timeless warmth for every home.",      focal: "center 60%", href: "/flooring/hardwood"    },
  { src: "/assets/images/hero-kurang.webp",  type: "Luxury Vinyl Plank",  tagline: "Waterproof. Modern. Effortless.",      focal: "center 50%", href: "/flooring/vinyl-plank" },
  { src: "/assets/images/showroom-10.webp",  type: "Premium Carpet",      tagline: "Soft. Cozy. Inviting.",                focal: "center 50%", href: "/flooring/carpet"      },
  { src: "/assets/images/showroom-08.webp",  type: "Laminate Flooring",   tagline: "Durable. Beautiful. Affordable.",      focal: "center 50%", href: "/flooring/laminate"    },
  { src: "/assets/images/showroom-07.webp",  type: "Porcelain Tile",      tagline: "Timeless. Waterproof. Built for the Okanagan.", focal: "center 50%", href: "/flooring/tile"        },
  { src: "/assets/images/showroom-01.webp",  type: "Kelowna Showroom",    tagline: "Choose a sample. Arrives in 3–5 days.",focal: "center 50%", href: "/flooring"             },
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

      {/* Background slideshow */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
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
          <div className="absolute inset-0 bg-[#0d1526]/60" />
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0d1526] to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content — centered, logo is the hero */}
      <div className="relative z-10 w-full flex flex-col items-center text-center px-5 pt-36 lg:pt-28 pb-28">

        {/* ── LOGO — main focal point ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <div className="bg-white rounded-2xl px-8 py-5 shadow-2xl shadow-black/50 inline-block">
            <Image
              src="/logo.webp"
              alt="Kelowna Flooring Superstore"
              width={260}
              height={72}
              className="h-14 sm:h-16 w-auto"
              priority
            />
          </div>
        </motion.div>

        {/* Slide type badge — clicks through to that flooring category */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`tag-${current}`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3 }}
            className="mb-3"
          >
            <Link
              href={slides[current].href}
              className="inline-flex items-center gap-1.5 bg-black/30 hover:bg-black/50 border border-white/15 hover:border-accent/50 text-white/70 hover:text-white text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              {slides[current].type}
              <ArrowRight size={12} className="opacity-60" />
            </Link>
          </motion.div>
        </AnimatePresence>

        {/* Tagline — small, secondary */}
        <AnimatePresence mode="wait">
          <motion.p
            key={`line-${current}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="text-white/55 text-sm sm:text-base mb-8 max-w-xs sm:max-w-sm leading-relaxed"
          >
            {slides[current].tagline}
          </motion.p>
        </AnimatePresence>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-2.5 mb-7 w-full max-w-xs sm:max-w-none sm:w-auto">
          <Link
            href={slides[current].href}
            className="flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-6 py-3 rounded-xl text-sm transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30"
          >
            Shop {slides[current].type} <ArrowRight size={14} />
          </Link>
          <Link
            href="/estimates"
            className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/18 border border-white/20 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all"
          >
            Free Estimate
          </Link>
          <a
            href="tel:2508607847"
            className="flex items-center justify-center gap-1.5 text-white/55 hover:text-white text-sm transition-colors py-3 sm:px-2"
          >
            <Phone size={13} className="text-accent" /> (250) 860-7847
          </a>
        </div>

        {/* Social proof — compact, clickable to Google reviews (newest) */}
        <a
          href="https://www.google.com/search?q=Kelowna+Flooring+Superstore+reviews#mpd=~6968423193531731233/customers/reviews"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Read our newest Google reviews"
          className="flex items-center gap-2.5 hover:opacity-90 transition-opacity"
        >
          <div className="flex -space-x-1.5">
            {["R","J","T","M"].map((l, i) => (
              <div key={i} className="w-6 h-6 rounded-full bg-primary border-2 border-[#0d1526] flex items-center justify-center text-white text-[10px] font-black">{l}</div>
            ))}
          </div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => <Star key={i} size={10} className="fill-amber-400 text-amber-400" />)}
          </div>
          <span className="text-white/45 text-xs group-hover:text-white/70"><span className="text-white/70 font-semibold">4.9</span> · Hundreds of Kelowna families</span>
        </a>

      </div>

      {/* Arrows */}
      <button
        onClick={() => { setCurrent((c) => (c - 1 + slides.length) % slides.length); setPaused(true); }}
        aria-label="Previous slide"
        className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/10 hover:bg-white/22 border border-white/15 flex items-center justify-center text-white transition-all backdrop-blur-sm"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={() => { setCurrent((c) => (c + 1) % slides.length); setPaused(true); }}
        aria-label="Next slide"
        className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/10 hover:bg-white/22 border border-white/15 flex items-center justify-center text-white transition-all backdrop-blur-sm"
      >
        <ChevronRight size={18} />
      </button>

      {/* Progress dots */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex items-center justify-center gap-4">
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrent(i); setPaused(true); }}
              aria-label={`Go to slide ${i + 1}`}
              className="relative flex items-center justify-center focus:outline-none"
              style={{ minWidth: 18, minHeight: 18 }}
            >
              <span
                className="relative rounded-full overflow-hidden block transition-all duration-300"
                style={{ width: i === current ? 24 : 7, height: 7, background: i === current ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.22)" }}
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
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
