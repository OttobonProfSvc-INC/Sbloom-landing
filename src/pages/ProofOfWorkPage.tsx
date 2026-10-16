import React, { useState } from 'react';
import { Link } from 'react-router';
import { 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Star, 
  Camera, 
  FileText, 
  MapPin, 
  Monitor, 
  Search, 
  Smartphone, 
  Zap, 
  CheckCircle2, 
  Image as ImageIcon, 
  Film, 
  Calendar, 
  Heart, 
  Target, 
  BarChart3, 
  PhoneCall,
  type LucideIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from '../components/ScrollReveal';
import './ProofOfWorkPage.css';

type POWCategory = 'gbp' | 'website' | 'social' | 'ads';

interface POWCaseData {
  id: POWCategory;
  tabLabel: string;
  eyebrow: string;
  titlePrimary: string;
  titleAccent: string;
  desc: string;
  ctaText: string;
  ctaLink: string;
  visualImg: string;
  fullBannerImg: string;
  highlights: Array<{
    label: string;
    sublabel?: string;
    icon: LucideIcon;
  }>;
  bottomFeatures: Array<{
    title: string;
    desc: string;
    icon: LucideIcon;
  }>;
}

const POW_CASES: Record<POWCategory, POWCaseData> = {
  gbp: {
    id: 'gbp',
    tabLabel: 'Google Business Profile',
    eyebrow: 'PROOF OF WORK',
    titlePrimary: 'Turning Local Searches into',
    titleAccent: 'Real Opportunities.',
    desc: 'We optimize Google Business Profiles to improve visibility, build trust and bring in more customer enquiries.',
    ctaText: 'See More Results',
    ctaLink: '/contact?interest=gbp',
    visualImg: '/pow-visual-gbp.png',
    fullBannerImg: '/pow-full-gbp.png',
    highlights: [
      {
        label: 'Higher visibility',
        sublabel: 'in local searches',
        icon: TrendingUp,
      },
      {
        label: 'More enquiries',
        sublabel: 'from the right audience',
        icon: Users,
      },
      {
        label: 'A stronger and more reliable',
        sublabel: 'online presence',
        icon: Star,
      },
    ],
    bottomFeatures: [
      {
        title: 'Better photos',
        desc: 'Updated and high-quality images',
        icon: Camera,
      },
      {
        title: 'Complete information',
        desc: 'Accurate and up-to-date details',
        icon: FileText,
      },
      {
        title: 'Positive reviews',
        desc: 'More genuine customer reviews',
        icon: Star,
      },
      {
        title: 'Improved local visibility',
        desc: 'Higher ranking in local searches',
        icon: MapPin,
      },
    ],
  },
  website: {
    id: 'website',
    tabLabel: 'Website Development',
    eyebrow: 'PROOF OF WORK',
    titlePrimary: 'From an Outdated Website to a',
    titleAccent: 'High-Performing Presence.',
    desc: 'We redesign and optimize websites to improve search visibility and bring in more enquiries.',
    ctaText: 'See More Results',
    ctaLink: '/contact?interest=website',
    visualImg: '/pow-visual-website.png',
    fullBannerImg: '/pow-full-website.png',
    highlights: [
      {
        label: 'Modern Design',
        icon: Monitor,
      },
      {
        label: 'SEO Optimized',
        icon: Search,
      },
      {
        label: 'Mobile Friendly',
        icon: Smartphone,
      },
    ],
    bottomFeatures: [
      {
        title: 'Sub-1s Speed',
        desc: 'Ultra-fast loading speeds on mobile and desktop',
        icon: Zap,
      },
      {
        title: 'Search Visibility',
        desc: 'Ranked for high-intent keywords on Google Page 1',
        icon: Search,
      },
      {
        title: 'Responsive UI',
        desc: 'Flawless experience across iPhones, iPads, and Android',
        icon: Smartphone,
      },
      {
        title: 'Higher Conversions',
        desc: 'Optimized inquiry forms and clear call-to-actions',
        icon: CheckCircle2,
      },
    ],
  },
  social: {
    id: 'social',
    tabLabel: 'Social Media',
    eyebrow: 'PROOF OF WORK',
    titlePrimary: 'From Inconsistent Posts to a',
    titleAccent: 'Strong Social Presence.',
    desc: 'We create and manage high-quality content that builds brand identity and increases engagement.',
    ctaText: 'See More Results',
    ctaLink: '/contact?interest=social',
    visualImg: '/pow-visual-social.png',
    fullBannerImg: '/pow-full-social.png',
    highlights: [
      {
        label: 'Engaging Content',
        icon: ImageIcon,
      },
      {
        label: 'Consistent Posting',
        icon: Users,
      },
      {
        label: 'Better Engagement',
        icon: TrendingUp,
      },
    ],
    bottomFeatures: [
      {
        title: 'High-Quality Visuals',
        desc: 'Professional graphics, photos, and branded layouts',
        icon: ImageIcon,
      },
      {
        title: 'Short-Form Video',
        desc: 'Engaging Reels and video storytelling',
        icon: Film,
      },
      {
        title: 'Consistent Scheduling',
        desc: 'Weekly content calendars planned in advance',
        icon: Calendar,
      },
      {
        title: 'Community Growth',
        desc: 'Active follower engagement and brand reach',
        icon: Heart,
      },
    ],
  },
  ads: {
    id: 'ads',
    tabLabel: 'Digital Advertising',
    eyebrow: 'PROOF OF WORK',
    titlePrimary: 'From Limited Reach to More',
    titleAccent: 'Qualified Enquiries with Ads.',
    desc: 'We plan and manage targeted ad campaigns to reach the right audience and generate more enquiries.',
    ctaText: 'See More Results',
    ctaLink: '/contact?interest=ads',
    visualImg: '/pow-visual-ads.png',
    fullBannerImg: '/pow-full-ads.png',
    highlights: [
      {
        label: 'Targeted Campaigns',
        icon: Target,
      },
      {
        label: 'Better Efficiency',
        icon: BarChart3,
      },
      {
        label: 'More Enquiries',
        icon: PhoneCall,
      },
    ],
    bottomFeatures: [
      {
        title: 'Precision Targeting',
        desc: 'Ads shown only to high-intent local audiences',
        icon: Target,
      },
      {
        title: 'Cost Optimization',
        desc: 'Reduced cost per lead with optimized ad copy',
        icon: TrendingUp,
      },
      {
        title: 'Dual-Platform Scale',
        desc: 'Synchronized Google Search Ads & Meta Ads',
        icon: Zap,
      },
      {
        title: 'Verified Leads',
        desc: 'Direct patient, parent, and client inquiries delivered daily',
        icon: PhoneCall,
      },
    ],
  },
};

export const ProofOfWorkPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<POWCategory>('gbp');
  const currentCase = POW_CASES[activeTab];

  return (
    <div className="proof-page">
      {/* Background Organic Curved Backdrop */}
      <div className="proof-bg-curve" aria-hidden="true">
        <svg viewBox="0 0 1440 640" fill="none" preserveAspectRatio="none">
          <path
            d="M-40,80 C260,180 420,-30 840,40 C1180,100 1340,30 1520,70 L1520,0 L-40,0 Z"
            fill="#F6EFE5"
            opacity="0.6"
          />
          <path
            d="M-20,240 C340,320 620,110 1020,180 C1280,225 1420,130 1500,160"
            stroke="#EFE3D3"
            strokeWidth="38"
            strokeLinecap="round"
            fill="none"
            opacity="0.5"
          />
        </svg>
      </div>

      <div className="proof-main-container">
        {/* ===================================================================
            1. PILL SWITCHER TABS (GBP, WEBSITE, SOCIAL MEDIA, ADS)
            =================================================================== */}
        <div className="proof-pill-nav-wrap">
          <div className="proof-pill-nav" role="tablist" aria-label="Proof of Work Categories">
            {(Object.keys(POW_CASES) as POWCategory[]).map((catKey) => {
              const item = POW_CASES[catKey];
              const isActive = activeTab === catKey;

              return (
                <button
                  key={catKey}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`proof-pill-tab-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveTab(catKey)}
                >
                  {isActive && (
                    <div className="proof-pill-sprout" aria-hidden="true">
                      <svg viewBox="0 0 34 26" fill="none" className="proof-sprout-svg">
                        <path
                          d="M10 22 C9 13 3 10 1 13 C-1 16 2 20 8 19 C10 19 10 21 10 22 Z"
                          fill="#4D9B77"
                        />
                        <path
                          d="M13 22 C13 10 18 3 26 4 C29 5 28 11 22 13 C17 15 14 18 13 22 Z"
                          fill="#66BC94"
                        />
                        <path
                          d="M11 22 C10 13 8 2 15 1 C19 1 19 6 16 12 C14 17 12 20 11 22 Z"
                          fill="#3B8160"
                        />
                      </svg>
                    </div>
                  )}
                  <span>{item.tabLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ===================================================================
            2. ULTRA-CRISP HD PROOF OF WORK SHOWCASE CARD (100% VECTOR TEXT)
            =================================================================== */}
        <div className="pow-card-wrapper">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCase.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28, ease: 'easeInOut' }}
              className="pow-showcase-card"
            >
              {/* TOP SPLIT: REAL VECTOR TEXT ON LEFT + HD DEVICE MOCKUP ON RIGHT */}
              <div className="pow-showcase-main-grid">
                {/* Left Column: 100% Vector HTML Text — Never Blurred */}
                <div className="pow-info-col">
                  <div className="pow-eyebrow-row">
                    <span className="pow-eyebrow">{currentCase.eyebrow}</span>
                    <span className="pow-eyebrow-line" />
                  </div>

                  <h1 className="pow-main-title">
                    {currentCase.titlePrimary}{' '}
                    <span className="pow-title-accent">{currentCase.titleAccent}</span>
                  </h1>

                  <p className="pow-main-desc">{currentCase.desc}</p>

                  {/* 3 Highlight Badges */}
                  <div className="pow-highlights-list">
                    {currentCase.highlights.map((h, i) => {
                      const IconComp = h.icon;
                      return (
                        <div key={i} className="pow-highlight-row">
                          <div className="pow-badge-icon-box">
                            <IconComp size={18} strokeWidth={2} />
                          </div>
                          <div className="pow-highlight-text">
                            <span className="pow-h-title">{h.label}</span>
                            {h.sublabel && (
                              <span className="pow-h-sub">{h.sublabel}</span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>


                </div>

                {/* Right Column: 2x HD Before & After Comparison Mockup */}
                <div className="pow-visual-col">
                  <div className="pow-visual-card-wrap">
                    <img
                      src={currentCase.visualImg}
                      alt={`${currentCase.tabLabel} Before and After Comparison`}
                      className="pow-visual-img"
                    />
                  </div>
                </div>
              </div>

              {/* BOTTOM ROW: 4 FEATURE HIGHLIGHT CARDS (100% CRISP VECTOR TEXT) */}
              <div className="pow-bottom-features-bar">
                {currentCase.bottomFeatures.map((feat, idx) => {
                  const FeatIcon = feat.icon;
                  return (
                    <div key={idx} className="pow-feature-card">
                      <div className="pow-feat-icon-box">
                        <FeatIcon size={20} strokeWidth={1.9} />
                      </div>
                      <div className="pow-feat-text">
                        <h4 className="pow-feat-title">{feat.title}</h4>
                        <p className="pow-feat-desc">{feat.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ===================================================================
            3. BOTTOM IMPACT & CONSULTATION CARD
            =================================================================== */}
        <section className="proof-why-different-section">
          <ScrollReveal delay={50}>
            <div className="proof-why-box">
              <div className="proof-why-left">
                <span className="proof-why-eyebrow">VERIFIED GROWTH PROCESS</span>
                <h2 className="proof-why-title">
                  Budget-Friendly Optimization. <br />
                  Transparent Local Results.
                </h2>
                <p className="proof-why-desc">
                  At <strong>sBLOOM</strong>, we eliminate traditional agency overhead and use proprietary AI workflows 
                  to deliver measurable local rankings, genuine client reviews, and direct enquiries.
                </p>
                <div className="proof-why-checklist">
                  <div className="proof-check-item">
                    <CheckCircle2 size={18} className="text-gold" />
                    <span>Purpose-built for Healthcare, Education & Professional Services</span>
                  </div>
                  <div className="proof-check-item">
                    <CheckCircle2 size={18} className="text-gold" />
                    <span>Transparent weekly updates with zero hidden markups</span>
                  </div>
                  <div className="proof-check-item">
                    <CheckCircle2 size={18} className="text-gold" />
                    <span>Plans starting as low as ₹2,000/month</span>
                  </div>
                </div>
              </div>

              <div className="proof-why-right">
                <div className="proof-why-cta-card">
                  <h3 className="proof-cta-card-title">Ready for real, measurable results?</h3>
                  <p className="proof-cta-card-desc">
                    Tell us about your organization and get a tailored local growth audit within 24 hours.
                  </p>
                  <Link to="/contact" className="btn-proof-primary">
                    <span>Talk to sBLOOM</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </div>
  );
};

export default ProofOfWorkPage;
