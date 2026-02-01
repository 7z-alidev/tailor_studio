
import React, { useState } from 'react';
import { Icons } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-48 pb-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-16">
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-primary">Let’s Get <br /> Started.</h1>
              <p className="text-xl text-primary/40 max-w-md font-medium">Schedule a pickup today and experience the new standard of tailoring.</p>
            </div>
            
            <div className="space-y-10">
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary/30">Direct Line</span>
                <a href="tel:+923191004680" className="block text-3xl font-bold hover:text-secondary transition-colors">+92 319 1004 680</a>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary/30">Headquarters</span>
                <p className="text-3xl font-bold">Malir, Karachi</p>
              </div>
            </div>

            <a 
              href="https://wa.me/923191004680" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-primary/10"
            >
              <Icons.WhatsApp /> Chat on WhatsApp
            </a>
          </div>

          <div className="bg-gray-50 p-12 md:p-16 rounded-5xl border border-gray-100">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-20 text-center space-y-6 animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center">
                  <Icons.Check />
                </div>
                <h2 className="text-2xl font-bold">Request Sent</h2>
                <p className="text-primary/50 text-sm max-w-xs">We will contact you shortly to confirm your doorstep pickup time.</p>
                <button onClick={() => setSubmitted(false)} className="text-primary font-bold text-xs uppercase tracking-widest hover:opacity-70">New Request</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-primary/30">Your Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-transparent border-b border-primary/10 py-4 text-xl font-medium focus:outline-none focus:border-primary transition-colors"
                    placeholder="Enter full name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-primary/30">Contact Number</label>
                  <input 
                    type="tel" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-transparent border-b border-primary/10 py-4 text-xl font-medium focus:outline-none focus:border-primary transition-colors"
                    placeholder="+92 XXX XXXXXXX"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-primary/30">Requirements</label>
                  <textarea 
                    rows={2}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-transparent border-b border-primary/10 py-4 text-xl font-medium focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Briefly describe your items"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-primary text-white py-6 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3"
                >
                  Request Pickup <Icons.ArrowRight />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
