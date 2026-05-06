import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import HeroSection from "@/components/HeroSection";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import FeaturedProjects from "@/components/FeaturedProjects";
import BrandPartners from "@/components/BrandPartners";
import InstagramFeed from "@/components/InstagramFeed";
import AnimatedCounter from "@/components/AnimatedCounter";
import GoogleReviews from "@/components/GoogleReviews";
import LiteYouTube from "@/components/LiteYouTube";
import {
  Phone, ArrowRight,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Kelowna Flooring Superstore | In-Stock Flooring For Life",
  description:
    "Kelowna's premier flooring store. In-stock laminate, hardwood, carpet, vinyl plank, tile & more. Expert installation across the Okanagan. Free estimates. Call (250) 860-7847.",
  alternates: { canonical: "https://www.kelownaflooringsuperstore.com" },
};

/* ─── FAQ schema (SEO) ─────────────────────────────────────── */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What types of flooring does Kelowna Flooring Superstore carry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We carry laminate, hardwood, engineered hardwood, carpet, luxury vinyl plank, linoleum sheet, tile, commercial flooring, and area rugs — all on display at our Kelowna showroom. Order from samples and your floor arrives in 3–5 days.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer free flooring estimates in Kelowna?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We offer free, no-obligation in-home estimates throughout Kelowna and the Central Okanagan. Our experts will measure your space and provide a detailed quote at no charge.",
      },
    },
    {
      "@type": "Question",
      name: "Does Kelowna Flooring Superstore offer installation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Our professional installation crews handle everything — old floor removal, subfloor prep, and expert installation. We serve Kelowna, West Kelowna, Lake Country, and surrounding areas.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best flooring for kitchens and bathrooms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Luxury vinyl plank (LVP) and tile are the top choices for wet areas like kitchens and bathrooms. LVP is 100% waterproof, scratch-resistant, and available in beautiful wood-look styles.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Kelowna Flooring Superstore located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We're located at Unit 16, 830 McCurdy Place, Kelowna, BC V1X 8C8. Open Monday–Friday 9 AM–5 PM (Wednesday until 2 PM) and Saturday 10 AM–2 PM.",
      },
    },
  ],
};

/* ─── Data ──────────────────────────────────────────────────── */
const flooring = [
  { name: "Laminate",       href: "/flooring/laminate",       img: "/assets/images/showroom-08.webp", tag: "Popular",    sale: true  },
  { name: "Hardwood",       href: "/flooring/hardwood",       img: "/assets/images/hardwood-display.webp", tag: "Premium",    sale: false },
  { name: "Carpet",         href: "/flooring/carpet",         img: "/assets/images/showroom-10.webp", tag: "Cozy",       sale: true  },
  { name: "Vinyl Plank",    href: "/flooring/vinyl-plank",    img: "/assets/images/vinyl-plank-stock.webp", tag: "Waterproof", sale: false },
  { name: "Linoleum Sheet", href: "/flooring/linoleum-sheet", img: "/assets/images/linoleum-display-2026.webp", tag: "Durable",    sale: false },
  { name: "Tile",           href: "/flooring/tile",           img: "/assets/images/flooring/tile/tile-01.webp", tag: "Elegant",    sale: false },
  { name: "Commercial",     href: "/flooring/commercial",     img: "/assets/images/projects/commercial-refresh/carpet-tile.webp", tag: "Business",   sale: false },
  { name: "Area Rugs",      href: "/flooring/area-rugs",      img: "/assets/images/showroom-04.webp", tag: "Style",      sale: true  },
];



