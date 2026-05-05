import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { projects } from "@/lib/projects";
import ProjectCarousel from "@/components/ProjectCarousel";
import { ArrowRight, MapPin, Calendar, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Recent Flooring Projects — Kelowna",
  description:
    "Real Kelowna flooring installs by Kelowna Flooring Superstore — Glenpark Village Meadows, Springfield Manor, The Peaks, and more. Photos + flooring used + project details.",
  alternates: { canonical: "https://www.kelownaflooringsuperstore.com/projects" },
  openGraph: {
    title: "Recent Flooring Projects — Kelowna Flooring Superstore",
    description: "Real Kelowna flooring installs from our crews. Photos + flooring used + project details.",
    images: [{ url: projects[0]?.heroImage || "/assets/images/showroom-01.webp", width: 1200, height: 630, alt: "Kelowna flooring projects" }],
  },
};

export default function ProjectsIndex() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-52 lg:pt-44 pb-20 overflow-hidden bg-[#0d1526]">
        <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 text-accent text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
              Real Kelowna Installs
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              Recent<br /><span className="text-accent">Projects</span>
            </h1>
            <p className="text-white/65 text-lg sm:text-xl mt-5 max-w-2xl leading-relaxed">
              Real flooring installs across Kelowna and the Okanagan. Scroll through each project — full photo sets, flooring used, and the story behind the job.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Project list — each with its own carousel */}
      <section className="py-10 sm:py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-20">
          {projects.map((p, i) => (
            <AnimateOnScroll key={p.slug} delay={i * 0.05}>
              <article id={p.slug} className="grid lg:grid-cols-[1fr_360px] gap-8 items-start scroll-mt-28">
                {/* Carousel */}
                <ProjectCarousel name={p.name} photos={p.photos} />

                {/* Details */}
                <div className="space-y-4">
                  <div>
                    <div className="inline-flex items-center gap-1.5 bg-white border border-gray-200 text-charcoal text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                      <MapPin size={11} className="text-accent" /> {p.city}
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-charcoal mt-3 leading-tight">{p.name}</h2>
                    <p className="text-gray-500 text-sm mt-1">{p.neighborhood}</p>
                  </div>

                  <p className="text-gray-600 text-base leading-relaxed">{p.description}</p>

                  <div className="bg-white rounded-xl p-4 border border-gray-100 space-y-2 text-sm">
                    <div>
                      <span className="text-[10px] font-bold tracking-widest uppercase text-accent">Flooring</span>
                      <p className="text-charcoal font-semibold">{p.flooringTypes.join(" · ")}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3 pt-2 border-t border-gray-100">
                      <div>
                        <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400">Size</span>
                        <p className="text-charcoal text-sm font-semibold">{p.squareFootage}</p>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400">Timeline</span>
                        <p className="text-charcoal text-sm font-semibold">{p.duration}</p>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-gray-100 flex items-center gap-2 text-gray-500 text-xs">
                      <Calendar size={12} /> Completed {new Date(p.completed).toLocaleDateString("en-CA", { year: "numeric", month: "long" })}
                    </div>
                  </div>

                  <Link
                    href={`/projects/${p.slug}`}
                    className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-5 py-3 rounded-xl text-sm transition-all w-full justify-center"
                  >
                    View Full Project Page <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
              {i < projects.length - 1 && (
                <hr className="border-gray-200 mt-20" />
              )}
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 sm:py-16 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-4xl font-black text-white">Your project could be next.</h2>
          <p className="text-white/60 text-lg mt-4">Free in-home estimate. We bring samples to you, measure your space, and quote the whole project.</p>
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
