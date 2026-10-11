import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Truck,
  Scissors,
  PenTool,
  Package,
  ArrowRight,
  ShieldCheck,
  Clock,
  Sparkles,
  CheckCircle2,
  Calendar,
} from 'lucide-react';
import PriceEstimator from '@/components/PriceEstimator';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Hero from '@/components/Hero';

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Fullscreen Video Hero Section */}
      <Hero />

      {/* Workflow Section */}
      <section id="how-it-works" className="py-28 bg-surface">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <div className="max-w-2xl mx-auto mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest">
              <Clock className="w-3.5 h-3.5" />
              <span>Simple 4-Step Journey</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-primary tracking-tight">
              Tailoring Made Completely Effortless
            </h2>
            <p className="text-primary/60 text-base md:text-lg">
              Say goodbye to parking hassles, tailor excuses, and delayed deliveries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <StepItem
              number="01"
              icon={<Truck className="w-6 h-6" />}
              title="Doorstep Pickup"
              desc="Book online or via WhatsApp. Our rider collects your unstitched fabric from your home or office."
            />
            <StepItem
              number="02"
              icon={<PenTool className="w-6 h-6" />}
              title="Design & Fit Details"
              desc="Hand over a sample dress or share reference design photos online with our master cutting consultant."
            />
            <StepItem
              number="03"
              icon={<Scissors className="w-6 h-6" />}
              title="Artisanal Stitching"
              desc="Expert tailors craft your dress with high-density lock stitching, neat overlock, and custom finishes."
            />
            <StepItem
              number="04"
              icon={<Package className="w-6 h-6" />}
              title="Steam Pressed & Delivered"
              desc="Your outfit arrives freshly ironed, bagged, and ready to wear within 7 working days."
            />
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest">
                <Scissors className="w-3.5 h-3.5" />
                <span>Our Specialties</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight text-primary">
                Curated Craftsmanship
              </h2>
              <p className="text-primary/50 text-base md:text-lg">
                Precision tailoring customized to your body measurements and fashion taste.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest hover:text-secondary transition-colors"
            >
              <span>Custom Requirements? Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              title="Casual Dresses"
              subtitle="Daily Kurtis & 2-Piece Linen / Lawn"
              image="/images/casual_dresses.png"
            />
            <ServiceCard
              title="Fashion Cuts"
              subtitle="Modern Silhouettes, Peplums & Capes"
              image="/images/fashion_dress.png"
            />
            <ServiceCard
              title="Party & Formal"
              subtitle="Embroidered Organza, Chiffon & Silks"
              image="/images/party_dress.png"
            />
            <ServiceCard
              title="Occasional & Bridal"
              subtitle="Gowns, Lehengas & Festive Ensembles"
              image="/images/occasional_wears.png"
            />
          </div>

          {/* Coming Soon Box */}
          <div className="mt-8 bg-surface rounded-4xl p-10 flex flex-col sm:flex-row items-center justify-between border border-primary/10 gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full inline-block">
                In Development
              </span>
              <h3 className="text-2xl font-bold text-primary">
                Gents Traditional Kurta & Shalwar Kameez
              </h3>
              <p className="text-sm text-primary/60">
                Premium bespoke men's ethnic tailoring with custom cuffs, collars, and thread styling.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 px-6 py-3 rounded-full border border-primary/20 text-xs font-bold uppercase tracking-widest text-primary hover:bg-primary hover:text-white transition-all"
            >
              Get Early Notification
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Price Estimator Component */}
      <PriceEstimator />

      {/* Why Choose Us */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-black tracking-tight text-primary">
                Why Tailor Studio?
              </h2>
              <p className="text-primary/60 text-base md:text-lg">
                We combine the personal care of a traditional master tailor with the efficiency of modern technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <WhyCard
                icon={<ShieldCheck className="w-6 h-6 text-primary" />}
                title="100% Fit & Alteration Guarantee"
                desc="Never worry about a loose waist or uneven sleeves. If the fitting isn't 100% satisfactory, we alter it for free."
              />
              <WhyCard
                icon={<Clock className="w-6 h-6 text-primary" />}
                title="Fixed 7-Day Turnaround"
                desc="No more endless follow-up calls asking 'Bhai suit tayar hai?'. We honor your commitments with strict delivery schedules."
              />
              <WhyCard
                icon={<Truck className="w-6 h-6 text-primary" />}
                title="Completely Contactless Convenience"
                desc="From fabric collection to payment and delivery, everything is carried out at your doorstep."
              />
              <WhyCard
                icon={<CheckCircle2 className="w-6 h-6 text-primary" />}
                title="Boutique Finishing Standards"
                desc="Every seam is finished with professional overlocking, clean edging, and high-quality thread suited to the cloth."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* High-Impact Closing CTA */}
      <section className="py-32 bg-primary text-white text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary to-primary-dark opacity-90" />
        <div className="max-w-3xl mx-auto space-y-8 relative z-10">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-tight">
            Stitching, made effortless.
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-xl mx-auto">
            Book your pickup today and let our master artisans tailor your favourite dress.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-surface transition-all transform hover:scale-105 shadow-2xl"
            >
              <span>Schedule Pickup Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/923191004680"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-all"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function StepItem({
  number,
  icon,
  title,
  desc,
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="step-card bg-white p-8 rounded-4xl flex flex-col items-center text-center space-y-4 relative">
      <span className="absolute top-6 right-6 text-xs font-black text-primary/20 tracking-widest">
        {number}
      </span>
      <div className="p-4 bg-primary/5 rounded-2xl text-primary">{icon}</div>
      <h3 className="text-xl font-bold text-primary">{title}</h3>
      <p className="text-sm text-primary/60 leading-relaxed">{desc}</p>
    </div>
  );
}

function ServiceCard({
  title,
  subtitle,
  image,
}: {
  title: string;
  subtitle: string;
  image: string;
}) {
  return (
    <div className="group relative aspect-[3/4] overflow-hidden rounded-4xl shadow-sm border border-primary/10 bg-gray-100">
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent flex flex-col justify-end p-7 transition-opacity">
        <h3 className="text-2xl font-bold text-white tracking-tight">{title}</h3>
        <p className="text-xs text-white/80 mt-1">{subtitle}</p>
      </div>
    </div>
  );
}

function WhyCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="p-8 rounded-3xl bg-surface border border-primary/10 hover:border-primary/30 transition-all space-y-3">
      <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold tracking-tight text-primary">{title}</h3>
      <p className="text-primary/60 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
