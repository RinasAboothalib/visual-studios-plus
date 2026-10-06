import React, { useEffect } from 'react';
import { X, ExternalLink, Film, Building2, Calendar } from 'lucide-react';
import { YouTubeVideo } from '../data/videographyData.ts';

interface YouTubeModalProps {
  video: YouTubeVideo | null;
  onClose: () => void;
}

export const YouTubeModal: React.FC<YouTubeModalProps> = ({ video, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (video) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [video, onClose]);

  if (!video) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-zinc-950 border border-white/10 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative my-auto"
      >
        {/* Top Control Bar */}
        <div className="bg-zinc-900/90 px-6 py-4 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-white">
              {video.category}
            </span>
            <span className="text-zinc-600">/</span>
            <span className="text-xs font-bold text-[#dfff24]">
              {video.client}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white border border-zinc-700 transition-colors"
              title="Watch on YouTube"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              type="button"
              className="p-1.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white border border-zinc-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Responsive YouTube Embed Container */}
        <div className="relative aspect-video w-full bg-black">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>

        {/* Video Narrative & Metadata */}
        <div className="p-6 sm:p-8 space-y-4 bg-zinc-950">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {video.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 font-medium">
                {video.description}
              </p>
            </div>

            <a
              href="https://www.youtube.com/@visualstudiosplus"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-4 py-2 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold text-xs flex items-center gap-2 transition-colors self-start"
            >
              <span>Visit YouTube Channel</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap items-center gap-6 text-xs text-zinc-400 font-bold">
            <span className="flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-[#dfff24]" />
              Client: {video.client}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#dfff24]" />
              Production: {video.year}
            </span>
            <span className="flex items-center gap-1.5">
              <Film className="w-3.5 h-3.5 text-[#dfff24]" />
              In-House Crew: Colombo 04
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
