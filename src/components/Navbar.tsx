"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown, MapPin, Calculator, Sparkles, Layers } from "lucide-react";

const flooringTypes = [
  { name: "Laminate",       href: "/flooring/laminate" },
  { name: "Hardwood",       href: "/flooring/hardwood" },
  { name: "Carpet",         href: "/flooring/carpet" },
  { name: "Vinyl Plank",    href: "/flooring/vinyl-plank" },
  { name: "Tile",           href: "/flooring/tile" },
  { name: "Linoleum Sheet", href: "/flooring/linoleum-sheet" },
  { name: "Cork",           href: "/flooring/cork" },
  { name: "Commercial",     href: "/flooring/commercial" },
  { name: "Area Rugs",      href: "/flooring/area-rugs" },
];

const navLinks = [
  { name: "Home",       href: "/" },
  { name: "Flooring",   href: "/flooring", dropdown: true },
  { name: "Tools",      href: "/calculator", toolsDropdown: true },
  { name: "Financing",  href: "/financing" },
  { name: "Why Us",     href: "/why-us" },
  { name: "Reviews",    href: "/reviews" },
  { name: "About Us",   href: "/about" },
  { name: "Blog",       href: "/blog" },
  { name: "Contact",    href: "/contact" },
];

const toolLinks = [
  { name: "Cost Calculator",   href: "/calculator",       icon: Calculator, desc: "Estimate your project cost" },
  { name: "Find My Floor",     href: "/find-my-floor",    icon: Sparkles,   desc: "5-question style quiz" },
  { name: "Visualize Your Floor", href: "/visualize",     icon: Layers,     desc: "See it in your room before you buy" },
];

