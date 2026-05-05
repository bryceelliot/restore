import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { ArrowRight, Phone, CheckCircle2, Star, ChevronRight, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Best Flooring Store in Kelowna (2026 Guide)",
  description:
    "Honest comparison of Kelowna's top flooring stores in 2026 — pricing, selection, installation, reviews. Independent breakdown to help you choose the right shop for your home.",
  alternates: { canonical: "https://www.kelownaflooringsuperstore.com/best-flooring-kelowna" },
  openGraph: {
    title: "Best Flooring Store in Kelowna — 2026 Comparison Guide",
    description: "Independent comparison of Kelowna flooring stores. Pricing, selection, installation, reviews.",
    images: [{ url: "/assets/images/showroom-01.webp", width: 1200, height: 630, alt: "Best flooring stores in Kelowna" }],
  },
};

const shops = [
  {
    name: "Kelowna Flooring Superstore",
    slug: "us",
    rating: "4.9",
    reviewCount: "150+",
    strength: "Best-value in-stock selection with named-installer reputation.",
    bestFor: "Homeowners who want to browse real samples, skip 6-week backorders, and know which installer is walking into their home.",
    pricing: "Competitive mid-market on most types; laminate + LVP often below big-box.",
    installs: "Same-crew install (Cory, Jessie, Clarke named repeatedly in 5-star reviews).",
    inStock: "Large — laminate, LVP, carpet, hardwood, tile, rugs — most ship 3–5 days.",
    notes: "Only Kelowna-based flooring store with a full craftsmanship guarantee + manufacturer warranties.",
    link: "/",
    linkLabel: "Visit Our Showroom",
    ours: true,
  },
  {
    name: "End of the Roll Kelowna",
    slug: "end-of-the-roll",
    rating: "4.5",
    reviewCount: "300+",
    strength: "Large national chain with big carpet inventory.",
    bestFor: "Shoppers who prioritize a very large carpet-only roll inventory.",
    pricing: "Aggressive carpet pricing; hardwood/LVP tends to be mid-market.",
    installs: "Subcontracted install crews vary by job.",
    inStock: "Carpet-heavy inventory; hardwood/LVP selection smaller.",
    notes: "Part of a national chain — pricing and policies set at head office.",
  },
  {
    name: "Nufloors Kelowna",
    slug: "nufloors",
    rating: "4.6",
    reviewCount: "120+",
    strength: "Long-standing local retailer with broad product mix.",
    bestFor: "Homeowners looking for a traditional retail experience.",
    pricing: "Mid to premium pricing across categories.",
    installs: "In-house + contract installers.",
    inStock: "Moderate — larger special-order catalog than in-stock.",
    notes: "Buying group member — access to multiple brand catalogs.",
  },
  {
    name: "Carpet One Kelowna",
    slug: "carpet-one",
    rating: "4.4",
    reviewCount: "80+",
    strength: "Buying-group reach gives access to exclusive lines.",
    bestFor: "Shoppers wanting premium/exclusive brand lines.",
    pricing: "Premium on exclusive lines; competitive on mainstream.",
    installs: "Certified contractor network.",
    inStock: "Smaller in-stock, larger special-order catalog.",
    notes: "Strong warranty programs through the Carpet One network.",
  },
  {
    name: "Home Depot / Rona / Big Box",
    slug: "big-box",
    rating: "4.0",
    reviewCount: "varies",
    strength: "Immediate pickup for small DIY jobs.",
    bestFor: "DIY homeowners doing small rooms or patch jobs themselves.",
    pricing: "Sharp prices on entry-tier products; mid-market otherwise.",
    installs: "Third-party install services; experience varies widely.",
    inStock: "Entry-tier products well stocked; mid/premium selection thin.",
    notes: "No local team to call when something goes wrong; warranty claims go through manufacturer.",
  },
];

const criteria = [
  {
    title: "In-Stock Selection",
    body: "How many flooring samples do they physically carry, and how fast can they deliver? Kelowna Flooring Superstore ships most in-stock product in 3–5 days; national chains often quote 4–6 weeks on anything special-order.",
  },
  {
    title: "Installation Quality",
    body: "Who actually walks into your home? We use the same in-house crew — Cory, Jessie, Clarke — named in our 5-star reviews. Big-box stores subcontract, which means a different crew every job.",
  },
  {
    title: "Post-Install Support",
    body: "If a plank lifts 11 months after install, who picks up the phone? A locally owned store answers. A national chain routes you to corporate.",
  },
  {
    title: "Price Transparency",
    body: "Flooring quotes should include everything — material, install, subfloor prep, removal, transitions. Line-item quotes are a green flag; opaque quotes are not.",
  },
  {
    title: "Local Reviews",
    body: "Google reviews from real Kelowna customers matter more than national franchise averages. Check review recency and whether installers are named.",
  },
];

