import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import HeroSection from "@/components/HeroSection";
import ShowroomStrip from "@/components/ShowroomStrip";
import BrandPartners from "@/components/BrandPartners";
import VideoGallery from "@/components/VideoGallery";
import AnimatedCounter from "@/components/AnimatedCounter";
import {
  Phone, ArrowRight, CheckCircle2, Star,
  Ruler, Package, Wrench, Award, ExternalLink, MapPin,
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
        text: "We carry laminate, hardwood, engineered hardwood, carpet, luxury vinyl plank, linoleum sheet, tile, commercial flooring, and area rugs — all in-stock at our Kelowna showroom.",
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
  { name: "Laminate", href: "/flooring/laminate", img: "/assets/images/showroom-08.webp", tag: "Popular" },
  { name: "Hardwood", href: "/flooring/hardwood", img: "/assets/images/hero-walnut.webp", tag: "Premium" },
  { name: "Carpet", href: "/flooring/carpet", img: "/assets/images/showroom-10.webp", tag: "Cozy" },
  { name: "Vinyl Plank", href: "/flooring/vinyl-plank", img: "/assets/images/hero-kurang.webp", tag: "Waterproof" },
  { name: "Linoleum Sheet", href: "/flooring/linoleum-sheet", img: "/assets/images/showroom-05.webp", tag: "Durable" },
  { name: "Tile", href: "/flooring/tile", img: "/assets/images/showroom-07.webp", tag: "Elegant" },
  { name: "Commercial", href: "/flooring/commercial", img: "/assets/images/showroom-01.webp", tag: "Business" },
  { name: "Area Rugs", href: "/flooring/area-rugs", img: "/assets/images/showroom-04.webp", tag: "Style" },
];

const whyUs = [
  { icon: Package, title: "In-Stock Selection", description: "Our Kelowna showroom is packed with in-stock flooring ready to go home with you today — no waiting, no back-orders." },
  { icon: Ruler, title: "Free Estimates", description: "We come to you. Our experts measure your space and provide a detailed, no-obligation quote — completely free." },
  { icon: Wrench, title: "Expert Installation", description: "Our skilled crews have decades of experience. We handle removal, prep, and a flawless install every time." },
  { icon: Award, title: "Quality Guaranteed", description: "We stand behind every product we sell and every floor we install. Your satisfaction is our commitment." },
];

