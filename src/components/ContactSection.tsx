import React, { useState } from 'react';
import { STUDIO_INFO } from '../data/projectsData.ts';

interface ContactSectionProps {
  onOpenProjectInquiry: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenProjectInquiry }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(STUDIO_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 border-b border-white/10 relative glass-panel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-12">
          <span className="text-xs uppercase tracking-widest text-[#dfff24] font-bold">
            ( 07 )
          </span>
          <div className="h-px w-8 bg-zinc-800" />
          <span className="text-xs uppercase tracking-widest text-zinc-400 font-semibold">
            Get In Touch
          </span>
        </div>

        {/* Big Editorial Title */}
        <div className="space-y-4 mb-16 max-w-4xl">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full glass-card border border-white/10 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#dfff24] animate-pulse" />
            <span className="text-xs uppercase tracking-widest text-[#dfff24] font-bold">
              Start Your Business Transformation
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.02]">
            LET’S MAKE SOMETHING <br />
            <span className="text-[#dfff24]">MATTER</span>.
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 max-w-2xl font-normal pt-2">
            Tell us about your brand, your campaign or your digital vision. We take projects for ambitious businesses and deliver measurable results from our studio in Colombo 04.
          </p>
        </div>

        {/* Direct Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Email */}
          <div className="p-8 rounded-3xl glass-card border border-white/10 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs uppercase text-[#dfff24] font-bold block mb-2 tracking-wider">
                // Direct Email
              </span>
              <p className="text-xl font-bold text-white break-all">
                {STUDIO_INFO.email}
              </p>
              <p className="text-xs text-zinc-400 mt-1">
                Typical reply within 4 business hours
              </p>
            </div>

            <button
              onClick={copyEmail}
              className="px-4 py-2.5 rounded-full glass-panel border border-white/10 text-xs font-semibold text-zinc-300 hover:text-white transition-colors cursor-pointer self-start"
            >
              {copiedEmail ? 'COPIED TO CLIPBOARD' : 'COPY EMAIL ADDRESS'}
            </button>
          </div>

          {/* Card 2: Phone */}
          <div className="p-8 rounded-3xl glass-card border border-white/10 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs uppercase text-[#dfff24] font-bold block mb-2 tracking-wider">
                // Studio Hotline
              </span>
              <p className="text-xl font-bold text-white">
                {STUDIO_INFO.phonePrimary}
              </p>
              <p className="text-xs text-zinc-400 mt-1">
                Direct Line: {STUDIO_INFO.phoneSecondary}
              </p>
            </div>

            <a
              href={`tel:${STUDIO_INFO.phonePrimary.replace(/[^0-9+]/g, '')}`}
              className="px-4 py-2.5 rounded-full glass-panel border border-white/10 text-xs font-semibold text-zinc-300 hover:text-white transition-colors self-start"
            >
              CALL DIRECTLY →
            </a>
          </div>

          {/* Card 3: Studio Location */}
          <div className="p-8 rounded-3xl glass-card border border-white/10 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs uppercase text-[#dfff24] font-bold block mb-2 tracking-wider">
                // Studio Headquarters
              </span>
              <p className="text-base font-bold text-white leading-snug">
                {STUDIO_INFO.location}
              </p>
              <p className="text-xs text-zinc-400 mt-1">
                Western Province, Sri Lanka
              </p>
            </div>

            <button
              onClick={onOpenProjectInquiry}
              className="px-5 py-2.5 rounded-full bg-[#dfff24] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-white transition-colors self-start shadow-md cursor-pointer"
            >
              Start Project Brief →
            </button>
          </div>

        </div>

        {/* Social Channels Strip with High-Fidelity SVG Icons */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#dfff24]" />
            <span className="text-xs uppercase tracking-wider text-zinc-300 font-bold">
              Follow &amp; Connect On Direct Channels
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* YouTube */}
            <a
              href="https://www.youtube.com/@visualstudiosplus"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass-card border border-white/10 hover:border-[#dfff24] text-zinc-300 hover:text-[#dfff24] flex items-center justify-center transition-all hover:scale-110"
              aria-label="YouTube Channel"
              title="YouTube: @visualstudiosplus"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/visualstudiosplus"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass-card border border-white/10 hover:border-[#dfff24] text-zinc-300 hover:text-[#dfff24] flex items-center justify-center transition-all hover:scale-110"
              aria-label="Instagram Profile"
              title="Instagram: @visualstudiosplus"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.79-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/company/visualstudiosplus"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass-card border border-white/10 hover:border-[#dfff24] text-zinc-300 hover:text-[#dfff24] flex items-center justify-center transition-all hover:scale-110"
              aria-label="LinkedIn Profile"
              title="LinkedIn: Visual Studios Plus"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            {/* Behance */}
            <a
              href="https://behance.net/visualstudiosplus"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass-card border border-white/10 hover:border-[#dfff24] text-zinc-300 hover:text-[#dfff24] flex items-center justify-center transition-all hover:scale-110"
              aria-label="Behance Portfolio"
              title="Behance: @visualstudiosplus"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-4.976 3-3.951 0-5.75-2.793-5.75-6.042 0-3.666 2.125-5.958 5.625-5.958 3.75 0 5.375 2.5 5.375 5.708 0 .458-.042.875-.083 1.292h-8.167c.125 2.125 1.5 3.375 3.5 3.375 1.458 0 2.458-.667 2.875-1.375h1.6zm-5.083-6.208c-1.75 0-2.833 1.083-3.042 2.708h5.958c-.083-1.625-1.167-2.708-2.916-2.708zm-11.643-5.792h-7v14h7.125c3.5 0 5.875-1.75 5.875-4.875 0-1.833-.917-3.25-2.583-3.917 1.292-.583 2.167-1.792 2.167-3.417 0-2.958-2.208-4.791-5.584-4.791zm-4.375 2.458h3.917c1.792 0 2.917.875 2.917 2.292 0 1.542-1.25 2.417-3.042 2.417h-3.792v-4.709zm0 6.75h4.167c2.042 0 3.375 1 3.375 2.708 0 1.833-1.417 2.834-3.5 2.834h-4.042v-5.542z"/>
              </svg>
            </a>

            {/* Email */}
            <a
              href={`mailto:${STUDIO_INFO.email}`}
              className="w-10 h-10 rounded-full glass-card border border-white/10 hover:border-[#dfff24] text-zinc-300 hover:text-[#dfff24] flex items-center justify-center transition-all hover:scale-110"
              aria-label="Direct Email"
              title={`Email: ${STUDIO_INFO.email}`}
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
