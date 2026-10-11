'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  Phone,
  MapPin,
  MessageCircle,
  Calendar,
  Clock,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Truck,
} from 'lucide-react';

function ContactFormContent() {
  const searchParams = useSearchParams();
  const prefilledDress = searchParams ? searchParams.get('dress') || '' : '';
  const prefilledTotal = searchParams ? searchParams.get('total') || '' : '';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    dressType: prefilledDress || '2-Piece Suit (Shirt + Trouser)',
    quantity: '1',
    pickupDate: '',
    timeSlot: 'Morning (10:00 AM - 1:00 PM)',
    measurementMethod: 'Give sample fitting garment to rider',
    instructions: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [orderRef, setOrderRef] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate instant secure processing
    setTimeout(() => {
      const generatedRef = 'TS-' + Math.floor(100000 + Math.random() * 900000);
      setOrderRef(generatedRef);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const directWhatsAppLink =
    'https://wa.me/923191004680?text=' +
    encodeURIComponent(
      `Hello Tailor Studio, I want to book a doorstep stitching pickup for ${formData.quantity} suit(s) (${formData.dressType}).`
    );

  return (
    <div className="pt-36 pb-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Contact details & Direct Lines */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest">
                <Truck className="w-3.5 h-3.5" />
                <span>Doorstep Collection Service</span>
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-primary leading-[1.0]">
                Let’s Get <br /> Started.
              </h1>
              <p className="text-lg text-primary/60 max-w-md font-medium leading-relaxed">
                Schedule a pickup today and experience the new standard of tailoring from the comfort of your home.
              </p>
            </div>

            {/* Direct contact avenues */}
            <div className="space-y-8 bg-surface p-8 rounded-4xl border border-primary/10">
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary/40 block">
                  Customer Support Hotline
                </span>
                <a
                  href="tel:+923191004680"
                  className="flex items-center gap-3 text-2xl font-bold text-primary hover:text-secondary transition-colors"
                >
                  <Phone className="w-5 h-5 text-secondary" />
                  <span>+92 319 1004 680</span>
                </a>
              </div>

              <div className="space-y-1.5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary/40 block">
                  Workshop & Headquarters
                </span>
                <div className="flex items-center gap-3 text-lg font-bold text-primary">
                  <MapPin className="w-5 h-5 text-secondary shrink-0" />
                  <span>Malir, Karachi, Pakistan</span>
                </div>
              </div>

              <div className="space-y-1.5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary/40 block">
                  Turnaround Guarantee
                </span>
                <div className="flex items-center gap-3 text-sm font-semibold text-primary/70">
                  <Clock className="w-4 h-4 text-secondary shrink-0" />
                  <span>7 Working Days (Standard) / 3 Days (Express)</span>
                </div>
              </div>
            </div>

            {/* WhatsApp Direct Action */}
            <div className="space-y-3">
              <span className="text-xs font-semibold text-primary/60 block">Prefer to message on WhatsApp?</span>
              <a
                href={directWhatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba59] text-white px-8 py-4 rounded-2xl text-sm font-bold uppercase tracking-wider transition-all shadow-lg shadow-emerald-500/20"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Instant WhatsApp Booking</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Schedule Booking Card */}
          <div className="lg:col-span-7 bg-surface p-8 sm:p-12 md:p-14 rounded-5xl border border-primary/10 shadow-xl shadow-primary/5">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center space-y-6">
                <div className="w-20 h-20 bg-primary text-white rounded-3xl flex items-center justify-center shadow-xl shadow-primary/20">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <span className="text-xs uppercase font-bold tracking-[0.2em] text-secondary">
                    Pickup Scheduled
                  </span>
                  <h2 className="text-3xl font-black text-primary">Request Confirmed!</h2>
                  <p className="text-sm font-mono text-primary/60 bg-primary/5 py-1.5 px-4 rounded-full inline-block">
                    Reference ID: <strong className="text-primary">{orderRef}</strong>
                  </p>
                </div>
                <p className="text-primary/70 text-sm max-w-md leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>! Our Karachi dispatch team will call or WhatsApp you at <strong>{formData.phone}</strong> shortly to coordinate the rider's doorstep arrival.
                </p>

                <div className="p-6 bg-white rounded-3xl border border-primary/10 text-left w-full space-y-2 text-xs text-primary/70">
                  <div className="font-bold text-primary text-sm mb-1">What to prepare for the rider:</div>
                  <div>1. Your unstitched fabric cloth.</div>
                  <div>2. A sample fitting garment (kameez/shalwar) for exact sizing.</div>
                  <div>3. Any specific lace, button, or piping materials.</div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      phone: '',
                      address: '',
                      dressType: '2-Piece Suit (Shirt + Trouser)',
                      quantity: '1',
                      pickupDate: '',
                      timeSlot: 'Morning (10:00 AM - 1:00 PM)',
                      measurementMethod: 'Give sample fitting garment to rider',
                      instructions: '',
                    });
                  }}
                  className="text-primary font-bold text-xs uppercase tracking-widest hover:underline pt-4"
                >
                  Schedule Another Pickup
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-primary tracking-tight">
                    Schedule Doorstep Pickup
                  </h2>
                  <p className="text-xs text-primary/60 mt-1">
                    Fill out your address and clothing details below. No upfront payment required.
                  </p>
                </div>

                {prefilledTotal && (
                  <div className="bg-primary/5 border border-primary/15 rounded-2xl p-4 flex items-center justify-between text-xs text-primary">
                    <span className="font-medium">Selected Attire: <strong>{formData.dressType}</strong></span>
                    <span className="font-bold bg-primary text-white px-2.5 py-1 rounded-lg">Estimated: PKR {prefilledTotal}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-widest text-primary/50 block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white rounded-2xl border border-primary/15 px-4 py-3.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="e.g. Fatima Ali"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-widest text-primary/50 block">
                      Contact Phone (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white rounded-2xl border border-primary/15 px-4 py-3.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="+92 3XX XXXXXXX"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-primary/50 block">
                    Complete Address (Karachi) *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full bg-white rounded-2xl border border-primary/15 px-4 py-3.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="House/Apartment #, Street, Area (e.g. Gulshan, DHA, Malir)"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-widest text-primary/50 block">
                      Attire Category
                    </label>
                    <select
                      value={formData.dressType}
                      onChange={(e) => setFormData({ ...formData, dressType: e.target.value })}
                      className="w-full bg-white rounded-2xl border border-primary/15 px-4 py-3.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all cursor-pointer"
                    >
                      <option value="Single Kurti / Shirt">Single Kurti / Shirt</option>
                      <option value="2-Piece Suit (Shirt + Trouser)">2-Piece Suit (Shirt + Trouser)</option>
                      <option value="3-Piece Complete Suit">3-Piece Complete Suit</option>
                      <option value="Luxury / Party Wear">Luxury / Party Wear</option>
                      <option value="Bridal / Occasional Gown">Bridal / Occasional Gown</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-widest text-primary/50 block">
                      Number of Outfits
                    </label>
                    <select
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full bg-white rounded-2xl border border-primary/15 px-4 py-3.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all cursor-pointer"
                    >
                      <option value="1">1 Dress</option>
                      <option value="2">2 Dresses</option>
                      <option value="3">3 Dresses</option>
                      <option value="4+">4 or More Dresses</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-widest text-primary/50 block">
                      Measurement Preference
                    </label>
                    <select
                      value={formData.measurementMethod}
                      onChange={(e) => setFormData({ ...formData, measurementMethod: e.target.value })}
                      className="w-full bg-white rounded-2xl border border-primary/15 px-4 py-3.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all cursor-pointer"
                    >
                      <option value="Give sample fitting garment to rider">Give sample dress to rider</option>
                      <option value="Send custom measurements on WhatsApp">Send size chart via WhatsApp</option>
                      <option value="Standard Size (Small / Medium / Large)">Standard Size (S / M / L)</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-widest text-primary/50 block">
                      Preferred Pickup Time Slot
                    </label>
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full bg-white rounded-2xl border border-primary/15 px-4 py-3.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all cursor-pointer"
                    >
                      <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                      <option value="Afternoon (2:00 PM - 5:00 PM)">Afternoon (2:00 PM - 5:00 PM)</option>
                      <option value="Evening (6:00 PM - 9:00 PM)">Evening (6:00 PM - 9:00 PM)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-primary/50 block">
                    Special Stitching Notes / Requests
                  </label>
                  <textarea
                    rows={3}
                    value={formData.instructions}
                    onChange={(e) => setFormData({ ...formData, instructions: e.target.value })}
                    className="w-full bg-white rounded-2xl border border-primary/15 px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                    placeholder="e.g. Boat neckline, straight pants with bottom slits, or specific lace placement"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary-dark text-white py-5 rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Registering Pickup...</span>
                  ) : (
                    <>
                      <span>Confirm Doorstep Pickup Request</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-primary/60 pt-2 text-center">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>No prepayment needed. Pay via Cash on Delivery or Online after delivery.</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="pt-48 pb-32 text-center text-primary font-bold">Loading booking scheduler...</div>}>
      <ContactFormContent />
    </Suspense>
  );
}
