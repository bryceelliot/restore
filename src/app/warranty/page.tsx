import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Shield, Hammer, RefreshCw, Phone, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Flooring Warranty & Guarantee — Kelowna",
  description:
    "Every floor we install is backed by the manufacturer's warranty plus our own craftsmanship guarantee. Here's exactly what's covered, what isn't, and how to make a claim.",
  alternates: { canonical: "https://www.kelownaflooringsuperstore.com/warranty" },
  openGraph: {
    title: "Flooring Warranty & Guarantee — Kelowna Flooring Superstore",
    description: "Manufacturer warranty + our craftsmanship guarantee on every install. Exactly what's covered.",
    images: [{ url: "/assets/images/showroom-03.webp", width: 1200, height: 630, alt: "Flooring warranty" }],
  },
};

const pillars = [
  {
    icon: Shield,
    title: "Manufacturer Warranty",
    body: "Every flooring product we carry ships with its own manufacturer warranty — from 15-year residential laminate warranties to lifetime structural warranties on premium hardwood. We'll hand you the paperwork at delivery.",
  },
  {
    icon: Hammer,
    title: "Craftsmanship Guarantee",
    body: "Our own installation guarantee covers workmanship: if a seam opens up, a plank lifts, a transition shifts — because of how we installed it, we come back and fix it. Full stop.",
  },
  {
    icon: RefreshCw,
    title: "Fast Response",
    body: "Warranty concerns are handled by the same team that installed your floor. Call us directly — no offshore call centre, no form-submission black hole.",
  },
];

const covered = [
  "Workmanship defects on installation we performed",
  "Seams, transitions, and finishing details",
  "Plank lift, buckling, or separation caused by install",
  "Stair nosings, reducers, and T-molding set by our crew",
  "Subfloor prep work completed as part of the install",
];

const notCovered = [
  "Damage from water/flooding, pets, furniture, dropped objects",
  "Normal wear and fading from sunlight exposure",
  "Moisture damage from missing/failed vapour barriers not installed by us",
  "Third-party repairs or modifications after our install",
  "Products purchased but installed by another contractor",
];

const claim = [
  { step: "1", title: "Call us", body: "(250) 860-7847 — describe what's happening, send a photo if you can." },
  { step: "2", title: "We assess", body: "We'll book a visit to see the issue in person, usually within a week." },
  { step: "3", title: "We fix", body: "If it's covered, we fix or replace — no charge, no hassle. If it isn't, we'll tell you straight." },
];

export default function WarrantyPage() {
  return (
    <>
      <section className="relative pt-52 lg:pt-44 pb-20 overflow-hidden bg-[#0d1526]">
        <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 text-accent text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
              Our Guarantee
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-white leading-tight">
              Warranty &<br /><span className="text-accent">Craftsmanship Guarantee</span>
            </h1>
            <p className="text-white/65 text-lg sm:text-xl mt-5 max-w-2xl leading-relaxed">
              Every floor is backed by two things: the product manufacturer&apos;s warranty, and our own promise that the install was done right.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-10 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <AnimateOnScroll key={p.title} delay={i * 0.08}>
                <div className="bg-light rounded-2xl p-7 border border-gray-100 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                    <p.icon size={24} className="text-primary" />
                  </div>
                  <h2 className="font-black text-charcoal text-xl mb-3">{p.title}</h2>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-20 bg-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8">
          <AnimateOnScroll direction="right">
            <div className="bg-white rounded-2xl p-7 border border-gray-100 h-full">
              <h2 className="font-black text-charcoal text-xl mb-5">What&apos;s Covered</h2>
              <ul className="space-y-3">
                {covered.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed">
                    <CheckCircle2 size={17} className="text-primary shrink-0 mt-0.5" /> {c}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll direction="left" delay={0.1}>
            <div className="bg-white rounded-2xl p-7 border border-gray-100 h-full">
              <h2 className="font-black text-charcoal text-xl mb-5">What&apos;s Not Covered</h2>
              <ul className="space-y-3">
                {notCovered.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed">
                    <span className="w-[17px] h-[17px] rounded-full border-2 border-gray-300 shrink-0 mt-0.5" /> {c}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-10 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-10">
            <span className="section-label mb-4">Claim Process</span>
            <h2 className="text-2xl sm:text-4xl font-black text-charcoal mt-4">How to Make a Claim</h2>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-3 gap-5">
            {claim.map((c) => (
              <div key={c.step} className="bg-light rounded-2xl p-6 border border-gray-100">
                <div className="text-5xl font-black text-primary/10 leading-none mb-3">{c.step}</div>
                <h3 className="font-black text-charcoal text-lg mb-2">{c.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-4xl font-black text-white">Questions About Your Floor?</h2>
          <p className="text-white/60 text-lg mt-4">Call us directly — the same team that installed is the one that answers.</p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <a href="tel:2508607847" className="flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-xl text-base transition-all">
              <Phone size={17} /> (250) 860-7847
            </a>
            <Link href="/contact" className="bg-white/10 hover:bg-white/18 border border-white/25 text-white font-semibold px-7 py-4 rounded-xl text-base transition-all">
              Contact Us <ArrowRight size={16} className="inline ml-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
