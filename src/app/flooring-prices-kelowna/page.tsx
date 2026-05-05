import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { ArrowRight, Phone, ChevronRight, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Flooring Prices Kelowna (2026 Price Guide)",
  description:
    "2026 Kelowna flooring prices by type — laminate, hardwood, carpet, vinyl plank, tile. Installed $/sqft ranges, what drives cost, how to compare quotes. Updated April 2026.",
  alternates: { canonical: "https://www.kelownaflooringsuperstore.com/flooring-prices-kelowna" },
  openGraph: {
    title: "Flooring Prices Kelowna — 2026 Price Guide",
    description: "Installed $/sqft ranges for every flooring type in Kelowna, updated April 2026.",
    images: [{ url: "/assets/images/showroom-08.webp", width: 1200, height: 630, alt: "Kelowna flooring prices 2026" }],
  },
};

interface PriceRow {
  type: string;
  slug: string;
  materialLow: number;
  materialHigh: number;
  installLow: number;
  installHigh: number;
  notes: string;
}

const prices: PriceRow[] = [
  {
    type: "Laminate",
    slug: "laminate",
    materialLow: 1.5,
    materialHigh: 4,
    installLow: 2.5,
    installHigh: 4,
    notes: "AC3 rated residential is entry-tier; AC4/AC5 premium lines cost more. Subfloor prep is usually minimal.",
  },
  {
    type: "Luxury Vinyl Plank (LVP)",
    slug: "vinyl-plank",
    materialLow: 2.5,
    materialHigh: 5.5,
    installLow: 2.5,
    installHigh: 4,
    notes: "Waterproof, click-lock installation. SPC rigid core is the current standard. Best for kitchens, bathrooms, basements.",
  },
  {
    type: "Engineered Hardwood",
    slug: "hardwood",
    materialLow: 4,
    materialHigh: 9,
    installLow: 4,
    installHigh: 7,
    notes: "Thicker wear layers (3mm+) allow future refinishing. Wider planks (7\"+) cost more but look premium.",
  },
  {
    type: "Solid Hardwood",
    slug: "hardwood",
    materialLow: 5,
    materialHigh: 12,
    installLow: 5,
    installHigh: 8,
    notes: "Nail-down install over plywood subfloor. Sand-and-refinish factory-finished vs site-finished changes total.",
  },
  {
    type: "Carpet",
    slug: "carpet",
    materialLow: 2,
    materialHigh: 6,
    installLow: 1.5,
    installHigh: 3,
    notes: "Underpad is required and priced separately ($0.75–$1.50/sqft). Polyester vs nylon face fibre is the big cost driver.",
  },
  {
    type: "Porcelain Tile",
    slug: "tile",
    materialLow: 3,
    materialHigh: 8,
    installLow: 6,
    installHigh: 12,
    notes: "Install is the expensive part — substrate prep, thinset, grout, sealer all add up. Large-format tile costs more to install.",
  },
  {
    type: "Ceramic Tile",
    slug: "tile",
    materialLow: 2,
    materialHigh: 6,
    installLow: 5,
    installHigh: 10,
    notes: "Softer than porcelain, easier to cut. Good for walls, backsplashes, lower-traffic floors.",
  },
  {
    type: "Linoleum Sheet",
    slug: "linoleum-sheet",
    materialLow: 3,
    materialHigh: 6,
    installLow: 2.5,
    installHigh: 4,
    notes: "Real linoleum (not vinyl) is eco-friendly and long-lasting. Heat-welded seams in commercial applications add cost.",
  },
  {
    type: "Area Rugs",
    slug: "area-rugs",
    materialLow: 3,
    materialHigh: 15,
    installLow: 0,
    installHigh: 0,
    notes: "Sold per rug, not per sqft. Custom-bound broadloom runs about $6–$10/sqft finished.",
  },
];

const drivers = [
  {
    title: "Subfloor condition",
    body: "A flat, dry subfloor is free money. A subfloor that needs leveling, repair, or moisture mitigation can add $2–$5/sqft.",
  },
  {
    title: "Old floor removal",
    body: "Pulling and disposing of existing flooring typically adds $1–$2.50/sqft. Glued-down tile or nailed hardwood costs more than floating laminate.",
  },
  {
    title: "Stairs, transitions, mouldings",
    body: "Stairs run $50–$100 per step installed. Reducers and T-moldings add roughly $12–$20 per linear foot. Quarter-round is cheap but adds up in older homes.",
  },
  {
    title: "Furniture + appliance moving",
    body: "Most Kelowna crews include furniture moving in-room; disassembly of beds or moving appliances with gas/water lines usually costs extra.",
  },
  {
    title: "Rush scheduling",
    body: "Standard lead time for in-stock flooring is 3–5 days. Rush installs within 48 hours are possible but carry a premium.",
  },
];

