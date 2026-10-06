import React from 'react';
import { ArrowUp, Globe } from 'lucide-react';
import { STUDIO_INFO } from '../data/projectsData.ts';
import { VSPlusLogo } from './VSPlusLogo.tsx';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 bg-[#0c0e0c] text-zinc-400 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tier */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-zinc-900">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <VSPlusLogo size="lg" />
            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed font-medium">
              We create content meant to be experienced. Not simply consumed. 
              Colombo’s premier creative, cinematography, and digital agency.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 pt-2">
              <Globe className="w-3.5 h-3.5 text-[#dfff24]" />
              <span>Level 1, 36 Haig Road, Colombo 04, Sri Lanka</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-bold">
              <li>
                <a href="#home" className="hover:text-[#dfff24] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-[#dfff24] transition-colors">
                  Work (Videography & Photography)
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#dfff24] transition-colors">
                  About Studio
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#dfff24] transition-colors">
                  Capabilities & Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#dfff24] transition-colors">
                  Contact Studio
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Social */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white">
              Connect & Channels
            </h4>
            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href={STUDIO_INFO.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 hover:text-black hover:bg-[#dfff24] transition-all"
              >
                Behance
              </a>
              <a
                href={STUDIO_INFO.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 hover:text-black hover:bg-[#dfff24] transition-all"
              >
                YouTube
              </a>
              <a
                href={STUDIO_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 hover:text-black hover:bg-[#dfff24] transition-all"
              >
                Facebook
              </a>
            </div>
            <p className="text-xs font-mono text-zinc-500 pt-3">
              Direct: {STUDIO_INFO.phonePrimary} · {STUDIO_INFO.email}
            </p>
          </div>

        </div>

        {/* Bottom Tier */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <p>
            © {new Date().getFullYear()} Visual Studios Plus. All rights reserved. Made in Colombo.
          </p>

          <button
            onClick={scrollToTop}
            type="button"
            className="flex items-center gap-2 text-zinc-400 hover:text-[#dfff24] transition-colors cursor-pointer group"
          >
            <span>Back to top</span>
            <div className="p-1 rounded-full bg-zinc-900 border border-zinc-800 group-hover:border-[#dfff24]">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
};
