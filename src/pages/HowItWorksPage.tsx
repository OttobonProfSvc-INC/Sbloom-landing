import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Search,
  BarChart3,
  Lightbulb,
  Rocket,
  TrendingUp,
} from 'lucide-react';
import './HowItWorksPage.css';

interface StepItem {
  id: string;
  badge: string;
  title: string;
  desc: string;
  image: string;
  alt: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
  tintBg: string;
  iconColor: string;
}

const STEPS: StepItem[] = [
  {
    id: 'understand',
    badge: '01 / 05',
    title: 'Understand your business',
    desc: 'We learn about your services, audience, goals, and current online presence to understand where you stand today.',
    image: '/hiw/step1.jpg',
    alt: 'Laptop displaying business analytics on a warm professional desk',
    icon: Search,
    tintBg: '#F7EFE5',
    iconColor: '#935F2D',
  },
  {
    id: 'opportunities',
    badge: '02 / 05',
    title: 'Find opportunities',
    desc: 'We identify what is working, find gaps, and discover opportunities to help more people find and choose your business.',
    image: '/hiw/step2.jpg',
    alt: 'Spiral notebook with planning notes, ideas and lightbulb sketch',
    icon: BarChart3,
    tintBg: '#F3EAE0',
    iconColor: '#785A46',
  },
  {
    id: 'plan',
    badge: '03 / 05',
    title: 'Create the right plan',
    desc: 'We combine business insights and AI-assisted research to plan the right messaging, content, and marketing activities for your goals.',
    image: '/hiw/step3.jpg',
    alt: 'Laptop, planning notes, and a clear strategy workspace',
    icon: Lightbulb,
    tintBg: '#FBF2E0',
    iconColor: '#B07B28',
  },
  {
    id: 'action',
    badge: '04 / 05',
    title: 'Put the plan into action',
    desc: 'We improve your online presence, create useful content, and run relevant campaigns across the right platforms.',
    image: '/hiw/step4.jpg',
    alt: 'Professional studio camera setup for marketing content creation',
    icon: Rocket,
    tintBg: '#FCEFE7',
    iconColor: '#A1592A',
  },
  {
    id: 'growth',
    badge: '05 / 05',
    title: 'Track and grow',
    desc: 'We review performance, understand what is working, and improve our approach to support long-term business growth.',
    image: '/hiw/step5.jpg',
    alt: 'Tablet displaying business growth analytics dashboard',
    icon: TrendingUp,
    tintBg: '#EFF2E7',
    iconColor: '#5C7449',
  },
];

