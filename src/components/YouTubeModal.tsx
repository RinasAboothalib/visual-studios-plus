import React, { useEffect } from 'react';
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
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="glass-panel border border-white/10 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative my-auto"
      >
        {/* Top Control Bar (Zero Icons) */}
        <div className="glass-header px-6 py-4 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs font-sans uppercase tracking-wider text-white font-bold">
              {video.category}
            </span>
            <span className="text-zinc-600 font-sans">/</span>
            <span className="text-xs font-sans font-bold text-[#dfff24]">
              {video.client}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-full glass-card border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white transition-colors text-xs font-sans"
            >
              YOUTUBE ↗
            </a>
            <button
              onClick={onClose}
              type="button"
              className="px-3 py-1.5 rounded-full glass-card border border-zinc-700 hover:border-white text-zinc-300 hover:text-white transition-colors text-xs font-sans font-bold cursor-pointer"
            >
              CLOSE [ESC]
            </button>
          </div>
        </div>

        {/* Video Player Embed */}
        <div className="relative aspect-video bg-black w-full">
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>

        {/* Video Metadata & Agency Narrative */}
        <div className="p-6 sm:p-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-white/10 pb-4">
            <h3 className="text-xl sm:text-2xl font-black text-white">
              {video.title}
            </h3>
            <span className="text-xs font-sans text-zinc-400">
              {video.year}
            </span>
          </div>

          <p className="text-sm text-zinc-300 leading-relaxed font-normal">
            {video.description}
          </p>

          <div className="pt-2 flex items-center justify-between">
            <span className="text-xs font-sans text-[#dfff24]">
              Visual Studios Plus Cinema Archive
            </span>
            <a
              href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-sans text-white hover:text-[#dfff24] transition-colors"
            >
              Watch Full Video on YouTube →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
