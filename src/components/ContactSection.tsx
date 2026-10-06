import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, ArrowUpRight, Copy, Check, MessageSquare } from 'lucide-react';
import { STUDIO_INFO } from '../data/projectsData.ts';

interface ContactSectionProps {
  onOpenProjectInquiry: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenProjectInquiry }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [colomboTime, setColomboTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Colombo is UTC+5:30
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Colombo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setColomboTime(now.toLocaleTimeString('en-US', options));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(STUDIO_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 border-b border-white/10 relative bg-zinc-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-[#dfff24]">
            ( 05 )
          </span>
          <div className="h-px w-8 bg-zinc-800" />
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
            Get In Touch
          </span>
        </div>

        {/* Big Editorial Title */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-8 space-y-4">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-black text-white tracking-tight leading-[1.05]">
              Let’s create something worth <span className="text-[#dfff24]">experiencing</span>.
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl font-normal pt-2">
              Tell us about your brand, your campaign or your space. We’ll get back to you with how we can bring it to life from our studio in Colombo 04.
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <button
              onClick={onOpenProjectInquiry}
              type="button"
              className="px-8 py-5 rounded-full bg-[#dfff24] text-black font-extrabold text-sm uppercase tracking-wider hover:bg-white transition-all shadow-xl hover:shadow-[#dfff24]/20 flex items-center gap-3 cursor-pointer group"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Direct Studio Email */}
          <div className="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-colors flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="p-3 w-fit rounded-xl bg-zinc-800 text-[#dfff24]">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                Studio Inquiries
              </h3>
              <a
                href={`mailto:${STUDIO_INFO.email}`}
                className="text-lg font-display font-bold text-white hover:text-[#dfff24] transition-colors block break-all"
              >
                {STUDIO_INFO.email}
              </a>
            </div>

            <button
              onClick={copyEmail}
              type="button"
              className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors cursor-pointer w-fit"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied to clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy email address</span>
                </>
              )}
            </button>
          </div>

          {/* Card 2: Phone & WhatsApp */}
          <div className="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-colors flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="p-3 w-fit rounded-xl bg-zinc-800 text-[#dfff24]">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                Direct Line & WhatsApp
              </h3>
              <div className="space-y-1">
                <a
                  href={`tel:${STUDIO_INFO.phonePrimary.replace(/\s+/g, '')}`}
                  className="text-lg font-display font-bold text-white hover:text-[#dfff24] transition-colors block"
                >
                  {STUDIO_INFO.phonePrimary}
                </a>
                <a
                  href={`tel:${STUDIO_INFO.phoneSecondary.replace(/\s+/g, '')}`}
                  className="text-sm font-display font-semibold text-zinc-400 hover:text-white transition-colors block"
                >
                  {STUDIO_INFO.phoneSecondary}
                </a>
              </div>
            </div>

            <p className="text-xs font-mono text-zinc-500">
              Monday – Saturday · 9:00 AM – 6:30 PM
            </p>
          </div>

          {/* Card 3: Physical Studio & Colombo Local Time */}
          <div className="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-colors flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="p-3 w-fit rounded-xl bg-zinc-800 text-[#dfff24]">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                Studio Headquarters
              </h3>
              <p className="text-sm font-medium text-white leading-relaxed">
                {STUDIO_INFO.location}
              </p>
            </div>

            <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#dfff24]" />
                <span>Colombo (GMT+5:30)</span>
              </div>
              <span className="text-white font-semibold">
                {colomboTime || '09:41 AM'}
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
