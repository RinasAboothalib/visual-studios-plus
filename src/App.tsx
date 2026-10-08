import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { Navbar, NavPageId } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { BrandStatementSequence } from './components/BrandStatementSequence.tsx';
import { HomeFeaturedWork } from './components/HomeFeaturedWork.tsx';
import { HomeServicesTeaser } from './components/HomeServicesTeaser.tsx';
import { HomeCtaSection } from './components/HomeCtaSection.tsx';
import { WorkSection } from './components/WorkSection.tsx';
import { ReelWallSection } from './components/ReelWallSection.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { ResultsSection } from './components/ResultsSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { WebsiteBackgroundLogo } from './components/WebsiteBackgroundLogo.tsx';
import { VideoShowreelModal } from './components/VideoShowreelModal.tsx';
import { ProjectInquiryModal } from './components/ProjectInquiryModal.tsx';
import { CaseStudyModal } from './components/CaseStudyModal.tsx';
import { Project } from './types/index.ts';

const VALID_PAGES: NavPageId[] = ['home', 'work', 'services', 'about', 'contact'];

export default function App() {
  const [activePage, setActivePage] = useState<NavPageId>(() => {
    const hash = window.location.hash.replace('#', '') as NavPageId;
    return VALID_PAGES.includes(hash) ? hash : 'home';
  });

  const [isShowreelOpen, setIsShowreelOpen] = useState(false);
  const [isProjectInquiryOpen, setIsProjectInquiryOpen] = useState(false);
  const [selectedCaseStudyProject, setSelectedCaseStudyProject] = useState<Project | null>(null);

  // Initialize Lenis for award-winning fluid momentum smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    (window as any).__lenis = lenis;

    let animationFrameId: number;
    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      delete (window as any).__lenis;
    };
  }, []);

  // Synchronize hash with page state & support browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as NavPageId;
      if (VALID_PAGES.includes(hash)) {
        setActivePage(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (pageId: NavPageId) => {
    setActivePage(pageId);
    window.location.hash = pageId;

    const lenis = (window as any).__lenis;
    if (lenis) {
      lenis.scrollTo(0, { duration: 0.8 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0e0c] text-zinc-100 flex flex-col selection:bg-[#dfff24] selection:text-black font-sans relative">
      
      {/* 00: AMBIENT FULL-WEBSITE LOGO BACKGROUND WATERMARK */}
      <WebsiteBackgroundLogo />

      {/* 01: Minimal Sticky Navigation with Active Destination Indicator */}
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenProjectInquiry={() => setIsProjectInquiryOpen(true)}
        onOpenShowreel={() => setIsShowreelOpen(true)}
      />

      {/* 02: DEDICATED SEPARATED PAGE ARCHITECTURE — ZERO REPETITION */}
      <main className="flex-1 relative z-10">
        
        {/* ===================== PAGE: HOME ===================== */}
        {activePage === 'home' && (
          <div key="page-home" className="animate-in fade-in duration-500">
            {/* HERO: Cinematic Opening with Visible Video & Line-by-Line Reveal */}
            <Hero
              onOpenShowreel={() => setIsShowreelOpen(true)}
              onOpenProjectInquiry={() => setIsProjectInquiryOpen(true)}
              onNavigate={handleNavigate}
            />

            {/* AGENCY OPERATING PHILOSOPHY AUTO-SLIDING SLIDESHOW */}
            <BrandStatementSequence />

            {/* CURATED FEATURED WORK PREVIEW */}
            <HomeFeaturedWork
              onSelectProject={(project) => setSelectedCaseStudyProject(project)}
              onNavigateToProjects={() => handleNavigate('work')}
            />

            {/* CAPABILITIES & SERVICES OVERVIEW TEASER */}
            <HomeServicesTeaser
              onNavigateToServices={() => handleNavigate('services')}
              onOpenProjectInquiry={() => setIsProjectInquiryOpen(true)}
            />

            {/* VERIFIABLE BUSINESS IMPACTS SLIDESHOW WITH CAMPAIGN IMAGES */}
            <ResultsSection onOpenProjectInquiry={() => setIsProjectInquiryOpen(true)} />

            {/* STRONG HOME CTA */}
            <HomeCtaSection
              onNavigateToContact={() => handleNavigate('contact')}
              onOpenProjectInquiry={() => setIsProjectInquiryOpen(true)}
            />

            <Footer onNavigate={handleNavigate} />
          </div>
        )}

        {/* ===================== PAGE: PROJECTS / WORK ===================== */}
        {activePage === 'work' && (
          <div key="page-work" className="animate-in fade-in duration-500">
            {/* Dedicated Portfolio Archive Header */}
            <div className="pt-32 pb-10 border-b border-white/10 relative overflow-hidden bg-gradient-to-b from-[#0c0e0c] to-[#0c0e0c]/90">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-card border border-white/10 text-xs font-bold text-[#dfff24] mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#dfff24] animate-pulse" />
                  <span>COMMERCIAL WORK &amp; CAMPAIGN ARCHIVE</span>
                </div>
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-tight">
                  OUR WORK &amp; <span className="text-[#dfff24]">PROJECTS</span>.
                </h1>
                <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mt-4 font-normal leading-relaxed">
                  High-impact commercial films, viral social campaigns, FMCG storytelling, and brand imagery created by Visual Studios Plus for market-leading brands.
                </p>
              </div>
            </div>

            {/* Full Interactive Projects Grid with Category Filters & Search */}
            <WorkSection onOpenProjectInquiry={() => setIsProjectInquiryOpen(true)} />

            {/* Dual-Row Vertical 9:16 Social Reel Wall */}
            <ReelWallSection />

            <Footer onNavigate={handleNavigate} />
          </div>
        )}

        {/* ===================== PAGE: SERVICES ===================== */}
        {activePage === 'services' && (
          <div key="page-services" className="animate-in fade-in duration-500">
            {/* Dedicated Services Header */}
            <div className="pt-32 pb-10 border-b border-white/10 relative overflow-hidden bg-gradient-to-b from-[#0c0e0c] to-[#0c0e0c]/90">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-card border border-white/10 text-xs font-bold text-[#dfff24] mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#dfff24] animate-pulse" />
                  <span>END-TO-END CAPABILITIES &amp; PRODUCTION DISCIPLINES</span>
                </div>
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-tight">
                  STUDIO <span className="text-[#dfff24]">SERVICES</span>.
                </h1>
                <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mt-4 font-normal leading-relaxed">
                  6 core studio disciplines engineered under one roof in Colombo 04. Fast turnarounds, broadcast color grading, and organic social dominance.
                </p>
              </div>
            </div>

            {/* Full 6-Discipline Editorial Architecture & Inquire Triggers */}
            <ServicesSection onOpenProjectInquiry={() => setIsProjectInquiryOpen(true)} />

            <Footer onNavigate={handleNavigate} />
          </div>
        )}

        {/* ===================== PAGE: ABOUT ===================== */}
        {activePage === 'about' && (
          <div key="page-about" className="animate-in fade-in duration-500">
            {/* Dedicated About Header */}
            <div className="pt-32 pb-10 border-b border-white/10 relative overflow-hidden bg-gradient-to-b from-[#0c0e0c] to-[#0c0e0c]/90">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-card border border-white/10 text-xs font-bold text-[#dfff24] mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#dfff24] animate-pulse" />
                  <span>STUDIO PROFILE &amp; CORE MANIFESTO</span>
                </div>
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-tight">
                  ABOUT <span className="text-[#dfff24]">VISUAL STUDIOS PLUS</span>.
                </h1>
                <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mt-4 font-normal leading-relaxed">
                  Engineered in Colombo, built for global attention. Discover our founding story, studio culture, in-house capabilities, and trusted client partnerships.
                </p>
              </div>
            </div>

            {/* Full Studio Heritage, Mission, Stats & Brand Partners Wall */}
            <AboutSection 
              onOpenProjectInquiry={() => setIsProjectInquiryOpen(true)}
              onNavigateToContact={() => handleNavigate('contact')}
            />

            <Footer onNavigate={handleNavigate} />
          </div>
        )}

        {/* ===================== PAGE: CONTACT ===================== */}
        {activePage === 'contact' && (
          <div key="page-contact" className="animate-in fade-in duration-500">
            {/* Dedicated Contact Header */}
            <div className="pt-32 pb-10 border-b border-white/10 relative overflow-hidden bg-gradient-to-b from-[#0c0e0c] to-[#0c0e0c]/90">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-card border border-white/10 text-xs font-bold text-[#dfff24] mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#dfff24] animate-pulse" />
                  <span>DIRECT STUDIO INQUIRY &amp; COMMISSIONING</span>
                </div>
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-tight">
                  CONTACT <span className="text-[#dfff24]">OUR TEAM</span>.
                </h1>
                <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mt-4 font-normal leading-relaxed">
                  Commission your next commercial film, request a channel retainer deck, or schedule a coffee at our Colombo 04 studio floor.
                </p>
              </div>
            </div>

            {/* Direct Studio Contacts, Interactive Project Inquiry Form, WhatsApp & Map Info */}
            <ContactSection onOpenProjectInquiry={() => setIsProjectInquiryOpen(true)} />

            <Footer onNavigate={handleNavigate} />
          </div>
        )}

      </main>

      {/* Global Interactive Modals */}
      <VideoShowreelModal
        isOpen={isShowreelOpen}
        onClose={() => setIsShowreelOpen(false)}
      />

      <ProjectInquiryModal
        isOpen={isProjectInquiryOpen}
        onClose={() => setIsProjectInquiryOpen(false)}
      />

      <CaseStudyModal
        project={selectedCaseStudyProject}
        onClose={() => setSelectedCaseStudyProject(null)}
        onOpenInquiry={() => {
          setSelectedCaseStudyProject(null);
          setIsProjectInquiryOpen(true);
        }}
      />
    </div>
  );
}
