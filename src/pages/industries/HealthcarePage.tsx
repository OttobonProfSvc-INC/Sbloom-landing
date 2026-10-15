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

const HEALTHCARE_SERVICES: ServiceCardInfo[] = [
  {
    id: "web-dev",
    title: "Website Development",
    description: "Showcase your doctors, services, facilities, and expertise through a professional, easy-to-use website.",
    icon: Monitor,
  },
  {
    id: "gbp",
    title: "Google Business Profile",
    description: "Help patients find your hospital or clinic on Google Search and Maps with accurate details, timings, and updates.",
    icon: MapPin,
  },
  {
    id: "seo",
    title: "SEO",
    description: "Improve your visibility when people search for relevant healthcare services in your area.",
    icon: TrendingUp,
  },
  {
    id: "smm",
    title: "Social Media Management",
    description: "Share useful health information, introduce your services, and build trust with your community.",
    icon: Users,
  },
  {
    id: "ads",
    title: "Digital Advertising",
    description: "Reach people looking for your healthcare services and generate more patient enquiries.",
    icon: Megaphone,
  },
];

export const HealthcarePage: React.FC = () => {
  return (
    <div className="industry-page health-page-container">
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
                <span className="industry-eyebrow">S-BLOOM — HEALTHCARE</span>
                
                <h1 className="industry-hero-title">
                  Help More Patients<br />
                  <span className="industry-gold-title">Find and Choose You.</span>
                </h1>

                <p className="industry-hero-desc">
                  We help hospitals, clinics, and healthcare professionals build a strong online presence, clearly communicate their services, and receive more relevant patient enquiries to increase patient flow.
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
                  <span className="script-text">More Patients.</span>
                  <span className="script-subtext">Healthier Communities.</span>
                  <svg className="script-accent-arc" viewBox="0 0 100 20" fill="none">
                    <path d="M 5,14 Q 50,4 95,16" stroke="#B87B2E" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>

                <div className="industry-photo-wrapper">
                  <img
                    src="/health-hero-doctor.jpg"
                    alt="Doctor smiling warmly in clinic reception lobby"
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
                <h3 className="industry-prob-title">Losing Patients to Competitors Online</h3>
                <p className="industry-prob-desc">
                  Clinics and hospitals frequently face empty consultation slots and invisible search rankings. 
                  Nearby patients search on Google Maps and choose competing clinics simply because those clinics appear first.
                </p>
              </div>

              <div className="industry-prob-divider" />

              <div className="industry-sol-col">
                <span className="industry-sol-tag">✦ THE S-BLOOM AI SOLUTION</span>
                <h3 className="industry-sol-title">AI-Native Website, SEO & Top 3 Maps Ranking</h3>
                <p className="industry-sol-desc">
                  We deploy lightning-fast AI medical websites, automated review capture, and localized patient acquisition funnels. 
                  Result: +284% organic patient calls and reliable appointment bookings at budget-friendly rates.
                </p>
                <Link to="/proof-of-work?service=gbp" className="industry-sol-proof-btn">
                  <span>See Healthcare Proof of Work</span>
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
            {HEALTHCARE_SERVICES.map((service, idx) => {
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

export default HealthcarePage;
