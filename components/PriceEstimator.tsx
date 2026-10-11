'use client';

import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

interface DressOption {
  id: string;
  name: string;
  basePrice: number;
  time: string;
  desc: string;
}

const dressOptions: DressOption[] = [
  { id: 'kurti', name: 'Single Kurti / Shirt', basePrice: 950, time: '5-7 Days', desc: 'Standard stitched with neck & sleeve detailing' },
  { id: '2piece', name: '2-Piece Suit (Shirt + Trouser)', basePrice: 1750, time: '6-7 Days', desc: 'Complete custom silhouette with lining if needed' },
  { id: '3piece', name: '3-Piece Complete Suit', basePrice: 2200, time: '7 Days', desc: 'Shirt, trouser, dupatta finishing & lace attachment' },
  { id: 'formal', name: 'Luxury / Party Wear', basePrice: 3500, time: '7-9 Days', desc: 'Delicate embroidery handling, can-can, or organza work' },
];

interface Addon {
  id: string;
  name: string;
  price: number;
}

const addonsList: Addon[] = [
  { id: 'piping', name: 'Lace & Piping Attachment', price: 350 },
  { id: 'lining', name: 'Inner Lining (Atal / Cotton)', price: 500 },
  { id: 'urgent', name: 'Express Stitching (3-4 Days)', price: 800 },
  { id: 'measurement-pickup', name: 'Sample Measurement Garment Pickup', price: 0 },
];

export default function PriceEstimator() {
  const [selectedDress, setSelectedDress] = useState<string>('2piece');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['measurement-pickup']);

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const currentDress = dressOptions.find((d) => d.id === selectedDress) || dressOptions[0];
  const addonsTotal = selectedAddons.reduce((acc, addonId) => {
    const item = addonsList.find((a) => a.id === addonId);
    return acc + (item ? item.price : 0);
  }, 0);

  const totalPrice = currentDress.basePrice + addonsTotal;
  const isExpress = selectedAddons.includes('urgent');

  return (
    <div className="bg-gradient-to-b from-white to-surface py-24 border-y border-primary/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest">
            <Calculator className="w-3.5 h-3.5" />
            <span>Transparent Pricing Engine</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-primary">
            Instant Stitching Cost Estimator
          </h2>
          <p className="text-primary/60 text-base md:text-lg">
            No hidden charges or market bargaining. Select your attire type and required extras to see an upfront estimate before booking.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-5xl p-6 sm:p-10 md:p-12 shadow-xl shadow-primary/5 border border-primary/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Options Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Dress Type */}
            <div>
              <label className="text-xs font-bold uppercase tracking-widest text-primary/40 block mb-3">
                1. Select Attire Style
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {dressOptions.map((dress) => {
                  const isChecked = selectedDress === dress.id;
                  return (
                    <button
                      key={dress.id}
                      type="button"
                      onClick={() => setSelectedDress(dress.id)}
                      className={`text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
                        isChecked
                          ? 'border-primary bg-primary/5 shadow-sm ring-1 ring-primary'
                          : 'border-primary/10 hover:border-primary/30 bg-surface'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-sm text-primary">{dress.name}</span>
                        {isChecked && (
                          <span className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3" />
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-primary/60 mb-2">{dress.desc}</p>
                      <span className="text-xs font-bold text-primary">From PKR {dress.basePrice}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Add-ons */}
            <div>
              <label className="text-xs font-bold uppercase tracking-widest text-primary/40 block mb-3">
                2. Customize Details & Add-ons
              </label>
              <div className="space-y-2.5">
                {addonsList.map((addon) => {
                  const active = selectedAddons.includes(addon.id);
                  return (
                    <label
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer select-none transition-all ${
                        active
                          ? 'border-primary/40 bg-primary/5'
                          : 'border-primary/10 hover:border-primary/20 bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                            active
                              ? 'bg-primary border-primary text-white'
                              : 'border-primary/30 bg-white'
                          }`}
                        >
                          {active && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="text-sm font-medium text-primary">{addon.name}</span>
                      </div>
                      <span className="text-xs font-semibold text-primary/70">
                        {addon.price === 0 ? 'FREE' : `+PKR ${addon.price}`}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Result Card Column */}
          <div className="lg:col-span-5 bg-gradient-to-br from-primary to-primary-dark text-white rounded-4xl p-8 sm:p-10 flex flex-col justify-between shadow-2xl shadow-primary/20 space-y-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs uppercase tracking-widest font-semibold text-white/60">
                  Estimated Total
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider bg-white/10 px-2.5 py-1 rounded-full text-white">
                  <Sparkles className="w-3 h-3 text-accent" /> Guaranteed Fit
                </span>
              </div>

              <div>
                <div className="text-4xl sm:text-5xl font-black tracking-tight mb-1">
                  PKR {totalPrice.toLocaleString()}
                </div>
                <p className="text-xs text-white/70">Includes door-to-door pickup & doorstep delivery.</p>
              </div>

              <div className="space-y-2.5 text-xs text-white/80 border-t border-white/10 pt-4">
                <div className="flex justify-between">
                  <span className="text-white/60">Turnaround Time:</span>
                  <span className="font-bold text-white">{isExpress ? '3-4 Working Days (Express)' : currentDress.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Pickup Location:</span>
                  <span className="font-bold text-white">Your Doorstep (Karachi)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Measurement Method:</span>
                  <span className="font-bold text-white">Give Sample Shirt or Online Form</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Link
                href={{
                  pathname: '/contact',
                  query: { dress: currentDress.name, total: totalPrice },
                }}
                className="w-full bg-white text-primary hover:bg-surface py-4 rounded-full text-xs font-bold uppercase tracking-widest text-center shadow-lg transition-transform hover:scale-102 flex items-center justify-center gap-2"
              >
                <span>Book This Stitching Order</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="flex items-center justify-center gap-1.5 text-[11px] text-white/60 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                <span>100% Free alterations if fit is not satisfactory</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
