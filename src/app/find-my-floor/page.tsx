import type { Metadata } from "next";
import StyleQuiz from "@/components/StyleQuiz";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Find My Floor — Flooring Style Quiz | Kelowna Flooring Superstore",
  description:
    "Not sure which flooring is right for you? Answer 5 quick questions and get a personalized recommendation for your home in Kelowna.",
  alternates: { canonical: "https://www.kfssflooring.com/find-my-floor" },
};

export default function FindMyFloorPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0d1526] pt-48 lg:pt-36 pb-4 border-b border-white/8">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block bg-accent/15 border border-accent/30 text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
            5 Quick Questions
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Find Your<br />
            <span className="text-accent">Perfect Floor</span>
          </h1>
          <p className="text-white/60 text-lg leading-relaxed">
            Tell us about your space, lifestyle, and style — we&apos;ll match you with the right flooring in under a minute.
          </p>
        </div>
      </section>

      {/* Quiz */}
      <section className="bg-[#0d1526] min-h-[60vh] pb-24">
        <StyleQuiz />
      </section>
    </>
  );
}
