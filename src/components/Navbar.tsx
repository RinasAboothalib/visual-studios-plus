import React, { useState, useEffect } from 'react';
import { STUDIO_INFO } from '../data/projectsData.ts';
import { VSPlusLogo } from './VSPlusLogo.tsx';

interface NavbarProps {
  onOpenProjectInquiry: () => void;
  onOpenShowreel?: () => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenProjectInquiry,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');

  const navLinks = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'statement', label: 'Philosophy', href: '#statement' },
    { id: 'work', label: 'Projects', href: '#work' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'results', label: 'Results', href: '#results' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Robust section detection
      const scrollMid = window.scrollY + Math.min(window.innerHeight * 0.35, 300);
      const sectionElements = navLinks
        .map((link) => ({ id: link.id, el: document.getElementById(link.id) }))
        .filter((item): item is { id: string; el: HTMLElement } => item.el !== null);

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const item = sectionElements[i];
        if (item.el.offsetTop <= scrollMid) {
          setCurrentSection(item.id);
          return;
        }
      }
      if (window.scrollY < 200) {
        setCurrentSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-header py-3 shadow-2xl'
            : 'bg-transparent py-4 md:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Pure company logo mark only */}
            <a
              href="#home"
              className="group flex items-center focus:outline-none"
              aria-label="VS+ Homepage"
            >
              <VSPlusLogo size="md" />
            </a>

            {/* Desktop Navigation with Active Page Indicator */}
            <nav className="hidden lg:flex items-center gap-2 p-1.5 rounded-full glass-panel border border-white/10 shadow-lg">
              {navLinks.map((link) => {
                const isActive = currentSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setCurrentSection(link.id)}
                    className={`text-xs uppercase tracking-wider transition-all duration-200 px-3.5 py-1.5 rounded-full flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-[#dfff24] text-black font-extrabold shadow-md'
                        : 'text-zinc-300 hover:text-white hover:bg-white/5 font-semibold'
                    }`}
                  >
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0 animate-pulse" />
                    )}
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </nav>

            {/* Mobile Menu Trigger */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                type="button"
                aria-label="Toggle menu"
                className="px-3 py-1.5 text-xs font-bold tracking-widest text-zinc-300 hover:text-white border border-white/10 rounded-full bg-zinc-900/80"
              >
                {isMobileMenuOpen ? 'CLOSE' : 'MENU'}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-down Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl lg:hidden flex flex-col pt-24 px-6 pb-8 justify-between animate-in fade-in duration-200">
          <div className="flex flex-col space-y-6">
            <div className="text-xs tracking-wider text-zinc-400 pb-4 border-b border-zinc-800">
              Colombo 04, Sri Lanka
            </div>

            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => {
                const isActive = currentSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => {
                      setCurrentSection(link.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`text-2xl font-bold tracking-tight transition-colors flex items-center justify-between ${
                      isActive ? 'text-[#dfff24]' : 'text-zinc-200 hover:text-[#dfff24]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="text-xs uppercase bg-[#dfff24] text-black px-2 py-0.5 rounded-full font-bold">CURRENT</span>}
                  </a>
                );
              })}
            </nav>
          </div>

          <div className="pt-8 border-t border-zinc-800 flex flex-col gap-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenProjectInquiry();
              }}
              type="button"
              className="w-full py-3.5 text-center text-xs font-bold tracking-wider uppercase bg-[#dfff24] text-black rounded-full"
            >
              Start a Project
            </button>
            <p className="text-xs text-center text-zinc-500 pt-2">
              {STUDIO_INFO.email} · {STUDIO_INFO.phonePrimary}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
