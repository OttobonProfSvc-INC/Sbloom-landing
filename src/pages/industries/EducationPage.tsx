import React from "react";
import { Link } from "react-router";
import { ScrollReveal } from "../../components/ScrollReveal";
import {
  Monitor,
  MapPin,
  TrendingUp,
  Users,
  Megaphone,
  ArrowRight,
} from "lucide-react";
import "./IndustryPage.css";

interface ServiceCardInfo {
  id: string;
  title: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
}

const EDUCATION_SERVICES: ServiceCardInfo[] = [
  {
    id: "web-dev",
    title: "Website Development",
    icon: Monitor,
  },
  {
    id: "gbp",
    title: "Google Business Profile",
    icon: MapPin,
  },
  {
    id: "seo",
    title: "SEO",
    icon: TrendingUp,
  },
  {
    id: "smm",
    title: "Social Media Management",
    icon: Users,
  },
  {
    id: "ads",
    title: "Digital Advertising",
    icon: Megaphone,
  },
];

export const EducationPage: React.FC = () => {
  return (
    <div className="industry-page edu-page-container">
      {/* Background Organic Curved Backdrop */}
      <div className="industry-bg-curve" aria-hidden="true">
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

      <div className="industry-container">
        {/* ====================================================
            HERO BANNER: AI-Powered Growth (from Image 2)
            ==================================================== */}
        <section className="industry-hero-banner-section">
          <ScrollReveal delay={0}>
            <div className="industry-hero-banner-wrap">
              <img
                src="/edu-hero-ai.png"
                alt="Help More Students Discover Your Institution with AI-Powered Growth"
                className="industry-hero-banner-img"
              />
              <Link
                to="/contact"
                className="industry-hero-banner-cta-overlay"
                aria-label="Talk to S-BLOOM"
              />
            </div>
            {/* Mobile Fallback CTA Button if banner scales down */}
            <div className="industry-hero-banner-mobile-cta">
              <Link to="/contact" className="industry-hero-cta-btn">
                <span>Talk to S-BLOOM</span>
                <ArrowRight size={17} strokeWidth={2.4} />
              </Link>
            </div>
          </ScrollReveal>
        </section>

        {/* ====================================================
            FIVE SERVICE CARDS SECTION (WITHOUT DESCRIPTION MATTER)
            ==================================================== */}
        <section className="industry-services-section">
          <div className="industry-services-grid">
            {EDUCATION_SERVICES.map((service, idx) => {
              const IconComp = service.icon;
              return (
                <ScrollReveal key={service.id} delay={100 + idx * 70}>
                  <div className="industry-service-card">
                    <div className="service-card-top">
                      <div className="service-card-badge">
                        <IconComp size={24} strokeWidth={1.9} />
                      </div>
                      <h3 className="service-card-title">{service.title}</h3>
                    </div>

                    <div className="service-card-bottom">
                      <Link
                        to="/contact"
                        className="service-card-btn"
                        aria-label={`Get started with ${service.title}`}
                      >
                        <ArrowRight size={16} strokeWidth={2.4} />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default EducationPage;
