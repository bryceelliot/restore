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
      <section className="relative pt-52 lg:pt-44 pb-28 overflow-hidden bg-[#0d1526]">
        <Image
          src="/assets/images/hero-showroom.webp"
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
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-white leading-tight">
              Kelowna&apos;s Flooring<br />
              <span className="text-accent">Experts</span>
            </h1>
            <p className="text-white/60 text-base sm:text-lg mt-5 max-w-2xl leading-relaxed">
              For over 30 years, we&apos;ve been helping Kelowna homeowners and
              businesses find the perfect flooring — with honest advice, expert
              installation, and a showroom unlike any other in the Okanagan.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-8">
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
      <section className="py-12 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll direction="right">
              <span className="section-label mb-4">Who We Are</span>
              <h2 className="text-2xl sm:text-4xl font-black text-charcoal mt-4 leading-tight">
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
      <section className="py-12 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-14">
            <span className="section-label mb-4">Our Values</span>
            <h2 className="text-2xl sm:text-4xl font-black text-charcoal mt-4">
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

      {/* ── Team ──────────────────────────────────────────────── */}
      <section className="py-12 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-14">
            <span className="section-label mb-4">Meet the Team</span>
            <h2 className="text-2xl sm:text-4xl font-black text-charcoal mt-4">
              The People Behind<br />
              <span className="gradient-text">Your New Floor</span>
            </h2>
            <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">
              Our team brings decades of combined flooring experience — and a genuine passion for helping Kelowna homeowners find the perfect floor.
            </p>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                name: "Shaun",
                role: "Showroom Specialist",
                bio: "Shaun has been helping Kelowna homeowners navigate flooring choices for years. Known for his patience, product knowledge, and ability to match the perfect floor to any lifestyle and budget.",
                photo: "/assets/images/team-shaun.webp",
              },
              {
                name: "Selina",
                role: "Design Consultant",
                bio: "Selina brings a designer's eye to every consultation. She specialises in helping customers visualise how different flooring choices will look in their space — and loves the transformation reveal.",
                photo: "/assets/images/team-selina.webp",
              },
              {
                name: "Our Install Crew",
                role: "Professional Installers",
                bio: "Our installation teams are experienced, meticulous, and treat every home like their own. From subfloor prep to final trim, they take pride in flawless results every time.",
                photo: null,
                initial: "IC",
                color: "bg-[#243566]",
              },
            ].map((member, i) => (
              <AnimateOnScroll key={member.name} delay={i * 0.1}>
                <div className="bg-light rounded-2xl p-7 border border-gray-100 flex flex-col items-center text-center h-full">
                  {member.photo ? (
                    <div className="relative w-24 h-24 rounded-2xl overflow-hidden mb-5 shadow-lg">
                      <Image
                        src={member.photo}
                        alt={`${member.name} — ${member.role}`}
                        fill
                        className="object-cover"
                        sizes="96px"
                      />
                    </div>
                  ) : (
                    <div className={`w-16 h-16 rounded-2xl ${member.color} text-white font-black text-xl flex items-center justify-center mb-5 shadow-lg`}>
                      {member.initial}
                    </div>
                  )}
                  <h3 className="font-black text-charcoal text-lg">{member.name}</h3>
                  <p className="text-accent text-xs font-bold tracking-wider uppercase mt-1 mb-4">{member.role}</p>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{member.bio}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll className="text-center mt-10">
            <p className="text-gray-600 text-sm">
              Come meet the team in person at our showroom on McCurdy Place — we&apos;d love to help you find your perfect floor.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Meet the Team ─────────────────────────────────────── */}
      <section className="py-12 sm:py-24 bg-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-12">
            <span className="section-label mb-4">Our Team</span>
            <h2 className="text-2xl sm:text-4xl font-black text-charcoal mt-4">
              Meet the Team Behind Your Floor
            </h2>
            <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">
              A family-run Kelowna crew — showroom staff, installers, and our shop dog.
            </p>
          </AnimateOnScroll>

          {/* Full group photo — aspect matched to the natural image so no heads are cropped */}
          <AnimateOnScroll>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-100">
              <Image
                src="/assets/images/team-photo.webp"
                alt="Kelowna Flooring Superstore team — showroom staff, installers, and shop dog in front of the Flooring Superstores mural"
                width={1448}
                height={1086}
                className="w-full h-auto"
                priority={false}
              />
            </div>
          </AnimateOnScroll>

          {/* Individual team portraits */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
            {[
              { src: "/assets/images/team-shaun.webp",       name: "Shaun",   role: "Showroom Specialist" },
              { src: "/assets/images/team-selina.webp",      name: "Selina",  role: "Showroom Specialist" },
              { src: "/assets/images/team-dog.webp",         name: "Our Shop Dog", role: "Chief Greeter" },
            ].map((m, i) => (
              <AnimateOnScroll key={m.name} delay={i * 0.08}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100">
                  <div className="relative aspect-square bg-light">
                    <Image
                      src={m.src}
                      alt={`${m.name} — ${m.role} at Kelowna Flooring Superstore`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <p className="font-black text-charcoal text-sm">{m.name}</p>
                    <p className="text-accent text-[10px] font-bold uppercase tracking-widest mt-1">{m.role}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Location & Hours ──────────────────────────────────── */}
      <section className="py-12 sm:py-24 bg-[#0d1526]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll direction="right">
              <h2 className="text-2xl sm:text-4xl font-black text-white mb-8">Find Us in Kelowna</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Showroom Address</div>
                    <div className="text-white/55 text-sm mt-1">Unit 16, 830 McCurdy Place<br />Kelowna, BC V1X 8C8</div>
                    <a href="https://www.google.com/maps/search/?api=1&query=Kelowna+Flooring+Superstore+Unit+16+830+McCurdy+Place+Kelowna+BC" target="_blank" rel="noopener noreferrer" className="text-accent text-sm font-semibold mt-1 block hover:underline">
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
      <section className="py-10 sm:py-20 bg-primary">
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
