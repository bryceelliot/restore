"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, ArrowRight, ChevronDown } from "lucide-react";

const words = ["Flooring", "For", "Life."];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover opacity-35"
        aria-hidden="true"
      >
        <source src="/assets/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-dark/30" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 110%, rgba(49,50,144,0.55) 0%, transparent 65%)",
        }}
      />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating accent orbs */}
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/5 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(49,50,144,0.25) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ y: [0, 18, 0], opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/3 right-1/5 w-60 h-60 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(235,76,76,0.18) 0%, transparent 70%)" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-36 pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 text-accent text-xs font-bold tracking-[0.15em] uppercase px-5 py-2 rounded-full mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Kelowna&apos;s Premier Flooring Destination
        </motion.div>

        <div className="flex flex-wrap justify-center gap-x-5 gap-y-0 mb-6">
          {words.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.75,
                delay: 0.2 + i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none ${
                word === "Life." ? "text-accent" : "text-white"
              }`}
            >
              {word}
            </motion.span>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          In-stock laminate, hardwood, carpet, vinyl plank, tile &amp; more.
          Expert installation across Kelowna &amp; the Central Okanagan.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.95 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/flooring"
            className="group flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-xl text-base transition-all hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1"
          >
            Shop Flooring
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/estimates"
            className="flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-xl text-base transition-all hover:shadow-2xl hover:shadow-accent/30 hover:-translate-y-1"
          >
            Free Estimate
          </Link>
          <a
            href="tel:2508607847"
            className="flex items-center gap-2 glass text-white/80 hover:text-white font-semibold px-6 py-4 rounded-xl text-base transition-all hover:bg-white/10"
          >
            <Phone size={17} />
            (250) 860-7847
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="mt-20 flex justify-center"
        >
          <motion.button
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-white/25 hover:text-white/50 transition-colors"
            onClick={() => window.scrollBy({ top: window.innerHeight * 0.85, behavior: "smooth" })}
            aria-label="Scroll down"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ChevronDown size={18} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
