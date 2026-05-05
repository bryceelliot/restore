import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { comparePages, getComparePageBySlug } from "@/lib/compare-pages";
import { ArrowRight, Phone, ChevronRight, CheckCircle2 } from "lucide-react";
import ShareButtons from "@/components/ShareButtons";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return comparePages.map((p) => ({ slug: p.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getComparePageBySlug(slug);
  if (!p) return {};
  return {
    title: p.metaTitle,
    description: p.metaDescription,
    alternates: { canonical: `https://www.kelownaflooringsuperstore.com/compare/${p.slug}` },
    openGraph: {
      title: p.metaTitle,
      description: p.metaDescription,
      images: [{ url: p.heroImage, width: 1200, height: 630, alt: p.title }],
    },
  };
}

export default async function ComparePage({ params }: Props) {
  const { slug } = await params;
  const p = getComparePageBySlug(slug);
  if (!p) notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: p.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: p.title,
    datePublished: "2026-04-21",
    dateModified: "2026-04-21",
    author: { "@type": "Organization", name: "Kelowna Flooring Superstore" },
    publisher: {
      "@type": "Organization",
      name: "Kelowna Flooring Superstore",
      logo: { "@type": "ImageObject", url: "https://www.kelownaflooringsuperstore.com/logo.webp" },
    },
    image: `https://www.kelownaflooringsuperstore.com${p.heroImage}`,
    mainEntityOfPage: `https://www.kelownaflooringsuperstore.com/compare/${p.slug}`,
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.kelownaflooringsuperstore.com" },
      { "@type": "ListItem", position: 2, name: "Compare", item: "https://www.kelownaflooringsuperstore.com/compare" },
      { "@type": "ListItem", position: 3, name: p.title, item: `https://www.kelownaflooringsuperstore.com/compare/${p.slug}` },
    ],
  };

  const others = comparePages.filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <section className="relative pt-52 lg:pt-44 pb-20 overflow-hidden bg-[#0d1526]">
        <Image src={p.heroImage} alt={p.title} fill priority className="object-cover opacity-22" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1526]/96 via-[#0d1526]/75 to-[#0d1526]/40" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <nav className="flex items-center gap-2 text-white/40 text-xs sm:text-sm mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight size={12} />
            <Link href="/compare" className="hover:text-white">Compare</Link>
            <ChevronRight size={12} />
            <span className="text-white/70">{p.title}</span>
          </nav>
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 text-accent text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
              Side-by-Side Comparison
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">{p.title}</h1>
            <p className="text-white/65 text-lg sm:text-xl mt-5 max-w-3xl leading-relaxed">{p.tldr}</p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll>
            <h2 className="text-2xl sm:text-3xl font-black text-charcoal mb-8 text-center">Side-by-Side</h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
              <table className="w-full min-w-[640px] text-sm">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="text-left py-3 px-4 font-bold">Criterion</th>
                    <th className="text-left py-3 px-4 font-bold">{p.optionA}</th>
                    <th className="text-left py-3 px-4 font-bold">{p.optionB}</th>
                  </tr>
                </thead>
                <tbody>
                  {p.comparison.map((row, i) => (
                    <tr key={i} className="border-t border-gray-100">
                      <td className="py-3 px-4 font-bold text-charcoal">{row.criterion}</td>
                      <td className="py-3 px-4 text-gray-600">{row.a}</td>
                      <td className="py-3 px-4 text-gray-600">{row.b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-10 sm:py-16 bg-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-charcoal">Which wins for your situation?</h2>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 gap-4">
            {p.winnerByUse.map((u) => (
              <div key={u.useCase} className="bg-white rounded-2xl p-6 border border-gray-100">
                <div className="text-[10px] font-bold tracking-widest uppercase text-accent mb-2">{u.useCase}</div>
                <div className="font-black text-charcoal text-lg flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-primary" /> {u.winner}
                </div>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">{u.reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll>
            <div className="bg-light rounded-2xl p-7 border-l-4 border-accent">
              <p className="text-[10px] font-bold tracking-widest uppercase text-accent mb-2">Bottom Line</p>
              <p className="text-charcoal text-base leading-relaxed">{p.bottomLine}</p>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-200">
              <ShareButtons title={p.title} path={`/compare/${p.slug}`} />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-10 sm:py-16 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="mb-8">
            <span className="section-label">FAQ</span>
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

      {others.length > 0 && (
        <section className="py-10 sm:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-xl sm:text-2xl font-black text-charcoal mb-6">More Comparisons</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {others.map((o) => (
                <Link key={o.slug} href={`/compare/${o.slug}`} className="group bg-light rounded-2xl p-6 border border-gray-100 hover:border-primary transition-all">
                  <h3 className="font-black text-charcoal leading-tight group-hover:text-primary transition-colors">{o.title}</h3>
                  <span className="inline-flex items-center gap-1 mt-4 text-accent text-sm font-bold group-hover:translate-x-1 transition-transform">
                    Compare <ArrowRight size={13} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-10 sm:py-16 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-4xl font-black text-white">Still not sure?</h2>
          <p className="text-white/60 text-lg mt-4">Bring the question to our showroom or book a free in-home estimate.</p>
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