const roomEstimates = [
  { room: "Small bathroom (30 sqft)", laminate: "~$195–$330", lvp: "~$225–$360", tile: "~$540–$1,200" },
  { room: "Bedroom (150 sqft)", laminate: "~$600–$1,200", lvp: "~$750–$1,425", tile: "~$1,350–$3,000" },
  { room: "Living room (300 sqft)", laminate: "~$1,200–$2,400", lvp: "~$1,500–$2,850", tile: "~$2,700–$6,000" },
  { room: "Main floor (1,200 sqft)", laminate: "~$4,800–$9,600", lvp: "~$6,000–$11,400", tile: "~$10,800–$24,000" },
  { room: "Whole home (2,000 sqft mixed)", laminate: "~$8,000–$16,000", lvp: "~$10,000–$19,000", tile: "n/a" },
];

const faqs = [
  {
    q: "How much does flooring cost per square foot in Kelowna?",
    a: "Installed flooring in Kelowna ranges $4–$18+ per sqft in 2026 depending on type. Laminate is cheapest (~$4–7/sqft installed), solid hardwood and porcelain tile are the most expensive ($10–18/sqft installed). Luxury vinyl plank is the current best-value mid-market option at $5–9/sqft installed.",
  },
  {
    q: "Is hardwood or vinyl plank cheaper in Kelowna?",
    a: "Luxury vinyl plank is typically 40–60% cheaper than hardwood in Kelowna. Entry LVP lands around $5–6/sqft installed vs $9–12/sqft for entry engineered hardwood. LVP is also waterproof, which hardwood isn't.",
  },
  {
    q: "What's the cheapest flooring option in Kelowna?",
    a: "Basic laminate with a simple float installation over an existing flat subfloor is the cheapest: about $4–5/sqft installed. Carpet can be cheaper on material but underpad and installation add up quickly.",
  },
  {
    q: "How much does it cost to replace flooring in a 1,500 sqft Kelowna home?",
    a: "A typical 1,500 sqft main floor replacement in Kelowna runs $6,000–$13,500 for laminate, $7,500–$13,500 for luxury vinyl plank, $13,500–$22,500 for engineered hardwood. Add removal/prep where needed — usually $1,500–$3,000 for a full-home job.",
  },
  {
    q: "Do Kelowna flooring prices include underpad and transitions?",
    a: "Reputable Kelowna stores include everything in the quote: material, underpad, transitions, stair nosings, subfloor prep, removal and disposal, and installation. Always ask for a line-item quote before signing.",
  },
  {
    q: "Does financing change the total Kelowna flooring price?",
    a: "Financing splits the same total into monthly payments — not a markup. We don't change the project price based on payment method.",
  },
];

function fmt(n: number) { return n.toFixed(n % 1 === 0 ? 0 : 2); }

