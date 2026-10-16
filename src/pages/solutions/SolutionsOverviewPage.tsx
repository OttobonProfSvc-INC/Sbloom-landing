import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  MapPin, 
  Search, 
  ShieldCheck, 
  Share2, 
  Camera, 
  FileText, 
  Megaphone, 
  Target, 
  TrendingUp, 
  LineChart, 
  Eye, 
  Users, 
  Award, 
  ArrowRight,
  ArrowLeft,
  Play
} from 'lucide-react';
import { ScrollReveal } from '../../components/ScrollReveal';
import './SolutionsPage.css';

interface SolutionsPageProps {
  initialSection?: 'build' | 'create' | 'promote' | 'grow';
}

interface StageData {
  id: 'build' | 'create' | 'promote' | 'grow';
  num: string;
  label: string;
  headline: string;
  lead: string;
  ctaText: string;
  ctaLink: string;
  services: Array<{
    title: string;
    desc: string;
    icon: React.ElementType;
  }>;
}

const STAGES: StageData[] = [
  {
    id: 'build',
    num: '01',
    label: 'BUILD',
    headline: 'Help people find your business',
    lead: 'We create a strong online foundation so people can find your business, understand your services, and contact you.',
    ctaText: 'Start Building Your Foundation',
    ctaLink: '/contact?interest=build',
    services: [
      {
        title: 'Website Design & Development',
        desc: 'Create a professional, mobile-friendly website that explains your services clearly.',
        icon: Globe,
      },
      {
        title: 'Google Business Profile',
        desc: 'Set up and improve your profile so local customers can find your business on Google Search and Maps.',
        icon: MapPin,
      },
      {
        title: 'SEO & Search Visibility',
        desc: 'Help your website appear when people search for services like yours.',
        icon: Search,
      },
      {
        title: 'Brand Presence',
        desc: 'Keep your business information and branding consistent across relevant online platforms.',
        icon: ShieldCheck,
      },
    ],
  },
  {
    id: 'create',
    num: '02',
    label: 'CREATE',
    headline: 'Help people understand your value',
    lead: 'We create useful, engaging content that explains what makes your business valuable and helps people build trust in your brand.',
    ctaText: 'Create Meaningful Content',
    ctaLink: '/contact?interest=create',
    services: [
      {
        title: 'Social Media Management & Posts',
        desc: 'Consistent, professional posting that keeps your audience informed, engaged, and connected.',
        icon: Share2,
      },
      {
        title: 'Photo & Video Content',
        desc: 'High-quality visual production including reels, short-form video, and expert photography.',
        icon: Camera,
      },
      {
        title: 'Captions, Copy & Digital Content',
        desc: 'Clear, compelling messaging that communicates your expertise and value in everyday language.',
        icon: FileText,
      },
    ],
  },
  {
    id: 'promote',
    num: '03',
    label: 'PROMOTE',
    headline: 'Reach the right audience',
    lead: 'We help your business reach relevant people through targeted advertising and marketing campaigns.',
    ctaText: 'Promote Your Business',
    ctaLink: '/contact?interest=promote',
    services: [
      {
        title: 'Meta Ads',
        desc: 'Targeted Instagram and Facebook campaigns reaching clients and decision-makers in your target geography.',
        icon: Megaphone,
      },
      {
        title: 'Google Ads',
        desc: 'Search and local service ads positioned when high-intent prospects search for your solutions.',
        icon: Search,
      },
      {
        title: 'Campaign Planning & Management',
        desc: 'Strategic audience targeting, creative testing, and budget allocation to maximize return.',
        icon: Target,
      },
      {
        title: 'Performance Monitoring & Improvement',
        desc: 'Ongoing campaign optimization to refine cost-per-enquiry and reach quality prospects.',
        icon: LineChart,
      },
    ],
  },
  {
    id: 'grow',
    num: '04',
    label: 'GROW',
    headline: 'Turn your online presence into opportunities',
    lead: 'GROW is the intended business outcome of BUILD, CREATE, and PROMOTE — not a separate standalone service. When your foundation is solid, your value is clear, and your promotions reach the right people, sustainable growth happens naturally.',
    ctaText: 'Talk to sBLOOM About Growth',
    ctaLink: '/contact',
    services: [
      {
        title: 'Better Online Visibility',
        desc: 'A recognized, discoverable digital presence across search engines, maps, and social platforms.',
        icon: Eye,
      },
      {
        title: 'More Relevant Enquiries & Opportunities',
        desc: 'Connect with prospective clients, students, or patients who are genuinely seeking your expertise.',
        icon: Users,
      },
      {
        title: 'Stronger Brand Trust',
        desc: 'Consistent messaging and verified quality that give prospective clients confidence in choosing you.',
        icon: Award,
      },
      {
        title: 'Support for Long-Term Business Growth',
        desc: 'A durable digital asset that works continuously to sustain and expand your business reputation.',
        icon: TrendingUp,
      },
    ],
  },
];

