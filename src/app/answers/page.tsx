import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { answerPages } from "@/lib/answer-pages";
import { ArrowRight, MessageCircleQuestion } from "lucide-react";

export const metadata: Metadata = {
  title: "Quick Flooring Answers — Kelowna",
  description:
    "Quick answers to the most common Kelowna flooring questions — pricing, removal, pet-friendly options, what laminate is, how to choose flooring.",
  alternates: { canonical: "https://www.kelownaflooringsuperstore.com/answers" },
};

export default function AnswersIndex() {
  return (
    <>
      <section className="relative pt-52 lg:pt-44 pb-20 overflow-hidden bg-[#0d1526]">
        <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 text-accent text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
              Real Answers
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              Quick Flooring<br /><span className="text-accent">Answers</span>
            </h1>
            <p className="text-white/65 text-lg sm:text-xl mt-5 max-w-2xl leading-relaxed">
              The questions Kelowna homeowners actually ask — answered straight, with real numbers.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-10 sm:py-20 bg-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 gap-5">
            {answerPages.map((p) => (
              <Link key={p.slug} href={`/answers/${p.slug}`} className="group bg-white rounded-2xl p-7 border border-gray-100 hover:border-primary transition-all">
                <div className="flex items-start gap-3">
                  <MessageCircleQuestion size={22} className="text-accent shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <h2 className="font-black text-charcoal text-lg group-hover:text-primary leading-tight">{p.question}</h2>
                    <p className="text-gray-500 text-sm mt-3 line-clamp-3">{p.shortAnswer}</p>
                    <span className="inline-flex items-center gap-1 mt-4 text-accent text-sm font-bold group-hover:translate-x-1 transition-transform">
                      Read answer <ArrowRight size={13} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
