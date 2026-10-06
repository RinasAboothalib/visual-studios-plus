import React, { useEffect, useRef, useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize, RotateCcw } from 'lucide-react';
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

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        type="button"
        className="absolute top-6 right-6 p-2 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-white border border-zinc-700 z-30 transition-colors"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Video Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl w-full rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl group"
      >
        <video
          ref={videoRef}
          src={STUDIO_INFO.showreelUrl}
          poster={STUDIO_INFO.heroCover}
          autoPlay
          playsInline
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => setIsPlaying(false)}
          className="w-full aspect-video object-cover cursor-pointer"
          onClick={togglePlay}
        />

        {/* Floating Custom Controls Bar */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black via-black/80 to-transparent transition-opacity">
          {/* Progress Bar */}
          <div className="w-full h-1 bg-white/20 rounded-full mb-4 overflow-hidden cursor-pointer">
            <div
              className="h-full bg-[#dfff24] transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-white text-xs font-mono">
            <div className="flex items-center gap-4">
              <button
                onClick={togglePlay}
                type="button"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white ml-0.5" />}
              </button>

              <button
                onClick={toggleMute}
                type="button"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>

              <span className="text-zinc-400">
                Visual Studios+ · 2024–2026 Agency Reel
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  if (videoRef.current) {
                    videoRef.current.currentTime = 0;
                    videoRef.current.play();
                    setIsPlaying(true);
                  }
                }}
                type="button"
                className="p-2 text-zinc-400 hover:text-white"
                title="Restart"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <button
                onClick={handleFullscreen}
                type="button"
                className="p-2 text-zinc-400 hover:text-white"
                title="Fullscreen"
              >
                <Maximize className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
