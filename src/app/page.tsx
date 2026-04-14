import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import HeroSection from "@/components/HeroSection";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import BrandPartners from "@/components/BrandPartners";
import VideoGallery from "@/components/VideoGallery";
import AnimatedCounter from "@/components/AnimatedCounter";
import {
  Phone, ArrowRight, CheckCircle2, Star,
  ExternalLink, MapPin,
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
  { name: "Laminate", href: "/flooring/laminate", img: "/assets/images/showroom-08.webp", tag: "Popular", sale: true },
  { name: "Hardwood", href: "/flooring/hardwood", img: "/assets/images/hero-walnut.webp", tag: "Premium", sale: false },
  { name: "Carpet", href: "/flooring/carpet", img: "/assets/images/showroom-10.webp", tag: "Cozy", sale: true },
  { name: "Vinyl Plank", href: "/flooring/vinyl-plank", img: "/assets/images/hero-kurang.webp", tag: "Waterproof", sale: false },
  { name: "Linoleum Sheet", href: "/flooring/linoleum-sheet", img: "/assets/images/showroom-05.webp", tag: "Durable", sale: false },
  { name: "Tile", href: "/flooring/tile", img: "/assets/images/showroom-07.webp", tag: "Elegant", sale: false },
  { name: "Commercial", href: "/flooring/commercial", img: "/assets/images/showroom-01.webp", tag: "Business", sale: false },
  { name: "Area Rugs", href: "/flooring/area-rugs", img: "/assets/images/showroom-04.webp", tag: "Style", sale: true },
];


