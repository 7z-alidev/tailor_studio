'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, ArrowDown } from 'lucide-react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Slow down video for serene luxury feel
    }
  }, []);

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-white md:bg-primary-dark min-h-[90vh] md:h-screen md:min-h-screen flex flex-col justify-between items-center pt-28 pb-12 md:pt-24 md:pb-8 text-center px-6">
      {/* Background Video (Desktop & Laptop only) */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onLoadedMetadata={handleLoadedMetadata}
        className="hidden md:block absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
      >
        <source src="/images/bg_video.mp4" type="video/mp4" />
        <source src="/bg_video.mp4" type="video/mp4" />
      </video>

      {/* Rich Green Gradient Overlay for Typography Contrast (Desktop & Laptop only) */}
      <div className="hidden md:block absolute inset-0 bg-gradient-to-b from-[#0c2722]/90 via-[#1E5148]/82 to-[#0a201c]/92 z-[1] pointer-events-none" />

      {/* Subtle radial ambient highlight (Desktop only) */}
      <div className="hidden md:block absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(114,153,144,0.18)_0%,transparent_75%)] z-[2] pointer-events-none" />

      {/* Mobile Subtle Glow (Mobile only) */}
      <div className="md:hidden absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-secondary/10 rounded-full blur-[90px] pointer-events-none" />

      {/* Hero Content Wrapper - Flexibly centered to fit all desktop resolutions & aspect ratios */}
      <div className="w-full max-w-5xl mx-auto my-auto relative z-10 space-y-6 md:space-y-8 flex flex-col items-center justify-center">
        {/* Established Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary md:bg-white/10 md:text-white md:border md:border-white/15 md:backdrop-blur-md text-xs font-bold uppercase tracking-[0.25em] transition-all shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-accent md:text-emerald-300 animate-pulse" />
          <span>Pakistan's 1st Online Stitching Service</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.98] text-primary md:text-white drop-shadow-sm md:drop-shadow-[0_4px_24px_rgba(0,0,0,0.35)]">
          Pakistan’s First Online <br className="hidden sm:block" /> Stitching Service
        </h1>

        {/* Tagline & Subtext */}
        <div className="space-y-2 max-w-2xl mx-auto">
          <p className="text-lg sm:text-xl md:text-2xl font-medium tracking-tight text-primary/75 md:text-white/90">
            Bespoke tailoring, without visiting a single shop.
          </p>
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-secondary md:text-emerald-200 font-bold">
            Doorstep Pickup • 7-Day Stitching • Free Delivery
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2 w-full sm:w-auto">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 bg-primary text-white md:bg-white md:text-primary px-9 py-4 md:py-4.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-primary-dark md:hover:bg-brandWhite md:hover:shadow-2xl md:hover:shadow-white/20 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-primary/20"
          >
            <span>Schedule Free Pickup</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center border border-primary/20 text-primary md:border-white/30 md:text-white md:hover:bg-white/10 md:backdrop-blur-sm px-9 py-4 md:py-4.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-primary/5 transition-all duration-300"
          >
            See How It Works
          </a>
        </div>
      </div>

      {/* Metrics Bar - Neatly docked at bottom across all screens */}
      <div className="w-full max-w-4xl mx-auto relative z-10 pt-6 md:pt-4 border-t border-primary/10 md:border-white/15">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
          <div className="p-2">
            <span className="block text-xl md:text-2xl lg:text-3xl font-black text-primary md:text-white tracking-tight">
              5,000+
            </span>
            <span className="text-[10px] md:text-xs text-primary/60 md:text-white/70 font-semibold uppercase tracking-wider">
              Outfits Stitched
            </span>
          </div>
          <div className="p-2">
            <span className="block text-xl md:text-2xl lg:text-3xl font-black text-primary md:text-white tracking-tight">
              7 Days
            </span>
            <span className="text-[10px] md:text-xs text-primary/60 md:text-white/70 font-semibold uppercase tracking-wider">
              Guaranteed Return
            </span>
          </div>
          <div className="p-2">
            <span className="block text-xl md:text-2xl lg:text-3xl font-black text-primary md:text-white tracking-tight">
              100%
            </span>
            <span className="text-[10px] md:text-xs text-primary/60 md:text-white/70 font-semibold uppercase tracking-wider">
              Free Alterations
            </span>
          </div>
          <div className="p-2">
            <span className="block text-xl md:text-2xl lg:text-3xl font-black text-primary md:text-white tracking-tight">
              4.9 ★
            </span>
            <span className="text-[10px] md:text-xs text-primary/60 md:text-white/70 font-semibold uppercase tracking-wider">
              Customer Rating
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
