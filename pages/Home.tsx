
import React from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../constants';


const Home: React.FC = () => {
  const scrollToHowItWorks = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('how-it-works');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 text-center px-6">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-primary/40 animate-pulse">Established 2024</p>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.95] text-primary">
              Pakistan’s First Online <br className="hidden md:block" /> Stitching Service
            </h1>
          </div>
          
          <div className="space-y-4 max-w-xl mx-auto">
            <p className="text-xl md:text-2xl font-medium tracking-tight text-primary/60">
              Tailoring, without visiting a shop.
            </p>
            <p className="text-sm md:text-base uppercase tracking-widest text-primary/30 font-bold">
              Pickup. Stitch. Deliver.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 justify-center pt-6">
            <Link to="/contact" className="bg-primary text-white px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-black transition-all transform hover:scale-105 shadow-xl shadow-primary/10">
              Request Pickup
            </Link>
            <button 
              onClick={scrollToHowItWorks}
              className="border border-primary/20 text-primary px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-gray-50 transition-all cursor-pointer"
            >
              How It Works
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m7 13 5 5 5-5M7 6l5 5 5-5"/></svg>
        </div>
      </section>

      {/* Workflow Section */}
      <section id="how-it-works" className="py-32 bg-gray-50/30">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <div className="max-w-2xl mx-auto mb-20 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-primary tracking-tight">The Modern Process</h2>
            <p className="text-primary/50 text-lg">We’ve simplified tailoring into four effortless steps.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <StepItem icon={<Icons.Truck />} title="Doorstep Pickup" desc="We collect from your home." />
            <StepItem icon={<Icons.Pencil />} title="Design & Instructions" desc="Share your perfect fit." />
            <StepItem icon={<Icons.Scissors />} title="7-Day Stitching" desc="Premium artisanal craft." />
            <StepItem icon={<Icons.Package />} title="Doorstep Delivery" desc="Ready-to-wear results." />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-2">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Our Expertise</h2>
              <p className="text-primary/40 text-lg">Curated stitching for the modern woman.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard title="Casual Dresses" image="casual_dress.png" />
            <ServiceCard title="Fashion Dresses" image="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=600" />
            <ServiceCard title="Party Wears" image="https://images.unsplash.com/photo-1621235182902-83b5d378077c?auto=format&fit=crop&q=80&w=600" />
            <ServiceCard title="Occasional Wears" image="https://images.unsplash.com/photo-1520004434532-668416a08753?auto=format&fit=crop&q=80&w=600" />
          </div>

          <div className="mt-8 bg-gray-50 rounded-4xl p-12 flex flex-col items-center justify-center border border-gray-100 opacity-60">
            <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">Coming Soon</span>
            <h3 className="text-3xl font-bold text-primary/30">Gents Stitching</h3>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-32 border-t border-gray-100">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <div className="max-w-5xl mx-auto space-y-16">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Why Tailor Studio?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <WhyFeature title="Fully Online Process" desc="No visits required. Everything handled digitally." />
              <WhyFeature title="Fit-Focused Stitching" desc="Precision measurements for a perfect silhouette." />
              <WhyFeature title="Time-Bound Delivery" desc="Guaranteed 7-day turnaround for standard stitching." />
              <WhyFeature title="Premium Finish" desc="Artisanal quality with attention to every seam." />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 text-center px-6">
        <div className="max-w-3xl mx-auto space-y-10">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none">Stitching, <br /> made effortless.</h2>
          <Link to="/contact" className="inline-block bg-primary text-white px-12 py-6 rounded-full text-lg font-bold hover:scale-105 transition-all shadow-2xl shadow-primary/20">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

const StepItem: React.FC<{ icon: React.ReactNode, title: string, desc: string }> = ({ icon, title, desc }) => (
  <div className="step-card bg-white p-10 rounded-4xl flex flex-col items-center text-center space-y-4">
    <div className="p-4 bg-primary/5 rounded-2xl text-primary">{icon}</div>
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="text-sm text-primary/40 leading-relaxed">{desc}</p>
  </div>
);

const ServiceCard: React.FC<{ title: string, image: string }> = ({ title, image }) => (
  <div className="group relative aspect-[3/4] overflow-hidden rounded-4xl shadow-sm">
    <img src={image} alt={title} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" />
    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent flex items-end p-8">
      <h3 className="text-2xl font-bold text-white tracking-tight">{title}</h3>
    </div>
  </div>
);

const WhyFeature: React.FC<{ title: string, desc: string }> = ({ title, desc }) => (
  <div className="p-8 border-l-2 border-primary/10 hover:border-primary transition-colors space-y-2">
    <h3 className="text-xl font-bold tracking-tight">{title}</h3>
    <p className="text-primary/50 leading-relaxed">{desc}</p>
  </div>
);

export default Home;
