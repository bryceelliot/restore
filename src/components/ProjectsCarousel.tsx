"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, ArrowRight, Star } from "lucide-react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

/* ─── Project data ─────────────────────────────────────────────────────────
 * Each project has a before + after image pair, a click destination, and
 * an optional pull-quote from the customer.
 *
 * linkType: "review"  → opens the store's Google Reviews page (new tab)
 *           "blog"    → navigates to an internal blog post
 *
 * Replace before/after images with real project photos as you get them.
 * ─────────────────────────────────────────────────────────────────────── */
const projects = [
  {
    id: 1,
    title: "Staircase Transformation",
    type: "Engineered Hardwood",
    room: "Stairs & Landing",
    before: "/assets/images/flooring/stairs-before.jpg",
    after: "/assets/images/flooring/stairs-after.jpg",
    quote: "The difference is night and day — our stairs look brand new.",
    customer: "Jenni I.",
    linkType: "review" as const,
    link: "https://www.google.com/maps/place/Kelowna+Flooring+Superstore/@49.8885,-119.4395,17z/data=!4m8!3m7!1s0x537df5b0e0e2f57d:0x8b9e7c1b4b6b7e9a!8m2!3d49.8885!4d-119.4395!9m1!1b1",
  },
  {
    id: 2,
    title: "Living Room Hardwood",
    type: "Engineered Hardwood",
    room: "Living Room",
    before: "/assets/images/showroom-03.webp",
    after: "/assets/images/hero-walnut.webp",
    quote: "Timeless warmth — we couldn't be happier with the result.",
    customer: "Rob H.",
    linkType: "review" as const,
    link: "https://www.google.com/maps/place/Kelowna+Flooring+Superstore/@49.8885,-119.4395,17z/data=!4m8!3m7!1s0x537df5b0e0e2f57d:0x8b9e7c1b4b6b7e9a!8m2!3d49.8885!4d-119.4395!9m1!1b1",
  },
  {
    id: 3,
    title: "Kitchen & Hallway LVP",
    type: "Luxury Vinyl Plank",
    room: "Kitchen & Hallway",
    before: "/assets/images/showroom-05.webp",
    after: "/assets/images/hero-kurang.webp",
    quote: "Waterproof and gorgeous — perfect for our family with young kids.",
    customer: "Michelle K.",
    linkType: "blog" as const,
    link: "/blog/vinyl-plank-vs-laminate",
  },
  {
    id: 4,
    title: "Bedroom Carpet Install",
    type: "Carpet",
    room: "Master Bedroom",
    before: "/assets/images/showroom-02.webp",
    after: "/assets/images/showroom-10.webp",
    quote: "So soft underfoot — exactly what we wanted for the bedroom.",
    customer: "Linda S.",
    linkType: "review" as const,
    link: "https://www.google.com/maps/place/Kelowna+Flooring+Superstore/@49.8885,-119.4395,17z/data=!4m8!3m7!1s0x537df5b0e0e2f57d:0x8b9e7c1b4b6b7e9a!8m2!3d49.8885!4d-119.4395!9m1!1b1",
  },
  {
    id: 5,
    title: "Basement Renovation",
    type: "Luxury Vinyl Plank",
    room: "Basement",
    before: "/assets/images/showroom-06.webp",
    after: "/assets/images/showroom-01.webp",
    quote: "Our basement went from drab concrete to stunning. Incredible work.",
    customer: "David & Carol P.",
    linkType: "blog" as const,
    link: "/blog/best-basement-flooring-kelowna",
  },
];

const CARD_TYPE_COLORS: Record<string, string> = {
  "Engineered Hardwood": "#1B2A52",
  "Luxury Vinyl Plank":  "#243566",
  "Carpet":              "#2a7a5a",
  "Laminate":            "#7a5a2a",
  "Tile":                "#4a4a6a",
};

