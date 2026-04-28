import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import {
  ShieldCheck,
  Wrench,
  Clock,
  MapPin,
  Truck,
  HandCoins,
  Star,
  CheckCircle2,
  ArrowRight,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Why Choose Kelowna Flooring Superstore — Local, Stocked, Guaranteed",
  description:
    "Family-run, 30+ years on McCurdy Place, in-stock inventory, same-crew installs, and a written craftsmanship guarantee. Here's why Kelowna keeps choosing us.",
  alternates: { canonical: "https://www.kfssflooring.com/why-us" },
  openGraph: {
    title: "Why Kelowna Chooses Us for Flooring",
    description:
      "Local family business. In-stock inventory. Same crew that quotes installs. Craftsmanship guarantee in writing.",
    images: [
      {
        url: "/assets/images/hardwood-showroom-full.webp",
        width: 1200,
        height: 630,
        alt: "Kelowna Flooring Superstore showroom",
      },
    ],
  },
};

const reasons = [
  {
    icon: MapPin,
    title: "Locally owned, 30+ years on McCurdy Place",
    body: "We're not a national chain branch. The same family has run this showroom since 1994 — you'll meet owners on the floor, not a regional manager visiting from out of town.",
  },
  {
    icon: Truck,
    title: "In-stock inventory — no 6-week backorders",
    body: "Most floors leave our warehouse in 3–5 days. We stock the styles Okanagan homes actually buy, instead of forcing you to wait on a Vancouver-bound shipping container.",
  },
  {
    icon: Wrench,
    title: "Same crew quotes and installs",
    body: "The team that measured your home is the team that installs it. No hand-off to a sub-contractor you've never met. Reviews repeatedly call out Jessie and Clarke by name.",
  },
  {
    icon: ShieldCheck,
    title: "Written craftsmanship guarantee",
    body: "Every install is covered by our craftsmanship guarantee in writing. If a seam lifts or a transition shifts because of how we installed it, we come back and fix it. No fine-print runaround.",
  },
  {
    icon: Clock,
    title: "Realistic install timelines",
    body: "Single rooms typically wrap in a day. Whole-home replacements run 2–4 days. We give you a written schedule before we start so you can plan around the dust and noise.",
  },
  {
    icon: HandCoins,
    title: "Free, no-pressure in-home estimates",
    body: "We measure, show samples in your light, and email a written quote within 1–2 business days. No deposit to get a number. No high-pressure close.",
  },
];

const expectations = [
  {
    title: "Day 0 — Free in-home measurement",
    body: "30–60 minutes. We measure every room, look at your subfloor, and bring samples that fit your space and budget.",
  },
  {
    title: "Day 1–2 — Written quote in your inbox",
    body: "Itemised: materials, underlay, removal, install, taxes. No hidden line items show up the day of install.",
  },
  {
    title: "Day of approval — Order placed",
    body: "Most orders arrive at our McCurdy warehouse in 3–5 business days. Special-order or custom-cut items take longer; we tell you up front.",
  },
  {
    title: "Install day — Same crew, on time",
    body: "Crews arrive on the schedule we set. They protect adjacent floors, move standard furniture, prep the subfloor, install, and clean up.",
  },
  {
    title: "Walkthrough — You sign off",
    body: "Before we leave we walk every room with you. If something isn't right, we fix it. The craftsmanship guarantee is in writing.",
  },
];

const stats = [
  { number: "30+", label: "Years in Kelowna" },
  { number: "3–5", label: "Days from order to delivery" },
  { number: "100s", label: "Of in-stock samples" },
  { number: "5★", label: "Average Google rating" },
];

const whyUsJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  mainEntity: {
    "@type": "LocalBusiness",
    name: "Kelowna Flooring Superstore",
    url: "https://www.kfssflooring.com/why-us",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Unit 16, 830 McCurdy Place",
      addressLocality: "Kelowna",
      addressRegion: "BC",
      postalCode: "V1X 8C8",
      addressCountry: "CA",
    },
    telephone: "+1-250-860-7847",
  },
};

