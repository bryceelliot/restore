import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { ArrowRight, Phone, Camera, MousePointerClick, ImageIcon, Layers, Smartphone } from "lucide-react";

export const metadata: Metadata = {
  title: "Visualize Your Floor — Kelowna Room Visualizer",
  description:
    "Upload a photo of your room and see exactly how Kelowna Flooring Superstore products will look — laminate, hardwood, vinyl plank, tile. Powered by Roomvo.",
  alternates: { canonical: "https://www.kelownaflooringsuperstore.com/visualize" },
  openGraph: {
    title: "Visualize Your Floor — Kelowna Flooring Superstore",
    description: "Upload your room photo and see our products installed before you buy.",
    images: [{ url: "/assets/images/showroom-08.webp", width: 1200, height: 630, alt: "Visualize your flooring in Kelowna" }],
  },
};

export default function VisualizePage() {
  return (
    <>
      <section className="relative pt-52 lg:pt-44 pb-20 overflow-hidden bg-[#0d1526]">
        <Image src="/assets/images/showroom-08.webp" alt="Kelowna flooring visualizer" fill priority className="object-cover opacity-22" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1526]/96 via-[#0d1526]/72 to-[#0d1526]/40" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 text-accent text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
              See It Before You Buy
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              Visualize Your<br /><span className="text-accent">New Floor</span>
            </h1>
            <p className="text-white/65 text-lg sm:text-xl mt-5 max-w-2xl leading-relaxed">
              Upload a photo of your room. Pick a flooring sample. See exactly how it&apos;ll look in your home — before you commit. Free, no signup, takes about 2 minutes.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-charcoal">How It Works</h2>
            <p className="text-gray-500 text-base mt-3 max-w-xl mx-auto">Three steps. Two minutes. No tricky setup.</p>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: Camera, step: "1", title: "Snap your room", body: "Take a photo of the room you want new flooring in. Wide-angle, well-lit." },
              { icon: ImageIcon, step: "2", title: "Pick a floor", body: "Browse our in-stock flooring samples by colour, look, or category." },
              { icon: MousePointerClick, step: "3", title: "See the result", body: "Our visualizer maps the floor onto your photo so you see exactly how it'll look." },
            ].map((s) => (
              <div key={s.step} className="bg-light rounded-2xl p-7 border border-gray-100 text-center">
                <div className="text-5xl font-black text-primary/10 leading-none mb-4">{s.step}</div>
                <s.icon size={28} className="mx-auto text-accent mb-3" />
                <h3 className="font-black text-charcoal text-lg mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16 bg-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <AnimateOnScroll>
            <h2 className="text-2xl sm:text-3xl font-black text-charcoal mb-4">Open the Visualizer</h2>
            <p className="text-gray-500 mb-8 max-w-xl mx-auto">
              Click the assistant icon in the bottom-right corner of any page to launch the Roomvo visualizer. Upload your photo and start designing.
            </p>
            <div className="bg-white rounded-2xl p-8 border-2 border-dashed border-accent/30 max-w-2xl mx-auto">
              <Layers size={48} className="text-accent mx-auto mb-4" />
              <p className="text-charcoal font-bold mb-3">Visualizer powered by Roomvo</p>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                The visualizer is loaded on every page on this site. Look for the floating assistant icon in the bottom-right corner — tap to start visualizing.
              </p>
              <p className="text-xs text-gray-400 mt-2">
                Look for the floating chat icon in the bottom-right corner of any page on this site.
              </p>
              <div className="mt-5 inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium px-3 py-2 rounded-lg">
                <Smartphone size={14} />
                On iPhone? The visualizer works best in Safari on desktop or laptop. If it doesn&apos;t load on mobile, call us and we&apos;ll demo it in the showroom.
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-charcoal">After You Visualize</h2>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-light rounded-2xl p-7 border border-gray-100">
              <h3 className="font-black text-charcoal text-lg mb-2">Take samples home</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Visit our McCurdy Place showroom to take physical samples home overnight. See how the floor looks in your real lighting at different times of day.
              </p>
              <Link href="/contact" className="text-accent font-bold text-sm inline-flex items-center gap-1">
                Visit Showroom <ArrowRight size={13} />
              </Link>
            </div>
            <div className="bg-light rounded-2xl p-7 border border-gray-100">
              <h3 className="font-black text-charcoal text-lg mb-2">Book a free estimate</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Once you&apos;ve narrowed it down, we come to you, measure, and quote everything — material, install, removal, transitions.
              </p>
              <Link href="/estimates" className="text-accent font-bold text-sm inline-flex items-center gap-1">
                Book Estimate <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-4xl font-black text-white">Need help picking?</h2>
          <p className="text-white/60 text-lg mt-4">Our team can help you narrow down options on a phone call or in our showroom.</p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <a href="tel:2508607847" className="flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-xl text-base transition-all">
              <Phone size={17} /> (250) 860-7847
            </a>
            <Link href="/find-my-floor" className="bg-white/10 hover:bg-white/18 border border-white/25 text-white font-semibold px-7 py-4 rounded-xl text-base transition-all">
              Try Find My Floor Quiz
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