const testimonials = [
  {
    name: "Rob Hutchings", location: "Google Review", rating: 5,
    text: "We recently purchased carpet for three rooms in our house through Kelowna Flooring Superstore. From the minute we entered their showroom, the whole experience was seamless and pleasant. Both Selina and Shaun were extremely helpful and knowledgeable about their products, and offered very efficient response and delivery times. When it came to installation, Cory was punctual, cordial, helpful, and excellent at his job. We couldn't be more pleased!",
  },
  {
    name: "Jenni I.", location: "Google Review", rating: 5,
    text: "We had a fantastic experience with Kelowna Flooring Superstore. Shaun and Selina were incredibly helpful when we were choosing our flooring. They were knowledgeable, patient, and really went out of their way to work with our timeline. The installation was done by Jessie and Clarke, and they truly went above and beyond. Their workmanship was excellent and the finished result looks amazing.",
  },
  {
    name: "Thomas", location: "Google Local Guide", rating: 5,
    text: "From start to finish, the entire carpet installation experience was seamless. The team was incredibly responsive at every step. A special shout-out to Cory, the installer — professional, efficient, and clearly skilled at what he does. The workmanship is excellent, and the whole process felt easy and well-managed. Highly recommend.",
  },
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
      <ShowroomStrip />

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
            {[
              { to: 5, suffix: "★", label: "Google Rating", sub: "Verified reviews" },
              { to: 8, suffix: "+", label: "Flooring Types", sub: "All in-stock" },
              { to: 30, suffix: "+", label: "Years Experience", sub: "Serving the Okanagan" },
              { to: 100, suffix: "%", label: "Satisfaction", sub: "Every project, every time" },
            ].map((s, i) => (
              <AnimateOnScroll key={s.label} delay={i * 0.08} className="text-center lg:px-8">
                <div className="text-5xl sm:text-6xl font-black text-white tracking-tight leading-none">
                  <AnimatedCounter to={s.to} suffix={s.suffix} />
                </div>
                <div className="text-white font-bold text-base mt-2">{s.label}</div>
                <div className="text-white/45 text-xs mt-1">{s.sub}</div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Brand partners ────────────────────────────────────── */}
      <BrandPartners />

      {/* ── Featured Floors — lifestyle photos ───────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-14">
            <span className="section-label mb-4">Featured Floors</span>
            <h2 className="text-4xl sm:text-5xl font-black text-charcoal mt-4">
              See It In Your Home
            </h2>
            <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">
              Real rooms. Real results. Every floor installed by our expert team across Kelowna.
            </p>
          </AnimateOnScroll>

          {/* Large hero card + two smaller side cards */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
            {/* Main large card */}
            <AnimateOnScroll direction="right" className="lg:col-span-3">
              <Link href="/flooring/hardwood" className="group relative block rounded-2xl overflow-hidden h-80 sm:h-[26rem] shadow-xl card-hover">
                <Image
                  src="/assets/images/hero-walnut.webp"
                  alt="Walnut Natural engineered hardwood in Kelowna home"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1526]/85 via-[#0d1526]/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-block bg-accent text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-2">
                    Engineered Hardwood
                  </span>
                  <h3 className="text-white font-black text-2xl sm:text-3xl leading-tight">Walnut Natural</h3>
                  <p className="text-white/65 text-sm mt-1.5">Dramatic dark grain. Perfect for living rooms &amp; staircases.</p>
                  <div className="inline-flex items-center gap-1.5 text-accent text-sm font-bold mt-3 group-hover:gap-3 transition-all">
                    Explore Hardwood <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            </AnimateOnScroll>

            {/* Two side cards stacked */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              <AnimateOnScroll delay={0.1} className="h-[11.5rem] sm:h-[12.5rem]">
                <Link href="/flooring/vinyl-plank" className="group relative block rounded-2xl overflow-hidden h-full shadow-lg card-hover">
                  <Image
                    src="/assets/images/hero-kurang.webp"
                    alt="Wildwood Kurang luxury vinyl plank in modern Kelowna kitchen"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1526]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block bg-primary text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-1.5">
                      Luxury Vinyl Plank
                    </span>
                    <h3 className="text-white font-black text-lg leading-tight">Wildwood Kurang</h3>
                  </div>
                </Link>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.18} className="h-[11.5rem] sm:h-[12.5rem]">
                <Link href="/flooring/hardwood" className="group relative block rounded-2xl overflow-hidden h-full shadow-lg card-hover">
                  <Image
                    src="/assets/images/hero-oak.webp"
                    alt="Wildwood Oak Natural in open plan Kelowna home"
                    fill
                    className="object-cover object-[center_40%] group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1526]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block bg-primary text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-1.5">
                      Engineered Hardwood
                    </span>
                    <h3 className="text-white font-black text-lg leading-tight">Wildwood Oak Natural</h3>
                  </div>
                </Link>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ── Flooring categories grid ──────────────────────────── */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-14">
            <span className="section-label mb-4">Our Collection</span>
            <h2 className="text-4xl sm:text-5xl font-black text-charcoal mt-4">
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
                <Link href={f.href} className="group relative overflow-hidden rounded-2xl h-44 sm:h-52 block card-hover shadow-md">
                  <Image
                    src={f.img}
                    alt={`${f.name} flooring at Kelowna Flooring Superstore`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1526]/80 via-[#0d1526]/20 to-transparent group-hover:from-primary/80 transition-colors duration-300" />
                  {/* Tag chip */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-block bg-white/15 backdrop-blur-sm text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border border-white/20">
                      {f.tag}
                    </span>
                  </div>
                  {/* Name */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-black text-base sm:text-lg leading-tight">{f.name}</h3>
                    <div className="flex items-center gap-1 text-white/55 text-xs mt-1 group-hover:text-accent transition-colors">
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

      {/* ── Why Choose Us ─────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll direction="right">
              <span className="section-label mb-4">Why Choose Us</span>
              <h2 className="text-4xl sm:text-5xl font-black text-charcoal mt-4 leading-tight">
                The Okanagan&apos;s Most Trusted{" "}
                <span className="gradient-text">Flooring Store</span>
              </h2>
              <p className="text-gray-500 text-lg mt-5 leading-relaxed">
                For over 30 years, Kelowna Flooring Superstore has been the go-to destination
                for homeowners and contractors across the Central Okanagan — quality flooring,
                honest advice, expert installation.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Locally owned and operated in Kelowna, BC",
                  "Massive in-stock inventory — no waiting",
                  "Professional measurement & installation",
                  "Free, no-obligation in-home estimates",
                  "Residential & commercial projects",
                  "Part of the Flooring Superstores franchise",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-600">
                    <CheckCircle2 size={18} className="text-primary shrink-0" />
                    <span className="text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/about" className="btn-primary text-sm">
                  Our Story <ArrowRight size={16} />
                </Link>
                <a
                  href="tel:2508607847"
                  className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-primary text-charcoal hover:text-primary font-semibold px-5 py-3 rounded-xl text-sm transition-all"
                >
                  <Phone size={15} className="text-primary" /> (250) 860-7847
                </a>
              </div>
            </AnimateOnScroll>

            <div className="grid grid-cols-2 gap-4">
              {whyUs.map((item, i) => (
                <AnimateOnScroll key={item.title} delay={i * 0.1}>
                  <div className="bg-light rounded-2xl p-6 card-hover border border-gray-100 h-full">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon size={20} className="text-primary" />
                    </div>
                    <h3 className="font-bold text-charcoal mb-2 text-sm sm:text-base">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Video gallery ─────────────────────────────────────── */}
      <section className="py-24 bg-[#0d1526]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 text-accent text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              Watch &amp; Explore
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mt-2">
              Take a Virtual Tour
            </h2>
            <p className="text-white/50 text-lg mt-3 max-w-xl mx-auto">
              Browse our showroom from home. Click any clip to watch full-screen.
            </p>
          </AnimateOnScroll>
          <VideoGallery />
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────── */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-14">
            <span className="section-label mb-4">Real Reviews</span>
            <h2 className="text-4xl sm:text-5xl font-black text-charcoal mt-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-500 text-base mt-3">
              Verified Google reviews from real Kelowna customers.
            </p>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimateOnScroll key={t.name} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-7 card-hover h-full flex flex-col shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-black text-sm shrink-0">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-charcoal text-sm">{t.name}</div>
                      <div className="text-gray-400 text-xs">{t.location}</div>
                    </div>
                  </div>
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={14} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll className="text-center mt-10">
            <a
              href="https://share.google/PuQ3CuaKFDmxceU8t"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-primary text-charcoal hover:text-primary font-semibold px-6 py-3.5 rounded-xl text-sm transition-all card-hover shadow-sm"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" aria-hidden="true">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Read All Google Reviews
              <ExternalLink size={13} />
            </a>
          </AnimateOnScroll>
        </div>
      </section>

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
            <div className="text-white/55 text-xs text-center sm:text-left">
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

      {/* ── Final CTA ─────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden bg-[#0d1526]">
        {/* Background image with heavy overlay */}
        <Image
          src="/assets/images/hero-walnut.webp"
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
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
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