export default function WhyUsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(whyUsJsonLd) }}
      />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative pt-52 lg:pt-44 pb-20 overflow-hidden bg-[#0d1526]">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg,#fff 0,#fff 1px,transparent 1px,transparent 14px)",
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <span className="inline-block bg-accent/15 text-accent px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-6">
            Why Choose Us
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
            The reasons Kelowna keeps coming back.
          </h1>
          <p className="text-gray-300 text-base sm:text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            Local family ownership, in-stock inventory, same-crew installs, and
            a written guarantee. Here&apos;s exactly what that looks like in
            practice.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              href="/estimates"
              className="bg-accent hover:bg-accent/90 text-white font-bold px-8 py-4 rounded-xl inline-flex items-center gap-2 shadow-lg transition-transform hover:scale-[1.02]"
            >
              Book a Free Estimate <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:2508607847"
              className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl inline-flex items-center gap-2 backdrop-blur transition-colors"
            >
              <Phone className="w-4 h-4" /> (250) 860-7847
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats strip ───────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl sm:text-4xl font-black text-charcoal">
                {s.number}
              </div>
              <div className="text-gray-500 text-xs sm:text-sm font-bold tracking-wider uppercase mt-2">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Six reasons ───────────────────────────────────────── */}
      <section className="py-24 bg-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-14">
            <span className="section-label">What sets us apart</span>
            <h2 className="text-2xl sm:text-4xl font-black text-charcoal mt-4">
              Six reasons we&apos;re Kelowna&apos;s flooring shop.
            </h2>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reasons.map((r, i) => (
              <AnimateOnScroll key={r.title} delay={i * 0.06}>
                <div className="bg-white rounded-2xl p-7 border border-gray-100 h-full hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-5">
                    <r.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-black text-charcoal text-lg mb-3">
                    {r.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {r.body}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── What to expect timeline ───────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-14">
            <span className="section-label">What to expect</span>
            <h2 className="text-2xl sm:text-4xl font-black text-charcoal mt-4">
              From first call to floor-day walkthrough.
            </h2>
            <p className="text-gray-500 text-base mt-4 max-w-xl mx-auto">
              No surprises, no upsells, no day-of fine print.
            </p>
          </AnimateOnScroll>
          <ol className="space-y-5">
            {expectations.map((step, i) => (
              <AnimateOnScroll key={step.title} delay={i * 0.05}>
                <li className="flex gap-5 bg-light rounded-2xl p-6 border border-gray-100">
                  <div className="shrink-0 w-10 h-10 bg-charcoal text-white font-black rounded-xl flex items-center justify-center">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-black text-charcoal text-base">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mt-1.5">
                      {step.body}
                    </p>
                  </div>
                </li>
              </AnimateOnScroll>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Guarantee callout ─────────────────────────────────── */}
      <section className="py-24 bg-[#0d1526] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Star className="w-10 h-10 text-accent mx-auto mb-6" />
          <h2 className="text-2xl sm:text-4xl font-black leading-tight">
            Our guarantee, in plain English.
          </h2>
          <p className="text-gray-300 text-base sm:text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            If a floor we installed lifts, separates, gaps, or fails because of
            our installation — we come back and fix it. No deductible. No
            run-around. That&apos;s in writing on every quote.
          </p>
          <div className="mt-10 grid sm:grid-cols-3 gap-4 text-left">
            {[
              "Manufacturer warranty included",
              "Craftsmanship guarantee in writing",
              "Same crew responds to any callback",
            ].map((line) => (
              <div
                key={line}
                className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-gray-200">{line}</span>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/warranty"
              className="inline-flex items-center gap-2 text-accent font-bold hover:underline"
            >
              Read the full warranty terms <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="py-20 bg-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-4xl font-black text-charcoal">
            Ready to see what your floors could look like?
          </h2>
          <p className="text-gray-500 text-base mt-4 max-w-xl mx-auto">
            Book a free in-home estimate, or stop by the showroom on McCurdy
            Place — we&apos;ll have the kettle on.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/estimates"
              className="bg-accent hover:bg-accent/90 text-white font-bold px-8 py-4 rounded-xl inline-flex items-center gap-2 shadow-lg"
            >
              Free Estimate <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white border border-gray-200 text-charcoal font-bold px-8 py-4 rounded-xl inline-flex items-center gap-2 hover:border-accent/40"
            >
              Visit the Showroom
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
