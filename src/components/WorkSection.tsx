import React, { useState, useMemo } from 'react';
import { PROJECTS, PHOTOGRAPHY_ITEMS } from '../data/projectsData.ts';
import { YOUTUBE_VIDEOS, YouTubeVideo } from '../data/videographyData.ts';
import { Project, PhotoItem } from '../types/index.ts';
import { YouTubeModal } from './YouTubeModal.tsx';
import { CaseStudyModal } from './CaseStudyModal.tsx';

interface WorkSectionProps {
  onOpenProjectInquiry: () => void;
}

type MainCategoryFilter = 
  | 'all' 
  | 'case-studies' 
  | 'retainers' 
  | 'branding' 
  | 'tvc' 
  | 'photography'
  | 'agency-films';

export const WorkSection: React.FC<WorkSectionProps> = ({ onOpenProjectInquiry }) => {
  const [activeFilter, setActiveFilter] = useState<MainCategoryFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewDensity, setViewDensity] = useState<'standard' | 'results-first'>('standard');
  
  // Modals state
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<YouTubeVideo | null>(null);
  
  // Photography filter & lightbox state
  const [activePhotoCategory, setActivePhotoCategory] = useState<string>('all');
  const [photoLightboxIndex, setPhotoLightboxIndex] = useState<number | null>(null);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((p) => {
      let matchesCategory = true;
      if (activeFilter !== 'all' && activeFilter !== 'agency-films' && activeFilter !== 'photography') {
        matchesCategory = p.category === activeFilter;
      }

      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesSearch = 
        p.title.toLowerCase().includes(q) ||
        p.client.toLowerCase().includes(q) ||
        p.headline.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  // Filtered YouTube videos
  const filteredVideos = useMemo(() => {
    return YOUTUBE_VIDEOS.filter((v) => {
      const q = searchQuery.toLowerCase().trim();
      if (!q) return true;
      return (
        v.title.toLowerCase().includes(q) ||
        v.client.toLowerCase().includes(q) ||
        v.category.toLowerCase().includes(q)
      );
    });
  }, [searchQuery]);

  // Filtered photography items
  const filteredPhotos = useMemo(() => {
    return PHOTOGRAPHY_ITEMS.filter((p) => {
      const matchesCategory = activePhotoCategory === 'all' || p.category === activePhotoCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;
      return (
        matchesCategory &&
        (p.title.toLowerCase().includes(q) ||
         p.client.toLowerCase().includes(q) ||
         p.categoryLabel.toLowerCase().includes(q))
      );
    });
  }, [activePhotoCategory, searchQuery]);

  const filterTabs: { key: MainCategoryFilter; label: string; count?: number }[] = [
    { key: 'all', label: 'All Projects', count: PROJECTS.length },
    { key: 'case-studies', label: 'Social & Viral Campaigns', count: PROJECTS.filter((p) => p.category === 'case-studies').length },
    { key: 'retainers', label: 'Digital Retainers', count: PROJECTS.filter((p) => p.category === 'retainers').length },
    { key: 'branding', label: 'Brand & CGI', count: PROJECTS.filter((p) => p.category === 'branding').length },
    { key: 'tvc', label: 'TVC & Films', count: PROJECTS.filter((p) => p.category === 'tvc').length },
    { key: 'photography', label: 'Commercial Photography', count: PHOTOGRAPHY_ITEMS.length },
    { key: 'agency-films', label: 'YouTube Video Vault', count: YOUTUBE_VIDEOS.length },
  ];

  const photoCategories = [
    { key: 'all', label: 'All Photos' },
    { key: 'hospitality', label: 'Hospitality & Interiors' },
    { key: 'food', label: 'Food & Beverage' },
    { key: 'jewellery', label: 'Fine Jewellery' },
    { key: 'fashion', label: 'Fashion & Runway' },
  ];

  const activePhoto = photoLightboxIndex !== null ? filteredPhotos[photoLightboxIndex] : null;

  return (
    <section id="work" className="py-24 border-b border-white/10 relative glass-panel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Zero Icons) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full glass-card border border-white/10 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#dfff24]" />
              <span className="font-sans text-xs uppercase tracking-widest text-[#dfff24] font-bold">
                ( 03 ) Flagship Portfolio
              </span>
              <span className="text-zinc-600 font-sans">|</span>
              <span className="font-sans text-xs text-zinc-300">
                Individual Client Projects
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
              Projects engineered for <br />
              <span className="text-[#dfff24]">verifiable business impact</span>.
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mt-4 font-normal">
              Every client brief is treated as a growth partnership. We blend high-fashion visual standards 
              with aggressive social media reach, high-velocity turnaround, and conversion-driven storytelling.
            </p>
          </div>

          {/* Quick controls: Search & View Density */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
            {/* Search Input without icons */}
            <div className="relative min-w-[260px]">
              <input
                type="text"
                placeholder="Search brands, reels, TVC..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full glass-card border border-zinc-700 rounded-full px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#dfff24] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white text-xs font-sans"
                >
                  CLEAR
                </button>
              )}
            </div>

            {/* View Density Switcher */}
            {activeFilter !== 'photography' && activeFilter !== 'agency-films' && (
              <div className="flex items-center gap-1 p-1 glass-card border border-zinc-800 rounded-full self-start sm:self-auto">
                <button
                  onClick={() => setViewDensity('standard')}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                    viewDensity === 'standard'
                      ? 'bg-zinc-800 text-white'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  Visual Grid
                </button>
                <button
                  onClick={() => setViewDensity('results-first')}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                    viewDensity === 'results-first'
                      ? 'bg-[#dfff24] text-black shadow-sm'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  Results First
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="relative mb-12 overflow-x-auto pb-2 scrollbar-none border-b border-white/10">
          <div className="flex items-center gap-2 min-w-max pb-3">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveFilter(tab.key)}
                  className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-[#dfff24] text-black shadow-md'
                      : 'glass-card text-zinc-400 hover:text-white border border-white/5'
                  }`}
                >
                  <span>{tab.label}</span>
                  {tab.count !== undefined && (
                    <span className={`text-[10px] font-sans px-1.5 py-0.5 rounded-full ${
                      isActive ? 'bg-black/20 text-black font-extrabold' : 'bg-zinc-800 text-zinc-400'
                    }`}>
                      {tab.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* TAB 1: INDIVIDUAL PROJECTS SHOWCASE (Primary Core Focus) */}
        {activeFilter !== 'photography' && activeFilter !== 'agency-films' && (
          <div>
            {filteredProjects.length === 0 ? (
              <div className="py-20 text-center rounded-3xl glass-card border border-white/5">
                <h3 className="text-lg font-bold text-white">No projects found</h3>
                <p className="text-sm text-zinc-400 mt-1 max-w-sm mx-auto">
                  Try adjusting your search terms or filter category to find what you are looking for.
                </p>
                <button
                  onClick={() => { setSearchQuery(''); setActiveFilter('all'); }}
                  className="mt-4 px-4 py-2 rounded-full glass-panel text-xs font-bold text-white hover:border-[#dfff24]"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredProjects.map((project) => {
                  const topStat = project.stats && project.stats.length > 0 ? project.stats[0] : null;

                  return (
                    <article
                      key={project.id}
                      onClick={() => setSelectedProject(project)}
                      className="group relative flex flex-col justify-between rounded-3xl glass-card border border-white/10 hover:border-[#dfff24] transition-all duration-300 overflow-hidden cursor-pointer hover:-translate-y-1.5 hover:shadow-2xl"
                    >
                      {/* Top Thumbnail Image */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                        <img
                          src={project.thumbnail}
                          alt={project.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                        
                        {/* Category & Year Badges */}
                        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                          <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[11px] font-sans text-[#dfff24] font-bold">
                            {project.categoryLabel}
                          </span>
                          <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-[11px] font-sans text-zinc-300">
                            {project.year}
                          </span>
                        </div>

                        {/* Results Highlight Pill (Floating on Image) */}
                        {topStat && (
                          <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 p-2 rounded-xl bg-black/90 backdrop-blur-md border border-[#dfff24]/40 shadow-lg">
                            <span className="w-2 h-2 rounded-full bg-[#dfff24] shrink-0" />
                            <div className="flex items-baseline gap-1.5 min-w-0">
                              <span className="text-sm font-black text-white font-sans shrink-0">
                                {topStat.value}
                              </span>
                              <span className="text-[11px] text-zinc-300 truncate">
                                {topStat.label}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Card Content Body */}
                      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-sans uppercase tracking-wider text-zinc-400 font-bold">
                              {project.client}
                            </span>
                            <span className="text-xs text-zinc-500 group-hover:text-[#dfff24] font-sans transition-colors">
                              ↗
                            </span>
                          </div>

                          <h3 className="text-xl font-bold text-white tracking-tight leading-snug group-hover:text-[#dfff24] transition-colors">
                            {project.title}
                          </h3>

                          <p className="text-xs sm:text-sm text-zinc-400 line-clamp-2 leading-relaxed">
                            {project.headline}
                          </p>
                        </div>

                        {/* Deliverables / Tags */}
                        <div className="pt-3 border-t border-white/5 space-y-3">
                          <div className="flex flex-wrap gap-1.5">
                            {project.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="px-2.5 py-0.5 rounded-full bg-white/5 text-[11px] font-medium text-zinc-400 group-hover:text-zinc-300 transition-colors"
                              >
                                {tag}
                              </span>
                            ))}
                            {project.tags.length > 3 && (
                              <span className="px-2 py-0.5 rounded-full bg-white/5 text-[10px] font-sans text-zinc-500">
                                +{project.tags.length - 3}
                              </span>
                            )}
                          </div>

                          {/* Quick Card Footer Action */}
                          <div className="flex items-center justify-between pt-1">
                            <span className="text-xs font-bold text-zinc-300 group-hover:text-white transition-colors">
                              Explore Case Study &amp; Results
                            </span>
                            <span className="text-xs font-sans text-[#dfff24]">
                              →
                            </span>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: COMMERCIAL PHOTOGRAPHY ARCHIVE */}
        {activeFilter === 'photography' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="flex flex-wrap items-center gap-2">
              {photoCategories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActivePhotoCategory(cat.key)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    activePhotoCategory === cat.key
                      ? 'bg-white text-black shadow-md'
                      : 'glass-card text-zinc-400 hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPhotos.map((photo, idx) => (
                <div
                  key={photo.id}
                  onClick={() => setPhotoLightboxIndex(idx)}
                  className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 cursor-pointer aspect-square sm:aspect-[4/3] hover:border-[#dfff24] transition-all hover:scale-[1.01]"
                >
                  <img
                    src={photo.imageUrl}
                    alt={photo.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <span className="text-[11px] font-sans text-[#dfff24] uppercase font-bold">
                      {photo.categoryLabel}
                    </span>
                    <h4 className="text-base font-bold text-white mt-0.5">
                      {photo.title}
                    </h4>
                    <p className="text-xs text-zinc-400">
                      {photo.client}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: YOUTUBE VIDEO VAULT */}
        {activeFilter === 'agency-films' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVideos.map((video) => (
                <article
                  key={video.id}
                  onClick={() => setSelectedVideo(video)}
                  className="group relative rounded-2xl overflow-hidden glass-card border border-white/10 hover:border-[#dfff24] transition-all cursor-pointer hover:-translate-y-1 shadow-lg"
                >
                  <div className="relative aspect-video overflow-hidden bg-black">
                    <img
                      src={video.thumbnailUrl}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="px-4 py-2 rounded-full bg-[#dfff24] text-black font-extrabold text-xs uppercase tracking-wider group-hover:scale-110 transition-transform shadow-2xl">
                        PLAY FILM
                      </div>
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <span className="text-[11px] font-sans text-[#dfff24] uppercase font-bold">
                      {video.client}
                    </span>
                    <h4 className="text-base font-bold text-white group-hover:text-[#dfff24] transition-colors leading-snug">
                      {video.title}
                    </h4>
                    <p className="text-xs text-zinc-400 line-clamp-2">
                      {video.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA Banner (Zero Icons) */}
        <div className="mt-16 text-center">
          <p className="text-sm text-zinc-400 mb-4">
            Looking for custom creative direction, an integrated campaign, or an ongoing social retainer?
          </p>
          <button
            onClick={onOpenProjectInquiry}
            className="px-8 py-3.5 rounded-full bg-white text-black font-extrabold text-sm hover:bg-[#dfff24] hover:scale-105 transition-all shadow-xl cursor-pointer"
          >
            Start a Project with Visual Studios+ →
          </button>
        </div>

      </div>

      {/* Case Study Detail Modal (Zero Icons) */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenInquiry={onOpenProjectInquiry}
      />

      {/* YouTube Modal (Zero Icons) */}
      <YouTubeModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />

      {/* Photography Lightbox (Zero Icons) */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setPhotoLightboxIndex(null)}
        >
          <button
            onClick={() => setPhotoLightboxIndex(null)}
            className="absolute top-6 right-6 px-4 py-2 rounded-full glass-panel border border-white/20 text-white text-xs font-sans uppercase font-bold cursor-pointer hover:border-white"
          >
            CLOSE [ESC]
          </button>

          <div
            className="relative max-w-5xl max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activePhoto.imageUrl}
              alt={activePhoto.title}
              className="max-h-[80vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
            />
            <div className="mt-4 text-center">
              <p className="text-xs font-sans text-[#dfff24] uppercase font-bold">
                {activePhoto.client} · {activePhoto.categoryLabel}
              </p>
              <h4 className="text-lg font-bold text-white mt-0.5">
                {activePhoto.title}
              </h4>
            </div>

            {filteredPhotos.length > 1 && (
              <div className="mt-4 flex items-center gap-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (photoLightboxIndex !== null) {
                      setPhotoLightboxIndex((photoLightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
                    }
                  }}
                  className="px-4 py-2 rounded-full glass-panel text-xs font-sans text-white hover:border-[#dfff24]"
                >
                  ← PREV
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (photoLightboxIndex !== null) {
                      setPhotoLightboxIndex((photoLightboxIndex + 1) % filteredPhotos.length);
                    }
                  }}
                  className="px-4 py-2 rounded-full glass-panel text-xs font-sans text-white hover:border-[#dfff24]"
                >
                  NEXT →
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </section>
  );
};
