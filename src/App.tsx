import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { WorkSection } from './components/WorkSection.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { VideoShowreelModal } from './components/VideoShowreelModal.tsx';
import { ProjectInquiryModal } from './components/ProjectInquiryModal.tsx';
import { Play } from 'lucide-react';

export default function App() {
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);
  const [isProjectInquiryOpen, setIsProjectInquiryOpen] = useState(false);
  const [activeSection] = useState('work');

  return (
    <div className="min-h-screen bg-[#0c0e0c] text-zinc-100 flex flex-col selection:bg-[#dfff24] selection:text-black">
      {/* Navigation */}
      <Navbar
        onOpenProjectInquiry={() => setIsProjectInquiryOpen(true)}
        onOpenShowreel={() => setIsShowreelOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenShowreel={() => setIsShowreelOpen(true)}
          onOpenProjectInquiry={() => setIsProjectInquiryOpen(true)}
        />

        {/* 01: Work Section (Unifying Videography with real YouTube videos & Photography archive) */}
        <WorkSection onOpenProjectInquiry={() => setIsProjectInquiryOpen(true)} />

        {/* 02: About Agency */}
        <AboutSection />

        {/* 03: What We Do (Services & Capabilities) */}
        <ServicesSection onOpenProjectInquiry={() => setIsProjectInquiryOpen(true)} />

        {/* 04: Contact & Inquiries */}
        <ContactSection onOpenProjectInquiry={() => setIsProjectInquiryOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Bottom Quick Reel Trigger */}
      <aside aria-label="Showreel Trigger" className="fixed bottom-6 right-6 z-30 hidden sm:block">
        <button
          onClick={() => setIsShowreelOpen(true)}
          type="button"
          className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-zinc-900/90 backdrop-blur-md border border-white/10 hover:border-[#dfff24] text-white shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
        >
          <div className="w-5 h-5 rounded-full bg-[#dfff24] text-black flex items-center justify-center group-hover:rotate-12 transition-transform">
            <Play className="w-2.5 h-2.5 fill-black ml-0.5" />
          </div>
          <span className="text-xs font-bold text-zinc-200">
            Showreel
          </span>
          <span className="text-[10px] font-mono font-bold text-[#dfff24]">
            01:30
          </span>
        </button>
      </aside>

      {/* Interactive Modals */}
      <VideoShowreelModal
        isOpen={isShowreelOpen}
        onClose={() => setIsShowreelOpen(false)}
      />

      <ProjectInquiryModal
        isOpen={isProjectInquiryOpen}
        onClose={() => setIsProjectInquiryOpen(false)}
      />
    </div>
  );
}
