"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown, MapPin } from "lucide-react";

const flooringTypes = [
  { name: "Laminate", href: "/flooring/laminate", desc: "Affordable & durable" },
  { name: "Hardwood", href: "/flooring/hardwood", desc: "Classic & timeless" },
  { name: "Carpet", href: "/flooring/carpet", desc: "Soft & warm" },
  { name: "Vinyl Plank", href: "/flooring/vinyl-plank", desc: "Waterproof & versatile" },
  { name: "Linoleum Sheet", href: "/flooring/linoleum-sheet", desc: "Resilient & eco-friendly" },
  { name: "Tile", href: "/flooring/tile", desc: "Elegant & lasting" },
  { name: "Commercial", href: "/flooring/commercial", desc: "Built for business" },
  { name: "Area Rugs", href: "/flooring/area-rugs", desc: "Style & comfort" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Flooring", href: "/flooring", hasDropdown: true },
  { name: "Room Visualizer", href: "/room-visualizer" },
  { name: "Sales", href: "/sales" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileFlooringOpen, setMobileFlooringOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d1526]/97 backdrop-blur-md shadow-xl shadow-black/30 border-b border-white/5"
          : "bg-[#0d1526]"
      }`}
    >
      {/* Top bar */}
      <div className="bg-primary border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-1.5 flex flex-wrap justify-between items-center gap-x-4">
          <span className="flex items-center gap-1.5 text-white/70 text-xs">
            <MapPin size={11} />
            Unit 16, 830 McCurdy Place, Kelowna, BC
          </span>
          <a
            href="tel:2508607847"
            className="flex items-center gap-1.5 text-white font-bold text-sm hover:text-accent transition-colors"
          >
            <Phone size={13} />
            (250) 860-7847
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 py-1">
            <Image
              src="/logo.webp"
              alt="Flooring Superstores — Kelowna"
              width={160}
              height={44}
              className="h-9 w-auto brightness-0 invert"
              priority
            />
            <div className="hidden sm:block border-l border-white/20 pl-3">
              <div className="text-white/50 font-semibold text-[10px] tracking-[0.18em] uppercase leading-none">
                Kelowna
              </div>
              <div className="text-white font-black text-[11px] tracking-[0.12em] uppercase leading-none mt-0.5">
                BC, Canada
              </div>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                      pathname.startsWith("/flooring")
                        ? "text-accent"
                        : "text-white/75 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-200 ${
                        dropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.97 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-charcoal border border-white/10 rounded-2xl shadow-2xl shadow-black/40 overflow-hidden"
                      >
                        <Link
                          href="/flooring"
                          className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 hover:bg-primary/20 transition-colors group"
                        >
                          <span className="text-sm font-bold text-accent">
                            All Flooring Types
                          </span>
                          <ChevronDown
                            size={14}
                            className="text-white/30 -rotate-90 group-hover:text-accent transition-colors"
                          />
                        </Link>
                        <div className="grid grid-cols-2 gap-px p-1 bg-white/5">
                          {flooringTypes.map((type) => (
                            <Link
                              key={type.href}
                              href={type.href}
                              className="flex flex-col px-4 py-3 rounded-xl hover:bg-primary/25 transition-colors group"
                            >
                              <span className="text-sm font-semibold text-white/85 group-hover:text-white transition-colors">
                                {type.name}
                              </span>
                              <span className="text-xs text-white/40 group-hover:text-white/60 transition-colors mt-0.5">
                                {type.desc}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                    pathname === link.href
                      ? "text-accent"
                      : "text-white/75 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <Link
            href="/estimates"
            className="hidden lg:inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-all duration-200 hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5"
          >
            Free Estimate
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 rounded-xl hover:bg-white/8 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden border-t border-white/8"
          >
            <div className="bg-dark px-4 py-5 space-y-1">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.name}>
                    <button
                      onClick={() => setMobileFlooringOpen(!mobileFlooringOpen)}
                      className="flex items-center justify-between w-full px-4 py-3 text-white/80 font-semibold rounded-xl hover:bg-white/5 transition-colors"
                    >
                      Flooring
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          mobileFlooringOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileFlooringOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden pl-4 mt-1 space-y-0.5"
                        >
                          <Link
                            href="/flooring"
                            className="block px-4 py-2.5 text-accent text-sm font-bold rounded-lg hover:bg-primary/15 transition-colors"
                          >
                            All Flooring Types
                          </Link>
                          {flooringTypes.map((type) => (
                            <Link
                              key={type.href}
                              href={type.href}
                              className="block px-4 py-2.5 text-white/65 text-sm rounded-lg hover:text-white hover:bg-white/5 transition-colors"
                            >
                              {type.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`block px-4 py-3 font-semibold rounded-xl transition-colors ${
                      pathname === link.href
                        ? "text-accent bg-primary/10"
                        : "text-white/80 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              )}
              <div className="pt-3">
                <Link
                  href="/estimates"
                  className="block w-full text-center bg-accent hover:bg-accent-dark text-white font-bold px-5 py-3.5 rounded-xl text-sm transition-all"
                >
                  Get Free Estimate
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
