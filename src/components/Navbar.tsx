import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Globe } from 'lucide-react';
import { STUDIO_INFO } from '../data/projectsData.ts';
import { VSPlusLogo } from './VSPlusLogo.tsx';

interface NavbarProps {
  onOpenProjectInquiry: () => void;
  onOpenShowreel: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenProjectInquiry,
  onOpenShowreel,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0c0e0c]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
            : 'bg-transparent py-5 md:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Pure company logo mark only - no text */}
            <a
              href="#"
              className="group flex items-center focus:outline-none"
              aria-label="VS+ Homepage"
            >
              <VSPlusLogo size="md" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-bold text-zinc-300 hover:text-white transition-colors relative group py-1"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#dfff24] transition-all duration-200 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={onOpenShowreel}
                type="button"
                className="text-xs font-semibold tracking-wide uppercase px-3.5 py-2 text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-600 rounded-full transition-all flex items-center gap-1.5"
              >
                <span className="w-2 h-2 rounded-full bg-[#dfff24] animate-pulse" />
                Showreel
              </button>

              <button
                onClick={onOpenProjectInquiry}
                type="button"
                className="text-xs font-bold tracking-wider uppercase px-4 py-2.5 bg-[#dfff24] text-black hover:bg-white rounded-full transition-all duration-200 flex items-center gap-1.5 shadow-sm hover:shadow-[#dfff24]/20"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Hamburger */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onOpenProjectInquiry}
                type="button"
                className="text-xs font-bold px-3 py-1.5 bg-[#dfff24] text-black rounded-full"
              >
                Inquire
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                type="button"
                aria-label="Toggle menu"
                className="p-2 text-zinc-300 hover:text-white border border-zinc-800 rounded-lg"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-white" />
                ) : (
                  <Menu className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-down Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0c0e0c]/98 backdrop-blur-xl lg:hidden flex flex-col pt-24 px-6 pb-8 justify-between animate-in fade-in duration-200">
          <div className="flex flex-col space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 pb-4 border-b border-zinc-800">
              <Globe className="w-4 h-4 text-[#dfff24]" />
              <span>Colombo 04, Sri Lanka</span>
            </div>

            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-display font-semibold text-zinc-200 hover:text-[#dfff24] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-8 border-t border-zinc-800/80 flex flex-col gap-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenShowreel();
              }}
              type="button"
              className="w-full py-3 text-center text-sm font-semibold text-white border border-zinc-700 rounded-full"
            >
              Play Agency Showreel
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenProjectInquiry();
              }}
              type="button"
              className="w-full py-3.5 text-center text-sm font-bold bg-[#dfff24] text-black rounded-full flex items-center justify-center gap-2"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <p className="text-xs text-center text-zinc-500 pt-2 font-mono">
              {STUDIO_INFO.email} · {STUDIO_INFO.phonePrimary}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