const testimonials = [
  {
    name: "Rob Hutchings",
    date: "January 2025",
    avatar: "https://lh3.googleusercontent.com/a/default-user=s40-c",
    initials: "RH",
    color: "#1B2A52",
    rating: 5,
    text: "We recently purchased carpet for three rooms in our house through Kelowna Flooring Superstore. From the minute we entered their showroom, the whole experience was seamless and pleasant. Both Selina and Shaun were extremely helpful and knowledgeable about their products, and offered very efficient response and delivery times. When it came to installation, Cory was punctual, cordial, helpful, and excellent at his job. We couldn't be more pleased!",
  },
  {
    name: "Jenni I.",
    date: "February 2025",
    avatar: "",
    initials: "JI",
    color: "#E8423C",
    rating: 5,
    text: "We had a fantastic experience with Kelowna Flooring Superstore. Shaun and Selina were incredibly helpful when we were choosing our flooring. They were knowledgeable, patient, and really went out of their way to work with our timeline. The installation was done by Jessie and Clarke, and they truly went above and beyond. Their workmanship was excellent and the finished result looks amazing.",
  },
  {
    name: "Thomas",
    date: "March 2025",
    avatar: "",
    initials: "TH",
    color: "#243566",
    rating: 5,
    text: "From start to finish, the entire carpet installation experience was seamless. The team was incredibly responsive at every step. A special shout-out to Cory, the installer — professional, efficient, and clearly skilled at what he does. The workmanship is excellent, and the whole process felt easy and well-managed. Highly recommend.",
  },
  {
    name: "Michelle K.",
    date: "December 2024",
    avatar: "",
    initials: "MK",
    color: "#2a7a5a",
    rating: 5,
    text: "Absolutely love our new hardwood floors! The team at Kelowna Flooring Superstore helped us pick the perfect colour and style for our open-concept living area. The installation was flawless and completed in one day. Our home looks completely transformed. Would recommend to anyone in the Okanagan.",
  },
  {
    name: "David & Carol P.",
    date: "November 2024",
    avatar: "",
    initials: "DC",
    color: "#7a3a2a",
    rating: 5,
    text: "We replaced all the flooring in our home — hardwood in the main areas and carpet in the bedrooms. The whole process was stress-free. Selina helped us coordinate everything and the crew was respectful of our home. The price was very competitive and the quality is outstanding. Very happy customers!",
  },
  {
    name: "Linda S.",
    date: "October 2024",
    avatar: "",
    initials: "LS",
    color: "#5a2a7a",
    rating: 5,
    text: "As a senior on a budget I was nervous about the whole process. The staff were patient, never rushed me, and explained everything clearly. The vinyl plank they recommended is beautiful and so easy to clean. The installer was wonderful — very careful and tidy. I tell everyone about this store!",
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
              <div className="text-5xl sm:text-6xl font-black text-white tracking-tight leading-none">
                <AnimatedCounter to={5} suffix="★" />
              </div>
              <div className="text-white font-bold text-base mt-2">Google Rating</div>
              <div className="text-white/45 text-sm mt-1">Verified reviews</div>
            </AnimateOnScroll>
            {/* Stat 2 — Canadian Owned (no counter) */}
            <AnimateOnScroll delay={0.08} className="text-center lg:px-8">
              <div className="text-5xl sm:text-6xl font-black text-white tracking-tight leading-none">🍁</div>
              <div className="text-white font-bold text-base mt-2">Canadian Owned</div>
              <div className="text-white/45 text-sm mt-1">Proudly local, proudly Canadian</div>
            </AnimateOnScroll>
            {/* Stat 3 */}
            <AnimateOnScroll delay={0.16} className="text-center lg:px-8">
              <div className="text-5xl sm:text-6xl font-black text-white tracking-tight leading-none">
                <AnimatedCounter to={30} suffix="+" />
              </div>
              <div className="text-white font-bold text-base mt-2">Years Experience</div>
              <div className="text-white/45 text-sm mt-1">Serving the Okanagan</div>
            </AnimateOnScroll>
            {/* Stat 4 */}
            <AnimateOnScroll delay={0.24} className="text-center lg:px-8">
              <div className="text-5xl sm:text-6xl font-black text-white tracking-tight leading-none">
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
                href="/estimates"
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

      {/* ── Room Visualizer ───────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-14">
            <span className="section-label mb-4">Try Before You Buy</span>
            <h2 className="text-4xl sm:text-5xl font-black text-charcoal mt-4">
              See Any Floor In Your Room
            </h2>
            <p className="text-gray-500 text-xl mt-4 max-w-2xl mx-auto">
              Upload a photo of your room and preview any floor from our collection — right on your own walls and floors.
            </p>
          </AnimateOnScroll>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: feature highlights */}
            <AnimateOnScroll direction="right">
              <div className="space-y-6">
                {[
                  { icon: "📸", title: "Upload Your Room Photo", desc: "Take a photo of any room in your home — living room, kitchen, bedroom, hallway." },
                  { icon: "🎨", title: "Browse Hundreds of Floors", desc: "Swap through our full collection of hardwood, vinyl, carpet, tile, and laminate styles." },
                  { icon: "✅", title: "Choose With Confidence", desc: "See exactly how it looks before committing. No guessing, no surprises." },
                ].map((f) => (
                  <div key={f.title} className="flex gap-5 items-start">
                    <div className="text-4xl shrink-0">{f.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-charcoal">{f.title}</h3>
                      <p className="text-gray-500 text-lg mt-1">{f.desc}</p>
                    </div>
                  </div>
                ))}
                <div className="pt-4">
                  <Link
                    href="/room-visualizer"
                    className="inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
                  >
                    Open Room Visualizer
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Right: preview image */}
            <AnimateOnScroll delay={0.15}>
              <Link href="/room-visualizer" className="group relative block rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/assets/images/showroom-01.webp"
                  alt="Room visualizer — see flooring in your home"
                  width={700}
                  height={500}
                  className="object-cover w-full h-80 sm:h-[26rem] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1526]/80 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm border border-white/40 rounded-full w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.87V15.13a1 1 0 01-1.447.9L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-6 left-6">
                  <span className="inline-block bg-accent text-white text-sm font-bold px-4 py-2 rounded-full">
                    Try It Free — No Account Needed
                  </span>
                </div>
              </Link>
            </AnimateOnScroll>
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

      {/* ── Before / After ────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-14">
            <span className="section-label mb-4">The Transformation</span>
            <h2 className="text-4xl sm:text-5xl font-black text-charcoal mt-4">
              See the Difference<br />
              <span className="gradient-text">A New Floor Makes</span>
            </h2>
            <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">
              Drag the slider to compare before and after. This is the kind of transformation our team delivers every week.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="h-80 sm:h-96">
                <BeforeAfterSlider
                  before="/assets/images/flooring/stairs-before.jpg"
                  after="/assets/images/flooring/stairs-after.jpg"
                  beforeAlt="Stairs before — old carpet removed, bare wood"
                  afterAlt="Stairs after — new grey carpet installed"
                />
              </div>
              <div className="space-y-5">
                <h3 className="text-2xl sm:text-3xl font-black text-charcoal leading-tight">
                  From Dated to Stunning —<br />
                  <span className="text-primary">In Just Days</span>
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  Most of our installations are completed in 1–3 days. Our experienced crews handle everything — from removing the old floor to laying the last plank perfectly.
                </p>
                <ul className="space-y-2.5">
                  {[
                    "Old floor removal & disposal included",
                    "Subfloor prep & leveling",
                    "Clean installation with minimal disruption",
                    "Complete in 1–3 days for most homes",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-600 text-sm">
                      <CheckCircle2 size={16} className="text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Link href="/estimates" className="btn-primary text-sm">
                    Book Free Estimate <ArrowRight size={15} />
                  </Link>
                  <Link href="/flooring" className="inline-flex items-center gap-2 border border-gray-200 hover:border-primary text-charcoal hover:text-primary font-semibold px-5 py-3 rounded-xl text-sm transition-all">
                    Browse Flooring
                  </Link>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>


      {/* ── Video gallery ─────────────────────────────────────── */}
      <section className="py-24 bg-[#0d1526]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 text-accent text-sm font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimateOnScroll key={t.name} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-7 card-hover h-full flex flex-col shadow-sm border border-gray-100">
                  {/* Header: avatar + name + date */}
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-base shrink-0"
                      style={{ background: t.color }}
                    >
                      {t.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-charcoal text-base">{t.name}</div>
                      <div className="flex items-center gap-2 mt-0.5">
                        {/* Google G icon */}
                        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0" aria-hidden="true">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                        <span className="text-gray-400 text-sm">Google · {t.date}</span>
                      </div>
                    </div>
                  </div>
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={16} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  {/* Review text */}
                  <p className="text-gray-600 text-base leading-relaxed flex-1">
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
