'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'My Work', href: '#work' },
  { name: 'Brands', href: '#brands' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'editorial-nav-blur py-3.5 shadow-sm'
            : 'bg-transparent py-5 sm:py-7 border-b border-[#252321]/8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Left: Monogram + Editorial Name */}
          <Link href="#home" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-full border border-[#252321]/30 flex items-center justify-center font-serif text-sm font-semibold text-[#252321] group-hover:bg-[#252321] group-hover:text-[#F5F1EA] transition-all duration-300">
              JS
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg tracking-[0.18em] font-medium text-[#252321] uppercase">
                Julian Sumali
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#77716B] font-light">
                UGC &amp; Content Creator
              </span>
            </div>
          </Link>

          {/* Center Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center gap-7 lg:gap-9">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] tracking-[0.2em] uppercase font-medium text-[#77716B] hover:text-[#252321] transition-colors relative group py-1"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#252321] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Right: Editorial CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#252321] bg-transparent text-[#252321] hover:bg-[#252321] hover:text-[#F5F1EA] text-[10px] tracking-[0.2em] uppercase font-semibold transition-all duration-300 active:scale-95 shadow-sm"
            >
              <span>LET&apos;S WORK TOGETHER</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#252321] hover:bg-[#252321]/5 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#F5F1EA] border-b border-[#252321]/15 px-6 py-8 shadow-xl flex flex-col gap-5"
          >
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-xl tracking-[0.1em] text-[#252321] hover:text-[#A99582] py-2 border-b border-[#252321]/5 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#77716B]" />
                </a>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#252321] text-[#F5F1EA] text-xs tracking-[0.2em] uppercase font-semibold"
              >
                <span>LET&apos;S WORK TOGETHER</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
