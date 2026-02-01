
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'glass-nav py-4 shadow-sm' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 relative z-50">
            <span className="text-2xl font-bold tracking-tight text-primary">Tailor Studio</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <Link to="/" className={`text-sm font-bold tracking-widest uppercase transition-colors hover:opacity-100 ${isActive('/') ? 'opacity-100' : 'opacity-40'}`}>Home</Link>
            <Link to="/about" className={`text-sm font-bold tracking-widest uppercase transition-colors hover:opacity-100 ${isActive('/about') ? 'opacity-100' : 'opacity-40'}`}>About</Link>
            <Link to="/contact" className={`text-sm font-bold tracking-widest uppercase transition-colors hover:opacity-100 ${isActive('/contact') ? 'opacity-100' : 'opacity-40'}`}>Contact</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/contact" className="hidden sm:block bg-primary text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-all shadow-lg shadow-primary/20 relative z-50">
              Book now
            </Link>

            {/* Hamburger Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative z-50 p-2 text-primary focus:outline-none"
              aria-label="Toggle Menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-primary transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`w-full h-0.5 bg-primary transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`w-full h-0.5 bg-primary transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-white transition-all duration-500 ease-in-out md:hidden ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-10 px-6 text-center">
          <Link 
            to="/" 
            className={`text-4xl font-bold tracking-tighter transition-all ${isActive('/') ? 'text-primary' : 'text-primary/30'}`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`text-4xl font-bold tracking-tighter transition-all ${isActive('/about') ? 'text-primary' : 'text-primary/30'}`}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`text-4xl font-bold tracking-tighter transition-all ${isActive('/contact') ? 'text-primary' : 'text-primary/30'}`}
          >
            Contact
          </Link>
          
          <div className="pt-10 w-full max-w-xs">
            <Link to="/contact" className="block w-full bg-primary text-white py-6 rounded-full text-sm font-bold uppercase tracking-widest text-center shadow-xl shadow-primary/20">
              Book Pickup Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
