import React from 'react';
import Link from 'next/link';
import { Scissors, Phone, MapPin, Clock, MessageSquare, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-24 pb-12 relative overflow-hidden">
      {/* Background radial accent glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-sm">
                <Scissors className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight">Tailor Studio</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              Pakistan’s premier online tailoring experience. We bring artisanal bespoke craftsmanship straight to your doorstep without ever stepping into a crowded market.
            </p>
            <div className="flex items-center gap-3 text-xs text-white/60">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Doorstep Pickup Active Across Karachi</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-[0.2em] text-white/50">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-white/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition-colors">
                  About Our Craft
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white transition-colors">
                  Contact & Bookings
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="text-white/80 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-[0.2em] text-white/50">
              Specialties
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>Casual & Daily Wear</li>
              <li>Designer & Fashion Cuts</li>
              <li>Luxury Party Wear</li>
              <li>Festive & Occasion Dresses</li>
              <li className="text-white/40 italic">Gents Stitching (Coming Soon)</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-[0.2em] text-white/50">
              Reach Us
            </h4>
            <div className="space-y-3 text-sm text-white/80">
              <a
                href="tel:+923191004680"
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-secondary-light" />
                <span>+92 319 1004 680</span>
              </a>
              <div className="flex items-center gap-2.5 text-white/70">
                <MapPin className="w-4 h-4 text-secondary-light shrink-0" />
                <span>Malir, Karachi, Pakistan</span>
              </div>
              <div className="flex items-center gap-2.5 text-white/70">
                <Clock className="w-4 h-4 text-secondary-light shrink-0" />
                <span>7 Days Delivery Guarantee</span>
              </div>
              <div className="pt-2">
                <a
                  href="https://wa.me/923191004680"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition-all text-xs font-semibold"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp Concierge</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-white/40 font-medium gap-4">
          <p>© {currentYear} Tailor Studio Pakistan. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Bespoke elegance crafted with <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" /> for modern fashion.
          </p>
        </div>
      </div>
    </footer>
  );
}
