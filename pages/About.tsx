
import React from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-48 pb-32 bg-white">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.95] text-primary">
              Get a Stitched Dress in the Modern Way
            </h1>
            <p className="text-xl md:text-2xl text-primary/40 font-medium tracking-tight max-w-2xl mx-auto">
              Designing the future of fashion convenience through Pakistan's first fully online stitching service.
            </p>
          </div>

          <div className="bg-primary rounded-5xl p-12 md:p-20 text-white text-left shadow-2xl shadow-primary/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Approach</span>
                <h3 className="text-2xl font-bold tracking-tight">Online-first.</h3>
                <p className="text-sm text-white/60 leading-relaxed">Eliminating the need for physical store visits entirely. We are where you are.</p>
              </div>
              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Promise</span>
                <h3 className="text-2xl font-bold tracking-tight">Convenience.</h3>
                <p className="text-sm text-white/60 leading-relaxed">Doorstep pickup and delivery for every client, every time.</p>
              </div>
              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Craft</span>
                <h3 className="text-2xl font-bold tracking-tight">Precision.</h3>
                <p className="text-sm text-white/60 leading-relaxed">Modern women deserve a fit that feels bespoke and professionally handled.</p>
              </div>
            </div>
          </div>

          {/* <div className="pt-12">
            <Link to="/contact" className="bg-primary text-white px-12 py-6 rounded-full text-lg font-bold hover:scale-105 transition-all shadow-2xl shadow-primary/20 inline-flex items-center gap-3">
              Request Your First Pickup <Icons.ArrowRight /> */}
            {/* </Link> */}
          </div>
        </div>
      </div>
    // </div>
  );
};

export default About;
