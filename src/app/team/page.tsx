import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { ArrowRight, Phone, Award, Hammer, HeartHandshake } from "lucide-react";

export const metadata: Metadata = {
  title: "Meet the Team — Kelowna Flooring Superstore",
  description:
    "Meet the Kelowna Flooring Superstore team — showroom staff who guide your flooring choices and installers named in our Google reviews for exceptional work.",
  alternates: { canonical: "https://www.kelownaflooringsuperstore.com/team" },
  openGraph: {
    title: "Meet the Team — Kelowna Flooring Superstore",
    description: "Showroom staff + installers named in 4.9★ Google reviews — the people who make your floor happen.",
    images: [{ url: "/assets/images/showroom-01.webp", width: 1200, height: 630, alt: "Kelowna Flooring Superstore team" }],
  },
};

const showroom = [
  {
    name: "Shaun",
    role: "Showroom Specialist",
    initials: "SH",
    color: "#1B2A52",
    bio: "Shaun has helped hundreds of Kelowna homeowners choose the right floor. Deep product knowledge, patient with every question, and the reason reviewers say the showroom experience feels easy.",
  },
  {
    name: "Selina",
    role: "Showroom Specialist",
    initials: "SE",
    color: "#E8423C",
    bio: "Selina coordinates timelines, samples, and install scheduling. Reviewers repeatedly call out her responsiveness — she's the glue between your quote and a finished floor.",
  },
];

const installers = [
  {
    name: "Cory",
    role: "Lead Installer — Carpet & Stairs",
    initials: "CO",
    color: "#243566",
    bio: "Cory is our go-to for carpet installs and stairs — the work featured in our Before & After showroom transformations. Tidy, punctual, and a craftsman.",
  },
  {
    name: "Jessie",
    role: "Lead Installer — Hardwood & LVP",
    initials: "JE",
    color: "#2a7a5a",
    bio: "Jessie leads on hardwood and luxury vinyl plank jobs. Named repeatedly in our 5-star reviews for workmanship that goes above and beyond.",
  },
  {
    name: "Clarke",
    role: "Installer — Hardwood & LVP",
    initials: "CL",
    color: "#7a3a2a",
    bio: "Clarke works alongside Jessie on our bigger residential jobs. Reviewers mention the two of them by name when the floor turns out exactly how they pictured it.",
  },
];

export default function TeamPage() {
  return (
    <>
      <section className="relative pt-52 lg:pt-44 pb-20 overflow-hidden bg-[#0d1526]">
        <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 text-accent text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
              The People Behind Your Floor
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-white leading-tight">
              Meet the<br /><span className="text-accent">Team</span>
            </h1>
            <p className="text-white/65 text-lg sm:text-xl mt-5 max-w-2xl leading-relaxed">
              Our showroom staff help you choose. Our installers make it real. These are the people Kelowna homeowners name in their Google reviews.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-10 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-12">
            <span className="section-label mb-4">Showroom</span>
            <h2 className="text-2xl sm:text-4xl font-black text-charcoal mt-4">Who You&apos;ll Meet in Store</h2>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {showroom.map((p, i) => (
              <AnimateOnScroll key={p.name} delay={i * 0.1}>
                <div className="bg-light rounded-2xl p-8 border border-gray-100 h-full">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center text-white font-black text-xl shrink-0" style={{ background: p.color }}>
                      {p.initials}
                    </div>
                    <div>
                      <h3 className="font-black text-charcoal text-xl leading-tight">{p.name}</h3>
                      <p className="text-accent text-xs font-bold tracking-widest uppercase mt-1">{p.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{p.bio}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-12">
            <span className="section-label mb-4">Installation Crew</span>
            <h2 className="text-2xl sm:text-4xl font-black text-charcoal mt-4">
              The Craftsmen Reviewers <span className="gradient-text">Name by Name</span>
            </h2>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {installers.map((p, i) => (
              <AnimateOnScroll key={p.name} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm h-full">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center text-white font-black text-lg shrink-0" style={{ background: p.color }}>
                      {p.initials}
                    </div>
                    <div>
                      <h3 className="font-black text-charcoal text-lg leading-tight">{p.name}</h3>
                      <p className="text-accent text-[11px] font-bold tracking-widest uppercase mt-0.5">{p.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{p.bio}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: Award, title: "30+ Years", body: "Combined installation experience on the crew." },
              { icon: Hammer, title: "Same-Crew Install", body: "The team that measures is the team that installs." },
              { icon: HeartHandshake, title: "Named in Reviews", body: "Our installers show up by name in our 4.9★ Google reviews." },
            ].map((s) => (
              <div key={s.title} className="text-center p-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <s.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-black text-charcoal text-lg">{s.title}</h3>
                <p className="text-gray-500 text-sm mt-2">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-4xl font-black text-white">Come Meet Us</h2>
          <p className="text-white/60 text-lg mt-4">Drop by the showroom on McCurdy Place — or book a free estimate and we&apos;ll come to you.</p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <Link href="/estimates" className="bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-xl text-base transition-all">
              Book Free Estimate <ArrowRight size={16} className="inline ml-1" />
            </Link>
            <a href="tel:2508607847" className="flex items-center gap-2 bg-white/10 hover:bg-white/18 border border-white/25 text-white font-semibold px-7 py-4 rounded-xl text-base transition-all">
              <Phone size={17} /> (250) 860-7847
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
