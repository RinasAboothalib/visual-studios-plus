import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { BrandStatementSequence } from './components/BrandStatementSequence.tsx';
import { ReelWallSection } from './components/ReelWallSection.tsx';
import { WorkSection } from './components/WorkSection.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { ResultsSection } from './components/ResultsSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { VideoShowreelModal } from './components/VideoShowreelModal.tsx';
import { ProjectInquiryModal } from './components/ProjectInquiryModal.tsx';
import { CaseStudyModal } from './components/CaseStudyModal.tsx';
import { Project } from './types/index.ts';

export default function App() {
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);
  const [isProjectInquiryOpen, setIsProjectInquiryOpen] = useState(false);
  const [selectedCaseStudyProject, setSelectedCaseStudyProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-[#0c0e0c] text-zinc-100 flex flex-col selection:bg-[#dfff24] selection:text-black font-sans">
      
      {/* 01: Minimal Sticky Navigation with Active Section Indicator */}
      <Navbar
        onOpenProjectInquiry={() => setIsProjectInquiryOpen(true)}
        onOpenShowreel={() => setIsShowreelOpen(true)}
      />

      {/* Main Content Sections with Continuous Cinematic Flow — Zero Duplication */}
      <main className="flex-1">
        
        {/* HERO: Cinematic Opening with Visible Video & Line-by-Line Reveal */}
        <Hero
          onOpenShowreel={() => setIsShowreelOpen(true)}
          onOpenProjectInquiry={() => setIsProjectInquiryOpen(true)}
        />

        {/* BRAND STATEMENT SCROLL SEQUENCE: WE CREATE. WE STRATEGIZE. WE EXECUTE. WE AMPLIFY. WE MEASURE. WE GROW. */}
        <BrandStatementSequence />

        {/* INDIVIDUAL PROJECTS HUB: The Main Focus — High-Impact Individual Client Cases, Filters, & Search */}
        <WorkSection onOpenProjectInquiry={() => setIsProjectInquiryOpen(true)} />

        {/* SOCIAL MEDIA REEL WALL: Dual-Row Vertical 9:16 Moving Wall */}
        <ReelWallSection />

        {/* SERVICES: Editorial Service Architecture with Inquire Capabilities in One Line */}
        <ServicesSection onOpenProjectInquiry={() => setIsProjectInquiryOpen(true)} />

        {/* RESULTS ENGINE: Verified Commercial ROI with Prominent Brand Logos Background */}
        <ResultsSection />

        {/* ABOUT AGENCY: Studio Profile, Mission, & Heritage */}
        <AboutSection />

        {/* STUDIO CONTACTS & DIRECT INQUIRY: Unified High-Impact Contact Area with Social Icons */}
        <ContactSection onOpenProjectInquiry={() => setIsProjectInquiryOpen(true)} />
      </main>

      {/* FOOTER: Minimal Glass Footer with Social Icons & Reduced Bottom Gap */}
      <Footer />

      {/* Interactive Modals */}
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
