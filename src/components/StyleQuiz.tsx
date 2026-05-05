"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, RotateCcw } from "lucide-react";

/* ── Scoring weights ────────────────────────────────────────────────────────
 * Each answer adds points to one or more flooring types.
 * The top-scoring type wins; we show top 3.
 * ─────────────────────────────────────────────────────────────────────────*/
type Slug = "laminate" | "hardwood" | "carpet" | "vinyl-plank" | "linoleum-sheet" | "tile";

type Score = Record<Slug, number>;

function emptyScore(): Score {
  return { laminate: 0, hardwood: 0, carpet: 0, "vinyl-plank": 0, "linoleum-sheet": 0, tile: 0 };
}

const FLOORING_META: Record<Slug, { name: string; tagline: string; color: string; href: string }> = {
  laminate:          { name: "Laminate",       tagline: "Great look, budget-friendly, built to last.",            color: "#d97706", href: "/flooring/laminate" },
  hardwood:          { name: "Hardwood",        tagline: "Timeless warmth that adds real value to your home.",    color: "#92400e", href: "/flooring/hardwood" },
  carpet:            { name: "Carpet",          tagline: "Soft, cozy, and quiet — perfect for bedrooms.",         color: "#7c3aed", href: "/flooring/carpet" },
  "vinyl-plank":     { name: "Vinyl Plank",     tagline: "100% waterproof and incredibly durable.",               color: "#0d9488", href: "/flooring/vinyl-plank" },
  "linoleum-sheet":  { name: "Linoleum Sheet",  tagline: "Natural, eco-friendly, and tough as nails.",            color: "#059669", href: "/flooring/linoleum-sheet" },
  tile:              { name: "Tile",            tagline: "Lifetime durability with effortless style.",            color: "#64748b", href: "/flooring/tile" },
};

interface Question {
  id: string;
  question: string;
  subtitle?: string;
  options: { label: string; desc?: string; score: Partial<Score> }[];
}

const QUESTIONS: Question[] = [
  {
    id: "room",
    question: "Where is the flooring going?",
    options: [
      { label: "Bedroom",          score: { carpet: 4, hardwood: 2, laminate: 2, "vinyl-plank": 1 } },
      { label: "Living Room",      score: { hardwood: 3, laminate: 3, "vinyl-plank": 2, carpet: 1 } },
      { label: "Kitchen / Dining", score: { "vinyl-plank": 4, tile: 3, "linoleum-sheet": 3, laminate: 1 } },
      { label: "Bathroom",         score: { tile: 5, "vinyl-plank": 4 } },
      { label: "Basement",         score: { "vinyl-plank": 5, laminate: 2, tile: 2 } },
      { label: "Office / Commercial", score: { laminate: 3, "vinyl-plank": 3, tile: 2, carpet: 2 } },
      { label: "Stairs",           score: { hardwood: 4, carpet: 3, laminate: 2 } },
    ],
  },
  {
    id: "water",
    question: "How important is water resistance?",
    options: [
      { label: "Critical",     desc: "Wet area, basement, or frequent spills",     score: { "vinyl-plank": 4, tile: 4, "linoleum-sheet": 2 } },
      { label: "Helpful",      desc: "Family home — accidents happen",             score: { "vinyl-plank": 2, laminate: 1 } },
      { label: "Not a worry",  desc: "Dry area — bedroom, upstairs office",        score: { hardwood: 2, carpet: 2, laminate: 1 } },
    ],
  },
  {
    id: "lifestyle",
    question: "Tell us about your household.",
    options: [
      { label: "Dogs or cats",         score: { "vinyl-plank": 4, tile: 2, laminate: 1, carpet: -2 } },
      { label: "Young children",       score: { carpet: 2, "vinyl-plank": 2, laminate: 1 } },
      { label: "Pets and kids",        score: { "vinyl-plank": 5, tile: 2, laminate: 1, carpet: -3 } },
      { label: "Just adults",          score: { hardwood: 2, carpet: 2, laminate: 1 } },
      { label: "Eco-conscious home",   score: { "linoleum-sheet": 4, hardwood: 1 } },
    ],
  },
  {
    id: "style",
    question: "What's your style preference?",
    options: [
      { label: "Warm and Natural",   desc: "Wood tones, organic textures",    score: { hardwood: 4, laminate: 2, carpet: 1 } },
      { label: "Sleek and Modern",   desc: "Clean lines, contemporary look",  score: { "vinyl-plank": 3, tile: 3, laminate: 2 } },
      { label: "Cozy and Soft",      desc: "Comfort first, relaxed feel",     score: { carpet: 5, laminate: 1 } },
      { label: "Bold and Dramatic",  desc: "Statement floors, unique look",   score: { tile: 4, hardwood: 2, "vinyl-plank": 1 } },
      { label: "Classic and Timeless", desc: "Never goes out of style",       score: { hardwood: 3, tile: 2, laminate: 2 } },
    ],
  },
  {
    id: "budget",
    question: "What's your budget per square foot?",
    subtitle: "All-in (materials + installation)",
    options: [
      { label: "Budget-friendly",  desc: "Under $6/sqft installed",       score: { laminate: 4, "linoleum-sheet": 3, carpet: 2 } },
      { label: "Mid-range",        desc: "$6–$12/sqft installed",         score: { "vinyl-plank": 3, laminate: 2, hardwood: 1, carpet: 2 } },
      { label: "Premium",          desc: "Over $12/sqft installed",       score: { hardwood: 4, tile: 3, "vinyl-plank": 1 } },
    ],
  },
];

