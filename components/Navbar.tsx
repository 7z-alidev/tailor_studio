'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Scissors, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const isActive = (path: string) => pathname === path;
  const isHomeHero = pathname === '/' && !isScrolled && !isMenuOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled || isMenuOpen
            ? 'glass-nav py-3.5 shadow-sm'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group relative z-50 focus:outline-none"
            aria-label="Tailor Studio Home"
          >
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-md transition-transform group-hover:scale-105 ${
                isHomeHero
                  ? 'bg-primary text-white md:bg-white/15 md:text-white md:backdrop-blur-md md:border md:border-white/20'
                  : 'bg-primary text-white shadow-primary/20'
              }`}
            >
              <Scissors className="w-5 h-5 transition-transform group-hover:rotate-45" />
            </div>
            <div className="flex flex-col">
              <span
                className={`text-xl md:text-2xl font-bold tracking-tight leading-none transition-colors ${
                  isHomeHero ? 'text-primary md:text-white' : 'text-primary'
                }`}
              >
                Tailor Studio
              </span>
              <span
                className={`text-[10px] uppercase tracking-widest font-semibold mt-0.5 transition-colors ${
                  isHomeHero ? 'text-secondary md:text-emerald-200' : 'text-secondary'
                }`}
              >
                Pakistan
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <Link
              href="/"
              className={`text-sm font-semibold tracking-wider uppercase transition-all duration-200 relative py-1 ${
                isActive('/')
                  ? isHomeHero
                    ? 'text-white font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white'
                    : 'text-primary font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary'
                  : isHomeHero
                  ? 'text-white/75 hover:text-white'
                  : 'text-primary/60 hover:text-primary'
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-sm font-semibold tracking-wider uppercase transition-all duration-200 relative py-1 ${
                isActive('/about')
                  ? isHomeHero
                    ? 'text-white font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white'
                    : 'text-primary font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary'
                  : isHomeHero
                  ? 'text-white/75 hover:text-white'
                  : 'text-primary/60 hover:text-primary'
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-semibold tracking-wider uppercase transition-all duration-200 relative py-1 ${
                isActive('/contact')
                  ? isHomeHero
                    ? 'text-white font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white'
                    : 'text-primary font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary'
                  : isHomeHero
                  ? 'text-white/75 hover:text-white'
                  : 'text-primary/60 hover:text-primary'
              }`}
            >
              Contact & Pickup
            </Link>
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className={`hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-200 shadow-lg relative z-50 transform hover:-translate-y-0.5 ${
                isHomeHero
                  ? 'bg-white text-primary hover:bg-surface shadow-black/20'
                  : 'bg-primary text-white hover:bg-primary-dark shadow-primary/20'
              }`}
            >
              <span>Book Pickup</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative z-50 p-2 text-primary focus:outline-none rounded-lg hover:bg-primary/5 transition-colors"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-primary" />
              ) : (
                <Menu className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-white/98 backdrop-blur-xl transition-all duration-300 md:hidden flex flex-col justify-between py-24 px-8 ${
          isMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-6'
        }`}
      >
        <div className="flex flex-col space-y-6 pt-8">
          <span className="text-xs uppercase font-bold tracking-[0.3em] text-secondary">
            Navigation
          </span>
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className={`text-3xl font-bold tracking-tight transition-all ${
              isActive('/') ? 'text-primary pl-3 border-l-4 border-primary' : 'text-primary/50'
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setIsMenuOpen(false)}
            className={`text-3xl font-bold tracking-tight transition-all ${
              isActive('/about') ? 'text-primary pl-3 border-l-4 border-primary' : 'text-primary/50'
            }`}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className={`text-3xl font-bold tracking-tight transition-all ${
              isActive('/contact') ? 'text-primary pl-3 border-l-4 border-primary' : 'text-primary/50'
            }`}
          >
            Contact & Pickup
          </Link>
        </div>

        <div className="space-y-4 pt-8 border-t border-primary/10">
          <div className="flex items-center gap-2 text-xs font-semibold text-secondary">
            <Sparkles className="w-4 h-4 text-accent" />
            <span>Guaranteed 7-Day Turnaround</span>
          </div>
          <Link
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full bg-primary text-white py-4 rounded-2xl text-sm font-bold uppercase tracking-wider text-center shadow-xl shadow-primary/20"
          >
            <span>Schedule Doorstep Pickup</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </>
  );
}
