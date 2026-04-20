import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { CheckCircle2, ArrowRight, Phone, DollarSign, Shield, Clock, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Flooring Financing Options — Kelowna",
  description:
    "Flexible financing options for flooring in Kelowna. Get the floors you love now and pay over time. Ask about our current financing programs at Kelowna Flooring Superstore.",
  alternates: { canonical: "https://www.kfssflooring.com/financing" },
};

const benefits = [
  {
    icon: DollarSign,
    title: "Low Monthly Payments",
    desc: "Break your project into affordable monthly payments that fit your budget without compromising on quality.",
  },
  {
    icon: Zap,
    title: "Quick Approval",
    desc: "Simple application process with fast decisions — so you can move forward with your renovation on your timeline.",
  },
  {
    icon: Shield,
    title: "No Hidden Fees",
    desc: "Transparent terms with no surprise costs. What we quote is what you pay.",
  },
  {
    icon: Clock,
    title: "Flexible Terms",
    desc: "Choose a repayment period that works for your situation — from short-term to extended financing options.",
  },
];

const steps = [
  {
    num: "01",
    title: "Get Your Free Estimate",
    desc: "We come to you, measure your space, and provide a detailed written quote for materials and installation.",
  },
  {
    num: "02",
    title: "Ask About Financing",
    desc: "When you're ready to move forward, ask our team about current financing options and terms available.",
  },
  {
    num: "03",
    title: "Apply In-Store",
    desc: "Complete a simple application in our showroom or over the phone. Most decisions are made quickly.",
  },
  {
    num: "04",
    title: "Get Your Floors",
    desc: "Once approved, we schedule installation and you get the floors you love — starting right away.",
  },
];

const faqs = [
  {
    q: "What credit score do I need to qualify?",
    a: "Financing is available to a wide range of credit profiles. We work with financing partners to find options that fit your situation. Ask our team for details.",
  },
  {
    q: "Is there a minimum project size?",
    a: "Financing is typically available for projects of $1,000 or more. Most flooring projects in Kelowna homes easily exceed this threshold.",
  },
  {
    q: "Can I finance both materials and installation?",
    a: "Yes — financing can cover the total project cost including materials, installation, and any additional services like old flooring removal.",
  },
  {
    q: "How long does the approval process take?",
    a: "Most applications receive a decision quickly — often same day. Our team will guide you through the process from start to finish.",
  },
];

export default function FinancingPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative pt-52 lg:pt-44 pb-28 overflow-hidden bg-[#0d1526]">
        <Image
          src="/assets/images/hero-walnut.webp"
          alt=""
          fill
          aria-hidden="true"
          priority
          className="object-cover object-[center_55%] opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1526]/96 via-[#0d1526]/75 to-[#0d1526]/40" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 text-accent text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
              Flexible Payments
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-white leading-tight">
              Get the Floors<br />
              <span className="text-accent">You Actually Want</span>
            </h1>
            <p className="text-white/60 text-base sm:text-lg mt-5 max-w-xl leading-relaxed">
              Don&apos;t let budget hold you back from beautiful floors. Our financing options let you invest in your home now and pay over time.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-8">
              <Link
                href="/estimates"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-xl text-base transition-all hover:shadow-2xl hover:shadow-accent/30 hover:-translate-y-0.5"
              >
                Get Free Estimate <ArrowRight size={16} />
              </Link>
              <a
                href="tel:2508607847"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/18 border border-white/25 text-white font-semibold px-7 py-4 rounded-xl text-base transition-all"
              >
                <Phone size={16} /> Ask About Financing
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Benefits ──────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-14">
            <span className="section-label mb-4">Why Finance?</span>
            <h2 className="text-2xl sm:text-4xl font-black text-charcoal mt-4">
              Invest in Your Home<br />
              <span className="gradient-text">On Your Terms</span>
            </h2>
            <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">
              Quality flooring adds real value to your home. Financing makes it accessible without compromising on what you want.
            </p>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <AnimateOnScroll key={b.title} delay={i * 0.1}>
                <div className="bg-light rounded-2xl p-7 border border-gray-100 h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <b.icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-charcoal text-lg mb-2">{b.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ──────────────────────────────────────── */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-14">
            <span className="section-label mb-4">How It Works</span>
            <h2 className="text-2xl sm:text-4xl font-black text-charcoal mt-4">
              Simple Process,<br />Beautiful Results
            </h2>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <AnimateOnScroll key={s.title} delay={i * 0.1}>
                <div className="relative bg-white rounded-2xl p-7 border border-gray-100 h-full">
                  <div className="text-6xl font-black text-primary/8 leading-none mb-4">{s.num}</div>
                  <h3 className="font-bold text-charcoal text-lg mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── What you can finance ──────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll direction="right">
              <span className="section-label mb-4">What&apos;s Covered</span>
              <h2 className="text-2xl sm:text-4xl font-black text-charcoal mt-4 leading-tight">
                Finance Your{" "}
                <span className="gradient-text">Entire Project</span>
              </h2>
              <p className="text-gray-500 text-lg mt-5 leading-relaxed">
                Our financing covers more than just the materials — get everything included in a single, straightforward payment plan.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Flooring materials — all types and price points",
                  "Professional installation by our experienced crews",
                  "Old flooring removal and disposal",
                  "Subfloor preparation and leveling",
                  "Stairs, transitions, and finishing details",
                  "Underpad and installation accessories",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-600 text-sm">
                    <CheckCircle2 size={17} className="text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-8">
                <Link href="/estimates" className="btn-primary text-sm">
                  Get Free Estimate <ArrowRight size={16} />
                </Link>
                <a
                  href="tel:2508607847"
                  className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-primary text-charcoal hover:text-primary font-semibold px-5 py-3 rounded-xl text-sm transition-all"
                >
                  <Phone size={15} /> (250) 860-7847
                </a>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll direction="left" delay={0.15}>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/assets/images/hero-kurang.webp"
                  alt="Beautiful vinyl plank flooring — financed at Kelowna Flooring Superstore"
                  fill
                  className="object-cover object-[center_45%]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1526]/70 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-white font-bold text-sm">Wildwood Kurang — Luxury Vinyl Plank</p>
                  <p className="text-white/55 text-xs mt-0.5">Available with financing — ask us today</p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className="py-24 bg-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-12">
            <span className="section-label mb-4">Common Questions</span>
            <h2 className="text-2xl sm:text-4xl font-black text-charcoal mt-4">Financing FAQ</h2>
          </AnimateOnScroll>
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <AnimateOnScroll key={i} delay={i * 0.07}>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <h3 className="font-bold text-charcoal mb-2">{item.q}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.a}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "repeating-linear-gradient(-45deg,#fff 0px,#fff 1px,transparent 1px,transparent 12px)" }} />
        <AnimateOnScroll className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
            Ready to Get Started?
          </h2>
          <p className="text-white/65 text-lg mt-4 leading-relaxed max-w-xl mx-auto">
            Book your free estimate today. We&apos;ll measure your space, show you options, and walk you through financing — no pressure, no obligation.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link
              href="/estimates"
              className="bg-accent hover:bg-accent-dark text-white font-bold px-9 py-4 rounded-xl text-base transition-all hover:shadow-2xl hover:shadow-accent/30 hover:-translate-y-0.5"
            >
              Book Free Estimate
            </Link>
            <a
              href="tel:2508607847"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/18 border border-white/25 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all"
            >
              <Phone size={17} /> (250) 860-7847
            </a>
          </div>
        </AnimateOnScroll>
      </section>
    </>
  );
}
