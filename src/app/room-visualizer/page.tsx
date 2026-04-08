"use client";

import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Upload, Eye, Smartphone, Monitor, ArrowRight, Phone } from "lucide-react";
import { useEffect } from "react";

const examples = [
  { src: "/assets/images/hero-walnut.webp", focal: "center 55%", label: "Walnut Natural — Engineered Hardwood" },
  { src: "/assets/images/hero-kurang.webp", focal: "center 45%", label: "Wildwood Kurang — Luxury Vinyl Plank" },
  { src: "/assets/images/hero-oak.webp",    focal: "center 40%", label: "Wildwood Oak — Engineered Hardwood" },
];

const steps = [
  { icon: Upload,      num: "01", title: "Upload Your Photo", desc: "Take a photo of any room in your home and upload it directly in the visualizer." },
  { icon: Eye,         num: "02", title: "Browse Flooring",   desc: "Choose from hundreds of flooring styles — hardwood, vinyl plank, laminate, carpet & more." },
  { icon: Smartphone,  num: "03", title: "See the Result",    desc: "Watch your room transform instantly with your chosen flooring applied realistically." },
  { icon: Monitor,     num: "04", title: "Get a Free Quote",  desc: "Love what you see? Book a free in-home estimate and we'll make it real." },
];

export default function RoomVisualizerPage() {
  /* Attempt to open the Roomvo widget when the big launch button is clicked */
  useEffect(() => {
    const btn = document.getElementById("launch-roomvo");
    if (!btn) return;
    const handler = () => {
      // Roomvo exposes a global to open the widget
      const w = window as unknown as Record<string, unknown>;
      if (typeof w["roomvoShowAssistant"] === "function") {
        (w["roomvoShowAssistant"] as () => void)();
      } else {
        // Fallback: click the Roomvo floating button if it exists
        const floatingBtn = document.querySelector<HTMLElement>("[class*='roomvo'], [id*='roomvo'], [data-roomvo]");
        if (floatingBtn) floatingBtn.click();
      }
    };
    btn.addEventListener("click", handler);
    return () => btn.removeEventListener("click", handler);
  }, []);

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative pt-44 pb-28 overflow-hidden bg-[#0d1526]">
        <Image
          src="/assets/images/hero-walnut.webp"
          alt=""
          fill
          aria-hidden="true"
          priority
          className="object-cover object-[center_55%] opacity-22"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1526]/96 via-[#0d1526]/72 to-[#0d1526]/35" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 text-accent text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
              Powered by Roomvo
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight">
              See It In<br />
              <span className="text-accent">Your Room</span>
            </h1>
            <p className="text-white/60 text-lg sm:text-xl mt-6 max-w-xl leading-relaxed">
              Upload a photo of any room and instantly see how our flooring
              looks in your actual space — before you buy a single plank.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <button
                id="launch-roomvo"
                className="group inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-xl text-base transition-all hover:shadow-2xl hover:shadow-accent/30 hover:-translate-y-0.5 cursor-pointer"
              >
                <Eye size={18} />
                Launch Room Visualizer
              </button>
              <Link href="/estimates" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-7 py-4 rounded-xl text-base transition-all">
                Get Free Estimate
              </Link>
            </div>
            <p className="text-white/35 text-xs mt-4">
              The visualizer button also appears in the bottom-right corner of every page.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── How it works ──────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-14">
            <span className="section-label mb-4">How It Works</span>
            <h2 className="text-4xl sm:text-5xl font-black text-charcoal mt-4">
              Transform Your Room<br />
              <span className="gradient-text">In Seconds</span>
            </h2>
            <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">
              No design experience needed. Just snap a photo and start exploring.
            </p>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <AnimateOnScroll key={s.title} delay={i * 0.1}>
                <div className="relative bg-light rounded-2xl p-7 border border-gray-100 h-full">
                  <div className="text-6xl font-black text-primary/8 leading-none mb-4">{s.num}</div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <s.icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-charcoal text-lg mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll className="text-center mt-12">
            <button
              id="launch-roomvo-2"
              onClick={() => document.getElementById("launch-roomvo")?.click()}
              className="group inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-9 py-4 rounded-xl text-base transition-all hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5 cursor-pointer"
            >
              <Eye size={18} />
              Try It Now — It&apos;s Free
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Inspiration gallery ───────────────────────────────── */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-14">
            <span className="section-label mb-4">Inspiration</span>
            <h2 className="text-4xl sm:text-5xl font-black text-charcoal mt-4">
              Floors That Make a Statement
            </h2>
            <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">
              These are real results from our products — imagine them in your home.
            </p>
          </AnimateOnScroll>

          <div className="grid lg:grid-cols-3 gap-5 mb-10">
            {examples.map((ex, i) => (
              <AnimateOnScroll key={ex.label} delay={i * 0.1}>
                <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg group card-hover">
                  <Image
                    src={ex.src}
                    alt={ex.label}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ objectPosition: ex.focal }}
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1526]/75 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-bold text-sm">{ex.label}</p>
                    <button
                      onClick={() => document.getElementById("launch-roomvo")?.click()}
                      className="inline-flex items-center gap-1.5 text-accent text-xs font-bold mt-1.5 hover:gap-2.5 transition-all cursor-pointer"
                    >
                      <Eye size={12} /> Visualize in your room
                    </button>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll className="text-center">
            <Link href="/flooring" className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all">
              Browse all flooring types <ArrowRight size={14} />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="py-24 bg-[#0d1526] relative overflow-hidden">
        <Image src="/assets/images/hero-kurang.webp" alt="" fill aria-hidden="true" className="object-cover opacity-12" sizes="100vw" />
        <div className="absolute inset-0 bg-[#0d1526]/85" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
        <AnimateOnScroll className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            Love What You See?<br />
            <span className="text-accent">Let&apos;s Make It Real.</span>
          </h2>
          <p className="text-white/60 text-lg mt-4 leading-relaxed max-w-xl mx-auto">
            Once you&apos;ve found your perfect floor in the visualizer, our team
            will come to you with a free estimate — no commitment required.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link href="/estimates" className="bg-accent hover:bg-accent-dark text-white font-bold px-9 py-4 rounded-xl text-base transition-all hover:shadow-2xl hover:shadow-accent/30 hover:-translate-y-1">
              Get Free Estimate
            </Link>
            <a href="tel:2508607847" className="flex items-center gap-2 bg-white/10 hover:bg-white/18 border border-white/25 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all">
              <Phone size={17} /> (250) 860-7847
            </a>
          </div>
        </AnimateOnScroll>
      </section>
    </>
  );
}
