import React, { useState, useEffect } from 'react';
import { Instagram } from 'lucide-react';
import { brandInfo } from '../data/mock';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="logo-container">
          <h1 className="text-2xl md:text-3xl font-black tracking-tight text-gray-900">
            RAGNAROK<span className="text-red-600">™</span>
          </h1>
          <p className="text-xs font-semibold text-gray-600 tracking-wider">ENERGY DRINK</p>
        </div>
        
        <a 
          href={`https://instagram.com/${brandInfo.instagram}`}
          target="_blank"
          rel="noopener noreferrer"
          className="logo-btn group hover:scale-110 transition-all duration-300"
          aria-label="Follow us on Instagram"
        >
          <img 
            src="https://customer-assets.emergentagent.com/job_ragnarok-showcase/artifacts/a0m3v8e3_Beverage_Can_Animation_A_detailed_illustration_depicts_a_wolfs_head_in_QreMTt0e.png"
            alt="Ragnarok Logo"
            className="w-16 h-16 object-contain drop-shadow-lg"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
