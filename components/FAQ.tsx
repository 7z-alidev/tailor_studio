'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: 'How do you take my measurements without me visiting a shop?',
    a: 'It’s effortless! When our rider arrives at your doorstep to collect your fabric, simply provide a best-fitting sample garment (kameez / shalwar / trouser). Our master tailors copy the exact silhouette. Alternatively, you can send custom measurements or photos via WhatsApp.',
  },
  {
    q: 'What is the turnaround time for stitching?',
    a: 'Our standard delivery guarantee is 7 working days from the pickup date. We also offer an express delivery service (3-4 days) for urgent occasions upon request.',
  },
  {
    q: 'What if the dress does not fit properly or needs adjustments?',
    a: 'We offer a 100% Free Fit Guarantee. If any alteration is needed, our rider will collect the piece from your house, execute the modifications in our workshop, and return it to you at no extra cost.',
  },
  {
    q: 'Which areas do you provide doorstep pickup and delivery in?',
    a: 'We currently cover all major sectors across Karachi, including Malir, Gulshan-e-Iqbal, Johar, Clifton, DHA, PECHS, North Nazimabad, and Bahadurabad. Nationwide service is expanding soon.',
  },
  {
    q: 'How does payment work?',
    a: 'You can pay Cash on Delivery (COD) once your neatly packaged and ironed dresses are handed back to you, or make an online bank transfer / JazzCash / EasyPaisa transfer upon booking confirmation.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-surface border-t border-primary/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-2xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5 text-secondary" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-primary">
            Frequently Asked Questions
          </h2>
          <p className="text-primary/60 text-base">
            Everything you need to know about Pakistan’s first online doorstep stitching service.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl border border-primary/10 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 font-bold text-primary text-base md:text-lg focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <div
                    className={`w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-primary text-white' : 'text-primary'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-sm md:text-base text-primary/70 leading-relaxed border-t border-primary/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