export const SolutionsOverviewPage: React.FC<SolutionsPageProps> = ({ initialSection }) => {
  const location = useLocation();
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(1);
  const trackRef = useRef<HTMLDivElement>(null);
  const isProgrammaticScroll = useRef(false);

  const activeStage = STAGES[activeIdx];

  // Turn page directly to a specific stage index
  const goToStage = (newIdx: number, scrollIntoTrack = true) => {
    if (newIdx < 0 || newIdx >= STAGES.length) return;
    setDirection(newIdx > activeIdx ? 1 : -1);
    setActiveIdx(newIdx);

    // Update URL hash smoothly
    const stageId = STAGES[newIdx].id;
    if (window.location.hash !== `#${stageId}`) {
      window.history.replaceState(null, '', `#${stageId}`);
    }

    if (scrollIntoTrack && trackRef.current) {
      isProgrammaticScroll.current = true;
      const trackTop = trackRef.current.offsetTop - 85;
      const trackHeight = trackRef.current.offsetHeight - window.innerHeight;
      const progress = newIdx / (STAGES.length - 1);
      const targetScroll = trackTop + progress * trackHeight;

      window.scrollTo({
        top: Math.max(0, targetScroll),
        behavior: 'smooth',
      });

      setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, 700);
    }
  };

  // Sync with URL hash or initialSection prop
  useEffect(() => {
    const hash = (initialSection || location.hash.replace('#', '')).toLowerCase();
    const foundIdx = STAGES.findIndex((s) => s.id === hash);
    if (foundIdx !== -1) {
      goToStage(foundIdx, true);
    }
  }, [initialSection, location.hash]);

  // Scroll-driven page turning as user scrolls down through the track
  useEffect(() => {
    const handleScroll = () => {
      if (isProgrammaticScroll.current || !trackRef.current) return;
      const track = trackRef.current;
      const rect = track.getBoundingClientRect();
      const trackTop = window.pageYOffset + rect.top;
      const trackHeight = track.offsetHeight - window.innerHeight;

      if (trackHeight <= 0) return;

      const currentScroll = window.pageYOffset - trackTop;
      const progress = Math.min(1, Math.max(0, currentScroll / trackHeight));

      let nextIdx = 0;
      if (progress < 0.28) {
        nextIdx = 0; // BUILD
      } else if (progress < 0.58) {
        nextIdx = 1; // CREATE
      } else if (progress < 0.88) {
        nextIdx = 2; // PROMOTE
      } else {
        nextIdx = 3; // GROW
      }

      if (nextIdx !== activeIdx) {
        setDirection(nextIdx > activeIdx ? 1 : -1);
        setActiveIdx(nextIdx);
        window.history.replaceState(null, '', `#${STAGES[nextIdx].id}`);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeIdx]);

  // Page turn motion variants (3D book / luxury card flip)
  const pageVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
      rotateY: dir > 0 ? -6 : 6,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 0.42,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -50 : 50,
      opacity: 0,
      rotateY: dir > 0 ? 6 : -6,
      scale: 0.98,
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <div className="sol-page">
      <div className="sol-bg-mesh" aria-hidden="true" />

      {/* =================================================================
         1. HERO INTRO
         ================================================================= */}
      <section className="sol-hero-intro">
        <div className="sol-container">
          <ScrollReveal delay={0}>
            <span className="sol-eyebrow">OUR SOLUTIONS</span>
            <h1 className="sol-hero-title">
              From Foundational Setup to{' '}
              <span className="sol-title-accent">Sustainable Growth.</span>
            </h1>
            <p className="sol-hero-desc">
              We help good businesses become discoverable, trusted, and chosen through a structured, four-phase digital process.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* =================================================================
         2. SCROLL TRACK (DRIVES PAGE-BY-PAGE TURNING ON SCROLL)
         ================================================================= */}
      <div ref={trackRef} className="sol-scroll-track" id="solutions-track">
        <div className="sol-pinned-viewport">
          <div className="sol-container">
            {/* =============================================================
               3. THE WHOLE BUILD, CREATE, PROMOTE, GROW IN ONE LINE
               ============================================================= */}
            <div className="sol-single-line-nav" role="tablist" aria-label="Solutions Stages">
              {STAGES.map((stg, idx) => {
                const isActive = activeIdx === idx;
                const isPassed = activeIdx > idx;

                return (
                  <React.Fragment key={stg.id}>
                    <button
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      className={`sol-line-tab-btn ${isActive ? 'active' : ''}`}
                      onClick={() => goToStage(idx, true)}
                    >
                      <span className="sol-line-num">{stg.num}</span>
                      <span>{stg.label}</span>
                    </button>

                    {idx < STAGES.length - 1 && (
                      <div className="sol-line-connector" aria-hidden="true">
                        <div
                          className="sol-line-connector-fill"
                          style={{ width: isPassed ? '100%' : '0%' }}
                        />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            {/* =============================================================
               4. THE SINGLE PRESENTATION CARD (PAGE TURNING ANIMATION)
               ============================================================= */}
            <div className="sol-page-card-wrapper">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeStage.id}
                  custom={direction}
                  variants={pageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="sol-page-card"
                >
                  <div className="sol-card-top-bar" aria-hidden="true" />
                  
                  <div className="sol-card-grid">
                    {/* Left Column: Heading, Lead, Services List, CTA */}
                    <div className="sol-card-content">
                      <div className="sol-card-badge-row">
                        <div className="sol-card-step-num">{activeStage.num}</div>
                        <span className="sol-card-tag">{activeStage.label}</span>
                      </div>
                      
                      <h2 className="sol-card-headline">{activeStage.headline}</h2>
                      <p className="sol-card-lead">{activeStage.lead}</p>

                      <div className="sol-service-list">
                        {activeStage.services.map((svc, i) => {
                          const IconComp = svc.icon;
                          return (
                            <div key={i} className="sol-service-item">
                              <div className="sol-service-icon-box">
                                <IconComp size={17} strokeWidth={2.2} />
                              </div>
                              <div className="sol-service-text-wrap">
                                <h3 className="sol-service-title">{svc.title}</h3>
                                <p className="sol-service-desc">{svc.desc}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {activeStage.id !== 'grow' && (
                        <Link to={activeStage.ctaLink} className="sol-card-cta-btn">
                          <span>{activeStage.ctaText}</span>
                          <ArrowRight size={17} strokeWidth={2.2} />
                        </Link>
                      )}
                    </div>

                    {/* Right Column: Tailored Visual Mockup */}
                    <div className="sol-card-visual-wrap">
                      {activeStage.id === 'build' && (
                        <div className="sol-visual-build">
                          <div className="sol-gbp-preview">
                            <div className="sol-gbp-top">
                              <div className="sol-gbp-verified">
                                <span>Your Business Profile</span>
                                <ShieldCheck size={16} className="sol-verified-badge" />
                              </div>
                              <div className="sol-gbp-rating">
                                <span className="sol-stars">★★★★★</span> 4.9 (120+ Reviews)
                              </div>
                            </div>
                            <div className="sol-gbp-meta">
                              Local Health / Education / Professional Firm · Open Now
                            </div>
                            <div className="sol-gbp-actions">
                              <span className="sol-gbp-action-chip">Call Now</span>
                              <span className="sol-gbp-action-chip">Directions</span>
                              <span className="sol-gbp-action-chip">Website</span>
                            </div>
                          </div>

                          <div className="sol-web-preview">
                            <div className="sol-browser-header">
                              <span className="sol-browser-dot" />
                              <span className="sol-browser-dot" />
                              <span className="sol-browser-dot" />
                              <span className="sol-browser-url">https://yourbusiness.com</span>
                            </div>
                            <div className="sol-seo-tags">
                              <span className="sol-seo-tag">Mobile Responsive</span>
                              <span className="sol-seo-tag">Fast Loading</span>
                              <span className="sol-seo-tag">Local SEO #1</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {activeStage.id === 'create' && (
                        <div className="sol-visual-create">
                          <div className="sol-reel-card">
                            <div className="sol-reel-header">
                              <div className="sol-reel-avatar">sB</div>
                              <div>
                                <div className="sol-reel-user">sBLOOM Creative Suite</div>
                                <div style={{ fontSize: '0.74rem', color: '#785A46' }}>High-Impact Content</div>
                              </div>
                            </div>
                            <div className="sol-reel-frame">
                              <div className="sol-reel-play-btn">
                                <Play size={18} fill="#FFFCF7" strokeWidth={0} />
                              </div>
                              <span className="sol-reel-badge">0:45 Reel</span>
                            </div>
                            <p className="sol-reel-caption">
                              Showcasing your real expertise, workplace, and genuine client stories with clear storytelling.
                            </p>
                          </div>
                        </div>
                      )}

                      {activeStage.id === 'promote' && (
                        <div className="sol-visual-promote">
                          <div className="sol-ad-box">
                            <div className="sol-ad-tag-row">
                              <span className="sol-ad-sponsored">Sponsored Campaign</span>
                              <span className="sol-ad-status">
                                <span className="sol-status-dot" /> Active & Optimized
                              </span>
                            </div>
                            <h4 className="sol-ad-title">Expert-Led Healthcare & Professional Services</h4>
                            <p className="sol-ad-copy">
                              Trusted care and tailored solutions. Direct consultations with specialized professionals.
                            </p>
                            <div className="sol-ad-targeting">
                              <span className="sol-targeting-pill">Radius: 15 km</span>
                              <span className="sol-targeting-pill">High Search Intent</span>
                              <span className="sol-targeting-pill">Verified Audience</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {activeStage.id === 'grow' && (
                        <div className="sol-visual-grow">
                          <div className="sol-outcome-grid">
                            <div className="sol-outcome-card">
                              <div className="sol-outcome-icon">
                                <Eye size={15} />
                              </div>
                              <div className="sol-outcome-title">Discoverability</div>
                              <p className="sol-outcome-sub">Easy to find on Google and Maps</p>
                            </div>

                            <div className="sol-outcome-card">
                              <div className="sol-outcome-icon">
                                <Users size={15} />
                              </div>
                              <div className="sol-outcome-title">Enquiries</div>
                              <p className="sol-outcome-sub">Qualified, high-intent interest</p>
                            </div>

                            <div className="sol-outcome-card">
                              <div className="sol-outcome-icon">
                                <Award size={15} />
                              </div>
                              <div className="sol-outcome-title">Brand Trust</div>
                              <p className="sol-outcome-sub">Verified credibility & reviews</p>
                            </div>

                            <div className="sol-outcome-card">
                              <div className="sol-outcome-icon">
                                <TrendingUp size={15} />
                              </div>
                              <div className="sol-outcome-title">Long-Term Value</div>
                              <p className="sol-outcome-sub">Sustainable market presence</p>
                            </div>
                          </div>

                          <div className="sol-grow-note-box">
                            <strong>Coordinated Outcome:</strong> We focus on sustainable, long-term digital strength rather than short-lived gimmicks or unrealistic guarantees.
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* =============================================================
               5. PAGE CONTROLS BAR (PREV / NEXT & PAGE COUNTER)
               ============================================================= */}
            <div className="sol-page-controls-bar">
              <div className="sol-page-indicator">
                <span>Page <strong>{activeIdx + 1}</strong> of <strong>4</strong>:</span>
                <span style={{ color: '#C9952E' }}>{activeStage.label}</span>
              </div>

              <div className="sol-page-arrows">
                <button
                  type="button"
                  className="sol-page-arrow-btn"
                  onClick={() => goToStage(activeIdx - 1, true)}
                  disabled={activeIdx === 0}
                  aria-label="Previous Page"
                >
                  <ArrowLeft size={15} />
                  <span>Previous</span>
                </button>

                <button
                  type="button"
                  className="sol-page-arrow-btn"
                  onClick={() => goToStage(activeIdx + 1, true)}
                  disabled={activeIdx === STAGES.length - 1}
                  aria-label="Next Page"
                >
                  <span>Next</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsOverviewPage;
