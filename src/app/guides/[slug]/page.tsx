import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { guides, getGuideBySlug } from "@/lib/guides";
import { ArrowRight, Phone, ChevronRight } from "lucide-react";
import ShareButtons from "@/components/ShareButtons";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const g = getGuideBySlug(slug);
  if (!g) return {};
  return {
    title: g.metaTitle,
    description: g.metaDescription,
    alternates: { canonical: `https://www.kelownaflooringsuperstore.com/guides/${g.slug}` },
    openGraph: {
      title: g.metaTitle,
      description: g.metaDescription,
      images: [{ url: g.heroImage, width: 1200, height: 630, alt: g.title }],
    },
  };
}

/* Minimal markdown-ish renderer: paragraphs + bullets + bold. Good enough for guides. */
function renderBody(body: string) {
  const blocks = body.split(/\n\s*\n/);
  return blocks.map((block, bi) => {
    const lines = block.split("\n").map((l) => l.trim()).filter(Boolean);
    if (lines.every((l) => l.startsWith("- ") || /^\d+\.\s/.test(l))) {
      const ordered = /^\d+\.\s/.test(lines[0]);
      const Tag = ordered ? "ol" : "ul";
      return (
        <Tag key={bi} className={`${ordered ? "list-decimal" : "list-disc"} pl-6 space-y-2 my-4 text-gray-600`}>
          {lines.map((l, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: boldify(l.replace(/^(-|\d+\.)\s*/, "")) }} />
          ))}
        </Tag>
      );
    }
    return <p key={bi} className="text-gray-600 leading-relaxed mt-4" dangerouslySetInnerHTML={{ __html: boldify(block) }} />;
  });
}
function boldify(s: string) {
  return s.replace(/\*\*([^*]+)\*\*/g, '<strong class="text-charcoal">$1</strong>');
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const g = getGuideBySlug(slug);
  if (!g) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: g.title,
    datePublished: g.datePublished,
    dateModified: g.dateModified,
    author: { "@type": "Organization", name: "Kelowna Flooring Superstore" },
    publisher: {
      "@type": "Organization",
      name: "Kelowna Flooring Superstore",
      logo: { "@type": "ImageObject", url: "https://www.kelownaflooringsuperstore.com/logo.webp" },
    },
    image: `https://www.kelownaflooringsuperstore.com${g.heroImage}`,
    mainEntityOfPage: `https://www.kelownaflooringsuperstore.com/guides/${g.slug}`,
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: g.faqs.map((f) => ({
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
      { "@type": "ListItem", position: 2, name: "Guides", item: "https://www.kelownaflooringsuperstore.com/guides" },
      { "@type": "ListItem", position: 3, name: g.title, item: `https://www.kelownaflooringsuperstore.com/guides/${g.slug}` },
    ],
  };

  const related = guides.filter((x) => x.slug !== g.slug);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <section className="relative pt-52 lg:pt-44 pb-20 overflow-hidden bg-[#0d1526]">
        <Image src={g.heroImage} alt={g.title} fill priority className="object-cover opacity-25" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1526]/96 via-[#0d1526]/75 to-[#0d1526]/40" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <nav className="flex items-center gap-2 text-white/40 text-xs sm:text-sm mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/guides" className="hover:text-white transition-colors">Guides</Link>
            <ChevronRight size={12} />
            <span className="text-white/70">{g.title}</span>
          </nav>
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 text-accent text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
              Kelowna Guide
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">{g.title}</h1>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll>
            <div className="bg-light rounded-2xl p-6 border-l-4 border-accent">
              <p className="text-[10px] font-bold tracking-widest uppercase text-accent mb-2">The Short Answer</p>
              <p className="text-charcoal text-base leading-relaxed">{g.tldr}</p>
            </div>
          </AnimateOnScroll>

          {g.sections.map((s) => (
            <AnimateOnScroll key={s.heading} className="mt-10">
              <h2 className="text-xl sm:text-2xl font-black text-charcoal mb-2">{s.heading}</h2>
              <div>{renderBody(s.body)}</div>
            </AnimateOnScroll>
          ))}

          <div className="mt-10 pt-6 border-t border-gray-200">
            <ShareButtons title={g.title} path={`/guides/${g.slug}`} />
          </div>
        </div>
      </section>

      {g.faqs.length > 0 && (
        <section className="py-10 sm:py-16 bg-light">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <AnimateOnScroll className="mb-8">
              <span className="section-label">FAQ</span>
              <h2 className="text-2xl sm:text-3xl font-black text-charcoal mt-3">Questions Kelowna homeowners ask</h2>
            </AnimateOnScroll>
            <div className="space-y-3">
              {g.faqs.map((f) => (
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
            <h2 className="text-xl sm:text-2xl font-black text-charcoal mb-6">More Kelowna Flooring Guides</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((r) => (
                <Link key={r.slug} href={`/guides/${r.slug}`} className="group bg-light rounded-2xl p-6 border border-gray-100 hover:border-primary transition-all">
                  <h3 className="font-black text-charcoal leading-tight group-hover:text-primary transition-colors">{r.title}</h3>
                  <p className="text-gray-500 text-sm mt-2 line-clamp-3">{r.tldr}</p>
                  <span className="inline-flex items-center gap-1 mt-4 text-accent text-sm font-bold group-hover:translate-x-1 transition-transform">
                    Read guide <ArrowRight size={13} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-10 sm:py-16 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-4xl font-black text-white">Book Your Free Kelowna Estimate</h2>
          <p className="text-white/60 text-lg mt-4">We&apos;ll bring samples to you, measure your space, and quote the whole project.</p>
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
