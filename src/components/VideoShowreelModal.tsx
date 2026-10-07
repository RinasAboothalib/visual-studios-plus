import React, { useEffect, useRef, useState } from 'react';
import { STUDIO_INFO } from '../data/projectsData.ts';

interface VideoShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoShowreelModal: React.FC<VideoShowreelModalProps> = ({ isOpen, onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === ' ') {
        e.preventDefault();
        togglePlay();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration || 1;
      setProgress((current / total) * 100);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const pct = clickX / rect.width;
      videoRef.current.currentTime = pct * (videoRef.current.duration || 0);
    }
  };

  const handleRestart = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="glass-panel border border-white/10 rounded-3xl max-w-5xl w-full overflow-hidden shadow-2xl relative my-auto"
      >
        {/* Top Control Bar (Zero Icons) */}
        <div className="glass-header px-6 py-4 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#dfff24] animate-pulse" />
            <span className="text-xs font-sans uppercase tracking-wider text-white font-bold">
              Official Agency Showreel
            </span>
            <span className="text-zinc-600 font-sans">/</span>
            <span className="text-xs font-sans font-bold text-[#dfff24]">
              Visual Studios Plus
            </span>
          </div>

          <button
            onClick={onClose}
            type="button"
            className="px-3 py-1.5 rounded-full glass-card border border-zinc-700 hover:border-white text-zinc-300 hover:text-white transition-colors text-xs font-sans font-bold cursor-pointer"
          >
            CLOSE [ESC]
          </button>
        </div>

        {/* Video Player Embed */}
        <div className="relative aspect-video bg-black w-full group">
          <video
            ref={videoRef}
            src={STUDIO_INFO.showreelUrl}
            poster={STUDIO_INFO.heroCover}
            autoPlay
            playsInline
            onTimeUpdate={handleTimeUpdate}
            onClick={togglePlay}
            className="w-full h-full object-cover cursor-pointer"
          />

          {/* Player Controls Bar */}
          <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col gap-2">
            {/* Progress Bar */}
            <div
              onClick={handleSeek}
              className="w-full h-1.5 bg-white/20 hover:h-2.5 transition-all rounded-full cursor-pointer overflow-hidden"
            >
              <div
                className="h-full bg-[#dfff24] transition-all duration-75"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Bottom Buttons */}
            <div className="flex items-center justify-between text-xs font-sans text-zinc-300 pt-1">
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  className="px-3 py-1 rounded-full glass-panel text-white hover:text-[#dfff24] transition-colors"
                >
                  {isPlaying ? 'PAUSE' : 'PLAY'}
                </button>
                <button
                  onClick={toggleMute}
                  className="px-3 py-1 rounded-full glass-panel text-white hover:text-[#dfff24] transition-colors"
                >
                  {isMuted ? 'UNMUTE' : 'MUTE'}
                </button>
                <button
                  onClick={handleRestart}
                  className="px-3 py-1 rounded-full glass-panel text-zinc-400 hover:text-white transition-colors"
                >
                  RESTART
                </button>
              </div>

              <span className="text-[11px] font-sans text-[#dfff24] font-bold uppercase tracking-wider">
                OFFICIAL SHOWREEL
              </span>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="p-6 bg-zinc-950/80 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold text-white">
              Visual Studios Plus — Showreel 2026
            </h4>
            <p className="text-xs text-zinc-400 mt-0.5">
              Featuring commercial work for Unilever, American Express, Nestlé, Munchee, and luxury brands.
            </p>
          </div>

          <span className="text-xs font-sans text-zinc-400">
            Colombo 04, Sri Lanka
          </span>
        </div>
      </div>
    </div>
  );
};
