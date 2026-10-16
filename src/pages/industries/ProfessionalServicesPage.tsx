import React, { useState } from "react";
import { Link } from "react-router";
import { ScrollReveal } from "../../components/ScrollReveal";
import {
  Code2,
  GraduationCap,
  Crown,
  Building2,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Compass,
} from "lucide-react";
import "./IndustryPage.css";
import "./ProfessionalServicesPage.css";

interface SectorPillar {
  id: string;
  title: string;
  tagline: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  badge: string;
  fullTitle: string;
  description: string;
  capabilities: string[];
  metricTag: string;
  metricBig: string;
  metricSub: string;
  trustBadge: string;
  ctaText: string;
  ctaLink: string;
}

const SECTOR_PILLARS: SectorPillar[] = [
  {
    id: "it-companies",
    title: "IT & Tech Firms",
    tagline: "High-speed websites, technical SEO, and targeted B2B ad funnels.",
    icon: Code2,
    badge: "✦ B2B Growth Engine",
    fullTitle: "Drive High-Value B2B Inquiries for IT & Tech Firms",
    description:
      "We provide IT companies, SaaS startups, and software consultancies with our complete digital growth suite—technical B2B SEO, rapid-loading website architecture, and hyper-targeted Meta & Google ad funnels to predictably generate high-paying corporate client leads and revenue.",
    capabilities: [
      "High-Performance B2B Website & Product Landing Pages",
      "Technical & Local SEO to Rank for High-Intent Tech Keywords",
      "Hyper-Targeted Meta & Google Search Campaigns for B2B Leads",
      "LinkedIn & Meta Social Media Management to Establish Authority",
    ],
    metricTag: "Client Inbound",
    metricBig: "2.8x",
    metricSub: "Increase in qualified corporate & startup inbound inquiries",
    trustBadge: "Verified B2B Lead Funnels",
    ctaText: "Scale Your IT Firm",
    ctaLink: "/contact",
  },
  {
    id: "individuals",
    title: "Individual Aspirants",
    tagline: "Showcase real expertise with custom portfolio websites and social authority.",
    icon: GraduationCap,
    badge: "✦ Personal Branding & Growth",
    fullTitle: "Build a Real-World Portfolio & Grow Your Digital Presence",
    description:
      "For individual professionals, developers, consultants, and career aspirants, we deliver custom digital solutions—building interactive portfolio websites, personal brand SEO, and social media presence that turns your skills into undeniable real-world proof to win clients and land top roles.",
    capabilities: [
      "Custom Interactive Portfolio Website Showcasing Real Projects",
      "Personal SEO to Rank on Google for Your Name & Domain Expertise",
      "Social Media & LinkedIn Branding to Attract Recruiters & Clients",
      "Structured Project Case Studies & Proof of Competence Displays",
    ],
    metricTag: "Career Proof",
    metricBig: "100% Real-World",
    metricSub: "Verifiable project proof that commands market attention",
    trustBadge: "Industry-Ready Digital Portfolio",
    ctaText: "Build Your Portfolio",
    ctaLink: "/contact",
  },
  {
    id: "empires",
    title: "Political & Empires",
    tagline: "Multi-channel social media, verified Google presence, and geo-targeted ads.",
    icon: Crown,
    badge: "✦ Digital Dominance",
    fullTitle: "Build Digital Authority & Public Trust for Leaders and Empires",
    description:
      "For prominent leaders, political figures, and multi-venture entrepreneurs, we engineer commanding digital authority. From managing multi-channel social media with high-impact video reels to Google Business Profiles and geo-targeted advertising, we expand reach, protect reputation, and scale empire revenue.",
    capabilities: [
      "High-Impact Social Media Management with Viral Video & Reels",
      "Google Business Profile & Knowledge Panel Authority across Locations",
      "Geo-Fenced Meta & Google Ad Campaigns for Focused Regional Impact",
      "Cross-Venture Brand Positioning & Strategic Public Reputation Management",
    ],
    metricTag: "Targeted Reach",
    metricBig: "10M+",
    metricSub: "Regional & targeted digital impressions delivered",
    trustBadge: "Discreet & High-Impact Campaigns",
    ctaText: "Grow Your Empire",
    ctaLink: "/contact",
  },
  {
    id: "hospitality",
    title: "Hotels & Dining",
    tagline: "Google Maps Top 3 ranking, viral social media, and direct booking funnels.",
    icon: Building2,
    badge: "✦ Footfall & Reservations",
    fullTitle: "Pack Rooms & Tables with Local SEO, Reels & Targeted Ads",
    description:
      "We help boutique hotels, resorts, and premier dining spots maximize footfall, direct bookings, and table reservations. With Google Business Profile dominance on Google Maps, mouth-watering Instagram reels, and zero-commission reservation funnels, we turn searches into paying customers.",
    capabilities: [
      "Google Business Profile (GBP) Local SEO to Rank Top 3 on Google Maps",
      "Mouth-Watering Instagram Reels & Video Content Showcasing Ambiance",
      "Direct Zero-Commission Booking & Reservation Website Architecture",
      "Hyper-Local Meta & Google Ads Targeting Travelers and Diners",
    ],
    metricTag: "Direct Revenue",
    metricBig: "+45%",
    metricSub: "Increase in local customer footfall and direct reservations",
    trustBadge: "Top 3 Google Maps Ranking Focus",
    ctaText: "Boost Hospitality Bookings",
    ctaLink: "/contact",
  },
];



