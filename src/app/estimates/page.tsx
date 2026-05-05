import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import EstimateForm from "@/components/EstimateForm";
import { CheckCircle2, Phone, Clock, Ruler, CalendarCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Free Flooring Estimate Kelowna",
  description:
    "Get a free flooring estimate from Kelowna Flooring Superstore. We measure your space and provide a detailed quote — no obligation. Call (250) 860-7847.",
  alternates: { canonical: "https://www.kelownaflooringsuperstore.com/estimates" },
};

const steps = [
  { num: "01", icon: Phone, title: "Contact Us", desc: "Call or fill out our form to schedule your free estimate at a time that works for you." },
  { num: "02", icon: Ruler, title: "We Measure", desc: "Our expert visits your home or project site and measures every room precisely." },
  { num: "03", icon: Clock, title: "Get Your Quote", desc: "Receive a detailed, transparent quote including materials & installation — usually within 24 hours." },
  { num: "04", icon: CalendarCheck, title: "You Decide", desc: "No pressure. Take your time. When you're ready, we schedule your installation." },
];

export default function EstimatesPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative pt-52 lg:pt-44 pb-28 overflow-hidden bg-[#0d1526]">
        <Image
          src="/assets/images/hero-kurang.webp"
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
              No Obligation · 100% Free
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-white leading-tight">
              Free In-Home<br />
              <span className="text-accent">Estimate</span>
            </h1>
            <p className="text-white/60 text-base sm:text-lg mt-5 max-w-xl leading-relaxed">
              We come to you, measure every room, and provide a detailed transparent
              quote — completely free and with no pressure or obligation.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-8">
              <a href="#estimate-form" className="btn-primary text-sm">
                Request Estimate
              </a>
              <a href="tel:2508607847" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-5 py-3 rounded-xl text-sm transition-all">
                <Phone size={15} /> (250) 860-7847
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── How it works ──────────────────────────────────────── */}
      <section className="py-10 sm:py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "repeating-linear-gradient(-45deg,#fff 0px,#fff 1px,transparent 1px,transparent 12px)" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-white">How It Works</h2>
            <p className="text-white/55 mt-2">Simple, fast, and always free.</p>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <AnimateOnScroll key={s.title} delay={i * 0.1}>
                <div className="relative bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-7 h-full">
                  <div className="text-5xl font-black text-white/10 leading-none mb-4">{s.num}</div>
                  <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center mb-4">
                    <s.icon size={22} className="text-white" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{s.desc}</p>
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-white/20" />
                  )}
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Form + benefits ───────────────────────────────────── */}
      <section id="estimate-form" className="py-12 sm:py-24 bg-light scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-start">
          <AnimateOnScroll direction="right">
            <span className="section-label mb-4">Get Started</span>
            <h2 className="text-2xl sm:text-4xl font-black text-charcoal leading-tight mt-4 mb-5">
              Request Your Free Estimate
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Fill out the form and one of our flooring specialists will contact you to
              schedule a convenient time to visit your home or project site.
            </p>
            <div className="space-y-3 mb-8">
              {[
                "Free — no cost, no obligation, ever",
                "We come to you at a time that suits you",
                "Accurate room measurements by our experts",
                "Detailed quote including materials & installation",
                "Residential & commercial projects welcome",
                "Serving Kelowna & the entire Central Okanagan",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-primary shrink-0" />
                  <span className="text-gray-600 text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Prefer to call */}
            <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <p className="text-sm font-semibold text-charcoal mb-1">Prefer to call?</p>
              <a href="tel:2508607847" className="text-primary font-black text-2xl hover:text-accent transition-colors block">
                (250) 860-7847
              </a>
              <p className="text-gray-600 text-xs mt-1">Mon–Fri 9–5 · Wed 9–2 · Sat 10–2</p>
            </div>

            {/* Photo teaser */}
            <div className="mt-6 relative h-48 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/assets/images/hero-showroom.webp"
                alt="Beautiful hardwood flooring installed by Kelowna Flooring Superstore"
                fill
                className="object-cover object-[center_55%]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1526]/70 to-transparent" />
              <div className="absolute bottom-4 left-5">
                <p className="text-white font-bold text-sm">Walnut Natural · Engineered Hardwood</p>
                <p className="text-white/55 text-xs">Installed by our team in Kelowna</p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="left" delay={0.15}>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 sticky top-28">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center shrink-0">
                  <CalendarCheck size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-black text-charcoal text-lg leading-none">Book Your Estimate</h3>
                  <p className="text-gray-600 text-xs mt-0.5">Usually scheduled within 2–3 business days</p>
                </div>
              </div>
              <EstimateForm />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="py-10 sm:py-16 bg-[#0d1526]">
        <AnimateOnScroll className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-black text-white">Any Questions Before You Book?</h2>
          <p className="text-white/55 mt-3">Our team is happy to help — call or send us a message.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-7">
            <a href="tel:2508607847" className="flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all">
              <Phone size={16} /> (250) 860-7847
            </a>
            <Link href="/contact" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-xl text-sm transition-all">
              Send a Message
            </Link>
          </div>
        </AnimateOnScroll>
      </section>
    </>
  );
}
