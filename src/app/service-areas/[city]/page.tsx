import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { serviceAreas, getServiceAreaBySlug } from "@/lib/service-areas";
import { flooringTypes } from "@/lib/flooring-data";
import { ArrowRight, Phone, MapPin, CheckCircle2, ChevronRight, Star } from "lucide-react";

interface Props {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return serviceAreas.map((a) => ({ city: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const area = getServiceAreaBySlug(city);
  if (!area) return {};
  const title = `Flooring ${area.name} — Installation & In-Stock Showroom`;
  const description = `${area.name} flooring installation from Kelowna Flooring Superstore. Laminate, hardwood, carpet, vinyl plank & tile — in stock and installed across ${area.name}. Free estimates. Call (250) 860-7847.`;
  return {
    title,
    description,
    alternates: { canonical: `https://www.kelownaflooringsuperstore.com/service-areas/${area.slug}` },
    openGraph: {
      title,
      description,
      images: [{ url: area.heroImage, width: 1200, height: 630, alt: `Flooring installation in ${area.name}` }],
    },
  };
}

export default async function ServiceAreaPage({ params }: Props) {
  const { city } = await params;
  const area = getServiceAreaBySlug(city);
  if (!area) notFound();

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.kelownaflooringsuperstore.com" },
      { "@type": "ListItem", position: 2, name: "Service Areas", item: "https://www.kelownaflooringsuperstore.com/service-areas" },
      { "@type": "ListItem", position: 3, name: area.name, item: `https://www.kelownaflooringsuperstore.com/service-areas/${area.slug}` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: area.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative pt-52 lg:pt-44 pb-24 overflow-hidden bg-[#0d1526]">
        <Image
          src={area.heroImage}
          alt={`Flooring installation in ${area.name}, BC`}
          fill
          priority
          className="object-cover opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1526]/96 via-[#0d1526]/75 to-[#0d1526]/40" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <nav className="flex items-center gap-2 text-white/40 text-xs sm:text-sm mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/service-areas" className="hover:text-white transition-colors">Service Areas</Link>
            <ChevronRight size={12} />
            <span className="text-white/70">{area.name}</span>
          </nav>
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 text-accent text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
              <MapPin size={12} /> {area.region}
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-white leading-tight">
              Flooring in<br />
              <span className="text-accent">{area.name}</span>
            </h1>
            <p className="text-white/65 text-lg sm:text-xl mt-5 max-w-2xl leading-relaxed">{area.tagline}</p>
            <p className="text-white/45 text-sm mt-3"><span className="font-bold text-white/70">Travel:</span> {area.drivingTime}</p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-8">
              <Link href="/estimates" className="btn-primary text-sm">
                Free {area.name} Estimate <ArrowRight size={16} />
              </Link>
              <a href="tel:2508607847" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-5 py-3 rounded-xl text-sm transition-all">
                <Phone size={15} /> (250) 860-7847
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Intro + neighborhoods */}
      <section className="py-10 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12">
          <AnimateOnScroll direction="right">
            <span className="section-label mb-4">Local Flooring</span>
            <h2 className="text-2xl sm:text-4xl font-black text-charcoal mt-4 leading-tight">
              Serving {area.name} <span className="gradient-text">Every Week</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mt-5 text-lg">{area.intro}</p>
            <ul className="mt-7 space-y-3">
              {area.whyLocal.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <CheckCircle2 size={17} className="text-primary shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm leading-relaxed">{r}</span>
                </li>
              ))}
            </ul>
          </AnimateOnScroll>
          <AnimateOnScroll direction="left" delay={0.15}>
            <div className="bg-light rounded-2xl p-7 border border-gray-100">
              <h3 className="font-black text-charcoal text-xl mb-5">{area.name} Neighbourhoods We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {area.neighborhoods.map((n) => (
                  <span key={n} className="inline-flex items-center gap-1.5 bg-white border border-gray-200 px-3.5 py-2 rounded-full text-sm text-charcoal font-medium">
                    <MapPin size={12} className="text-accent" /> {n}
                  </span>
                ))}
              </div>
              <div className="mt-7 pt-6 border-t border-gray-200">
                <Link href="/estimates" className="btn-primary text-sm w-full justify-center">
                  Book Free Estimate <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Flooring types available here */}
      <section className="py-10 sm:py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-12">
            <span className="section-label mb-4">What We Install</span>
            <h2 className="text-2xl sm:text-4xl font-black text-charcoal mt-4">
              Every Flooring Type — Delivered to {area.name}
            </h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {flooringTypes.map((f) => (
              <Link key={f.slug} href={`/flooring/${f.slug}`} className="group bg-white rounded-2xl p-5 border border-gray-100 hover:border-accent transition-all card-hover text-center">
                <div className="font-bold text-charcoal text-sm">{f.name}</div>
                <div className="text-accent text-xs mt-1 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Explore <ArrowRight size={11} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {area.testimonial && (
        <section className="py-10 sm:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <AnimateOnScroll>
              <div className="bg-light rounded-2xl p-8 sm:p-10 border border-gray-100 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg leading-relaxed italic">
                  &ldquo;{area.testimonial.quote}&rdquo;
                </p>
                <p className="font-bold text-charcoal mt-5">— {area.testimonial.name}</p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      )}

      {/* FAQs */}
      {area.faqs.length > 0 && (
        <section className="py-10 sm:py-20 bg-light">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <AnimateOnScroll className="text-center mb-10">
              <span className="section-label mb-4">FAQ</span>
              <h2 className="text-2xl sm:text-4xl font-black text-charcoal mt-4">
                {area.name} Flooring Questions
              </h2>
            </AnimateOnScroll>
            <div className="space-y-3">
              {area.faqs.map((faq) => (
                <details key={faq.q} className="group bg-white rounded-2xl border border-gray-200 overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-bold text-charcoal hover:text-primary transition-colors">
                    <span>{faq.q}</span>
                    <span className="text-gray-400 group-open:rotate-45 transition-transform duration-200 shrink-0 text-2xl leading-none">+</span>
                  </summary>
                  <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-200 pt-4">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-10 sm:py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            Ready for Your {area.name} Install?
          </h2>
          <p className="text-white/60 text-lg mt-4">Free in-home estimates. No pressure, no obligation.</p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <Link href="/estimates" className="bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-xl text-base transition-all">
              Book Free Estimate
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
