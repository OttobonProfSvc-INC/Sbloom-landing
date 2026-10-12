import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import './cameraVideo.css';

export const ScrollBloomCameraVideo: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  // Framer Motion scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001
  });

  // Scroll Transforms:
  // 1. Camera opacity & scale
  // Visible from 0.1 to 0.5, then zooms into the lens and fades out as video takes over
  const cameraOpacity = useTransform(smoothProgress, [0.1, 0.25, 0.5, 0.65], [0.6, 1, 0.4, 0]);
  const cameraScale = useTransform(smoothProgress, [0.1, 0.55], [0.95, 1.15]);

  // 2. Video opacity & scale
  // Cross-fades in as camera fades out, scaling gracefully to full screen
  const videoOpacity = useTransform(smoothProgress, [0.35, 0.55, 0.9], [0, 1, 1]);
  const videoScale = useTransform(smoothProgress, [0.35, 0.7], [0.92, 1]);

  // 3. Lens aperture glow flare
  const flareIntensity = useTransform(smoothProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  // Auto-play video when in view
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
            setIsPlaying(true);
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

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

  return (
    <section ref={containerRef} className="scroll-camera-video-section" id="studio-bloom">
      <div className="camera-ambient-glow"></div>

      <div className="container">
        {/* Section Header */}
        <div className="camera-section-header">
          <span className="camera-badge">
            <span className="camera-rec-dot"></span> PRODUCTION IN MOTION
          </span>
          <h2 className="camera-section-title">
            From The Cinema Lens to The Social Feed: <br/>
            <span className="iridescent-highlight">Watch Content Bloom Into Video</span>
          </h2>
          <p className="camera-section-desc">
            As you scroll down, experience how S-Bloom captures authentic authority through cinema-grade cameras and transforms it into captivating, high-impact social video.
          </p>
        </div>

        {/* Cinematic Stage */}
        <div className="camera-interactive-stage">
          <div className="camera-viewport-frame">
            {/* Ambient Nebula Flare */}
            <motion.div 
              className="camera-lens-flare" 
              style={{ opacity: flareIntensity }}
            ></motion.div>

            {/* Sparkle Twinkles */}
            <div className="camera-sparkles-overlay">
              <span className="cam-sparkle cs-1">✦</span>
              <span className="cam-sparkle cs-2">✨</span>
              <span className="cam-sparkle cs-3">★</span>
              <span className="cam-sparkle cs-4">✦</span>
            </div>

            {/* Layer 1: 3D Cinema Camera */}
            <motion.div 
              className="camera-image-layer"
              style={{ opacity: cameraOpacity, scale: cameraScale }}
            >
              <img 
                src="/camera-studio-bloom.jpg" 
                alt="S-Bloom Cinema Production Camera" 
                className="camera-visual-img" 
              />
              <div className="camera-hud-badge">
                <span className="hud-rec">● REC</span>
                <span>8K CINEMA SENSOR</span>
              </div>
            </motion.div>

            {/* Layer 2: Playing HD Studio Video */}
            <motion.div 
              className="camera-video-layer"
              style={{ opacity: videoOpacity, scale: videoScale }}
            >
              <video 
                ref={videoRef}
                src="/hero-studio-video.mp4" 
                playsInline 
                muted={isMuted} 
                loop 
                className="camera-playing-video"
              />
              <div className="camera-video-controls">
                <button 
                  onClick={togglePlay} 
                  className="cam-ctrl-btn"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  {isPlaying ? '⏸ Pause' : '▶ Play'}
                </button>
                <button 
                  onClick={toggleSound} 
                  className="cam-ctrl-btn sound-btn"
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                  {isMuted ? '🔇 Unmute Audio' : '🔊 Sound On'}
                </button>
              </div>
            </motion.div>

            {/* Scroll Status Indicator Pill */}
            <div className="camera-scroll-pill">
              <span className="scroll-pill-pulse"></span>
              <span>Scroll down to zoom into the video</span>
            </div>
          </div>

          {/* 3 Production Feature Cards */}
          <div className="camera-feature-grid">
            <div className="camera-feature-card">
              <div className="feature-icon-badge">🎥</div>
              <h3>Cinema-Grade Production</h3>
              <p>State-of-the-art 8K sensors, studio lighting, and optics that give your institution undisputed premium quality.</p>
            </div>

            <div className="camera-feature-card">
              <div className="feature-icon-badge">⚡</div>
              <h3>Social-First Storytelling</h3>
              <p>Reels, shorts, and video campaigns crafted specifically for the algorithms and attention spans of modern audiences.</p>
            </div>

            <div className="camera-feature-card">
              <div className="feature-icon-badge">📈</div>
              <h3>Measurable Audience Growth</h3>
              <p>Clear analytics, genuine engagement, and consistent inbound patients, students, and high-value clients.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollBloomCameraVideo;
