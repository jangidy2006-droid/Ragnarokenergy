import React, { useEffect, useState } from 'react';
import { brandInfo } from '../data/mock';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="energy-particle particle-1"></div>
        <div className="energy-particle particle-2"></div>
        <div className="energy-particle particle-3"></div>
        <div className="energy-particle particle-4"></div>
      </div>

      <div className={`relative z-10 max-w-7xl mx-auto px-6 text-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        
        {/* Main product image - All 3 variants */}
        <div className="product-hero mb-8 relative">
          <img 
            src="https://customer-assets.emergentagent.com/job_ragnarok-showcase/artifacts/e59sp3kn_combine_these_in_202604141650.png"
            alt="Ragnarok Energy - All Variants"
            className="hero-can w-full max-w-4xl mx-auto animate-float"
          />
        </div>

        {/* Brand tagline */}
        <div className="tagline-container space-y-4">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 tracking-tight leading-tight">
            {brandInfo.tagline}
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-red-600 tracking-wide">
            {brandInfo.subtitle}
          </p>
          <p className="text-lg md:text-xl font-semibold text-gray-600 tracking-wider uppercase">
            Caffeinated Drink
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