const faqs = [
  {
    q: "What is the best flooring store in Kelowna?",
    a: "Kelowna Flooring Superstore is the highest-rated locally owned flooring store in Kelowna (4.9★ from 150+ Google reviews). We carry laminate, hardwood, carpet, luxury vinyl plank, tile, linoleum, and area rugs — all in-stock with same-crew installation. Other well-regarded local options include End of the Roll (carpet-heavy), Nufloors, and Carpet One.",
  },
  {
    q: "How much does flooring cost in Kelowna?",
    a: "As of 2026, typical installed pricing in Kelowna runs: laminate $4–7/sqft, luxury vinyl plank $5–9/sqft, engineered hardwood $8–14/sqft, solid hardwood $10–18/sqft, carpet $4–8/sqft, porcelain tile $9–16/sqft installed. See our Kelowna flooring price guide for detailed breakdowns.",
  },
  {
    q: "Who installs flooring in Kelowna?",
    a: "Locally owned stores like Kelowna Flooring Superstore use in-house installation crews with named craftsmen. Big-box retailers typically subcontract to rotating third-party installers. We recommend asking the store who specifically will install your floor and whether the same crew that measured will be the one doing the work.",
  },
  {
    q: "What's the best flooring for Kelowna's climate?",
    a: "Kelowna's dry summers and cold winters make engineered hardwood, luxury vinyl plank, and porcelain tile ideal choices. Solid hardwood is beautiful but requires humidity control. LVP is 100% waterproof — best for basements, bathrooms, and homes near the lake.",
  },
  {
    q: "How long does flooring installation take in Kelowna?",
    a: "Most single-room installs finish in one day. A full-home floor replacement in a typical 1,800–2,400 sqft Kelowna home takes 2–4 days depending on subfloor prep and the type of flooring. Tile jobs take longer (grout cure time) — plan 3–5 days.",
  },
  {
    q: "Do Kelowna flooring stores offer financing?",
    a: "Yes — Kelowna Flooring Superstore offers flexible monthly-payment plans. Most locally owned stores offer some form of financing; ask up front about terms, rates, and whether materials + installation + removal are all covered.",
  },
];

