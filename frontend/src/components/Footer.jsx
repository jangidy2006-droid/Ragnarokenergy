import React from 'react';
import { Instagram } from 'lucide-react';
import { brandInfo } from '../data/mock';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Tagline */}
        <div className="text-center mb-12">
          <p className="text-3xl md:text-4xl font-black tracking-tight text-red-500 mb-2">WE WILL WIN NOT IMMEDIATELY BUT DEFINITELY

          </p>
          <p className="text-xl font-bold text-gray-300 mt-4">
            Feel The Energy Of Ragnarok
          </p>
        </div>

        {/* Brand and Social */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12 pb-8 border-b border-gray-800">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-black tracking-tight">
              RAGNAROK<span className="text-red-500">™</span>
            </h3>
            <p className="text-sm text-gray-400 mt-1 font-semibold tracking-wider">
              ENERGY DRINK
            </p>
          </div>

          {/* Social */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <a
              href={`https://instagram.com/${brandInfo.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:shadow-lg hover:scale-110 transition-all duration-300"
              aria-label="Follow us on Instagram">

              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Company Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          
          {/* Marketed By */}
          <div className="space-y-3">
            <h4 className="text-lg font-bold text-red-500 uppercase tracking-wide">
              Marketed By:
            </h4>
            <div className="text-gray-300 space-y-2">
              <p className="font-semibold text-white">Shree Maruti Enterprises</p>
              <p className="text-sm leading-relaxed">
                Jangid Bhawan, Bhopal Garh Road, Banar,<br />
                Near Railway Crossing, Jodhpur,<br />
                Rajasthan, 342027
              </p>
              <div className="space-y-1 pt-2">
                <p className="text-sm">
                  <span className="font-semibold text-white">Contact:</span> +91 9782285599
                </p>
                <p className="text-sm">
                  <span className="font-semibold text-white">Email:</span> ragnarokenergy19@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* Legal & Product Info */}
          <div className="space-y-3">
            <h4 className="text-lg font-bold text-red-500 uppercase tracking-wide">
              Product Information:
            </h4>
            <div className="text-gray-300 space-y-2 text-sm">
              <p>
                <span className="font-semibold text-white">FSSAI Lic. No:</span> 22221074003288
              </p>
              <div className="pt-3 space-y-2">
                <p className="font-bold text-yellow-400 text-base">⚠️ CONTAINS CAFFEINE</p>
                <p className="font-semibold text-orange-400">HIGH CAFFEINE (75 MG/250 ML)</p>
              </div>
              <p className="text-xs text-gray-400 pt-2 italic">
                Not recommended for children, pregnant or nursing women, and individuals sensitive to caffeine.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Ragnarok Energy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>);

};

export default Footer;