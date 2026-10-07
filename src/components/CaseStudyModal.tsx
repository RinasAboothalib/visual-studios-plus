import React, { useEffect, useState } from 'react';
import { Project } from '../types/index.ts';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenInquiry: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onOpenInquiry,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  // Keyboard navigation & body lock
  useEffect(() => {
    if (!project) return;

    setActiveImageIndex(0);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const allImages = [
    project.heroImage || project.thumbnail,
    ...(project.galleryImages || [])
  ].filter(Boolean);

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 md:p-6 overflow-y-auto bg-black/90 backdrop-blur-2xl animate-in fade-in duration-200">
      
      {/* Click outside backdrop */}
      <div 
        className="fixed inset-0 z-0" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      {/* Modal Dialog Card with Glass Effect */}
      <div 
        className="relative z-10 w-full max-w-5xl glass-panel sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[96vh] sm:max-h-[92vh] my-auto border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Sticky Header Bar (Zero Icons) */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 glass-header border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#dfff24]" />
            <span className="font-sans text-xs uppercase tracking-widest text-[#dfff24] font-bold">
              {project.categoryLabel}
            </span>
            <span className="text-zinc-600 font-sans">|</span>
            <span className="font-sans text-xs text-zinc-300">
              {project.client} · {project.year}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              type="button"
              className="px-3 py-1.5 rounded-full glass-card border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white transition-colors cursor-pointer text-xs font-sans"
            >
              {copied ? 'LINK COPIED' : 'SHARE'}
            </button>

            <button
              onClick={onClose}
              type="button"
              aria-label="Close modal"
              className="px-3 py-1.5 rounded-full glass-card border border-zinc-700 hover:border-white text-zinc-300 hover:text-white transition-all cursor-pointer text-xs font-sans font-bold"
            >
              CLOSE [ESC]
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto px-6 sm:px-10 py-8 space-y-12">
          
          {/* Main Case Study Title & Executive Headline */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full glass-card border border-white/10 text-xs font-sans text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              {project.title}
            </h1>

            <p className="text-xl sm:text-2xl text-[#dfff24] font-semibold leading-relaxed">
              "{project.headline}"
            </p>

            <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed max-w-4xl pt-2">
              {project.description}
            </p>
          </div>

          {/* Hero Media Showcase with Gallery Slider (Zero Icons) */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-zinc-950 border border-white/10 aspect-video group">
            <img
              src={allImages[activeImageIndex] || project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover transition-all duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

            {/* Gallery Navigation Controls */}
            {allImages.length > 1 && (
              <>
                <button
                  onClick={() => setActiveImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-full bg-black/80 hover:bg-black text-white text-xs font-sans border border-white/20 transition-all cursor-pointer"
                >
                  ← PREV
                </button>
                <button
                  onClick={() => setActiveImageIndex((prev) => (prev + 1) % allImages.length)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-full bg-black/80 hover:bg-black text-white text-xs font-sans border border-white/20 transition-all cursor-pointer"
                >
                  NEXT →
                </button>

                {/* Thumbnails indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 p-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/10">
                  {allImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        activeImageIndex === idx ? 'bg-[#dfff24] scale-125 w-6' : 'bg-white/40 hover:bg-white'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* SECTION: THE BUSINESS PROBLEM VS OUR SOLUTION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* The Challenge */}
            <div className="p-6 sm:p-8 rounded-3xl glass-card border border-white/10 space-y-4">
              <span className="font-sans text-xs uppercase tracking-widest text-red-400 font-bold block">
                [Phase 01] The Business Challenge
              </span>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-normal">
                {project.challenge || project.overview}
              </p>
            </div>

            {/* Our Strategy & Solution */}
            <div className="p-6 sm:p-8 rounded-3xl glass-card border border-[#dfff24]/40 space-y-4">
              <span className="font-sans text-xs uppercase tracking-widest text-[#dfff24] font-bold block">
                [Phase 02] The Strategy &amp; Execution
              </span>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-normal">
                {project.solution || project.overview}
              </p>
            </div>

          </div>

          {/* SECTION: THE MEASURED BUSINESS RESULTS */}
          {(project.stats && project.stats.length > 0) && (
            <div className="space-y-4">
              <div>
                <span className="font-sans text-xs uppercase tracking-widest text-[#dfff24] font-bold block">
                  Verified ROI &amp; Performance
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mt-1">
                  Measurable Campaign Results
                </h3>
              </div>

              {/* Stat Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {project.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl glass-card border border-white/10 hover:border-[#dfff24]/50 transition-colors group"
                  >
                    <p className="text-xs font-sans text-zinc-400 uppercase tracking-wider mb-1">
                      {stat.label}
                    </p>
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-sans group-hover:text-[#dfff24] transition-colors">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Qualitative Result bullets */}
              {project.results && project.results.length > 0 && (
                <div className="mt-4 p-5 rounded-2xl glass-card border border-white/5 space-y-2.5">
                  {project.results.map((res, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <span className="text-[#dfff24] font-bold font-sans text-xs shrink-0 mt-0.5">
                        //
                      </span>
                      <p className="text-sm text-zinc-300 font-medium">
                        {res}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* SECTION: DELIVERABLES CHECKLIST */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">
              Campaign Deliverables &amp; Assets Produced
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3.5 rounded-xl glass-card border border-white/10 text-sm text-zinc-200"
                >
                  <span className="font-sans text-xs font-bold text-[#dfff24]">
                    0{idx + 1}
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION: CAMPAIGN STILLS GALLERY */}
          {allImages.length > 1 && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white">
                Production Stills &amp; Visual Assets
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {allImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative rounded-xl overflow-hidden aspect-video border transition-all cursor-pointer group ${
                      activeImageIndex === idx ? 'border-[#dfff24] ring-2 ring-[#dfff24]/30' : 'border-white/10 hover:border-zinc-500'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${project.title} asset ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* BOTTOM ACTION BANNER */}
          <div className="p-8 rounded-3xl glass-card border border-[#dfff24]/40 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <p className="text-xs font-sans uppercase text-[#dfff24] font-bold tracking-wider">
                Partner with Visual Studios Plus
              </p>
              <h4 className="text-xl sm:text-2xl font-black text-white">
                Want to drive similar results for your business?
              </h4>
              <p className="text-sm text-zinc-400">
                Let's plan your next viral social campaign, commercial TVC, or full digital marketing retainer.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => {
                  onClose();
                  onOpenInquiry();
                }}
                className="px-6 py-3.5 rounded-full bg-[#dfff24] text-black font-extrabold text-sm uppercase tracking-wider hover:scale-105 transition-all shadow-xl cursor-pointer"
              >
                Start a Project Brief →
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
