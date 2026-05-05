import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { serviceCombos, getServiceComboBySlug } from "@/lib/service-combos";
import { ArrowRight, Phone, CheckCircle2, ChevronRight, MapPin, DollarSign, Clock } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return serviceCombos.map((c) => ({ slug: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = getServiceComboBySlug(slug);
  if (!c) return {};
  return {
    title: `${c.service} ${c.city}`,
    description: c.metaDescription,
    alternates: { canonical: `https://www.kelownaflooringsuperstore.com/${c.slug}` },
    openGraph: {
      title: `${c.service} in ${c.city} — Kelowna Flooring Superstore`,
      description: c.metaDescription,
      images: [{ url: c.heroImage, width: 1200, height: 630, alt: `${c.service} in ${c.city}` }],
    },
  };
}

export default async function ServiceComboPage({ params }: Props) {
  const { slug } = await params;
  const c = getServiceComboBySlug(slug);
  if (!c) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: c.service,
    areaServed: { "@type": "City", name: c.city },
    provider: {
      "@type": "LocalBusiness",
      name: "Kelowna Flooring Superstore",
      telephone: "+12508607847",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Unit 16, 830 McCurdy Place",
        addressLocality: "Kelowna",
        addressRegion: "BC",
        postalCode: "V1X 8C8",
        addressCountry: "CA",
      },
    },
    name: `${c.service} in ${c.city}`,
    description: c.metaDescription,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "CAD",
      availability: "https://schema.org/InStock",
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.kelownaflooringsuperstore.com" },
      { "@type": "ListItem", position: 2, name: `${c.service} ${c.city}`, item: `https://www.kelownaflooringsuperstore.com/${c.slug}` },
    ],
  };

  const related = serviceCombos.filter((x) => x.slug !== c.slug && (x.city === c.city || x.service === c.service)).slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <section className="relative pt-52 lg:pt-44 pb-20 overflow-hidden bg-[#0d1526]">
        <Image src={c.heroImage} alt={`${c.service} in ${c.city}`} fill priority className="object-cover opacity-25" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1526]/96 via-[#0d1526]/75 to-[#0d1526]/40" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <nav className="flex items-center gap-2 text-white/40 text-xs sm:text-sm mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-white/70">{c.service} {c.city}</span>
          </nav>
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 text-accent text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
              <MapPin size={12} /> {c.city}
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              {c.service}<br /><span className="text-accent">in {c.city}</span>
            </h1>
            <p className="text-white/65 text-lg sm:text-xl mt-5 max-w-3xl leading-relaxed">{c.intro}</p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-8">
              <Link href="/estimates" className="btn-primary text-sm">
                Free {c.city} Estimate <ArrowRight size={16} />
              </Link>
              <a href="tel:2508607847" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-5 py-3 rounded-xl text-sm transition-all">
                <Phone size={15} /> (250) 860-7847
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-[1fr_380px] gap-10">
          <AnimateOnScroll direction="right">
            <h2 className="text-2xl sm:text-3xl font-black text-charcoal mb-6">What&apos;s Included</h2>
            <ul className="space-y-3 mb-10">
              {c.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-gray-600 leading-relaxed">
                  <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" /> {b}
                </li>
              ))}
            </ul>

            <div className="bg-light rounded-2xl p-6 border-l-4 border-accent mb-10">
              <p className="text-[10px] font-bold tracking-widest uppercase text-accent mb-2">Typical Project</p>
              <p className="text-charcoal leading-relaxed">{c.typicalProject}</p>
            </div>

            {c.flooringTypeSlug && (
              <Link
                href={`/flooring/${c.flooringTypeSlug}`}
                className="inline-flex items-center gap-2 text-primary hover:text-accent font-bold"
              >
                Browse all {c.serviceShort} products <ArrowRight size={15} />
              </Link>
            )}
          </AnimateOnScroll>

          <AnimateOnScroll direction="left" delay={0.12}>
            <div className="bg-primary rounded-2xl p-7 text-white sticky top-24">
              <div className="flex items-center gap-2 mb-5">
                <DollarSign size={18} className="text-accent" />
                <p className="text-[10px] font-bold tracking-widest uppercase text-accent">Price Range</p>
              </div>
              <p className="text-white font-bold leading-relaxed">{c.priceRange}</p>

              <div className="flex items-center gap-2 mt-6 mb-3">
                <Clock size={18} className="text-accent" />
                <p className="text-[10px] font-bold tracking-widest uppercase text-accent">Typical Timeline</p>
              </div>
              <p className="text-white font-bold leading-relaxed">{c.timeline}</p>

              <div className="mt-7 pt-6 border-t border-white/15">
                <Link href="/estimates" className="block bg-accent hover:bg-accent-dark text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-all text-center">
                  Book Free Estimate <ArrowRight size={14} className="inline ml-1" />
                </Link>
                <a href="tel:2508607847" className="block mt-3 text-center bg-white/10 hover:bg-white/18 border border-white/25 text-white font-semibold px-6 py-3.5 rounded-xl text-sm transition-all">
                  (250) 860-7847
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {c.faqs.length > 0 && (
        <section className="py-10 sm:py-16 bg-light">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <AnimateOnScroll className="text-center mb-10">
              <span className="section-label mb-4">FAQ</span>
              <h2 className="text-2xl sm:text-4xl font-black text-charcoal mt-4">
                {c.service} in {c.city} — Common Questions
              </h2>
            </AnimateOnScroll>
            <div className="space-y-3">
              {c.faqs.map((f) => (
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
      )}

      {related.length > 0 && (
        <section className="py-10 sm:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-xl sm:text-2xl font-black text-charcoal mb-6">Related Services</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link key={r.slug} href={`/${r.slug}`} className="group bg-light rounded-2xl p-6 border border-gray-100 hover:border-primary transition-all">
                  <h3 className="font-black text-charcoal leading-tight group-hover:text-primary transition-colors">
                    {r.service} — {r.city}
                  </h3>
                  <span className="inline-flex items-center gap-1 mt-4 text-accent text-sm font-bold group-hover:translate-x-1 transition-transform">
                    Learn more <ArrowRight size={13} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-10 sm:py-16 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-4xl font-black text-white">Ready to book your {c.city} project?</h2>
          <p className="text-white/60 text-lg mt-4">Free in-home estimate. Same-crew install. Craftsmanship guarantee.</p>
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