export default function Navbar() {
  const [isOpen, setIsOpen]           = useState(false);
  const [scrolled, setScrolled]       = useState(false);
  const [dropOpen, setDropOpen]       = useState(false);
  const [toolsOpen, setToolsOpen]     = useState(false);
  const [mobileFlooringOpen, setMobileFlooringOpen] = useState(false);
  const [mobileToolsOpen, setMobileToolsOpen]       = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setDropOpen(false);
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
      {/* Top info bar */}
      <div className="bg-primary border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex justify-between items-center">
          <span className="hidden sm:flex items-center gap-2 text-white/60 text-base">
            <MapPin size={14} className="shrink-0" />
            Unit 16, 830 McCurdy Place, Kelowna, BC
          </span>
          <div className="flex items-center gap-3">
            <a
              href="tel:2508607847"
              className="hidden sm:flex items-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-3 py-1 rounded-full text-xs transition-colors"
              aria-label="Call us"
            >
              Call Us
            </a>
            <a
              href="tel:2508607847"
              className="flex items-center gap-2 text-white font-bold text-lg hover:text-accent transition-colors"
            >
              <Phone size={15} />
              (250) 860-7847
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-[72px]">

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.toolsDropdown ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setToolsOpen(true)}
                  onMouseLeave={() => setToolsOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1.5 px-5 py-3 text-base font-semibold rounded-xl transition-all min-h-[48px] ${
                      ["/calculator", "/find-my-floor"].some(p => pathname.startsWith(p))
                        ? "text-accent bg-white/8"
                        : "text-white hover:text-white hover:bg-white/8"
                    }`}
                    aria-haspopup="true"
                    aria-expanded={toolsOpen}
                  >
                    {link.name}
                    <ChevronDown size={16} className={`transition-transform duration-200 ${toolsOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {toolsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-[#0d1526] border border-white/10 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden py-2"
                        role="menu"
                      >
                        {toolLinks.map((t) => (
                          <Link
                            key={t.href}
                            href={t.href}
                            role="menuitem"
                            className="flex items-center gap-3 mx-2 px-4 py-3 rounded-xl hover:bg-white/8 transition-colors group"
                          >
                            <t.icon size={16} className="text-accent shrink-0" />
                            <div>
                              <p className="text-white font-semibold text-sm">{t.name}</p>
                              <p className="text-white/40 text-xs">{t.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : link.dropdown ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setDropOpen(true)}
                  onMouseLeave={() => setDropOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1.5 px-5 py-3 text-base font-semibold rounded-xl transition-all min-h-[48px] ${
                      pathname.startsWith("/flooring")
                        ? "text-accent bg-white/8"
                        : "text-white hover:text-white hover:bg-white/8"
                    }`}
                    aria-haspopup="true"
                    aria-expanded={dropOpen}
                  >
                    {link.name}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${dropOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  <AnimatePresence>
                    {dropOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-[#0d1526] border border-white/10 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden py-2"
                        role="menu"
                      >
                        <Link
                          href="/flooring"
                          className="flex items-center justify-between mx-2 px-5 py-3 mb-1 rounded-xl bg-accent/15 hover:bg-accent/25 transition-colors"
                          role="menuitem"
                        >
                          <span className="text-base font-bold text-accent">All Flooring</span>
                          <ChevronDown size={14} className="-rotate-90 text-accent/70" />
                        </Link>
                        {flooringTypes.map((type) => (
                          <Link
                            key={type.href}
                            href={type.href}
                            role="menuitem"
                            className={`block mx-2 px-5 py-3 rounded-xl text-base transition-colors ${
                              pathname === type.href
                                ? "text-accent font-semibold bg-primary/20"
                                : "text-white/80 hover:text-white hover:bg-white/8 font-medium"
                            }`}
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
                  className={`px-5 py-3 text-base font-semibold rounded-xl transition-all min-h-[48px] flex items-center ${
                    pathname === link.href
                      ? "text-accent bg-white/8"
                      : "text-white hover:text-white hover:bg-white/8"
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* CTA button */}
          <Link
            href="/estimates"
            className="hidden lg:inline-flex items-center gap-2 bg-accent-dark hover:bg-[#a8281e] text-white font-bold px-6 py-3 rounded-xl text-base transition-all hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5 min-h-[48px]"
          >
            Free Estimate
          </Link>

          {/* Hamburger — big tap target */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-3 rounded-xl hover:bg-white/10 transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
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
            transition={{ duration: 0.22 }}
            className="lg:hidden overflow-hidden border-t border-white/10"
          >
            <div className="bg-[#0d1526] px-4 py-5 space-y-2">

              {/* Home */}
              <Link
                href="/"
                className={`block px-5 py-4 text-lg font-semibold rounded-xl transition-colors min-h-[56px] flex items-center ${
                  pathname === "/" ? "text-accent bg-primary/10" : "text-white hover:bg-white/5"
                }`}
              >
                Home
              </Link>

              {/* Flooring with expandable sub-list */}
              <div>
                <button
                  onClick={() => setMobileFlooringOpen(!mobileFlooringOpen)}
                  className="flex items-center justify-between w-full px-5 py-4 text-lg font-semibold text-white rounded-xl hover:bg-white/5 transition-colors min-h-[56px]"
                >
                  Flooring
                  <ChevronDown
                    size={20}
                    className={`transition-transform ${mobileFlooringOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {mobileFlooringOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden pl-4 mt-1 space-y-1"
                    >
                      <Link
                        href="/flooring"
                        className="block px-5 py-3.5 text-accent text-base font-bold rounded-xl hover:bg-accent/10 transition-colors min-h-[48px] flex items-center"
                      >
                        All Flooring Types
                      </Link>
                      {flooringTypes.map((type) => (
                        <Link
                          key={type.href}
                          href={type.href}
                          className="block px-5 py-3.5 text-white/75 text-base rounded-xl hover:text-white hover:bg-white/5 transition-colors min-h-[48px] flex items-center"
                        >
                          {type.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Tools expandable */}
              <div>
                <button
                  onClick={() => setMobileToolsOpen(!mobileToolsOpen)}
                  className="flex items-center justify-between w-full px-5 py-4 text-lg font-semibold text-white rounded-xl hover:bg-white/5 transition-colors min-h-[56px]"
                >
                  Tools
                  <ChevronDown size={20} className={`transition-transform ${mobileToolsOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileToolsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden pl-4 mt-1 space-y-1"
                    >
                      {toolLinks.map(t => (
                        <Link
                          key={t.href}
                          href={t.href}
                          className="flex items-center gap-3 px-5 py-3.5 text-white/75 text-base rounded-xl hover:text-white hover:bg-white/5 transition-colors min-h-[48px]"
                        >
                          <t.icon size={15} className="text-accent shrink-0" />
                          {t.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Other flat links */}
              {[
                { name: "Financing",  href: "/financing" },
                { name: "Why Us",     href: "/why-us" },
                { name: "Reviews",    href: "/reviews" },
                { name: "About Us",   href: "/about" },
                { name: "Blog",       href: "/blog" },
                { name: "Contact",    href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-5 py-4 text-lg font-semibold rounded-xl transition-colors min-h-[56px] flex items-center ${
                    pathname === link.href
                      ? "text-accent bg-primary/10"
                      : "text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* CTA */}
              <div className="pt-2 pb-1">
                <Link
                  href="/estimates"
                  className="block w-full text-center bg-accent-dark hover:bg-[#a8281e] text-white font-bold px-5 py-4 rounded-xl text-lg transition-all min-h-[56px]"
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
