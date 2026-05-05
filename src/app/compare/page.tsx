import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { comparePages } from "@/lib/compare-pages";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Flooring Comparison Guides — Kelowna",
  description:
    "Side-by-side flooring comparisons for Kelowna homes — vinyl plank vs laminate, engineered vs solid hardwood, pet-friendly options, rentals, and more.",
  alternates: { canonical: "https://www.kelownaflooringsuperstore.com/compare" },
  openGraph: {
    title: "Flooring Comparison Guides — Kelowna",
    description: "Side-by-side flooring comparisons for Kelowna homes.",
    images: [{ url: "/assets/images/showroom-01.webp", width: 1200, height: 630, alt: "Kelowna flooring comparisons" }],
  },
};

export default function CompareIndex() {
  return (
    <>
      <section className="relative pt-52 lg:pt-44 pb-20 overflow-hidden bg-[#0d1526]">
        <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 text-accent text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
              Honest Comparisons
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              Compare<br /><span className="text-accent">Flooring Options</span>
            </h1>
            <p className="text-white/65 text-lg sm:text-xl mt-5 max-w-2xl leading-relaxed">
              Side-by-side comparisons written for real Kelowna homes — pricing, durability, climate fit, and what wins for your specific situation.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-10 sm:py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {comparePages.map((p, i) => (
              <AnimateOnScroll key={p.slug} delay={i * 0.06}>
                <Link href={`/compare/${p.slug}`} className="group block bg-white rounded-2xl overflow-hidden shadow-card-warm card-hover border border-gray-100 h-full">
                  <div className="relative h-44">
                    <Image src={p.heroImage} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h2 className="font-black text-charcoal text-lg group-hover:text-primary transition-colors leading-tight">{p.title}</h2>
                    <p className="text-gray-500 text-sm mt-3 line-clamp-3">{p.tldr}</p>
                    <span className="inline-flex items-center gap-1 mt-5 text-accent text-sm font-bold group-hover:translate-x-1 transition-transform">
                      Compare <ArrowRight size={13} />
                    </span>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
