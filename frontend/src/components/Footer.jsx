import React from 'react';
import { Instagram } from 'lucide-react';
import { brandInfo } from '../data/mock';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-black tracking-tight">
              RAGNAROK<span className="text-red-500">™</span>
            </h3>
            <p className="text-sm text-gray-400 mt-1 font-semibold tracking-wider">
              ENERGY DRINK
            </p>
          </div>

          {/* Tagline */}
          <div className="text-center">
            <p className="text-lg font-bold text-gray-300">
              Unleash the Wolf
            </p>
          </div>

          {/* Social */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <a 
              href={`https://instagram.com/${brandInfo.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold"
            >
              <Instagram className="w-5 h-5" />
              <span>@{brandInfo.instagram}</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Ragnarok Energy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
