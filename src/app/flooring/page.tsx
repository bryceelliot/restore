import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { flooringTypes } from "@/lib/flooring-data";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "All Flooring Types — In-Stock Kelowna",
  description:
    "Browse all flooring types at Kelowna Flooring Superstore — laminate, hardwood, carpet, vinyl plank, tile, linoleum, commercial, and area rugs. All in-stock with expert installation.",
  alternates: { canonical: "https://www.kelownaflooringsuperstore.com/flooring" },
};

const flooringPhotos: Record<string, { img: string; focal: string; tag: string }> = {
  "laminate":        { img: "/assets/images/showroom-08.webp", focal: "center 50%", tag: "Popular" },
  "hardwood":        { img: "/assets/images/hero-walnut.webp", focal: "center 55%", tag: "Premium" },
  "carpet":          { img: "/assets/images/showroom-10.webp", focal: "center 40%", tag: "Cozy" },
  "vinyl-plank":     { img: "/assets/images/hero-kurang.webp", focal: "center 45%", tag: "Waterproof" },
  "linoleum-sheet":  { img: "/assets/images/showroom-05.webp", focal: "center 50%", tag: "Durable" },
  "tile":            { img: "/assets/images/showroom-07.webp", focal: "center 50%", tag: "Elegant" },
  "commercial":      { img: "/assets/images/showroom-01.webp", focal: "center 50%", tag: "Business" },
  "area-rugs":       { img: "/assets/images/showroom-04.webp", focal: "center 45%", tag: "Style" },
};

export default function FlooringPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative pt-44 pb-28 overflow-hidden bg-[#0d1526]">
        <Image
          src="/assets/images/showroom-01.webp"
          alt=""
          fill
          aria-hidden="true"
          priority
          className="object-cover object-center opacity-22"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1526]/95 via-[#0d1526]/70 to-[#0d1526]/30" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 text-accent text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
              Ships in 3–5 Days
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight">
              Every Type of<br />
              <span className="text-accent">Flooring</span>
            </h1>
            <p className="text-white/60 text-lg sm:text-xl mt-6 max-w-2xl leading-relaxed">
              From cozy carpet to stunning hardwood — our Kelowna showroom
              has everything you need on display — order from samples and we'll have it ready to install within days.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              {["Laminate", "Hardwood", "Carpet", "Vinyl Plank", "Tile", "Area Rugs"].map((type) => (
                <span key={type} className="bg-white/10 border border-white/15 text-white/70 text-xs font-semibold px-3 py-1.5 rounded-full">
                  {type}
                </span>
              ))}
              <span className="bg-white/10 border border-white/15 text-white/70 text-xs font-semibold px-3 py-1.5 rounded-full">+ more</span>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Grid ──────────────────────────────────────────────── */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-14">
            <span className="section-label mb-4">Our Collection</span>
            <h2 className="text-4xl sm:text-5xl font-black text-charcoal mt-4">
              Browse by Category
            </h2>
            <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">
              Click any category to see styles, features, care tips, and get a free quote.
            </p>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {flooringTypes.map((f, i) => {
              const photo = flooringPhotos[f.slug];
              return (
                <AnimateOnScroll key={f.slug} delay={i * 0.07}>
                  <Link
                    href={`/flooring/${f.slug}`}
                    className="group relative overflow-hidden rounded-2xl h-56 block card-hover shadow-md"
                  >
                    {photo && (
                      <Image
                        src={photo.img}
                        alt={`${f.name} flooring at Kelowna Flooring Superstore`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        style={{ objectPosition: photo.focal }}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1526]/85 via-[#0d1526]/25 to-transparent group-hover:from-primary/85 transition-colors duration-300" />
                    {photo && (
                      <span className="absolute top-3 left-3 bg-white/15 backdrop-blur-sm text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border border-white/20">
                        {photo.tag}
                      </span>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h2 className="text-white font-black text-xl leading-tight">{f.name}</h2>
                      <p className="text-white/55 text-xs mt-1 line-clamp-1">{f.tagline}</p>
                      <div className="flex items-center gap-1 text-white/50 text-xs mt-2 group-hover:text-accent transition-colors">
                        <span>Learn More</span>
                        <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why in-stock matters ──────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll direction="right">
              <span className="section-label mb-4">Why Shop With Us</span>
              <h2 className="text-4xl sm:text-5xl font-black text-charcoal mt-4 leading-tight">
                Browse Samples,{" "}
                <span className="gradient-text">Installed in Days</span>
              </h2>
              <p className="text-gray-500 text-lg mt-5 leading-relaxed">
                Our Kelowna showroom has hundreds of styles on display — choose your favourite
                sample and your order arrives in just 3–5 days, ready for our crew to install.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Hundreds of styles on display in our showroom",
                  "Order from samples — arrives in 3–5 days",
                  "Free in-home estimates across the Okanagan",
                  "Professional installation by our experienced crews",
                  "Part of the Flooring Superstores franchise network",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-600 text-sm">
                    <CheckCircle2 size={17} className="text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link href="/estimates" className="btn-primary text-sm">
                  Get Free Estimate <ArrowRight size={16} />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-primary text-charcoal hover:text-primary font-semibold px-5 py-3 rounded-xl text-sm transition-all">
                  Contact Us
                </Link>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll direction="left" delay={0.15}>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/assets/images/showroom-05.webp"
                  alt="Kelowna Flooring Superstore in-stock selection"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1526]/60 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-white font-bold text-sm">Our Kelowna Showroom</p>
                  <p className="text-white/55 text-xs mt-0.5">Unit 16, 830 McCurdy Place, Kelowna BC</p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="py-16 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "repeating-linear-gradient(-45deg,#fff 0px,#fff 1px,transparent 1px,transparent 12px)" }} />
        <AnimateOnScroll className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Not Sure Which Flooring Is Right for You?
          </h2>
          <p className="text-white/65 mt-4 leading-relaxed">
            Our flooring specialists are here to help. Come visit our showroom or book a free
            in-home estimate — no obligation, no pressure.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-7">
            <Link href="/estimates" className="bg-accent hover:bg-accent-dark text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all">
              Get Free Estimate
            </Link>
            <Link href="/contact" className="bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold px-7 py-3.5 rounded-xl text-sm transition-all">
              Contact Us
            </Link>
          </div>
        </AnimateOnScroll>
      </section>
    </>
  );
}
