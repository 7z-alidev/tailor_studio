import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

const reviews = [
  {
    name: 'Ayesha M.',
    area: 'Clifton, Karachi',
    dress: '3-Piece Eid Luxury Suit',
    review:
      'I was hesitant to trust an online tailoring service with an expensive fabric, but Tailor Studio exceeded my expectations! The neck piping and sleeve cuts were spot on. Delivered right on the 7th day.',
    rating: 5,
  },
  {
    name: 'Dr. Fatima K.',
    area: 'Gulshan-e-Iqbal, Karachi',
    dress: 'Casual Kurtis (Batch of 4)',
    review:
      'As a doctor I literally have zero hours to visit bazaar tailors and bargain. Tailor Studio rider picked up my sample shirt from my clinic and delivered all 4 stitched perfectly. A total game changer!',
    rating: 5,
  },
  {
    name: 'Zainab Tariq',
    area: 'DHA Phase 6, Karachi',
    dress: 'Party Wear Organza Gown',
    review:
      'Flawless stitching. The finishing and invisible zipper work on my sister’s wedding outfit was comparable to top designer boutiques. Will definitely be ordering regularly.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-2xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest">
            <Quote className="w-3.5 h-3.5 text-secondary" />
            <span>Customer Experiences</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-primary">
            Loved by Modern Pakistani Women
          </h2>
          <p className="text-primary/60 text-base md:text-lg">
            See how we have eliminated the hassle of tailor visits for hundreds of families across Karachi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((item, idx) => (
            <div
              key={idx}
              className="bg-surface p-8 rounded-4xl border border-primary/10 flex flex-col justify-between hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 relative group"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-500">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>
                <p className="text-primary/80 text-sm leading-relaxed italic">
                  "{item.review}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-primary/10 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-primary flex items-center gap-1.5">
                    {item.name}
                    <CheckCircle2 className="w-3.5 h-3.5 text-secondary" />
                  </h4>
                  <p className="text-xs text-primary/50">{item.area}</p>
                </div>
                <span className="text-[11px] font-semibold text-secondary bg-primary/5 px-2.5 py-1 rounded-full">
                  {item.dress}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
