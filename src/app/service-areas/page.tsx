import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { serviceAreas } from "@/lib/service-areas";
import { ArrowRight, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Service Areas — Flooring Across the Okanagan",
  description:
    "Kelowna Flooring Superstore installs across Kelowna, West Kelowna, Lake Country, Peachland, and Summerland. Free in-home estimates throughout the Okanagan.",
  alternates: { canonical: "https://www.kelownaflooringsuperstore.com/service-areas" },
  openGraph: {
    title: "Service Areas — Flooring Across the Okanagan",
    description: "We install across Kelowna, West Kelowna, Lake Country, Peachland & Summerland.",
    images: [{ url: "/assets/images/showroom-01.webp", width: 1200, height: 630, alt: "Okanagan flooring service areas" }],
  },
};

export default function ServiceAreasPage() {
  return (
    <>
      <section className="relative pt-52 lg:pt-44 pb-20 overflow-hidden bg-[#0d1526]">
        <Image
          src="/assets/images/hero-showroom.webp"
          alt=""
          fill
          priority
          aria-hidden="true"
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1526]/96 via-[#0d1526]/75 to-[#0d1526]/40" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 text-accent text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
              Okanagan-Wide
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-white leading-tight">
              Where We<br /><span className="text-accent">Install</span>
            </h1>
            <p className="text-white/65 text-lg sm:text-xl mt-5 max-w-2xl leading-relaxed">
              Our Kelowna showroom is home base, but our crews drive across the Central and South Okanagan every week. Find your town below for local details.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-10 sm:py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((a, i) => (
              <AnimateOnScroll key={a.slug} delay={i * 0.06}>
                <Link
                  href={`/service-areas/${a.slug}`}
                  className="group relative block rounded-2xl overflow-hidden shadow-card-warm card-hover h-72"
                >
                  <Image
                    src={a.heroImage}
                    alt={`Flooring installation in ${a.name}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1526]/90 via-[#0d1526]/35 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/25 text-white text-xs font-bold px-3 py-1 rounded-full">
                      <MapPin size={11} className="text-accent" /> {a.region}
                    </span>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5">
                    <h2 className="text-white text-2xl font-black leading-tight">{a.name}</h2>
                    <p className="text-white/70 text-sm mt-1 line-clamp-2">{a.tagline}</p>
                    <span className="inline-flex items-center gap-1 text-accent text-xs font-bold mt-3 group-hover:translate-x-1 transition-transform">
                      View Details <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-4xl font-black text-white">Outside these areas?</h2>
          <p className="text-white/60 text-lg mt-4">Give us a call — if we can drive it, we probably can quote it.</p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <Link href="/estimates" className="bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-xl text-base transition-all">
              Book Free Estimate
            </Link>
            <a href="tel:2508607847" className="flex items-center gap-2 bg-white/10 hover:bg-white/18 border border-white/25 text-white font-semibold px-7 py-4 rounded-xl text-base transition-all">
              <Phone size={17} /> (250) 860-7847
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
