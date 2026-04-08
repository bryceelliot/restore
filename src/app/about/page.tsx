import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Phone, ArrowRight, CheckCircle2, MapPin, Clock, Users, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Kelowna Flooring Superstore — Kelowna's locally owned flooring store, part of the Flooring Superstores franchise, with 30+ years serving the Central Okanagan.",
  alternates: { canonical: "https://www.kelownaflooringsuperstore.com/about" },
};

const values = [
  { icon: Award, title: "Quality First", description: "We only stock flooring brands and products we'd install in our own homes. Quality is never negotiated." },
  { icon: Users, title: "Expert Guidance", description: "Our flooring specialists take the time to understand your lifestyle and budget before making recommendations." },
  { icon: CheckCircle2, title: "Honest Pricing", description: "Transparent, competitive pricing with no hidden fees. What you see is what you get." },
  { icon: MapPin, title: "Local & Proud", description: "We're a Kelowna business serving Kelowna families. Supporting local means supporting our community." },
];

export default function AboutPage() {
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
          className="object-cover object-center opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1526]/95 via-[#0d1526]/70 to-[#0d1526]/30" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 text-accent text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
              Our Story
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight">
              Kelowna&apos;s Flooring<br />
              <span className="text-accent">Experts</span>
            </h1>
            <p className="text-white/60 text-lg sm:text-xl mt-6 max-w-2xl leading-relaxed">
              For over 30 years, we&apos;ve been helping Kelowna homeowners and
              businesses find the perfect flooring — with honest advice, expert
              installation, and a showroom unlike any other in the Okanagan.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/estimates" className="btn-primary text-sm">
                Get Free Estimate <ArrowRight size={16} />
              </Link>
              <a href="tel:2508607847" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-5 py-3 rounded-xl text-sm transition-all">
                <Phone size={15} /> (250) 860-7847
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Story ─────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll direction="right">
              <span className="section-label mb-4">Who We Are</span>
              <h2 className="text-4xl font-black text-charcoal mt-4 leading-tight">
                More Than Just a Flooring Store
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed mt-6">
                <p>
                  Kelowna Flooring Superstore was built on a simple belief: every
                  homeowner deserves access to beautiful, high-quality flooring at a
                  fair price — and the expert guidance to make the right choice for their home.
                </p>
                <p>
                  As a proud member of the <strong className="text-primary">Flooring Superstores</strong> franchise,
                  our Kelowna showroom on McCurdy Place carries one of the largest in-stock
                  selections in the Central Okanagan. From the warmth of real hardwood to
                  the practicality of waterproof vinyl plank, we have something for every
                  home, every budget, and every style.
                </p>
                <p>
                  What sets us apart is our team. Our flooring specialists aren&apos;t
                  salespeople — they&apos;re flooring enthusiasts who genuinely love
                  helping people transform their spaces. We listen, we advise, and we
                  stand behind every floor we sell and install.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/estimates" className="btn-primary text-sm">
                  Get Free Estimate <ArrowRight size={16} />
                </Link>
                <Link href="/flooring" className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-primary text-charcoal hover:text-primary font-semibold px-5 py-3 rounded-xl text-sm transition-all">
                  Shop Flooring
                </Link>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll direction="left" delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "30+", label: "Years in Business", color: "bg-primary" },
                  { value: "500+", label: "Happy Customers", color: "bg-accent" },
                  { value: "8+", label: "Flooring Categories", color: "bg-[#243566]" },
                  { value: "100%", label: "Local Ownership", color: "bg-charcoal" },
                ].map((s) => (
                  <div key={s.label} className={`${s.color} rounded-2xl p-7 text-white`}>
                    <div className="text-4xl font-black">{s.value}</div>
                    <div className="text-white/70 text-sm font-medium mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── Franchise badge ───────────────────────────────────── */}
      <section className="py-12 bg-light border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12 justify-center text-center sm:text-left">
            <Image
              src="/logo.webp"
              alt="Flooring Superstores franchise"
              width={200}
              height={55}
              className="h-10 w-auto"
            />
            <div className="hidden sm:block w-px h-12 bg-gray-200" />
            <p className="text-gray-500 text-sm max-w-md leading-relaxed">
              Kelowna Flooring Superstore is a proud member of the{" "}
              <strong className="text-primary">Flooring Superstores</strong> franchise —
              a trusted Canadian network with a reputation for quality, selection, and service.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Values ────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-14">
            <span className="section-label mb-4">Our Values</span>
            <h2 className="text-4xl sm:text-5xl font-black text-charcoal mt-4">
              What We Stand For
            </h2>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <AnimateOnScroll key={v.title} delay={i * 0.1}>
                <div className="bg-light rounded-2xl p-7 card-hover h-full border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <v.icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-charcoal text-lg mb-3">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured floors ───────────────────────────────────── */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-12">
            <span className="section-label mb-4">Our Work</span>
            <h2 className="text-4xl sm:text-5xl font-black text-charcoal mt-4">
              Floors We&apos;re Proud Of
            </h2>
            <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">
              Every installation is treated like our own home.
            </p>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { src: "/assets/images/hero-walnut.webp", label: "Walnut Natural — Engineered Hardwood", focal: "center 55%" },
              { src: "/assets/images/hero-kurang.webp", label: "Wildwood Kurang — Luxury Vinyl Plank", focal: "center 45%" },
              { src: "/assets/images/hero-oak.webp", label: "Wildwood Oak — Engineered Hardwood", focal: "center 40%" },
            ].map((photo, i) => (
              <AnimateOnScroll key={photo.label} delay={i * 0.1}>
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg group">
                  <Image
                    src={photo.src}
                    alt={photo.label}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ objectPosition: photo.focal }}
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1526]/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm font-semibold">{photo.label}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Location & Hours ──────────────────────────────────── */}
      <section className="py-24 bg-[#0d1526]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll direction="right">
              <h2 className="text-4xl font-black text-white mb-8">Find Us in Kelowna</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Showroom Address</div>
                    <div className="text-white/55 text-sm mt-1">Unit 16, 830 McCurdy Place<br />Kelowna, BC V1X 8C8</div>
                    <a href="https://maps.google.com/?q=Unit+16+830+McCurdy+Place+Kelowna+BC" target="_blank" rel="noopener noreferrer" className="text-accent text-sm font-semibold mt-1 block hover:underline">
                      Get Directions →
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Phone</div>
                    <a href="tel:2508607847" className="text-white/55 hover:text-accent text-sm mt-1 block transition-colors">(250) 860-7847</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#243566] flex items-center justify-center shrink-0">
                    <Clock size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-2">Store Hours</div>
                    <div className="space-y-1.5 text-sm">
                      {[["Mon – Tue", "9:00 AM – 5:00 PM"], ["Wednesday", "9:00 AM – 2:00 PM"], ["Thu – Fri", "9:00 AM – 5:00 PM"], ["Saturday", "10:00 AM – 2:00 PM"], ["Sunday", "Closed"]].map(([day, time]) => (
                        <div key={day} className="flex justify-between gap-8 text-white/55">
                          <span>{day}</span>
                          <span className={time === "Closed" ? "text-accent" : "text-white/80"}>{time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll direction="left" delay={0.15}>
              <div className="rounded-2xl overflow-hidden h-96 border border-white/10">
                <iframe
                  title="Kelowna Flooring Superstore Location"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://maps.google.com/maps?q=Unit+16+830+McCurdy+Place+Kelowna+BC&t=&z=15&ie=UTF8&iwloc=&output=embed"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="py-20 bg-primary">
        <AnimateOnScroll className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Come See the Difference In Person
          </h2>
          <p className="text-white/65 mt-3 leading-relaxed">
            Visit our showroom and let our experts help you find your perfect floor.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-7">
            <Link href="/estimates" className="bg-accent hover:bg-accent-dark text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all hover:shadow-lg hover:shadow-accent/30">
              Book a Free Estimate
            </Link>
            <Link href="/contact" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-xl text-sm transition-all">
              Contact Us
            </Link>
          </div>
        </AnimateOnScroll>
      </section>
    </>
  );
}