function applyScore(total: Score, partial: Partial<Score>): Score {
  const result = { ...total };
  for (const [key, val] of Object.entries(partial)) {
    result[key as Slug] = (result[key as Slug] || 0) + (val || 0);
  }
  return result;
}

export default function StyleQuiz() {
  const [step, setStep]       = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(QUESTIONS.length).fill(null));
  const [done, setDone]       = useState(false);

  const q = QUESTIONS[step];

  function pick(optionIndex: number) {
    const next = answers.map((a, i) => (i === step ? optionIndex : a));
    setAnswers(next);
    if (step < QUESTIONS.length - 1) {
      setTimeout(() => setStep(s => s + 1), 220);
    } else {
      setTimeout(() => setDone(true), 220);
    }
  }

  function reset() {
    setStep(0);
    setAnswers(Array(QUESTIONS.length).fill(null));
    setDone(false);
  }

  /* Compute results */
  const results = (() => {
    let score = emptyScore();
    answers.forEach((ai, qi) => {
      if (ai === null) return;
      score = applyScore(score, QUESTIONS[qi].options[ai].score);
    });
    return (Object.entries(score) as [Slug, number][])
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .filter(([, v]) => v > 0);
  })();

  const progress = ((step + (answers[step] !== null ? 1 : 0)) / QUESTIONS.length) * 100;

  if (done) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16 text-center">
        <span className="inline-block bg-accent/15 border border-accent/30 text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
          Your Results
        </span>
        <h2 className="text-4xl sm:text-5xl font-black text-white mb-3">
          Here&apos;s What We Recommend
        </h2>
        <p className="text-white/55 text-lg mb-12">
          Based on your answers, here are your top matches — ranked by fit.
        </p>

        <div className="space-y-4 mb-12 text-left">
          {results.map(([slug], i) => {
            const meta = FLOORING_META[slug];
            return (
              <div
                key={slug}
                className={`rounded-2xl border p-6 flex items-center gap-5 transition-all ${
                  i === 0 ? "border-accent/50 bg-accent/8" : "border-white/10 bg-white/5"
                }`}
              >
                <span
                  className="w-12 h-12 rounded-xl shrink-0 flex items-center justify-center text-white font-black text-xl"
                  style={{ backgroundColor: meta.color }}
                >
                  {i + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <h3 className="text-white font-black text-xl">{meta.name}</h3>
                    {i === 0 && (
                      <span className="text-xs font-bold text-accent bg-accent/15 px-2 py-0.5 rounded-full">Best match</span>
                    )}
                  </div>
                  <p className="text-white/55 text-sm">{meta.tagline}</p>
                </div>
                <Link
                  href={meta.href}
                  className="shrink-0 flex items-center gap-1.5 text-accent hover:text-white text-sm font-bold transition-colors"
                >
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/estimates"
            className="flex items-center gap-2 bg-accent-dark hover:bg-[#a8281e] text-white font-bold px-8 py-4 rounded-xl text-base transition-all hover:-translate-y-0.5"
          >
            Get Free Estimate <ArrowRight size={18} />
          </Link>
          <button
            onClick={reset}
            className="flex items-center gap-2 border border-white/20 text-white/70 hover:text-white hover:border-white/40 font-semibold px-8 py-4 rounded-xl text-base transition-all"
          >
            <RotateCcw size={16} /> Retake Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
      {/* Progress bar */}
      <div className="mb-10">
        <div className="flex justify-between text-white/40 text-xs font-bold mb-2">
          <span>Question {step + 1} of {QUESTIONS.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-accent rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl font-black text-white mb-2">{q.question}</h2>
        {q.subtitle && <p className="text-white/50 text-base">{q.subtitle}</p>}
      </div>

      {/* Options */}
      <div className="space-y-3">
        {q.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => pick(i)}
            className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all hover:border-accent hover:bg-accent/8 group ${
              answers[step] === i
                ? "border-accent bg-accent/12 text-white"
                : "border-white/10 bg-white/5 text-white hover:text-white"
            }`}
          >
            <span className="font-semibold block">{opt.label}</span>
            {opt.desc && <span className="text-white/50 text-sm group-hover:text-white/70 transition-colors">{opt.desc}</span>}
          </button>
        ))}
      </div>

      {/* Back button */}
      {step > 0 && (
        <button
          onClick={() => setStep(s => s - 1)}
          className="flex items-center gap-2 text-white/40 hover:text-white/70 text-sm font-semibold mt-8 transition-colors"
        >
          <ArrowLeft size={15} /> Back
        </button>
      )}
    </div>
  );
}
