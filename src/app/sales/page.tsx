import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { ArrowRight, Phone, Tag, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Sales & Promotions",
  description:
    "Current flooring sales and promotions at Kelowna Flooring Superstore. In-stock deals on carpet, vinyl plank, laminate and more. Call (250) 860-7847.",
  alternates: { canonical: "https://www.kelownaflooringsuperstore.com/sales" },
};

const sales = [
  {
    tag: "On Sale",
    title: "In-Stock Carpet",
    description:
      "Select Beaulieu and Mohawk carpet styles on sale now. Soft, stain-resistant options for every bedroom and living space. While quantities last.",
    img: "/assets/images/showroom-10.webp",
    href: "/flooring/carpet",
    highlight: true,
    focal: "center 40%",
  },
  {
    tag: "In Stock",
    title: "Vinyl Plank",
    description:
      "Our full range of in-stock waterproof luxury vinyl plank is ready to go — perfect for kitchens, bathrooms, and basements.",
    img: "/assets/images/hero-kurang.webp",
    href: "/flooring/vinyl-plank",
    highlight: false,
    focal: "center 45%",
  },
  {
    tag: "In Stock",
    title: "Laminate Flooring",
    description:
      "Hardwood looks without the hardwood price. In-stock laminate in a wide range of styles — ready for immediate installation.",
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
      <section className="relative pt-44 pb-28 overflow-hidden bg-[#0d1526]">
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
            <div className="inline-flex items-center gap-2 bg-accent text-white text-xs font-black tracking-widest uppercase px-5 py-2 rounded-full mb-6 shadow-lg shadow-accent/30">
              <Tag size={12} />
              Current Deals — Limited Stock
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight">
              Sales &amp;<br />
              <span className="text-accent">Promotions</span>
            </h1>
            <p className="text-white/60 text-lg sm:text-xl mt-6 max-w-xl leading-relaxed">
              Check out our current in-stock specials and sales. Inventory moves
              fast — visit us or call to confirm availability.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <a href="tel:2508607847" className="btn-primary text-sm">
                <Phone size={15} /> Call to Confirm Stock
              </a>
              <div className="flex items-center gap-2 text-white/50 text-xs">
                <Clock size={13} />
                <span>Mon–Fri 9–5 · Sat 10–2</span>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Sales grid ────────────────────────────────────────── */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-14">
            <span className="section-label mb-4">In-Stock Now</span>
            <h2 className="text-4xl sm:text-5xl font-black text-charcoal mt-4">
              Ready to Go <span className="gradient-text">Today</span>
            </h2>
            <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">
              No waiting. No back-orders. These styles are on our showroom floor right now.
            </p>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sales.map((s, i) => (
              <AnimateOnScroll key={s.title} delay={i * 0.1}>
                <Link
                  href={s.href}
                  className={`group block rounded-2xl overflow-hidden card-hover shadow-md ${
                    s.highlight ? "ring-2 ring-accent ring-offset-2" : ""
                  }`}
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={s.img}
                      alt={s.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      style={{ objectPosition: s.focal }}
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1526]/60 to-transparent" />
                    <span
                      className={`absolute top-4 left-4 text-xs font-black px-3 py-1.5 rounded-full tracking-wider uppercase ${
                        s.tag === "On Sale"
                          ? "bg-accent text-white shadow-lg shadow-accent/40"
                          : "bg-primary text-white"
                      }`}
                    >
                      {s.tag}
                    </span>
                    {s.highlight && (
                      <span className="absolute top-4 right-4 bg-white text-accent text-[10px] font-black px-2.5 py-1 rounded-full">
                        BEST DEAL
                      </span>
                    )}
                  </div>
                  <div className={`p-6 ${s.highlight ? "bg-accent/5" : "bg-white"}`}>
                    <h2 className="text-charcoal font-black text-xl">{s.title}</h2>
                    <p className="text-gray-500 text-sm mt-2 leading-relaxed">{s.description}</p>
                    <div className="flex items-center gap-1.5 text-primary text-sm font-bold mt-5 group-hover:gap-3 transition-all">
                      Shop Now <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Urgency strip ─────────────────────────────────────── */}
      <section className="bg-accent py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-white">
          <p className="font-bold text-sm sm:text-base text-center sm:text-left">
            In-stock inventory changes daily. Call to confirm what&apos;s available.
          </p>
          <a href="tel:2508607847" className="shrink-0 bg-white text-accent font-black px-6 py-2.5 rounded-xl text-sm hover:bg-white/90 transition-colors">
            (250) 860-7847
          </a>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="py-20 bg-[#0d1526]">
        <AnimateOnScroll className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Don&apos;t See What You&apos;re Looking For?
          </h2>
          <p className="text-white/55 mt-4 leading-relaxed">
            Our in-stock selection changes frequently. Call us or visit the showroom
            to see our full current inventory — or ask about special ordering.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-7">
            <a href="tel:2508607847" className="flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all">
              <Phone size={16} /> (250) 860-7847
            </a>
            <Link href="/flooring" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-xl text-sm transition-all">
              All Flooring Types
            </Link>
          </div>
        </AnimateOnScroll>
      </section>
    </>
  );
}
