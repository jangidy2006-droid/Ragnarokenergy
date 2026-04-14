import React, { useEffect, useRef, useState } from 'react';
import { brandInfo } from '../data/mock';
import { Zap, Target, Flame } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Intense Energy",
      description: "Fuel your day with unmatched power"
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: "Sharp Focus",
      description: "Stay locked in on what matters"
    },
    {
      icon: <Flame className="w-10 h-10" />,
      title: "Raw Power",
      description: "Unleash your inner strength"
    }
  ];

  return (
    <section ref={sectionRef} className="about-section py-24 relative overflow-hidden" style={{backgroundColor: '#fafafa'}}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-20"></div>

      <div className={`relative z-10 max-w-5xl mx-auto px-6 text-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        
        <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 tracking-tight">
          Built for the <span className="text-red-600">Bold</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-16 max-w-3xl mx-auto font-medium">
          {brandInfo.description}
        </p>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`feature-card bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-red-600 mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
