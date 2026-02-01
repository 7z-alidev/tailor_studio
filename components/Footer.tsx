
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary pt-32 pb-16 text-center text-white">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-4 tracking-tight">Tailor Studio</h2>
        <p className="text-lg opacity-60 font-medium mb-16 max-w-md">Pakistan’s 1st Online Stitching Service Providers</p>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-sm font-bold uppercase tracking-[0.2em] mb-20">
          <Link to="/" className="opacity-60 hover:opacity-100 transition-opacity">Home</Link>
          <Link to="/about" className="opacity-60 hover:opacity-100 transition-opacity">About</Link>
          <Link to="/contact" className="opacity-60 hover:opacity-100 transition-opacity">Contact</Link>
          <a href="#" className="opacity-60 hover:opacity-100 transition-opacity">Instagram</a>
        </div>
        
        <div className="pt-12 border-t border-white/10 w-full flex flex-col md:flex-row justify-between items-center text-xs opacity-40 font-bold uppercase tracking-widest gap-6">
          <p>© {new Date().getFullYear()} Tailor Studio. Pakistan.</p>
          <p>The Future of Fashion is Local.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
