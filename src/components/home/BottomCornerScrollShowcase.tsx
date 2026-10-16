import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Camera, 
  Film, 
  FileText, 
  Megaphone, 
  Globe, 
  Play, 
  Volume2, 
  ChevronUp,
  ChevronDown,
  X,
  type LucideIcon
} from 'lucide-react';
import './BottomCornerScrollShowcase.css';

interface StageConfig {
  id: number;
  key: string;
  label: string;
  icon: LucideIcon;
}

const STAGES: StageConfig[] = [
  { id: 0, key: 'camera', label: 'Camera', icon: Camera },
  { id: 1, key: 'reel', label: 'Reel', icon: Film },
  { id: 2, key: 'post', label: 'Post', icon: FileText },
  { id: 3, key: 'ad', label: 'Ad', icon: Megaphone },
  { id: 4, key: 'website', label: 'Website', icon: Globe },
  { id: 5, key: 'video', label: 'Video', icon: Play },
];

export const BottomCornerScrollShowcase: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [manualOverride, setManualOverride] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const widgetRef = useRef<HTMLDivElement>(null);
  const overrideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Radius for SVG progress ring
  const circleRadius = 44;
  const circumference = 2 * Math.PI * circleRadius; // ~276.46
  const strokeDashoffset = circumference - (scrollProgress * circumference);

  // Close options menu when clicking anywhere outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Track page scroll and map progress to the 6 stages
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;

      const progress = Math.min(1, Math.max(0, window.scrollY / scrollHeight));
      setScrollProgress(progress);

      if (!manualOverride) {
        if (progress < 0.18) {
          setActiveStage(0); // Camera
        } else if (progress < 0.36) {
          setActiveStage(1); // Reel
        } else if (progress < 0.54) {
          setActiveStage(2); // Post
        } else if (progress < 0.72) {
          setActiveStage(3); // Ad
        } else if (progress < 0.88) {
          setActiveStage(4); // Website
        } else {
          setActiveStage(5); // Video
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [manualOverride]);

  // Handle video autoplay when active stage is Video
  useEffect(() => {
    if (activeStage === 5 && videoRef.current) {
      videoRef.current.play().catch(() => {});
    } else if (videoRef.current) {
      videoRef.current.pause();
    }
  }, [activeStage]);

  // Click an option in the menu: switch directly to it
  const handleSelectStage = (stageId: number) => {
    setActiveStage(stageId);
    setManualOverride(true);
    setIsMenuOpen(false);
    if (overrideTimerRef.current) clearTimeout(overrideTimerRef.current);
    overrideTimerRef.current = setTimeout(() => {
      setManualOverride(false);
    }, 12000);
  };

  // Click on circle orb: toggle options menu
  const handleCircleClick = () => {
    setIsMenuOpen(prev => !prev);
  };

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const currentStageInfo = STAGES[activeStage];
  const IconComponent = currentStageInfo.icon;

  return (
    <div 
      className="corner-circle-widget-wrapper" 
      ref={widgetRef}
      aria-label="S-Bloom Small Circular Pipeline"
    >
      {/* Expandable Options Menu appearing when clicking widget */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="corner-circle-options-menu"
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="corner-circle-options-header">
              <span>EXPLORE PIPELINE</span>
              <button
                className="corner-circle-options-close"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMenuOpen(false);
                }}
                aria-label="Close options"
              >
                <X size={13} />
              </button>
            </div>

            <div className="corner-circle-options-list">
              {STAGES.map((stage) => {
                const StageIcon = stage.icon;
                const isSelected = activeStage === stage.id;
                return (
                  <button
                    key={stage.key}
                    className={`corner-circle-option-btn ${isSelected ? 'active' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectStage(stage.id);
                    }}
                  >
                    <div className="corner-option-icon">
                      <StageIcon size={14} />
                    </div>
                    <span className="corner-option-name">{stage.label}</span>
                    {isSelected && <span className="corner-option-indicator">●</span>}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Clean White Floating Badge Pill (clickable to toggle options) */}
      <div 
        className="corner-circle-label-pill"
        onClick={() => setIsMenuOpen(prev => !prev)}
        title="Click to view all pipeline options"
      >
        {activeStage === 0 && <span className="circle-rec-dot" />}
        <IconComponent size={13} color="#D9A52E" />
        <span>{currentStageInfo.label}</span>
        {isMenuOpen ? (
          <ChevronDown size={12} color="#785A46" style={{ marginLeft: 2 }} />
        ) : (
          <ChevronUp size={12} color="#785A46" style={{ marginLeft: 2 }} />
        )}
      </div>

      {/* The Small Round Circle Orb */}
      <div 
        className="corner-circle-orb" 
        onClick={handleCircleClick}
        title={`Click to view options (Currently: ${currentStageInfo.label})`}
      >
        {/* SVG Circular Progress Ring */}
        <svg className="corner-circle-svg-ring" viewBox="0 0 96 96">
          <defs>
            <linearGradient id="goldRingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFE0A3" />
              <stop offset="50%" stopColor="#D9A52E" />
              <stop offset="100%" stopColor="#8F6216" />
            </linearGradient>
          </defs>
          <circle 
            className="circle-ring-bg" 
            cx="48" 
            cy="48" 
            r={circleRadius} 
          />
          <circle 
            className="circle-ring-progress" 
            cx="48" 
            cy="48" 
            r={circleRadius}
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: strokeDashoffset,
            }}
          />
        </svg>

        {/* Inner Round Lens Frame */}
        <div className="corner-circle-lens-frame">
          {/* Glass Glare Sheen Reflection */}
          <div className="corner-circle-lens-glare" />

          {/* Animated Transition between the 6 Stages */}
          <AnimatePresence mode="wait">
            {/* 1. CAMERA */}
            {activeStage === 0 && (
              <motion.div
                key="circle-stage-camera"
                className="circle-content-canvas circle-view-camera"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.25 }}
              >
                <img 
                  src="/camera-studio-bloom.jpg" 
                  alt="Cinema Camera" 
                  className="circle-camera-img" 
                />
                <div className="circle-camera-hud-badge">
                  <span>● REC</span>
                </div>
              </motion.div>
            )}

            {/* 2. REEL */}
            {activeStage === 1 && (
              <motion.div
                key="circle-stage-reel"
                className="circle-content-canvas circle-view-reel"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.25 }}
              >
                <img 
                  src="/about-studio-stage.jpg" 
                  alt="Social Reel Stage" 
                  className="circle-reel-img" 
                />
                <div className="circle-reel-center-icon">
                  <div className="circle-reel-glyph">
                    <Film size={15} />
                  </div>
                  <span className="circle-reel-sub">REEL</span>
                </div>
              </motion.div>
            )}

            {/* 3. POST */}
            {activeStage === 2 && (
              <motion.div
                key="circle-stage-post"
                className="circle-content-canvas circle-view-post"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.25 }}
              >
                <div className="circle-post-avatar">🌸</div>
                <div className="circle-post-text">POST</div>
                <div className="circle-post-likes">👍 1.8K</div>
              </motion.div>
            )}

            {/* 4. AD */}
            {activeStage === 3 && (
              <motion.div
                key="circle-stage-ad"
                className="circle-content-canvas circle-view-ad"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.25 }}
              >
                <div className="circle-ad-icon-box">
                  <Megaphone size={16} />
                </div>
                <div className="circle-ad-tag">AD</div>
              </motion.div>
            )}

            {/* 5. WEBSITE */}
            {activeStage === 4 && (
              <motion.div
                key="circle-stage-web"
                className="circle-content-canvas circle-view-web"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.25 }}
              >
                <div className="circle-web-icon-box">
                  <Globe size={16} />
                </div>
                <div className="circle-web-url">sbloom.co</div>
              </motion.div>
            )}

            {/* 6. VIDEO OF S-BLOOM */}
            {activeStage === 5 && (
              <motion.div
                key="circle-stage-video"
                className="circle-content-canvas circle-view-video"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.25 }}
              >
                <video 
                  ref={videoRef}
                  src="/hero-studio-video.mp4" 
                  playsInline 
                  loop 
                  muted={isMuted}
                  className="circle-playing-video"
                />
                <div className="circle-video-badge-overlay">
                  <span>● VIDEO</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Small Audio Toggle Floating on the edge of the circle during video stage */}
        {activeStage === 5 && (
          <button 
            className="circle-sound-toggle-btn" 
            onClick={toggleSound}
            title={isMuted ? "Unmute S-Bloom video" : "Mute video"}
            aria-label="Toggle audio"
          >
            {isMuted ? <VolumeX size={13} /> : <Volume2 size={13} />}
          </button>
        )}
      </div>
    </div>
  );
};

export default BottomCornerScrollShowcase;
