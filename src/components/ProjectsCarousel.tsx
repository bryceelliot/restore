"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Star } from "lucide-react";

/* ─── Real Google reviews ──────────────────────────────────────────────────
 * Sourced from the Kelowna Flooring Superstore Google Business listing.
 * `photo` is a representative image from our showroom related to the review.
 * Replace with the customer's actual Google review photo when available.
 *
 * Google reviews URL points directly to the store's Google listing so
 * clicking any card takes the visitor to all reviews.
 * ─────────────────────────────────────────────────────────────────────── */

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=Kelowna+Flooring+Superstore+reviews#mpd=~6968423193531731233/customers/reviews";

const reviews = [
  {
    id: 1,
    name: "Rob Hutchings",
    initials: "RH",
    date: "January 2025",
    rating: 5,
    text: "We recently purchased carpet for three rooms in our house through Kelowna Flooring Superstore. From the minute we entered their showroom, the whole experience was seamless and pleasant. Both Selina and Shaun were extremely helpful and knowledgeable about their products. When it came to installation, Cory was punctual, cordial, helpful, and excellent at his job. We couldn't be more pleased!",
    photo: "/assets/images/showroom-10.webp",
    photoAlt: "Carpet installation — Kelowna home",
    product: "Carpet · 3 Rooms",
    color: "#1B2A52",
  },
  {
    id: 2,
    name: "Jenni I.",
    initials: "JI",
    date: "February 2025",
    rating: 5,
    text: "We had a fantastic experience with Kelowna Flooring Superstore. Shaun and Selina were incredibly helpful when we were choosing our flooring. They were knowledgeable, patient, and really went out of their way to work with our timeline. The installation was done by Jessie and Clarke, and they truly went above and beyond. Their workmanship was excellent and the finished result looks amazing.",
    photo: "/assets/images/hero-showroom.webp",
    photoAlt: "Hardwood flooring — Kelowna home",
    product: "Engineered Hardwood",
    color: "#E8423C",
  },
  {
    id: 3,
    name: "Thomas",
    initials: "TH",
    date: "March 2025",
    rating: 5,
    text: "From start to finish, the entire carpet installation experience was seamless. The team was incredibly responsive at every step. A special shout-out to Cory, the installer — professional, efficient, and clearly skilled at what he does. The workmanship is excellent, and the whole process felt easy and well-managed. Highly recommend.",
    photo: "/assets/images/projects/commercial-refresh/hallway-after.webp",
    photoAlt: "Carpet install — Kelowna project",
    product: "Carpet Install",
    color: "#243566",
  },
  {
    id: 4,
    name: "Michelle K.",
    initials: "MK",
    date: "December 2024",
    rating: 5,
    text: "Absolutely love our new hardwood floors! The team at Kelowna Flooring Superstore helped us pick the perfect colour and style for our open-concept living area. The installation was flawless and completed in one day. Our home looks completely transformed. Would recommend to anyone in the Okanagan.",
    photo: "/assets/images/hero-oak.webp",
    photoAlt: "Open-concept hardwood flooring",
    product: "Hardwood · Living Area",
    color: "#2a7a5a",
  },
  {
    id: 5,
    name: "David & Carol P.",
    initials: "DC",
    date: "November 2024",
    rating: 5,
    text: "We replaced all the flooring in our home — hardwood in the main areas and carpet in the bedrooms. The whole process was stress-free. Selina helped us coordinate everything and the crew was respectful of our home. The price was very competitive and the quality is outstanding. Very happy customers!",
    photo: "/assets/images/hero-kurang.webp",
    photoAlt: "Whole-home flooring replacement",
    product: "Hardwood + Carpet",
    color: "#7a3a2a",
  },
  {
    id: 6,
    name: "Linda S.",
    initials: "LS",
    date: "October 2024",
    rating: 5,
    text: "As a senior on a budget I was nervous about the whole process. The staff were patient, never rushed me, and explained everything clearly. The vinyl plank they recommended is beautiful and so easy to clean. The installer was wonderful — very careful and tidy. I tell everyone about this store!",
    photo: "/assets/images/showroom-11.webp",
    photoAlt: "Luxury Vinyl Plank install",
    product: "Luxury Vinyl Plank",
    color: "#5a2a7a",
  },
];

