import type { Metadata } from "next";
import FlooringCalculator from "@/components/FlooringCalculator";
import Link from "next/link";
import { Calculator, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Flooring Cost Calculator Kelowna",
  description:
    "Instantly estimate your flooring project cost. Enter your room dimensions and flooring type to get a price range for materials and installation in Kelowna.",
  alternates: { canonical: "https://www.kelownaflooringsuperstore.com/calculator" },
};

export default function CalculatorPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0d1526] pt-48 lg:pt-36 pb-12 border-b border-white/8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full">
              <Calculator size={12} /> Free Tool
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
            Flooring Cost<br />
            <span className="text-accent">Calculator</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl leading-relaxed mb-6">
            Enter your room dimensions to get an instant cost estimate for materials and installation. No personal info required.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="bg-white/8 border border-white/10 text-white/60 px-3 py-1.5 rounded-full">Laminate from $5/sqft installed</span>
            <span className="bg-white/8 border border-white/10 text-white/60 px-3 py-1.5 rounded-full">Hardwood from $9/sqft installed</span>
            <span className="bg-white/8 border border-white/10 text-white/60 px-3 py-1.5 rounded-full">Vinyl Plank from $5/sqft installed</span>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="bg-[#0d1526] pb-24">
        <FlooringCalculator />
      </section>

      {/* Bottom CTA */}
      <section className="bg-primary py-10 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Ready for an Exact Quote?
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
            Our team comes to your home, measures every room, and gives you a detailed price — completely free, no obligation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/estimates"
              className="flex items-center gap-2 bg-accent-dark hover:bg-[#a8281e] text-white font-bold px-8 py-4 rounded-xl text-base transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/30"
            >
              Book Free Estimate <ArrowRight size={18} />
            </Link>
            <Link
              href="/find-my-floor"
              className="flex items-center gap-2 border border-white/25 text-white font-semibold px-8 py-4 rounded-xl text-base hover:border-white/50 transition-all"
            >
              Not sure what flooring? Take the Quiz
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