export default function BestFlooringKelowna() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Flooring Store in Kelowna — 2026 Comparison Guide",
    datePublished: "2026-04-20",
    dateModified: "2026-04-20",
    author: { "@type": "Organization", name: "Kelowna Flooring Superstore" },
    publisher: {
      "@type": "Organization",
      name: "Kelowna Flooring Superstore",
      logo: { "@type": "ImageObject", url: "https://www.kelownaflooringsuperstore.com/logo.webp" },
    },
    image: "https://www.kelownaflooringsuperstore.com/assets/images/showroom-01.webp",
    mainEntityOfPage: "https://www.kelownaflooringsuperstore.com/best-flooring-kelowna",
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.kelownaflooringsuperstore.com" },
      { "@type": "ListItem", position: 2, name: "Best Flooring Kelowna", item: "https://www.kelownaflooringsuperstore.com/best-flooring-kelowna" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <section className="relative pt-52 lg:pt-44 pb-20 overflow-hidden bg-[#0d1526]">
        <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <nav className="flex items-center gap-2 text-white/40 text-xs sm:text-sm mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-white/70">Best Flooring Kelowna</span>
          </nav>
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 text-accent text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
              2026 Guide
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              Best Flooring Store<br /><span className="text-accent">in Kelowna</span>
            </h1>
            <p className="text-white/65 text-lg sm:text-xl mt-5 max-w-3xl leading-relaxed">
              An honest 2026 comparison of Kelowna&apos;s flooring stores — pricing, selection, installation, reviews. Yes, we&apos;re one of them. We&apos;ll tell you when another shop is a better fit for your project.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-10 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll>
            <h2 className="text-2xl sm:text-3xl font-black text-charcoal mb-4">TL;DR — the short answer</h2>
            <div className="bg-light rounded-2xl p-7 border border-gray-100 text-gray-700 leading-relaxed space-y-4">
              <p>
                <strong className="text-charcoal">Kelowna Flooring Superstore</strong> is the highest-rated locally owned flooring store in Kelowna, with a 4.9★ average across 150+ Google reviews. We&apos;re the best pick for homeowners who want to see samples in person, get the same crew installing that measured the floor, and skip the 4–6 week backorder waits.
              </p>
              <p>
                <strong className="text-charcoal">When you might prefer someone else:</strong> If you&apos;re doing a DIY small patch job with no installation, big-box stores are convenient for pickup. If you&apos;re only shopping for carpet on a very tight budget, End of the Roll is competitive. For exclusive premium brand lines, Carpet One has buying-group access.
              </p>
              <p className="text-gray-500 text-sm">
                Independent comparison — reviews sourced from public Google listings as of 2026.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-10 sm:py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-10">
            <span className="section-label mb-4">The Comparison</span>
            <h2 className="text-2xl sm:text-4xl font-black text-charcoal mt-4">Kelowna Flooring Stores at a Glance</h2>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-5">
            {shops.map((s) => (
              <div
                key={s.name}
                className={`rounded-2xl p-7 border-2 ${s.ours ? "bg-primary text-white border-primary shadow-2xl" : "bg-white border-gray-200"}`}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className={`font-black text-xl ${s.ours ? "text-white" : "text-charcoal"}`}>{s.name}</h3>
                    <div className={`flex items-center gap-2 mt-2 text-sm ${s.ours ? "text-white/85" : "text-gray-500"}`}>
                      <Star size={14} className="fill-amber-400 text-amber-400" />
                      <span className="font-bold">{s.rating}</span>
                      <span>· {s.reviewCount} Google reviews</span>
                    </div>
                  </div>
                  {s.ours && (
                    <span className="shrink-0 inline-flex items-center gap-1 bg-accent text-white text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full">
                      Our Pick
                    </span>
                  )}
                </div>
                <p className={`text-sm mb-4 ${s.ours ? "text-white/90" : "text-gray-600"}`}>
                  <strong className={s.ours ? "text-white" : "text-charcoal"}>Strength: </strong>{s.strength}
                </p>
                <dl className={`text-sm grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 ${s.ours ? "text-white/80" : "text-gray-500"}`}>
                  <dt className={`font-bold ${s.ours ? "text-white" : "text-charcoal"}`}>Best for</dt><dd>{s.bestFor}</dd>
                  <dt className={`font-bold ${s.ours ? "text-white" : "text-charcoal"}`}>Pricing</dt><dd>{s.pricing}</dd>
                  <dt className={`font-bold ${s.ours ? "text-white" : "text-charcoal"}`}>Install</dt><dd>{s.installs}</dd>
                  <dt className={`font-bold ${s.ours ? "text-white" : "text-charcoal"}`}>In-stock</dt><dd>{s.inStock}</dd>
                  <dt className={`font-bold ${s.ours ? "text-white" : "text-charcoal"}`}>Notes</dt><dd>{s.notes}</dd>
                </dl>
                {s.link && (
                  <Link href={s.link} className="inline-flex items-center gap-2 mt-5 bg-accent hover:bg-accent-dark text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-all">
                    {s.linkLabel} <ArrowRight size={14} />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-10">
            <h2 className="text-2xl sm:text-4xl font-black text-charcoal">What to Look for in a Kelowna Flooring Store</h2>
          </AnimateOnScroll>
          <div className="space-y-5">
            {criteria.map((c, i) => (
              <AnimateOnScroll key={c.title} delay={i * 0.05}>
                <div className="bg-light rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-black text-charcoal text-lg mb-2 flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-primary" /> {c.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{c.body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-20 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-10">
            <span className="section-label mb-4">FAQ</span>
            <h2 className="text-2xl sm:text-4xl font-black text-charcoal mt-4">Quick Answers</h2>
          </AnimateOnScroll>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group bg-white rounded-2xl border border-gray-200 overflow-hidden">
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
          <h2 className="text-2xl sm:text-4xl font-black text-white">Come see for yourself.</h2>
          <p className="text-white/60 text-lg mt-4">
            Unit 16, 830 McCurdy Place, Kelowna. Open 6 days a week. Free estimates across the Okanagan.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <Link href="/estimates" className="bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-xl text-base transition-all">
              Book Free Estimate <ArrowRight size={16} className="inline ml-1" />
            </Link>
            <a href="tel:2508607847" className="flex items-center gap-2 bg-white/10 hover:bg-white/18 border border-white/25 text-white font-semibold px-7 py-4 rounded-xl text-base transition-all">
              <Phone size={17} /> (250) 860-7847
            </a>
            <Link href="/flooring" className="flex items-center gap-2 bg-white/10 hover:bg-white/18 border border-white/25 text-white font-semibold px-7 py-4 rounded-xl text-base transition-all">
              <MapPin size={17} /> Browse Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