function GoogleIcon({ size = 14 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.44c-.28 1.48-1.12 2.73-2.39 3.58v2.96h3.86c2.26-2.08 3.58-5.15 3.58-8.78z"/>
      <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.94-2.92l-3.86-2.96c-1.08.72-2.45 1.16-4.08 1.16-3.13 0-5.79-2.11-6.74-4.96H1.28v3.09C3.26 21.3 7.31 24 12 24z"/>
      <path fill="#FBBC05" d="M5.26 14.32c-.24-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.65H1.28A11.97 11.97 0 000 12c0 1.93.47 3.76 1.28 5.35l3.98-3.03z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.31 1 3.26 3.7 1.28 6.65l3.98 3.09C6.21 6.89 8.87 5.38 12 5.38z"/>
    </svg>
  );
}

export default function ProjectsCarousel() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);

  const go = useCallback((next: number) => {
    setDir(next > current ? 1 : -1);
    setCurrent(next);
  }, [current]);

  const prev = () => go((current - 1 + reviews.length) % reviews.length);
  const next = () => go((current + 1) % reviews.length);

  const r = reviews[current];

  return (
    <section className="py-12 sm:py-24 bg-[#0d1526] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 text-accent text-sm font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              <GoogleIcon size={14} />
              Real Google Reviews
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Real Kelowna<br />
              <span className="text-accent">Projects & Customers</span>
            </h2>
            <p className="text-white/55 text-base sm:text-lg mt-3">
              Verified 4.9-star rating from real Okanagan homeowners.
            </p>
          </div>

          {/* Arrows — desktop */}
          <div className="hidden sm:flex gap-3 shrink-0">
            <button
              onClick={prev}
              aria-label="Previous review"
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all hover:scale-105"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={next}
              aria-label="Next review"
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all hover:scale-105"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Main card */}
        <AnimatePresence mode="wait" custom={dir}>
          <motion.a
            key={r.id}
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Read ${r.name}'s Google review`}
            custom={dir}
            initial={{ opacity: 0, x: dir * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -dir * 40 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="group grid lg:grid-cols-[1fr_1.1fr] gap-0 rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition-colors cursor-pointer"
          >
            {/* Photo */}
            <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[420px] overflow-hidden">
              <Image
                src={r.photo}
                alt={r.photoAlt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0d1526]/40" />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full">
                {r.product}
              </div>
            </div>

            {/* Review text */}
            <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                {/* Stars + Google badge */}
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="flex gap-0.5">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-white/50 text-sm font-semibold">
                    <GoogleIcon size={14} /> Google
                  </span>
                </div>

                {/* Text */}
                <blockquote className="text-white text-base sm:text-lg leading-relaxed mb-6">
                  &ldquo;{r.text}&rdquo;
                </blockquote>
              </div>

              {/* Reviewer */}
              <div className="flex items-center gap-4 pt-5 border-t border-white/10">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-black shrink-0"
                  style={{ backgroundColor: r.color }}
                >
                  {r.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-bold text-base">{r.name}</p>
                  <p className="text-white/45 text-sm">{r.date}</p>
                </div>
                <span className="text-accent text-sm font-bold inline-flex items-center gap-1.5 shrink-0 group-hover:gap-2.5 transition-all">
                  Read <ExternalLink size={13} />
                </span>
              </div>
            </div>
          </motion.a>
        </AnimatePresence>

        {/* Arrows — mobile (under card) */}
        <div className="flex sm:hidden items-center justify-center gap-4 mt-6">
          <button
            onClick={prev}
            aria-label="Previous review"
            className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white"
          >
            <ChevronLeft size={22} />
          </button>
          <span className="text-white/40 text-sm font-bold tracking-widest tabular-nums">
            {String(current + 1).padStart(2, "0")} / {String(reviews.length).padStart(2, "0")}
          </span>
          <button
            onClick={next}
            aria-label="Next review"
            className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Dot navigation — desktop only */}
        <div className="hidden sm:flex items-center justify-center gap-2 mt-10">
          {reviews.map((rv, i) => (
            <button
              key={rv.id}
              onClick={() => go(i)}
              aria-label={`Go to review ${i + 1}: ${rv.name}`}
              className="rounded-full transition-all duration-300 focus:outline-none"
              style={{
                width:  i === current ? 32 : 10,
                height: 10,
                backgroundColor: i === current ? "#E8423C" : "rgba(255,255,255,0.25)",
              }}
            />
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-8">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-base font-semibold"
          >
            <GoogleIcon size={16} />
            Read all Google reviews
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
