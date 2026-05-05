import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { servicePages, getServicePageBySlug } from "@/lib/service-pages";
import { ArrowRight, Phone, ChevronRight, CheckCircle2, DollarSign, Clock } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicePages.map((p) => ({ slug: p.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getServicePageBySlug(slug);
  if (!p) return {};
  return {
    title: p.metaTitle,
    description: p.metaDescription,
    alternates: { canonical: `https://www.kelownaflooringsuperstore.com/services/${p.slug}` },
    openGraph: {
      title: p.metaTitle,
      description: p.metaDescription,
      images: [{ url: p.heroImage, width: 1200, height: 630, alt: p.service }],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const p = getServicePageBySlug(slug);
  if (!p) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: p.service,
    areaServed: { "@type": "City", name: "Kelowna" },
    provider: { "@type": "LocalBusiness", name: "Kelowna Flooring Superstore", telephone: "+12508607847" },
    name: p.service,
    description: p.metaDescription,
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: p.faqs.map((f) => ({
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
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.kelownaflooringsuperstore.com/services" },
      { "@type": "ListItem", position: 3, name: p.service, item: `https://www.kelownaflooringsuperstore.com/services/${p.slug}` },
    ],
  };

  const others = servicePages.filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <section className="relative pt-52 lg:pt-44 pb-20 overflow-hidden bg-[#0d1526]">
        <Image src={p.heroImage} alt={p.service} fill priority className="object-cover opacity-25" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1526]/96 via-[#0d1526]/75 to-[#0d1526]/40" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <nav className="flex items-center gap-2 text-white/40 text-xs sm:text-sm mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight size={12} />
            <Link href="/services" className="hover:text-white">Services</Link>
            <ChevronRight size={12} />
            <span className="text-white/70">{p.service}</span>
          </nav>
          <AnimateOnScroll>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">{p.service}</h1>
            <p className="text-white/65 text-lg sm:text-xl mt-5 max-w-3xl leading-relaxed">{p.intro}</p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-8">
              <Link href="/estimates" className="btn-primary text-sm">
                Free Estimate <ArrowRight size={16} />
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
              {p.whatIncluded.map((b) => (
                <li key={b} className="flex items-start gap-3 text-gray-600 leading-relaxed">
                  <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" /> {b}
                </li>
              ))}
            </ul>
            <h2 className="text-2xl sm:text-3xl font-black text-charcoal mb-4">When you need this</h2>
            <ul className="space-y-2">
              {p.whenYouNeed.map((w) => (
                <li key={w} className="text-gray-600">• {w}</li>
              ))}
            </ul>
          </AnimateOnScroll>

          <AnimateOnScroll direction="left" delay={0.12}>
            <div className="bg-primary rounded-2xl p-7 text-white sticky top-24">
              <div className="flex items-center gap-2 mb-3">
                <DollarSign size={18} className="text-accent" />
                <p className="text-[10px] font-bold tracking-widest uppercase text-accent">Pricing</p>
              </div>
              <p className="text-white text-sm leading-relaxed">{p.pricing}</p>
              <div className="flex items-center gap-2 mt-6 mb-3">
                <Clock size={18} className="text-accent" />
                <p className="text-[10px] font-bold tracking-widest uppercase text-accent">Typical Timeline</p>
              </div>
              <p className="text-white text-sm leading-relaxed">{p.timeline}</p>
              <div className="mt-6 pt-6 border-t border-white/15">
                <Link href="/estimates" className="block bg-accent hover:bg-accent-dark text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-all text-center">
                  Book Free Estimate <ArrowRight size={14} className="inline ml-1" />
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {p.faqs.length > 0 && (
        <section className="py-10 sm:py-16 bg-light">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <AnimateOnScroll className="text-center mb-10">
              <span className="section-label mb-4">FAQ</span>
              <h2 className="text-2xl sm:text-3xl font-black text-charcoal mt-3">Common Questions</h2>
            </AnimateOnScroll>
            <div className="space-y-3">
              {p.faqs.map((f) => (
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

      {others.length > 0 && (
        <section className="py-10 sm:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-xl sm:text-2xl font-black text-charcoal mb-6">Other Services</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {others.map((o) => (
                <Link key={o.slug} href={`/services/${o.slug}`} className="group bg-light rounded-2xl p-6 border border-gray-100 hover:border-primary transition-all">
                  <h3 className="font-black text-charcoal group-hover:text-primary transition-colors">{o.service}</h3>
                  <span className="inline-flex items-center gap-1 mt-3 text-accent text-sm font-bold group-hover:translate-x-1 transition-transform">
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
          <h2 className="text-2xl sm:text-4xl font-black text-white">Ready to start?</h2>
          <p className="text-white/60 text-lg mt-4">Free in-home estimate. No pressure.</p>
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