/* ─── Page ──────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      {/* FAQ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <HeroSection />

      {/* ── Stats bar ─────────────────────────────────────────── */}
      <section className="relative bg-primary overflow-hidden">
        {/* Subtle diagonal stripe texture */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, #fff 0px, #fff 1px, transparent 1px, transparent 12px)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 divide-y-0 lg:divide-x lg:divide-white/15">
            {/* Stat 1 */}
            <AnimateOnScroll delay={0} className="text-center lg:px-8">
              <a
                href="https://www.google.com/search?q=Kelowna+Flooring+Superstore+reviews#mpd=~6968423193531731233/customers/reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-90 transition-opacity"
                aria-label="Read our Google reviews"
              >
                <div className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-none">
                  4.9<span className="text-amber-400">★</span>
                </div>
                <div className="text-white font-bold text-base mt-2">Google Rating</div>
                <div className="text-white/45 text-sm mt-1">Verified reviews</div>
              </a>
            </AnimateOnScroll>
            {/* Stat 2 — Canadian Owned (no counter) */}
            <AnimateOnScroll delay={0.08} className="text-center lg:px-8">
              <div className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-none">🍁</div>
              <div className="text-white font-bold text-base mt-2">Canadian Owned</div>
              <div className="text-white/45 text-sm mt-1">Proudly local, proudly Canadian</div>
            </AnimateOnScroll>
            {/* Stat 3 */}
            <AnimateOnScroll delay={0.16} className="text-center lg:px-8">
              <div className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-none">
                <AnimatedCounter to={30} suffix="+" />
              </div>
              <div className="text-white font-bold text-base mt-2">Years Experience</div>
              <div className="text-white/45 text-sm mt-1">Serving the Okanagan</div>
            </AnimateOnScroll>
            {/* Stat 4 */}
            <AnimateOnScroll delay={0.24} className="text-center lg:px-8">
              <div className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-none">
                <AnimatedCounter to={100} suffix="%" />
              </div>
              <div className="text-white font-bold text-base mt-2">Satisfaction</div>
              <div className="text-white/45 text-sm mt-1">Every project, every time</div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── Brand partners ────────────────────────────────────── */}
      <BrandPartners />

      {/* ── Financing banner ──────────────────────────────────── */}
      <section className="relative bg-primary overflow-hidden">
        {/* Subtle diagonal stripe */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, #fff 0px, #fff 1px, transparent 1px, transparent 12px)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left: badge + headline */}
            <div className="flex items-center gap-6">
              <div className="hidden sm:flex shrink-0 w-16 h-16 rounded-2xl bg-accent/20 border border-accent/40 items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 text-accent text-xs font-black tracking-[0.15em] uppercase px-3 py-1 rounded-full mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Now Available
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  Financing Available —{" "}
                  <span className="text-accent">Get Your New Floor Today</span>
                </h2>
                <p className="text-white/60 text-sm mt-1.5 max-w-lg">
                  Don&apos;t let budget hold you back. Ask about our flexible financing options and get the floors you love now, pay over time.
                </p>
              </div>
            </div>

            {/* Right: CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/financing"
                className="flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5 whitespace-nowrap"
              >
                Ask About Financing
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:2508607847"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/18 border border-white/20 text-white font-semibold px-6 py-3.5 rounded-xl text-sm transition-all whitespace-nowrap"
              >
                <Phone size={14} />
                Call Us Today
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Flooring categories grid ──────────────────────────── */}
      <section className="py-12 sm:py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-14">
            <span className="section-label mb-4">Our Collection</span>
            <h2 className="text-2xl sm:text-4xl font-black text-charcoal mt-4">
              Every Type of Flooring,{" "}
              <span className="gradient-text">In Stock</span>
            </h2>
            <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">
              From cozy carpet to stunning hardwood — browse our complete selection in our Kelowna showroom.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {flooring.map((f, i) => (
              <AnimateOnScroll key={f.name} delay={i * 0.06}>
                <Link href={f.href} className="group relative overflow-hidden rounded-2xl h-36 sm:h-52 block card-hover shadow-card-warm">
                  <Image
                    src={f.img}
                    alt={`${f.name} flooring at Kelowna Flooring Superstore`}
                    fill
                    loading="lazy"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1526]/80 via-[#0d1526]/20 to-transparent group-hover:from-primary/80 transition-colors duration-300" />
                  {/* Tag chip + On Sale badge */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                    <span className="inline-block bg-white/15 backdrop-blur-sm text-white text-xs font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border border-white/20">
                      {f.tag}
                    </span>
                    {f.sale && (
                      <span className="inline-block bg-accent text-white text-xs font-black tracking-wider uppercase px-2.5 py-1 rounded-full shadow-lg shadow-accent/40">
                        On Sale
                      </span>
                    )}
                  </div>
                  {/* Name */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-black text-base sm:text-lg leading-tight">{f.name}</h3>
                    <div className="flex items-center gap-1 text-white/55 text-sm mt-1 group-hover:text-accent transition-colors">
                      <span>Explore</span>
                      <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll className="text-center mt-10">
            <Link href="/flooring" className="btn-primary text-sm">
              View All Flooring Types <ArrowRight size={16} />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>



      {/* ── Showroom gallery ──────────────────────────────────── */}
      <section className="py-12 sm:py-24 bg-[#0d1526]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 text-accent text-sm font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              Inside Our Showroom
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white mt-2">
              Take a Look Around
            </h2>
            <p className="text-white/50 text-lg mt-3 max-w-xl mx-auto">
              A glimpse of our Kelowna showroom. Drop in to see hundreds of samples in person.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
                <LiteYouTube
                  videoId="WoQ_5q8xsEs"
                  title="Kelowna Flooring Superstore — Showroom Walkthrough"
                />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Google Reviews (live via Places API with static fallback) ── */}
      <GoogleReviews />

      {/* ── Before / After project carousel ──────────────────── */}
      <ProjectsCarousel />

      {/* ── Location quick-info strip ─────────────────────────── */}
      <section className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5 text-white">
            <div className="flex items-center gap-3 text-sm">
              <MapPin size={16} className="text-accent shrink-0" />
              <span className="text-white/70">Unit 16, 830 McCurdy Place, Kelowna, BC</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-white/20" />
            <div className="flex items-center gap-3 text-sm">
              <Phone size={16} className="text-accent shrink-0" />
              <a href="tel:2508607847" className="text-white/70 hover:text-white transition-colors">
                (250) 860-7847
              </a>
            </div>
            <div className="hidden sm:block h-4 w-px bg-white/20" />
            <div className="text-white/55 text-sm text-center sm:text-left">
              Mon–Fri 9–5 &nbsp;·&nbsp; Wed 9–2 &nbsp;·&nbsp; Sat 10–2 &nbsp;·&nbsp; Sun Closed
            </div>
            <Link
              href="/estimates"
              className="shrink-0 bg-accent hover:bg-accent-dark text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-all"
            >
              Free Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* ── Instagram feed ────────────────────────────────────── */}
      <InstagramFeed />

      {/* ── Featured Projects ─────────────────────────────────── */}
      <section className="py-12 sm:py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-6 sm:mb-10">
            <span className="section-label mb-4">Featured Projects</span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-charcoal mt-3 sm:mt-4 leading-tight">
              Real Homes, <span className="gradient-text">Real Floors</span>
            </h2>
            <p className="text-gray-500 text-sm sm:text-lg mt-2 sm:mt-4 max-w-xl mx-auto">
              A closer look at recent Kelowna installs from our crews.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <FeaturedProjects />
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────── */}
      <section className="py-12 sm:py-24 relative overflow-hidden bg-[#0d1526]">
        {/* Background image with heavy overlay */}
        <Image
          src="/assets/images/hero-showroom.webp"
          alt=""
          fill
          aria-hidden="true"
          className="object-cover opacity-15"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(27,42,82,0.6) 0%, rgba(13,21,38,0.9) 100%)",
          }}
        />
        {/* Red accent stripe */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />

        <AnimateOnScroll className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            Ready to Transform{" "}
            <span className="text-accent">Your Space?</span>
          </h2>
          <p className="text-white/65 text-lg mt-5 leading-relaxed max-w-xl mx-auto">
            Visit our Kelowna showroom or book a free in-home estimate. Our flooring experts
            are ready to help you find the perfect floor.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link
              href="/estimates"
              className="bg-accent hover:bg-accent-dark text-white font-bold px-9 py-4 rounded-xl text-base transition-all hover:shadow-2xl hover:shadow-accent/30 hover:-translate-y-1"
            >
              Get Free Estimate
            </Link>
            <a
              href="tel:2508607847"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/18 border border-white/25 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all"
            >
              <Phone size={18} /> (250) 860-7847
            </a>
          </div>
        </AnimateOnScroll>
      </section>
    </>
  );
}
