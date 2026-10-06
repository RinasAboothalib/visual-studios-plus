import React, { useState, useMemo } from 'react';
import { Play, Maximize2, ExternalLink, Film, Camera, Search, ArrowUpRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { YOUTUBE_VIDEOS, YouTubeVideo } from '../data/videographyData.ts';
import { PHOTOGRAPHY_ITEMS } from '../data/projectsData.ts';
import { PhotoItem } from '../types/index.ts';
import { YouTubeModal } from './YouTubeModal.tsx';

interface WorkSectionProps {
  onOpenProjectInquiry: () => void;
}

export const WorkSection: React.FC<WorkSectionProps> = ({ onOpenProjectInquiry }) => {
  const [activeTab, setActiveTab] = useState<'videography' | 'photography'>('videography');
  const [selectedVideo, setSelectedVideo] = useState<YouTubeVideo | null>(null);
  
  // Photography filter & lightbox state
  const [activePhotoCategory, setActivePhotoCategory] = useState<string>('all');
  const [photoLightboxIndex, setPhotoLightboxIndex] = useState<number | null>(null);
  
  // Search query
  const [searchQuery, setSearchQuery] = useState('');

  // Filtered YouTube videos
  const filteredVideos = useMemo(() => {
    return YOUTUBE_VIDEOS.filter((v) => {
      const q = searchQuery.toLowerCase();
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
      const q = searchQuery.toLowerCase();
      const matchesQuery =
        p.title.toLowerCase().includes(q) ||
        p.client.toLowerCase().includes(q) ||
        p.categoryLabel.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [activePhotoCategory, searchQuery]);

  const photoCategories = [
    { key: 'all', label: 'All Photos', count: PHOTOGRAPHY_ITEMS.length },
    { key: 'hospitality', label: 'Hospitality & Architecture', count: PHOTOGRAPHY_ITEMS.filter(p => p.category === 'hospitality').length },
    { key: 'food', label: 'Food & Beverage', count: PHOTOGRAPHY_ITEMS.filter(p => p.category === 'food').length },
    { key: 'jewellery', label: 'Fine Jewellery', count: PHOTOGRAPHY_ITEMS.filter(p => p.category === 'jewellery').length },
    { key: 'fashion', label: 'Fashion & Runway', count: PHOTOGRAPHY_ITEMS.filter(p => p.category === 'fashion').length },
  ];

  const activePhoto = photoLightboxIndex !== null ? filteredPhotos[photoLightboxIndex] : null;

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (photoLightboxIndex !== null) {
      setPhotoLightboxIndex((photoLightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (photoLightboxIndex !== null) {
      setPhotoLightboxIndex((photoLightboxIndex + 1) % filteredPhotos.length);
    }
  };

  return (
    <section id="work" className="py-24 border-b border-white/10 relative bg-zinc-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#dfff24]">
                ( Selected Work )
              </span>
              <div className="h-px w-8 bg-zinc-800" />
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                Portfolio Showcase
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Work made to be experienced.
            </h2>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input
              type="text"
              placeholder={`Search ${activeTab === 'videography' ? 'films...' : 'photos...'}`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-full pl-10 pr-4 py-2 text-xs font-medium text-white placeholder-zinc-500 focus:outline-none focus:border-[#dfff24] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Primary Discipline Toggle: Videography vs Photography */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-10 pb-6 border-b border-zinc-800/80">
          <div className="flex items-center gap-3 p-1.5 rounded-2xl bg-zinc-900/90 border border-zinc-800">
            <button
              onClick={() => { setActiveTab('videography'); setSearchQuery(''); }}
              type="button"
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'videography'
                  ? 'bg-[#dfff24] text-black shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Film className="w-4 h-4" />
              <span>Videography</span>
            </button>

            <button
              onClick={() => { setActiveTab('photography'); setSearchQuery(''); }}
              type="button"
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'photography'
                  ? 'bg-[#dfff24] text-black shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Camera className="w-4 h-4" />
              <span>Photography</span>
            </button>
          </div>

          {activeTab === 'videography' && (
            <a
              href="https://www.youtube.com/@visualstudiosplus"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 hover:border-red-600/60 text-xs font-bold text-zinc-300 hover:text-white transition-all group"
            >
              <span className="w-2 h-2 rounded-full bg-red-600" />
              <span>YouTube: @visualstudiosplus</span>
              <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-colors" />
            </a>
          )}
        </div>

        {/* ======================= TAB 1: VIDEOGRAPHY ======================= */}
        {activeTab === 'videography' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {filteredVideos.length === 0 ? (
              <div className="p-16 text-center rounded-2xl bg-zinc-900/40 border border-zinc-800">
                <p className="text-zinc-400 text-sm">No videos found matching your query.</p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="mt-4 px-4 py-2 text-xs font-bold bg-zinc-800 hover:bg-zinc-700 text-white rounded-full"
                >
                  Clear Search
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredVideos.map((video) => (
                  <article
                    key={video.id}
                    onClick={() => setSelectedVideo(video)}
                    className="group cursor-pointer rounded-2xl bg-zinc-900/60 hover:bg-zinc-900 border border-white/5 hover:border-zinc-700 transition-all duration-300 flex flex-col overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1"
                  >
                    {/* Video Thumbnail */}
                    <div className="relative aspect-video w-full overflow-hidden bg-black">
                      <img
                        src={video.thumbnailUrl}
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                        onError={(e) => {
                          // fallback to hqdefault if maxres not generated
                          (e.currentTarget as HTMLImageElement).src = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />

                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-[#dfff24] group-hover:text-black transition-all">
                          <Play className="w-6 h-6 fill-current ml-1" />
                        </div>
                      </div>

                      {/* Video Duration Badge */}
                      {video.duration && (
                        <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md text-[11px] font-mono font-bold text-white">
                          {video.duration}
                        </div>
                      )}

                      {/* Category chip */}
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-bold text-[#dfff24]">
                        {video.category}
                      </div>
                    </div>

                    {/* Content Details */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        {/* Unboxed Metadata */}
                        <div className="flex items-center gap-2 text-xs font-bold text-zinc-400">
                          <span className="text-[#dfff24]">{video.client}</span>
                          <span aria-hidden="true">·</span>
                          <span>{video.year}</span>
                        </div>

                        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#dfff24] transition-colors line-clamp-2 leading-snug">
                          {video.title}
                        </h3>

                        <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                          {video.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
                        <span className="font-bold text-zinc-300">Watch Brand Film</span>
                        <span className="text-[#dfff24] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          Play Video →
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ======================= TAB 2: PHOTOGRAPHY ======================= */}
        {activeTab === 'photography' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Sub-category selector */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
              {photoCategories.map((cat) => {
                const isActive = activePhotoCategory === cat.key;
                return (
                  <button
                    key={cat.key}
                    onClick={() => setActivePhotoCategory(cat.key)}
                    type="button"
                    className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-[#dfff24] text-black shadow-md'
                        : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
                    }`}
                  >
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Photo Grid */}
            {filteredPhotos.length === 0 ? (
              <div className="p-16 text-center rounded-2xl bg-zinc-900/40 border border-zinc-800">
                <p className="text-zinc-400 text-sm">No photos found in this category.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPhotos.map((photo, index) => (
                  <div
                    key={photo.id}
                    onClick={() => setPhotoLightboxIndex(index)}
                    className="group cursor-pointer rounded-2xl bg-zinc-900 border border-white/5 overflow-hidden shadow-lg relative aspect-[4/3] sm:aspect-auto sm:h-80"
                  >
                    <img
                      src={photo.imageUrl}
                      alt={photo.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

                    <div className="absolute inset-0 p-5 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="flex justify-end">
                        <div className="p-2 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20">
                          <Maximize2 className="w-4 h-4" />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <span className="text-[11px] font-bold text-[#dfff24] uppercase tracking-wider">
                          {photo.categoryLabel}
                        </span>
                        <h4 className="text-base font-bold text-white">
                          {photo.title}
                        </h4>
                        <p className="text-xs text-zinc-400 font-medium">
                          Client: {photo.client}
                        </p>
                      </div>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 group-hover:opacity-0 transition-opacity flex items-center justify-between text-xs font-bold text-zinc-300">
                      <span className="truncate max-w-[200px]">{photo.title}</span>
                      <span className="text-[#dfff24] text-[10px]">Expand</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>

      {/* YouTube Video Player Modal */}
      <YouTubeModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />

      {/* Photography Lightbox Modal */}
      {activePhoto && photoLightboxIndex !== null && (
        <div
          onClick={() => setPhotoLightboxIndex(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
        >
          <button
            onClick={() => setPhotoLightboxIndex(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-white border border-zinc-700 z-10"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrevPhoto}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-white border border-zinc-700 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNextPhoto}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-white border border-zinc-700 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-5xl max-h-[90vh] flex flex-col items-center justify-center space-y-4"
          >
            <div className="relative max-h-[75vh] overflow-hidden rounded-xl border border-white/10 shadow-2xl">
              <img
                src={activePhoto.imageUrl}
                alt={activePhoto.title}
                className="max-h-[75vh] w-auto max-w-full object-contain"
              />
            </div>

            <div className="text-center space-y-1">
              <p className="text-xs font-bold text-[#dfff24] uppercase tracking-wider">
                {activePhoto.categoryLabel} · {activePhoto.client}
              </p>
              <h3 className="text-lg font-bold text-white">
                {activePhoto.title}
              </h3>
              <p className="text-xs text-zinc-500 font-mono">
                Image {photoLightboxIndex + 1} of {filteredPhotos.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