export default function ProjectsCarousel() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);

  const go = useCallback((next: number) => {
    setDir(next > current ? 1 : -1);
    setCurrent(next);
  }, [current]);

  const prev = () => go((current - 1 + projects.length) % projects.length);
  const next = () => go((current + 1) % projects.length);

  const project = projects[current];
  const isExternal = project.linkType === "review";

  return (
    <section className="py-24 bg-[#0d1526] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 text-accent text-sm font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              Real Kelowna Projects
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              See the Difference<br />
              <span className="text-accent">We Make</span>
            </h2>
            <p className="text-white/50 text-lg mt-3 max-w-md">
              Drag the slider to compare before &amp; after. Click any project to read the full story.
            </p>
          </div>

          {/* Arrow controls */}
          <div className="flex gap-3 shrink-0">
            <button
              onClick={prev}
              aria-label="Previous project"
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all hover:scale-105"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={next}
              aria-label="Next project"
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all hover:scale-105"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Main card */}
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={project.id}
            custom={dir}
            initial={{ opacity: 0, x: dir * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -dir * 60 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="grid lg:grid-cols-2 gap-8 items-stretch"
          >
            {/* Before/After slider — clickable */}
            {isExternal ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block h-[420px] sm:h-[480px] rounded-2xl overflow-hidden shadow-2xl shadow-black/50 group"
                aria-label={`View ${project.title} Google review`}
              >
                <BeforeAfterSlider
                  before={project.before}
                  after={project.after}
                  beforeAlt={`Before — ${project.title}`}
                  afterAlt={`After — ${project.title}`}
                />
                <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-sm text-white text-sm font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <ExternalLink size={13} /> Read Review
                </div>
              </a>
            ) : (
              <Link
                href={project.link}
                className="relative block h-[420px] sm:h-[480px] rounded-2xl overflow-hidden shadow-2xl shadow-black/50 group"
                aria-label={`Read blog post about ${project.title}`}
              >
                <BeforeAfterSlider
                  before={project.before}
                  after={project.after}
                  beforeAlt={`Before — ${project.title}`}
                  afterAlt={`After — ${project.title}`}
                />
                <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-sm text-white text-sm font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <ArrowRight size={13} /> Read Article
                </div>
              </Link>
            )}

            {/* Info panel */}
            <div className="flex flex-col justify-between py-2">
              <div>
                {/* Type badge */}
                <div
                  className="inline-flex items-center gap-2 text-white text-sm font-bold tracking-wider uppercase px-4 py-2 rounded-full mb-5"
                  style={{ backgroundColor: CARD_TYPE_COLORS[project.type] ?? "#1B2A52" }}
                >
                  <span className="w-2 h-2 rounded-full bg-white/60" />
                  {project.type}
                </div>

                <h3 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-2">
                  {project.title}
                </h3>
                <p className="text-white/45 text-base mb-8">
                  {project.room}
                </p>

                {/* Pull quote */}
                <blockquote className="border-l-4 border-accent pl-5 mb-8">
                  <div className="flex gap-0.5 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-white/80 text-lg italic leading-relaxed">
                    &ldquo;{project.quote}&rdquo;
                  </p>
                  <footer className="text-white/40 text-base font-semibold mt-3">
                    — {project.customer}
                  </footer>
                </blockquote>
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-3">
                {isExternal ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-6 py-3.5 rounded-xl text-base transition-all hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5"
                  >
                    <ExternalLink size={16} />
                    Read the Google Review
                  </a>
                ) : (
                  <Link
                    href={project.link}
                    className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-6 py-3.5 rounded-xl text-base transition-all hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5"
                  >
                    Read the Full Story
                    <ArrowRight size={16} />
                  </Link>
                )}
                <Link
                  href="/estimates"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/18 border border-white/20 text-white font-semibold px-6 py-3.5 rounded-xl text-base transition-all"
                >
                  Get Free Estimate
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dot navigation */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {projects.map((p, i) => (
            <button
              key={p.id}
              onClick={() => go(i)}
              aria-label={`Go to project ${i + 1}: ${p.title}`}
              className="rounded-full transition-all duration-300 focus:outline-none"
              style={{
                width:  i === current ? 32 : 10,
                height: 10,
                backgroundColor: i === current ? "#E8423C" : "rgba(255,255,255,0.25)",
              }}
            />
          ))}
        </div>

        {/* Counter */}
        <p className="text-center text-white/25 text-sm font-bold tracking-widest mt-4 tabular-nums">
          {String(current + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
        </p>
      </div>
    </section>
  );
}