export const ConsultingProfessionalServicesPage: React.FC = () => {
  const [activeSectorId, setActiveSectorId] = useState<string>("it-companies");

  const currentSector =
    SECTOR_PILLARS.find((s) => s.id === activeSectorId) || SECTOR_PILLARS[0];

  return (
    <div className="ps-page-container">
      {/* Background Curved Backdrop matching S-BLOOM Industry Design */}
      <div className="industry-bg-curve" aria-hidden="true">
        <svg viewBox="0 0 1440 640" fill="none" preserveAspectRatio="none">
          <path
            d="M-40,80 C260,180 420,-30 840,40 C1180,100 1340,30 1520,70 L1520,0 L-40,0 Z"
            fill="#F6EFE5"
            opacity="0.65"
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

      <div className="industry-container">
        {/* ====================================================
            HERO HEADER
            ==================================================== */}
        <section className="ps-hero-section">
          <ScrollReveal delay={0}>
            <div className="ps-hero-header">
              <div className="ps-eyebrow-wrap">
                <span className="ps-eyebrow-line" aria-hidden="true" />
                <span className="ps-eyebrow">SBLOOM — PROFESSIONAL SERVICES</span>
                <span className="ps-eyebrow-line" aria-hidden="true" />
              </div>

              <h1 className="ps-hero-title">
                Digital Growth & Revenue for <br />
                <span className="ps-gold-text">Modern Professional Services.</span>
              </h1>

              <p className="ps-hero-desc">
                For everyone across these sectors, we provide S-BLOOM's core growth engine—high-performance websites,
                technical SEO, Google Business Profile (GBP), Meta ads, and social media management—to generate qualified
                leads, footfall, and measurable revenue.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* ====================================================
            4 SECTOR CARDS (ABOVE - MATCHING YOUR IMAGE)
            Clicking each card or "Explore Services →" activates that sector below
            ==================================================== */}
        <section className="ps-cards-selector-section">
          <ScrollReveal delay={60}>
            <div className="ps-cards-selector-grid">
              {SECTOR_PILLARS.map((sector) => {
                const IconComponent = sector.icon;
                const isActive = sector.id === activeSectorId;

                return (
                  <div
                    key={sector.id}
                    className={`ps-selector-card ${isActive ? "active" : ""}`}
                    onClick={() => setActiveSectorId(sector.id)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Explore services for ${sector.title}`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        setActiveSectorId(sector.id);
                      }
                    }}
                  >
                    <div>
                      <div className="ps-card-top-row">
                        <div className="ps-card-icon-box">
                          <IconComponent size={18} />
                        </div>
                        <h3 className="ps-card-title">{sector.title}</h3>
                      </div>
                      <p className="ps-card-desc">{sector.tagline}</p>
                    </div>

                    <div className="ps-card-action-row">
                      <span className="ps-card-explore-btn">
                        <span>Explore Services</span>
                        <ArrowRight size={13} strokeWidth={2.4} />
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>

          {/* ====================================================
              DETAILED SERVICES BREAKDOWN FOR THE ACTIVE SECTOR
              ==================================================== */}
          <ScrollReveal delay={120}>
            <div className="ps-showcase-card">
              {/* Left Column: Details & Capabilities */}
              <div className="ps-showcase-left">
                <div className="ps-showcase-badge">
                  <Sparkles size={12} />
                  <span>{currentSector.badge}</span>
                </div>

                <h2 className="ps-showcase-heading">{currentSector.fullTitle}</h2>
                <p className="ps-showcase-desc">{currentSector.description}</p>

                <div className="ps-showcase-capabilities">
                  {currentSector.capabilities.map((cap, cIdx) => (
                    <div key={cIdx} className="ps-capability-item">
                      <CheckCircle2 size={15} className="ps-cap-icon" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Impact Metric & Direct Action */}
              <div className="ps-showcase-right">
                <span className="ps-metric-tag">{currentSector.metricTag}</span>
                <span className="ps-metric-big">{currentSector.metricBig}</span>
                <span className="ps-metric-sub">{currentSector.metricSub}</span>

                <div className="ps-trust-badge">
                  <ShieldCheck size={14} color="#BA7C3D" />
                  <span>{currentSector.trustBadge}</span>
                </div>

                <Link to={currentSector.ctaLink} className="ps-action-btn">
                  <span>{currentSector.ctaText}</span>
                  <ArrowRight size={15} strokeWidth={2.4} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* ====================================================
            DOWN SECTION: STRATEGIC MARKETING CONSULTATION ONLY
            ==================================================== */}
        <section className="ps-consulting-section">
          <ScrollReveal delay={150}>
            <div className="ps-consulting-header">
              <h2 className="ps-consulting-title">
                Other <span className="ps-gold-text">Services.</span>
              </h2>
            </div>

            <div className="ps-consulting-single-card">
              <div className="ps-consulting-single-left">
                <div className="ps-consulting-card-top">
                  <div className="ps-consulting-icon-box">
                    <Compass size={22} />
                  </div>
                  <div>
                    <h3 className="ps-consulting-single-title">Marketing Consultation</h3>
                    <span className="ps-consulting-single-tag">✦ Senior Growth Advisory</span>
                  </div>
                </div>
              </div>

              <div className="ps-consulting-single-right">
                <Link to="/contact" className="ps-consulting-single-btn">
                  <span>Book Marketing Consultation</span>
                  <ArrowRight size={15} strokeWidth={2.4} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* ====================================================
            FINAL CTA BANNER
            ==================================================== */}
        <ScrollReveal delay={180}>
          <div className="ps-banner-cta">
            <div>
              <h3 className="ps-banner-title">
                Ready to accelerate growth for your business, empire, or career?
              </h3>
              <p className="ps-banner-desc">
                Talk directly with S-BLOOM to launch your high-impact digital growth services or book a strategic marketing consultation.
              </p>
            </div>
            <Link to="/contact" className="ps-banner-btn">
              <span>Talk to S-BLOOM</span>
              <ArrowRight size={15} strokeWidth={2.4} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default ConsultingProfessionalServicesPage;
