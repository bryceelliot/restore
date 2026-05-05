import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { servicePages } from "@/lib/service-pages";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Flooring Services Kelowna",
  description:
    "Beyond flooring sales — Kelowna Flooring Superstore offers removal, subfloor repair, baseboards & trim, and in-floor heating. All-in-one project quotes.",
  alternates: { canonical: "https://www.kelownaflooringsuperstore.com/services" },
};

export default function ServicesIndex() {
  return (
    <>
      <section className="relative pt-52 lg:pt-44 pb-20 overflow-hidden bg-[#0d1526]">
        <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <AnimateOnScroll>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              Beyond<br /><span className="text-accent">Flooring Sales</span>
            </h1>
            <p className="text-white/65 text-lg sm:text-xl mt-5 max-w-2xl leading-relaxed">
              Removal, subfloor prep, baseboards, in-floor heating — all coordinated as part of one Kelowna flooring project.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-10 sm:py-20 bg-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 gap-6">
            {servicePages.map((p, i) => (
              <AnimateOnScroll key={p.slug} delay={i * 0.06}>
                <Link href={`/services/${p.slug}`} className="group block bg-white rounded-2xl p-7 border border-gray-100 hover:border-primary transition-all h-full">
                  <h2 className="font-black text-charcoal text-xl group-hover:text-primary leading-tight">{p.service}</h2>
                  <p className="text-gray-500 text-sm mt-3 line-clamp-3">{p.intro}</p>
                  <span className="inline-flex items-center gap-1 mt-5 text-accent text-sm font-bold group-hover:translate-x-1 transition-transform">
                    Learn more <ArrowRight size={13} />
                  </span>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
