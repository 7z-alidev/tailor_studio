import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  Scissors,
  Sparkles,
  ShieldCheck,
  Truck,
  HeartHandshake,
  ArrowRight,
  Target,
  Award,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Tailor Studio - Redefining Tailoring in Pakistan',
  description:
    'Discover how Tailor Studio is blending age-old artisanal tailoring craftsmanship with digital convenience across Pakistan.',
};

export default function AboutPage() {
  return (
    <div className="pt-36 pb-28 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        {/* Intro */}
        <div className="max-w-4xl mx-auto text-center space-y-8 mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-[0.2em]">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span>Our Mission & Heritage</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.0] text-primary">
            Get a Stitched Dress in the Modern Way
          </h1>

          <p className="text-lg md:text-2xl text-primary/70 font-medium max-w-2xl mx-auto leading-relaxed">
            Designing the future of wardrobe convenience through Pakistan’s first fully digital, doorstep-to-doorstep tailoring atelier.
          </p>
        </div>

        {/* Brand Banner Card */}
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-primary to-primary-dark rounded-5xl p-10 md:p-16 text-white shadow-2xl shadow-primary/20 mb-28">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
                01. Strategy
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-white">Online-First</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Eliminating the endless market visits and parking chaos. We bring the master tailor to your phone screen.
              </p>
            </div>
            <div className="space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
                02. Commitment
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-white">True Convenience</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Doorstep pickup of fabrics and fit samples, followed by timely doorstep drop-off, every single time.
              </p>
            </div>
            <div className="space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
                03. Heritage
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-white">Master Precision</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Modern Pakistani women deserve silhouettes tailored with pristine seam lines, exact cuts, and luxury finishes.
              </p>
            </div>
          </div>
        </div>

        {/* The Problem We Solve */}
        <div className="max-w-4xl mx-auto space-y-16 mb-28">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-primary">
              Why We Started Tailor Studio
            </h2>
            <p className="text-primary/60 text-base md:text-lg">
              Every woman in Pakistan knows the agony of the traditional bazaar tailor experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface p-8 rounded-4xl border border-primary/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold text-sm">
                ✕
              </div>
              <h3 className="text-xl font-bold text-primary">The Traditional Way</h3>
              <ul className="space-y-2 text-sm text-primary/70">
                <li>• Multiple stressful trips to congested shopping markets.</li>
                <li>• Unpredictable delays—"Baji kal zaroor mil jaega".</li>
                <li>• Misplaced laces, inaccurate neck depths, and ruined expensive lawn cuts.</li>
                <li>• Zero accountability when sizing goes wrong.</li>
              </ul>
            </div>

            <div className="bg-primary/5 p-8 rounded-4xl border border-primary/20 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center font-bold text-sm">
                ✓
              </div>
              <h3 className="text-xl font-bold text-primary">The Tailor Studio Way</h3>
              <ul className="space-y-2 text-sm text-primary/80">
                <li>• 100% digital order placement and doorstep courier pickup.</li>
                <li>• Punctual 7-day turnaround commitment.</li>
                <li>• Experienced in-house master tailors with strict quality checkpoints.</li>
                <li>• Free alteration guarantee if you are not 100% satisfied.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quality Standards */}
        <div className="max-w-5xl mx-auto py-16 px-8 rounded-5xl bg-surface border border-primary/10 mb-28 text-center space-y-10">
          <div className="space-y-3">
            <h3 className="text-3xl md:text-4xl font-bold text-primary">Our Craftsmanship Standards</h3>
            <p className="text-primary/60 text-sm max-w-xl mx-auto">
              Every garment that leaves our workshop goes through a 3-tier inspection process:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-6 rounded-3xl border border-primary/10 space-y-2">
              <Target className="w-6 h-6 text-primary" />
              <h4 className="font-bold text-primary text-base">Accurate Cutting</h4>
              <p className="text-xs text-primary/60">
                Garments are cut strictly according to sample piece specs or customer measurement charts.
              </p>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-primary/10 space-y-2">
              <Scissors className="w-6 h-6 text-primary" />
              <h4 className="font-bold text-primary text-base">Overlock & Interlock</h4>
              <p className="text-xs text-primary/60">
                All raw fabric edges are locked securely to prevent fraying even after countless washes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-primary/10 space-y-2">
              <Award className="w-6 h-6 text-primary" />
              <h4 className="font-bold text-primary text-base">Steam Press & Seal</h4>
              <p className="text-xs text-primary/60">
                Every dress is thoroughly ironed, checked for loose threads, and sealed in a protective garment bag.
              </p>
            </div>
          </div>
        </div>

        {/* Call To Action */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            Ready for your most seamless stitching experience?
          </h2>
          <div className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-primary-dark transition-all shadow-xl shadow-primary/20"
            >
              <span>Schedule Your First Pickup</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
