import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { ArrowRight, Phone, Tag, CheckCircle2, Flame } from "lucide-react";

export const metadata: Metadata = {
  title: "Sales & Promotions — Flooring Deals Kelowna",
  description:
    "Current flooring sales and promotions at Kelowna Flooring Superstore. In-stock deals on carpet, vinyl plank, laminate, area rugs and more. Limited stock. Call (250) 860-7847.",
  alternates: { canonical: "https://www.kfssflooring.com/sales" },
};

const sales = [
  {
    tag: "On Sale",
    badge: "BEST DEAL",
    title: "Carpet — On Sale Now",
    description:
      "Select Beaulieu and Mohawk carpet styles on sale now. Soft, stain-resistant options for every bedroom and living space. Order from our showroom samples.",
    bullets: ["Nylon & polyester options", "Stain-resistant fibres", "Wide colour selection", "Includes underlayment options"],
    img: "/assets/images/showroom-10.webp",
    href: "/flooring/carpet",
    highlight: true,
    focal: "center 40%",
  },
  {
    tag: "On Sale",
    badge: null,
    title: "Select Area Rugs",
    description:
      "Add warmth and style instantly. Discounted area rugs in a variety of sizes and patterns — perfect over LVP, hardwood, or tile.",
    bullets: ["Multiple sizes available", "Indoor & entryway styles", "Easy to layer over hard floors", "See styles in our showroom"],
    img: "/assets/images/showroom-04.webp",
    href: "/flooring/area-rugs",
    highlight: true,
    focal: "center 45%",
  },
  {
    tag: "3–5 Day Delivery",
    badge: null,
    title: "Luxury Vinyl Plank",
    description:
      "Choose from our full range of waterproof LVP samples — perfect for kitchens, bathrooms, basements, and pet-friendly homes. Arrives in 3–5 days.",
    bullets: ["100% waterproof core", "Wear layers up to 20 mil", "Click-lock floating install", "Wood & stone looks"],
    img: "/assets/images/hero-kurang.webp",
    href: "/flooring/vinyl-plank",
    highlight: false,
    focal: "center 45%",
  },
  {
    tag: "3–5 Day Delivery",
    badge: null,
    title: "Laminate Flooring",
    description:
      "Hardwood looks without the hardwood price. Browse laminate samples in a wide range of widths and finishes — order today, arrives in 3–5 days.",
    bullets: ["AC3 & AC4 wear ratings", "Multiple plank widths", "Easy DIY-friendly install", "Budget to mid-range options"],
    img: "/assets/images/showroom-08.webp",
    href: "/flooring/laminate",
    highlight: false,
    focal: "center 50%",
  },
];

