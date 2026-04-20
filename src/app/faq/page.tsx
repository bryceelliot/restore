import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { ChevronDown, Phone, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions — Flooring Kelowna",
  description:
    "Answers to the most common questions about flooring installation, costs, timelines, and products at Kelowna Flooring Superstore. Get expert answers before you buy.",
  alternates: { canonical: "https://www.kfssflooring.com/faq" },
};

const faqCategories = [
  {
    category: "Getting Started",
    questions: [
      {
        q: "How do I get started with a flooring project?",
        a: "The easiest way is to book a free in-home estimate. One of our flooring specialists will visit your home, measure your space, show you samples, and provide a written quote — with no obligation. You can also visit our showroom at Unit 16, 830 McCurdy Place in Kelowna to browse our full sample selection first.",
      },
      {
        q: "Do you offer free estimates?",
        a: "Yes — all estimates are completely free. We'll come to your home at a time that's convenient for you, measure every room, and provide a written quote covering materials and installation. There's no pressure and no obligation.",
      },
      {
        q: "How long does the estimate process take?",
        a: "Most in-home estimates take 30–60 minutes depending on the size and complexity of your project. We'll measure, show you samples, answer your questions, and have a quote to you within 1–2 business days.",
      },
      {
        q: "Do I need to move my furniture before installation?",
        a: "Our installation crews will move standard furniture (sofas, beds, dressers, dining tables) as part of the installation. We ask that you move any breakables, electronics, plants, and items from closets and under beds before we arrive. We cannot move pianos, pool tables, large appliances, or fish tanks.",
      },
    ],
  },
  {
    category: "Flooring Products",
    questions: [
      {
        q: "What types of flooring do you carry?",
        a: "We carry a full range including laminate, hardwood, engineered hardwood, carpet, luxury vinyl plank (LVP), linoleum sheet, ceramic and porcelain tile, commercial flooring, and area rugs. All styles are on display in our Kelowna showroom — choose your sample and your order typically arrives within 3–5 business days.",
      },
      {
        q: "What's the best flooring for a home with pets?",
        a: "For pet owners, we typically recommend luxury vinyl plank (LVP) with a wear layer of 20 mil or higher. It's 100% waterproof (great for accidents), scratch-resistant, and easy to clean. Tile is also an excellent option. We generally advise against light-colored carpet and solid hardwood if you have dogs with active nails.",
      },
      {
        q: "What's the best flooring for a basement?",
        a: "Luxury vinyl plank is our top recommendation for Kelowna basements — it's waterproof, handles moisture vapor from concrete, and looks great. Carpet with a closed-cell foam underpad is a comfortable and budget-friendly option for dry basements. We recommend against solid hardwood and standard laminate below grade.",
      },
      {
        q: "What's the difference between vinyl plank and laminate?",
        a: "Vinyl plank (LVP) has a 100% plastic/PVC core — making it completely waterproof. Laminate has a wood-based HDF core that can swell if exposed to moisture. Both mimic wood beautifully, but LVP is the safer choice for any area where moisture is a concern. Laminate is slightly harder underfoot and sometimes preferred for main-floor living areas.",
      },
      {
        q: "Is hardwood flooring right for the Okanagan climate?",
        a: "Yes, but it requires some care. The Okanagan's dry climate means indoor humidity can drop significantly in winter, which causes wood to contract and create gaps. We recommend maintaining 35–55% relative humidity in your home and using a humidifier in winter. Engineered hardwood handles humidity swings better than solid hardwood due to its multi-layer construction.",
      },
    ],
  },
  {
    category: "Installation",
    questions: [
      {
        q: "How long does flooring installation take?",
        a: "Most residential projects take 1–3 days. A single room (200–400 sq ft) is often completed in a day. Whole-home projects covering 1,500–2,500 sq ft typically take 2–3 days. We'll give you a specific timeline in your quote based on your project scope.",
      },
      {
        q: "Do I need to leave my home during installation?",
        a: "You don't have to leave, but it can be more comfortable to do so — particularly if you have young children or pets, or if the noise and dust bothers you. Our crews work efficiently and will keep the workspace as clean as possible. For larger projects, some homeowners arrange to stay elsewhere for 1–2 nights.",
      },
      {
        q: "Do you remove old flooring?",
        a: "Yes. Tear-out and disposal of old flooring is an add-on service we offer. We'll remove your existing carpet, laminate, vinyl, or other flooring and dispose of it properly. This is priced per square foot and will be included in your estimate if requested.",
      },
      {
        q: "What subfloor preparation do you do?",
        a: "Proper subfloor prep is essential for a long-lasting floor. Our installation includes leveling minor imperfections, securing squeaky areas, and ensuring the subfloor meets manufacturer specs. If significant leveling or subfloor replacement is required, we'll identify this during the estimate and include it in the quote.",
      },
      {
        q: "Do you install flooring in commercial spaces?",
        a: "Absolutely. We have extensive experience with commercial flooring projects including offices, retail spaces, restaurants, strata lobbies, and more. We carry commercial-grade products rated for heavy traffic and can work around your business hours to minimize disruption.",
      },
    ],
  },
  {
    category: "Pricing & Payment",
    questions: [
      {
        q: "How much does flooring installation cost in Kelowna?",
        a: "Installation costs typically range from $2–$4 per square foot for most flooring types in the Kelowna area. Material costs vary widely — from $1.50/sq ft for budget laminate to $20+/sq ft for premium hardwood or natural stone. We'll provide a firm, written quote with no hidden fees after your free estimate.",
      },
      {
        q: "Do you offer financing?",
        a: "Yes — we offer financing options to make your flooring project more manageable. Ask about our current financing programs when you visit the showroom or request your estimate. We want to help you get the floors you actually want, not just what fits today's budget.",
      },
      {
        q: "Are there any hidden costs I should know about?",
        a: "We believe in transparent pricing. Our quotes include materials, standard installation, and basic subfloor prep. Additional costs that may apply depending on your project: old flooring removal, significant subfloor leveling or replacement, stair installation, custom transitions, and furniture moving beyond standard pieces. All of these will be identified during the estimate — no surprises on installation day.",
      },
    ],
  },
  {
    category: "After Installation",
    questions: [
      {
        q: "How do I care for my new floors?",
        a: "Care varies by product. For hardwood: dry or damp mop with hardwood-specific cleaner; avoid steam mops and wet mopping. For LVP: sweep and damp mop; avoid abrasive cleaners. For carpet: vacuum regularly; address spills immediately by blotting (never rubbing). For tile: sweep and mop with pH-neutral cleaner; reseal grout annually. We'll provide specific care instructions for your chosen product.",
      },
      {
        q: "What warranty do your products come with?",
        a: "Warranty terms vary by manufacturer and product line, ranging from 10-year residential warranties on budget products to lifetime residential warranties on premium LVP and hardwood. Installation comes with our workmanship guarantee. We'll walk you through the specific warranty on any product you purchase.",
      },
      {
        q: "Can hardwood floors be refinished?",
        a: "Solid hardwood can typically be sanded and refinished 4–6 times over its lifetime, depending on thickness. Engineered hardwood can usually be refinished once (depending on veneer thickness). Refinishing restores the surface, removes scratches, and lets you change the stain color. We can recommend local refinishing professionals if needed.",
      },
    ],
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqCategories.flatMap((cat) =>
    cat.questions.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    }))
  ),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative pt-52 lg:pt-44 pb-20 overflow-hidden bg-[#0d1526]">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "repeating-linear-gradient(-45deg,#fff 0,#fff 1px,transparent 1px,transparent 14px)" }} />
        <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 text-accent text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
              Expert Answers
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-white leading-tight">
              Frequently Asked<br />
              <span className="text-accent">Questions</span>
            </h1>
            <p className="text-white/60 text-lg mt-6 max-w-xl leading-relaxed">
              Everything you need to know about flooring products, installation, costs, and care — answered by our Kelowna team.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── FAQ accordion ─────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {faqCategories.map((cat, ci) => (
            <AnimateOnScroll key={cat.category} delay={ci * 0.05} className="mb-12">
              <h2 className="text-xl font-black text-primary mb-5 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-primary text-white text-xs font-black flex items-center justify-center">
                  {(ci + 1).toString().padStart(2, "0")}
                </span>
                {cat.category}
              </h2>
              <div className="space-y-3">
                {cat.questions.map((item, qi) => (
                  <details
                    key={qi}
                    className="group bg-light rounded-2xl border border-gray-100 overflow-hidden"
                  >
                    <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none select-none hover:bg-gray-50 transition-colors">
                      <span className="font-bold text-charcoal text-base">{item.q}</span>
                      <ChevronDown
                        size={18}
                        className="text-gray-400 shrink-0 transition-transform duration-200 group-open:rotate-180"
                      />
                    </summary>
                    <div className="px-6 pb-5">
                      <p className="text-gray-600 leading-relaxed text-sm pt-1 border-t border-gray-100">
                        {item.a}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* ── Still have questions ──────────────────────────────── */}
      <section className="py-16 bg-light border-t border-gray-100">
        <AnimateOnScroll className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-black text-charcoal">Still Have Questions?</h2>
          <p className="text-gray-500 mt-3 text-lg">
            Our team is happy to help — whether by phone, email, or in person at our showroom.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="tel:2508607847"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-7 py-4 rounded-xl text-base transition-all"
            >
              <Phone size={17} /> Call (250) 860-7847
            </a>
            <Link
              href="/estimates"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-7 py-4 rounded-xl text-base transition-all"
            >
              Book Free Estimate <ArrowRight size={16} />
            </Link>
          </div>
        </AnimateOnScroll>
      </section>
    </>
  );
}
