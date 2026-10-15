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
  description: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
}

const EDUCATION_SERVICES: ServiceCardInfo[] = [
  {
    id: "web-dev",
    title: "Website Development",
    description: "Showcase your courses, facilities, achievements, and admission details clearly.",
    icon: Monitor,
  },
  {
    id: "gbp",
    title: "Google Business Profile",
    description: "Help students and parents find your institution on Google Search and Maps.",
    icon: MapPin,
  },
  {
    id: "seo",
    title: "SEO",
    description: "Improve your visibility when people search for educational institutions and courses.",
    icon: TrendingUp,
  },
  {
    id: "smm",
    title: "Social Media Management",
    description: "Share campus activities, achievements, events, and educational content.",
    icon: Users,
  },
  {
    id: "ads",
    title: "Digital Advertising",
    description: "Promote courses and admissions to relevant students and parents.",
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
            HERO SECTION: Headline, Copy, CTA & Image
            ==================================================== */}
        <section className="industry-hero-section">
          <div className="industry-hero-grid">
            {/* Left Column */}
            <div className="industry-hero-left">
              <ScrollReveal delay={0}>
                <span className="industry-eyebrow">S-BLOOM — EDUCATION</span>
                
                <h1 className="industry-hero-title">
                  Help More Students<br />
                  <span className="industry-gold-title">Discover Your</span><br />
                  Institution.
                </h1>

                <p className="industry-hero-desc">
                  We help schools, colleges, coaching centres, and training institutes improve their online presence, reach students and parents, and generate more admission enquiries.
                </p>

                <Link to="/contact" className="industry-hero-cta-btn">
                  <span>Talk to S-BLOOM</span>
                  <ArrowRight size={17} strokeWidth={2.4} />
                </Link>
              </ScrollReveal>
            </div>

            {/* Right Column: Hero Photo & Handwritten Note */}
            <div className="industry-hero-right">
              <ScrollReveal delay={150} style={{ position: "relative", width: "100%", maxWidth: "610px" }}>
                {/* Handwritten script note on top-right */}
                <div className="industry-floating-script" aria-hidden="true">
                  <span className="script-text">More Students.</span>
                  <span className="script-subtext">Brighter Futures.</span>
                  <svg className="script-accent-arc" viewBox="0 0 100 20" fill="none">
                    <path d="M 5,14 Q 50,4 95,16" stroke="#B87B2E" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>

                <div className="industry-photo-wrapper">
                  <img
                    src="/edu-hero-students.jpg"
                    alt="Students collaborating on campus with laptop"
                    className="industry-photo-img"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ====================================================
            CORE PROBLEM & AI SOLUTION
            ==================================================== */}
        <section className="industry-problem-solution-section">
          <ScrollReveal delay={50}>
            <div className="industry-prob-sol-card">
              <div className="industry-prob-col">
                <span className="industry-prob-tag">THE PROBLEM YOU FACE</span>
                <h3 className="industry-prob-title">Declining Student Admission Enquiries</h3>
                <p className="industry-prob-desc">
                  Schools and colleges face intense competition every academic cycle. When parents and students cannot discover 
                  your campus, courses, and fee structure quickly on mobile, they enroll with competitors.
                </p>
              </div>

              <div className="industry-prob-divider" />

              <div className="industry-sol-col">
                <span className="industry-sol-tag">✦ THE S-BLOOM AI SOLUTION</span>
                <h3 className="industry-sol-title">AI-Optimized Portals & Meta Reels Campaigns</h3>
                <p className="industry-sol-desc">
                  Sub-1s mobile admission pages, high-retention student showcase Reels via Meta Business Suite, and local SEO dominance. 
                  Result: 3.4x surge in admission inquiries without expensive agency retainers.
                </p>
                <Link to="/proof-of-work?service=website" className="industry-sol-proof-btn">
                  <span>See Education Proof of Work</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* ====================================================
            FIVE SERVICE CARDS SECTION
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
                      <p className="service-card-desc">{service.description}</p>
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