export const HowItWorksPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );
  const prefersReducedMotion = useReducedMotion();

  // Track previous offsets per step index to detect wrap-arounds
  const prevOffsetsRef = useRef<{ [key: number]: number }>({
    0: 0,
    1: 1,
    2: 2,
    3: -2,
    4: -1,
  });

  // Keep track of window resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const total = STEPS.length;

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const handleGoTo = useCallback(
    (index: number) => {
      setActiveIndex(index);
    },
    []
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  // Touch Swipe Support for Mobile/Tablet
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.targetTouches[0].clientX;
    touchEndXRef.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current === null || touchEndXRef.current === null) return;
    const distance = touchStartXRef.current - touchEndXRef.current;
    const minSwipe = 45;
    if (distance > minSwipe) {
      handleNext();
    } else if (distance < -minSwipe) {
      handlePrev();
    }
    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  // Helper to compute cyclic offset (-2 to +2)
  const getOffset = (index: number) => {
    let diff = index - activeIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <div className="hiw-carousel-page">
      {/* Crisp background vector curves (zero foggy/white gas glow) */}
      <div className="hiw-vector-curves" aria-hidden="true">
        <svg viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M-60 180 C240 80, 520 280, 780 440 C1040 600, 1260 580, 1500 480"
            stroke="#EADBCC"
            strokeWidth="20"
            opacity="0.32"
          />
          <path
            d="M-20 100 C320 60, 580 220, 840 380 C1100 540, 1320 500, 1540 420"
            stroke="#F0E3D3"
            strokeWidth="14"
            opacity="0.45"
          />
        </svg>
      </div>

      <div className="hiw-carousel-container">
        {/* =================================================================
           HERO HEADER: Eyebrow + Prominent Centered Headline
           (No matter/description below the heading)
           ================================================================= */}
        <header className="hiw-header-centered">
          <div className="hiw-eyebrow-container">
            <span className="hiw-eyebrow-rule" />
            <span className="hiw-eyebrow-text">HOW IT WORKS</span>
            <span className="hiw-eyebrow-rule" />
          </div>

          <h1 className="hiw-headline-main">
            AI-powered process.<br />
            <span className="hiw-headline-highlight">Real growth for your business.</span>
          </h1>
        </header>

        {/* =================================================================
           MAIN CAROUSEL: One Centered Active Card + Blurred Side Previews
           ================================================================= */}
        <section
          className="hiw-carousel-section"
          aria-label="How It Works Steps Carousel"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Circular Previous Arrow Button */}
          <button
            type="button"
            className="hiw-nav-arrow hiw-nav-prev"
            onClick={handlePrev}
            aria-label="Previous step"
          >
            <ArrowLeft size={18} strokeWidth={2.4} />
          </button>

          {/* Cards Track */}
          <div className="hiw-cards-track">
            {STEPS.map((step, idx) => {
              const offset = getOffset(idx);
              const prevOffset = prevOffsetsRef.current[idx] ?? offset;
              const isWrapping = Math.abs(prevOffset - offset) > 2;
              prevOffsetsRef.current[idx] = offset;

              const isActive = offset === 0;
              const IconComponent = step.icon;

              // Responsive positioning math
              const isMobile = windowWidth < 680;
              const isTablet = windowWidth >= 680 && windowWidth < 1080;

              let targetX = 0;
              let targetScale = 1;
              let targetOpacity = 1;
              let targetBlur = 'blur(0px)';
              let targetZIndex = 10;
              let isVisible = true;

              if (isMobile) {
                if (offset === 0) {
                  targetX = 0;
                  targetScale = 1;
                  targetOpacity = 1;
                  targetBlur = 'blur(0px)';
                  targetZIndex = 10;
                } else if (offset === 1) {
                  targetX = 320;
                  targetScale = 0.85;
                  targetOpacity = 0;
                  targetBlur = 'blur(0px)';
                  targetZIndex = 5;
                  isVisible = false;
                } else if (offset === -1) {
                  targetX = -320;
                  targetScale = 0.85;
                  targetOpacity = 0;
                  targetBlur = 'blur(0px)';
                  targetZIndex = 5;
                  isVisible = false;
                } else {
                  targetX = offset > 0 ? 450 : -450;
                  targetScale = 0.75;
                  targetOpacity = 0;
                  targetBlur = 'blur(0px)';
                  targetZIndex = 1;
                  isVisible = false;
                }
              } else if (isTablet) {
                if (offset === 0) {
                  targetX = 0;
                  targetScale = 1;
                  targetOpacity = 1;
                  targetBlur = 'blur(0px)';
                  targetZIndex = 10;
                } else if (offset === 1) {
                  targetX = 245;
                  targetScale = 0.86;
                  targetOpacity = 0.65;
                  targetBlur = 'blur(0px)';
                  targetZIndex = 6;
                } else if (offset === -1) {
                  targetX = -245;
                  targetScale = 0.86;
                  targetOpacity = 0.65;
                  targetBlur = 'blur(0px)';
                  targetZIndex = 6;
                } else {
                  targetX = offset > 0 ? 420 : -420;
                  targetScale = 0.72;
                  targetOpacity = 0;
                  targetBlur = 'blur(0px)';
                  targetZIndex = 2;
                  isVisible = false;
                }
              } else {
                // Desktop
                if (offset === 0) {
                  targetX = 0;
                  targetScale = 1;
                  targetOpacity = 1;
                  targetBlur = 'blur(0px)';
                  targetZIndex = 10;
                } else if (offset === 1) {
                  targetX = 285;
                  targetScale = 0.86;
                  targetOpacity = 0.68;
                  targetBlur = 'blur(0px)';
                  targetZIndex = 6;
                } else if (offset === -1) {
                  targetX = -285;
                  targetScale = 0.86;
                  targetOpacity = 0.68;
                  targetBlur = 'blur(0px)';
                  targetZIndex = 6;
                } else if (offset === 2) {
                  targetX = 520;
                  targetScale = 0.72;
                  targetOpacity = 0.28;
                  targetBlur = 'blur(0px)';
                  targetZIndex = 3;
                } else if (offset === -2) {
                  targetX = -520;
                  targetScale = 0.72;
                  targetOpacity = 0.28;
                  targetBlur = 'blur(0px)';
                  targetZIndex = 3;
                }
              }

              // Smooth transition config with zero duration on cyclic wrap-around
              const transitionConfig = prefersReducedMotion
                ? { duration: 0.1 }
                : isWrapping
                ? { duration: 0 }
                : {
                    type: 'spring' as const,
                    stiffness: 240,
                    damping: 27,
                    mass: 0.85,
                  };

              return (
                <motion.article
                  key={step.id}
                  className={`hiw-card-item ${isActive ? 'is-active' : 'is-preview'}`}
                  initial={false}
                  animate={{
                    x: targetX,
                    scale: targetScale,
                    opacity: targetOpacity,
                    filter: targetBlur,
                    zIndex: targetZIndex,
                  }}
                  transition={transitionConfig}
                  style={{
                    visibility: isVisible ? 'visible' : 'hidden',
                    pointerEvents: isVisible ? 'auto' : 'none',
                    cursor: isActive ? 'default' : 'pointer',
                  }}
                  onClick={() => {
                    if (!isActive) {
                      handleGoTo(idx);
                    }
                  }}
                  tabIndex={isActive ? 0 : -1}
                  aria-current={isActive ? 'true' : undefined}
                >
                  {/* Top Image Container */}
                  <div className="hiw-card-media">
                    <img
                      src={step.image}
                      alt={step.alt}
                      className="hiw-card-img"
                      loading="eager"
                    />
                    {/* Step Indicator Badge */}
                    <div className="hiw-step-pill" aria-label={`Step ${step.badge}`}>
                      <span>{step.badge}</span>
                    </div>
                  </div>

                  {/* Bottom Content Body */}
                  <div className="hiw-card-content">
                    {/* Header Row: Circular Tinted Icon + Step Heading */}
                    <div className="hiw-card-title-row">
                      <div
                        className="hiw-card-icon-bubble"
                        style={{
                          backgroundColor: step.tintBg,
                          color: step.iconColor,
                        }}
                      >
                        <IconComponent size={17} strokeWidth={2.2} />
                      </div>
                      <h3 className="hiw-card-title">{step.title}</h3>
                    </div>

                    {/* Short Description */}
                    <p className={`hiw-card-desc ${isActive ? 'is-desc-active' : 'is-desc-faint'}`}>
                      {step.desc}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* Circular Next Arrow Button */}
          <button
            type="button"
            className="hiw-nav-arrow hiw-nav-next"
            onClick={handleNext}
            aria-label="Next step"
          >
            <ArrowRight size={18} strokeWidth={2.4} />
          </button>
        </section>

        {/* =================================================================
           PROGRESS DOTS NAVIGATION
           ================================================================= */}
        <nav className="hiw-dots-nav" aria-label="Step selection">
          {STEPS.map((s, dotIndex) => {
            const isDotActive = dotIndex === activeIndex;
            return (
              <button
                key={s.id}
                type="button"
                className={`hiw-dot-btn ${isDotActive ? 'is-active' : ''}`}
                onClick={() => handleGoTo(dotIndex)}
                aria-label={`Go to step ${dotIndex + 1}: ${s.title}`}
                aria-current={isDotActive ? 'step' : undefined}
              />
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default HowItWorksPage;
