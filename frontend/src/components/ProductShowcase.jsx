import React, { useEffect, useRef, useState } from 'react';
import { products } from '../data/mock';

const ProductCard = ({ product, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  // Map product images from uploaded assets
  // Thunder Citrus (Yellow), Zero Sugar (White), Ultra (Red/Black)
  const productImages = {
    1: "https://customer-assets.emergentagent.com/job_a548ea69-4ae3-4fdc-a809-179eb0171f37/artifacts/b27msdgv_IMG-20260323-WA0005.jpg", // Yellow can
    2: "https://customer-assets.emergentagent.com/job_a548ea69-4ae3-4fdc-a809-179eb0171f37/artifacts/9qk4yp47_WhatsApp%20Image%202026-04-08%20at%2015.01.26.jpeg", // White can
    3: "https://customer-assets.emergentagent.com/job_a548ea69-4ae3-4fdc-a809-179eb0171f37/artifacts/wvywev37_WhatsApp%20Image%202026-04-08%20at%2015.00.49.jpeg" // Red/Black can
  };

  return (
    <div
      ref={cardRef}
      className={`product-card group transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
        {/* Background accent */}
        <div 
          className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500"
          style={{ background: `linear-gradient(135deg, ${product.color}, ${product.accentColor})` }}
        ></div>

        {/* Product image */}
        <div className="relative z-10 product-image-container mb-6">
          <div 
            className="product-glow absolute inset-0 blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
            style={{ background: product.accentColor }}
          ></div>
          <img 
            src={productImages[product.id]}
            alt={product.name}
            className="w-full h-80 object-contain transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-700"
          />
        </div>

        {/* Product info */}
        <div className="relative z-10 text-center space-y-3">
          <h3 className="text-3xl font-black text-gray-900 tracking-tight">
            {product.name}
          </h3>
          <p className="text-sm font-bold text-gray-600 tracking-wide uppercase">
            {product.tagline}
          </p>
          <p className="text-sm text-gray-500 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Accent line */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
          style={{ background: `linear-gradient(90deg, ${product.color}, ${product.accentColor})` }}
        ></div>
      </div>
    </div>
  );
};

const ProductShowcase = () => {
  return (
    <section className="product-showcase py-20" style={{backgroundColor: '#fafafa'}}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight">
            Our <span className="text-red-600">Variants</span>
          </h2>
          <p className="text-xl text-gray-600 font-semibold">
            Choose Your Power
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
