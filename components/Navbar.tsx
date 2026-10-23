"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Games", href: "/#games" },
    { label: "Studio", href: "/studio" },
    { label: "Journal", href: "/journal" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0C0C0C]/90 backdrop-blur-md border-b border-[#292929]/70 py-4"
          : "bg-transparent py-6 md:py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Wordmark */}
        <Link
          href="/"
          className="group inline-flex items-baseline gap-2 text-[#F0F0EC] tracking-widest text-xs sm:text-sm font-semibold uppercase hover:text-white transition-colors"
          aria-label="Aghatis Studio Homepage"
        >
          <span className="font-mono text-[13px] tracking-[0.2em] font-medium">AGHATIS</span>
          <span className="text-[10px] text-[#92928D] font-mono group-hover:text-[#F0F0EC] transition-colors">
            ®
          </span>
          <span className="hidden sm:inline-block text-[10px] text-[#92928D] tracking-normal font-mono border-l border-[#292929] pl-2 ml-1">
            EST. 2025
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-10" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href.replace("/#games", "/games"));

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative text-xs font-mono uppercase tracking-[0.16em] transition-colors duration-200 py-1 ${
                  isActive ? "text-[#F0F0EC]" : "text-[#92928D] hover:text-[#F0F0EC]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#F0F0EC]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#F0F0EC] p-2 -mr-2 focus:outline-none"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          <span className="font-mono text-xs tracking-wider uppercase text-[#92928D]">
            {mobileMenuOpen ? "[ Close ]" : "[ Menu ]"}
          </span>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-x-0 top-[60px] bg-[#0C0C0C]/98 border-b border-[#292929] px-6 py-8 backdrop-blur-xl"
          >
            <nav className="flex flex-col space-y-6">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-baseline justify-between text-base font-mono uppercase tracking-[0.15em] text-[#F0F0EC] hover:text-white border-b border-[#1F1F1F] pb-3"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-[#92928D] font-mono">0{idx + 1}</span>
                </Link>
              ))}

              <div className="pt-4 flex flex-col space-y-2 text-xs font-mono text-[#92928D]">
                <span>Aghatis Studio — Creative Practice</span>
                <span>Independent Game Development</span>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
