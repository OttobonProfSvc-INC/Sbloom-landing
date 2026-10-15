import React from 'react';
import { Link } from 'react-router';
import { ScrollReveal } from '../components/ScrollReveal';
import {
  Target,
  Users,
  Heart,
  GraduationCap,
  Briefcase,
  TrendingUp,
} from 'lucide-react';
import './AboutPage.css';

export const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      {/* Background ambient radial gradients */}
      <div className="about-bg-glow about-glow-top" aria-hidden="true" />
      <div className="about-bg-glow about-glow-bottom" aria-hidden="true" />

      {/* Decorative Wave Curves in Background */}
      <div className="about-bg-waves" aria-hidden="true">
        <svg viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M-100 240C200 180 380 340 520 480C680 640 920 720 1200 680C1340 660 1480 580 1580 500"
            stroke="#EDE1D1"
            strokeWidth="32"
            opacity="0.4"
          />
          <path
            d="M-50 160C250 120 450 260 600 420C750 580 980 660 1280 600"
            stroke="#F5ECE0"
            strokeWidth="24"
            opacity="0.6"
          />
        </svg>
      </div>

      <div className="container about-container">
        {/* =================================================================
           HERO SECTION: Title & Lead + 3 Industry Visual Arches
           ================================================================= */}
        <section className="about-hero-grid">
          {/* Left: Text Content */}
          <div className="about-hero-text">
            <ScrollReveal delay={0}>
              <span className="about-eyebrow">ABOUT S-BLOOM</span>
              <h1 className="about-hero-title">
                We help good businesses get noticed and chosen.
              </h1>
              <p className="about-hero-desc">
                S-Bloom helps organizations in healthcare, education, and professional services explain what they do, reach the right people, and build trust online.
              </p>
            </ScrollReveal>
          </div>

          {/* Right: 3 Arched Industry Cards + Desk / Laptop Graphic */}
          <div className="about-hero-visual-wrap">
            <ScrollReveal delay={150}>
              <div className="about-visual-scene">
                {/* 3 Industry Arches */}
                <div className="about-arches-cluster">
                  {/* Arch 1: Healthcare */}
                  <Link to="/industries/healthcare" className="about-arch-card about-arch-healthcare">
                    <div className="about-arch-img-wrap">
                      <img
                        src="/about-healthcare-doctor.jpg"
                        alt="S-Bloom Healthcare Partner"
                        className="about-arch-img"
                      />
                    </div>
                    <div className="about-arch-badge">
                      <div className="about-badge-icon-box">
                        <Heart size={14} strokeWidth={2.4} />
                      </div>
                      <span className="about-badge-text">Healthcare</span>
                    </div>
                  </Link>

                  {/* Arch 2: Education */}
                  <Link to="/industries/education" className="about-arch-card about-arch-education">
                    <div className="about-arch-img-wrap">
                      <img
                        src="/about-education-teacher.jpg"
                        alt="S-Bloom Education Partner"
                        className="about-arch-img"
                      />
                    </div>
                    <div className="about-arch-badge">
                      <div className="about-badge-icon-box">
                        <GraduationCap size={15} strokeWidth={2.2} />
                      </div>
                      <span className="about-badge-text">Education</span>
                    </div>
                  </Link>

                  {/* Arch 3: Professional Services */}
                  <Link to="/industries/professional-services" className="about-arch-card about-arch-pro">
                    <div className="about-arch-img-wrap">
                      <img
                        src="/about-professional-exec.jpg"
                        alt="S-Bloom Professional Services Partner"
                        className="about-arch-img"
                      />
                    </div>
                    <div className="about-arch-badge">
                      <div className="about-badge-icon-box">
                        <Briefcase size={14} strokeWidth={2.4} />
                      </div>
                      <span className="about-badge-text">Professional Services</span>
                    </div>
                  </Link>
                </div>

                {/* Desk Foreground with Laptop & Chart */}
                <div className="about-desk-foreground">
                  <div className="about-laptop-mockup">
                    <div className="about-laptop-lid">
                      <div className="about-laptop-screen">
                        <div className="about-chart-display">
                          <TrendingUp size={20} className="about-chart-icon" strokeWidth={2.4} />
                          <div className="about-chart-bars">
                            <span className="about-bar" style={{ height: '35%' }} />
                            <span className="about-bar" style={{ height: '55%' }} />
                            <span className="about-bar" style={{ height: '75%' }} />
                            <span className="about-bar is-active" style={{ height: '100%' }} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="about-laptop-base" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* =================================================================
           TWO HIGHLIGHT CARDS: "Our Approach" & "How We Work"
           ================================================================= */}
        <section className="about-pillars-section">
          <div className="about-pillars-grid">
            {/* Card 1: Our Approach */}
            <ScrollReveal delay={200} className="h-full">
              <div className="about-pillar-card">
                <div className="about-pillar-icon-box">
                  <Target size={26} strokeWidth={1.8} className="about-pillar-icon" />
                </div>
                <div className="about-pillar-content">
                  <h2 className="about-pillar-title">Our Approach</h2>
                  <div className="about-pillar-underline" />
                  <p className="about-pillar-text">
                    We first understand your business and audience. Then we create a clear digital strategy that helps people find you, understand your value, and trust your services.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 2: How We Work */}
            <ScrollReveal delay={300} className="h-full">
              <div className="about-pillar-card">
                <div className="about-pillar-icon-box">
                  <Users size={26} strokeWidth={1.8} className="about-pillar-icon" />
                </div>
                <div className="about-pillar-content">
                  <h2 className="about-pillar-title">How We Work</h2>
                  <div className="about-pillar-underline" />
                  <p className="about-pillar-text">
                    Our core team plans the strategy and works with skilled creative partners to deliver the right content, design, website, and digital marketing support.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
