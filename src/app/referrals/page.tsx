import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { ArrowRight, Phone, Gift, CheckCircle2, Users, DollarSign } from "lucide-react";

export const metadata: Metadata = {
  title: "Refer a Friend — Kelowna Flooring Superstore",
  description:
    "Refer a friend to Kelowna Flooring Superstore and earn a $200 credit on your next project. Simple, transparent referral program for past customers.",
  alternates: { canonical: "https://www.kelownaflooringsuperstore.com/referrals" },
  openGraph: {
    title: "Refer a Friend — Kelowna Flooring Superstore",
    description: "Earn $200 for every flooring project you refer.",
    images: [{ url: "/assets/images/showroom-01.webp", width: 1200, height: 630, alt: "Kelowna Flooring Superstore referral program" }],
  },
};

const steps = [
  { num: "1", title: "Tell us who", body: "Call (250) 860-7847 or text us with your friend's name and a phone number — make sure they know you're sending us their way." },
  { num: "2", title: "They book + install", body: "Your friend books a free estimate and completes a flooring project of $1,500 or more." },
  { num: "3", title: "You earn $200", body: "Once their project is paid in full, we credit you $200 — applied to your next install or sent as a cheque." },
];

const faqs = [
  { q: "Is there a limit to how many friends I can refer?", a: "Nope. Refer one friend or refer ten — each completed project earns you $200." },
  { q: "Does the project have to be a certain size?", a: "Yes — the referred project must be $1,500 or more (material + install)." },
  { q: "How do I get my reward?", a: "Apply it to your next flooring purchase, or we can mail you a cheque." },
  { q: "What if my friend already knew about you?", a: "We honour referrals when the friend tells us your name during their estimate booking. Just make sure they mention you." },
  { q: "Are commercial projects eligible?", a: "Yes — commercial referrals (offices, rentals, strata buildings) are eligible at the same $200 rate." },
];

export default function ReferralsPage() {
  return (
    <>
      <section className="relative pt-52 lg:pt-44 pb-20 overflow-hidden bg-[#0d1526]">
        <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 text-accent text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
              <Gift size={12} /> Refer a Friend
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              Earn <span className="text-accent">$200</span><br />
              for every friend you refer.
            </h1>
            <p className="text-white/65 text-lg sm:text-xl mt-5 max-w-2xl leading-relaxed">
              Most of our work in Kelowna comes from word-of-mouth. We say thanks the right way — $200 for every completed referral.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-8">
              <a href="tel:2508607847" className="bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-xl text-base transition-all inline-flex items-center gap-2">
                <Phone size={17} /> Call (250) 860-7847
              </a>
              <a href="sms:2508607847" className="bg-white/10 hover:bg-white/18 border border-white/25 text-white font-semibold px-7 py-4 rounded-xl text-base transition-all">
                Text Us a Referral
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-10 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-black text-charcoal">How It Works</h2>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div key={s.num} className="bg-light rounded-2xl p-7 border border-gray-100">
                <div className="text-6xl font-black text-primary/8 leading-none mb-4">{s.num}</div>
                <h3 className="font-black text-charcoal text-lg mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16 bg-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { icon: DollarSign, title: "$200 each", body: "Per completed referral, every time, no cap." },
              { icon: Users, title: "Unlimited", body: "Refer ten friends, earn ten $200 credits." },
              { icon: CheckCircle2, title: "Honoured", body: "We track every referral and credit you immediately on project completion." },
            ].map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
                <s.icon size={28} className="mx-auto text-accent mb-3" />
                <h3 className="font-black text-charcoal mb-1">{s.title}</h3>
                <p className="text-gray-500 text-sm">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-10">
            <span className="section-label">FAQ</span>
            <h2 className="text-2xl sm:text-3xl font-black text-charcoal mt-3">Common Questions</h2>
          </AnimateOnScroll>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group bg-light rounded-2xl border border-gray-200 overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-bold text-charcoal hover:text-primary transition-colors">
                  <span>{f.q}</span>
                  <span className="text-gray-400 group-open:rotate-45 transition-transform duration-200 shrink-0 text-2xl leading-none">+</span>
                </summary>
                <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-200 pt-4">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-4xl font-black text-white">Have someone in mind?</h2>
          <p className="text-white/60 text-lg mt-4">Send their name and number — we&apos;ll take it from here.</p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <a href="tel:2508607847" className="bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-xl text-base transition-all inline-flex items-center gap-2">
              <Phone size={17} /> Call Us
            </a>
            <a href="sms:2508607847" className="bg-white/10 hover:bg-white/18 border border-white/25 text-white font-semibold px-7 py-4 rounded-xl text-base transition-all">
              Text Their Info
            </a>
            <Link href="/contact" className="bg-white/10 hover:bg-white/18 border border-white/25 text-white font-semibold px-7 py-4 rounded-xl text-base transition-all inline-flex items-center gap-2">
              Email <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