export default function FlooringPricesKelowna() {
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
    headline: "Flooring Prices Kelowna 2026 Guide",
    datePublished: "2026-04-20",
    dateModified: "2026-04-20",
    author: { "@type": "Organization", name: "Kelowna Flooring Superstore" },
    publisher: {
      "@type": "Organization",
      name: "Kelowna Flooring Superstore",
      logo: { "@type": "ImageObject", url: "https://www.kelownaflooringsuperstore.com/logo.webp" },
    },
    image: "https://www.kelownaflooringsuperstore.com/assets/images/showroom-08.webp",
    mainEntityOfPage: "https://www.kelownaflooringsuperstore.com/flooring-prices-kelowna",
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.kelownaflooringsuperstore.com" },
      { "@type": "ListItem", position: 2, name: "Flooring Prices Kelowna", item: "https://www.kelownaflooringsuperstore.com/flooring-prices-kelowna" },
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
            <span className="text-white/70">Flooring Prices Kelowna</span>
          </nav>
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 text-accent text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
              Updated April 2026
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              Flooring Prices<br /><span className="text-accent">in Kelowna</span>
            </h1>
            <p className="text-white/65 text-lg sm:text-xl mt-5 max-w-3xl leading-relaxed">
              Real installed $/sqft ranges for every flooring type — what drives the price, what a full-home job costs, and how to read a Kelowna flooring quote.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll>
            <h2 className="text-2xl sm:text-3xl font-black text-charcoal mb-6">Installed Prices at a Glance</h2>
            <p className="text-gray-500 mb-6 text-sm">
              All prices CAD. Ranges reflect typical Kelowna retail + installation as of April 2026 and include standard residential subfloor prep on a flat, dry surface.
            </p>
          </AnimateOnScroll>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
            <table className="w-full min-w-[680px] text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="text-left py-3 px-4 font-bold">Flooring Type</th>
                  <th className="text-right py-3 px-4 font-bold">Material /sqft</th>
                  <th className="text-right py-3 px-4 font-bold">Install /sqft</th>
                  <th className="text-right py-3 px-4 font-bold">Installed Total /sqft</th>
                </tr>
              </thead>
              <tbody>
                {prices.map((p) => (
                  <tr key={p.type} className="border-t border-gray-100 hover:bg-light/60">
                    <td className="py-3 px-4">
                      <Link href={`/flooring/${p.slug}`} className="font-bold text-charcoal hover:text-primary">{p.type}</Link>
                      <p className="text-gray-500 text-xs mt-1 leading-relaxed">{p.notes}</p>
                    </td>
                    <td className="text-right py-3 px-4 text-gray-600 whitespace-nowrap">${fmt(p.materialLow)}–${fmt(p.materialHigh)}</td>
                    <td className="text-right py-3 px-4 text-gray-600 whitespace-nowrap">
                      {p.installLow === 0 ? <span className="text-gray-400">—</span> : <>${fmt(p.installLow)}–${fmt(p.installHigh)}</>}
                    </td>
                    <td className="text-right py-3 px-4 font-black text-charcoal whitespace-nowrap">
                      {p.installLow === 0
                        ? <>${fmt(p.materialLow)}–${fmt(p.materialHigh)}</>
                        : <>${fmt(p.materialLow + p.installLow)}–${fmt(p.materialHigh + p.installHigh)}</>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-5 flex items-start gap-2 text-gray-500 text-xs">
            <Info size={14} className="mt-0.5 shrink-0" />
            <span>Kelowna pricing is typically 5–12% lower than Vancouver-metro quotes on the same product thanks to lower retail rents and regional installer rates.</span>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-20 bg-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-black text-charcoal">What a Full Kelowna Flooring Job Looks Like</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Rough installed totals for common Kelowna rooms and whole homes. These are planning numbers, not quotes — book a free in-home estimate for your exact price.
            </p>
          </AnimateOnScroll>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
            <table className="w-full min-w-[680px] text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="text-left py-3 px-4 font-bold">Room / Area</th>
                  <th className="text-right py-3 px-4 font-bold">Laminate</th>
                  <th className="text-right py-3 px-4 font-bold">Luxury Vinyl</th>
                  <th className="text-right py-3 px-4 font-bold">Tile</th>
                </tr>
              </thead>
              <tbody>
                {roomEstimates.map((r) => (
                  <tr key={r.room} className="border-t border-gray-100">
                    <td className="py-3 px-4 font-bold text-charcoal">{r.room}</td>
                    <td className="text-right py-3 px-4 text-gray-600">{r.laminate}</td>
                    <td className="text-right py-3 px-4 text-gray-600">{r.lvp}</td>
                    <td className="text-right py-3 px-4 text-gray-600">{r.tile}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-10">
            <h2 className="text-2xl sm:text-4xl font-black text-charcoal">What Drives Your Quote Up or Down</h2>
          </AnimateOnScroll>
          <div className="space-y-4">
            {drivers.map((d) => (
              <div key={d.title} className="bg-light rounded-2xl p-6 border border-gray-100">
                <h3 className="font-black text-charcoal text-lg mb-2">{d.title}</h3>
                <p className="text-gray-600 leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-20 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-10">
            <span className="section-label mb-4">FAQ</span>
            <h2 className="text-2xl sm:text-4xl font-black text-charcoal mt-4">Kelowna Flooring Price Questions</h2>
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
          <h2 className="text-2xl sm:text-4xl font-black text-white">Get Your Exact Kelowna Flooring Price</h2>
          <p className="text-white/60 text-lg mt-4">Free in-home estimate with line-item quote. No pressure, no obligation.</p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <Link href="/estimates" className="bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-xl text-base transition-all">
              Book Free Estimate <ArrowRight size={16} className="inline ml-1" />
            </Link>
            <Link href="/calculator" className="bg-white/10 hover:bg-white/18 border border-white/25 text-white font-semibold px-7 py-4 rounded-xl text-base transition-all">
              Try the Cost Calculator
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