export default function SalesPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative pt-52 lg:pt-44 pb-28 overflow-hidden bg-[#0d1526]">
        <Image
          src="/assets/images/showroom-04.webp"
          alt=""
          fill
          aria-hidden="true"
          priority
          className="object-cover object-center opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1526]/95 via-[#0d1526]/75 to-[#0d1526]/40" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 text-accent text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
              <Flame size={12} />
              While Stocks Last
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-white leading-tight">
              Sales &amp;<br />
              <span className="text-accent">Promotions</span>
            </h1>
            <p className="text-white/60 text-base sm:text-lg mt-5 max-w-xl leading-relaxed">
              Current deals on display in our showroom. Choose your sample and your order arrives in 3–5 days — call to confirm pricing and availability.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Link href="/estimates" className="btn-primary text-sm">
                Get Free Estimate <ArrowRight size={15} />
              </Link>
              <a href="tel:2508607847" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/18 border border-white/25 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all">
                <Phone size={15} /> Confirm Stock
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Sales grid ────────────────────────────────────────── */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-14">
            <span className="section-label mb-4">On Sale Now</span>
            <h2 className="text-2xl sm:text-4xl font-black text-charcoal mt-4">
              See Samples, <span className="gradient-text">Ships in Days</span>
            </h2>
            <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">
              No waiting. No back-orders. These styles are on our showroom floor right now.
            </p>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 gap-7">
            {sales.map((s, i) => (
              <AnimateOnScroll key={s.title} delay={i * 0.08}>
                <Link
                  href={s.href}
                  className={`group block rounded-2xl overflow-hidden card-hover shadow-md bg-white ${
                    s.highlight ? "ring-2 ring-accent ring-offset-2 ring-offset-light" : ""
                  }`}
                >
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={s.img}
                      alt={s.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      style={{ objectPosition: s.focal }}
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1526]/65 to-transparent" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span
                        className={`text-xs font-black px-3 py-1.5 rounded-full tracking-wider uppercase ${
                          s.tag === "On Sale"
                            ? "bg-accent text-white shadow-lg shadow-accent/40"
                            : "bg-primary text-white"
                        }`}
                      >
                        {s.tag}
                      </span>
                      {s.badge && (
                        <span className="bg-white text-accent text-[10px] font-black px-2.5 py-1.5 rounded-full">
                          {s.badge}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className={`p-6 ${s.highlight ? "bg-accent/5" : "bg-white"}`}>
                    <h2 className="text-charcoal font-black text-xl mb-2">{s.title}</h2>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.description}</p>
                    <ul className="space-y-1.5 mb-5">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2 text-gray-600 text-xs">
                          <CheckCircle2 size={13} className="text-primary shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-1.5 text-primary text-sm font-bold group-hover:gap-3 transition-all">
                      {s.tag === "On Sale" ? "Shop Sale" : "Shop Now"} <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why buy now strip ─────────────────────────────────── */}
      <section className="bg-accent py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-white">
          <div className="flex items-center gap-3">
            <Tag size={16} className="shrink-0" />
            <p className="font-bold text-sm sm:text-base text-center sm:text-left">
              Pricing and availability subject to change — call to confirm before visiting.
            </p>
          </div>
          <a href="tel:2508607847" className="shrink-0 bg-white text-accent font-black px-6 py-2.5 rounded-xl text-sm hover:bg-white/90 transition-colors whitespace-nowrap">
            (250) 860-7847
          </a>
        </div>
      </section>

      {/* ── Why shop with us ──────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-charcoal">
              Why Buy From Us?
            </h2>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: "🏪", title: "Showroom Samples", desc: "Browse hundreds of styles in person and pick your favourite.", href: null },
              { icon: "🔨", title: "Pro Installation",  desc: "Our experienced crews handle the whole project start to finish.", href: null },
              { icon: "📋", title: "Free Estimate",     desc: "In-home measurement and written quote at no charge.",          href: "/estimates" },
              { icon: "⭐", title: "4.9 Star Rating",    desc: "Verified Google reviews from happy Kelowna homeowners.",        href: "https://www.google.com/search?q=Kelowna+Flooring+Superstore+reviews#mpd=~6968423193531731233/customers/reviews" },
            ].map((item, i) => (
              <AnimateOnScroll key={item.title} delay={i * 0.08}>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block bg-light rounded-2xl p-6 border border-gray-100 text-center hover:border-accent/40 hover:shadow-md transition-all"
                  >
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h3 className="font-bold text-charcoal mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </a>
                ) : (
                  <div className="bg-light rounded-2xl p-6 border border-gray-100 text-center">
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h3 className="font-bold text-charcoal mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                )}
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="py-20 bg-[#0d1526]">
        <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
        <AnimateOnScroll className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Don&apos;t See What You&apos;re Looking For?
          </h2>
          <p className="text-white/55 mt-4 leading-relaxed">
            Our showroom carries far more than what&apos;s listed here. Come in or call — we&apos;ll find the right floor for your space and budget.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-7">
            <Link href="/estimates" className="bg-accent hover:bg-accent-dark text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all">
              Book Free Estimate
            </Link>
            <a href="tel:2508607847" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-xl text-sm transition-all">
              <Phone size={16} /> (250) 860-7847
            </a>
            <Link href="/flooring" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-xl text-sm transition-all">
              All Flooring Types <ArrowRight size={14} />
            </Link>
          </div>
        </AnimateOnScroll>
      </section>
    </>
  );
}
