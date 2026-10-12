import React from "react";
import { Link } from "react-router";
import { ScrollReveal } from "../../components/ScrollReveal";
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Award, 
  TrendingUp, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Video, 
  School, 
  Compass, 
  Calendar, 
  ShieldCheck, 
  ChevronRight, 
  Check, 
  X, 
  Building2, 
  UserCheck 
} from "lucide-react";
import "./EducationPage.css";

export const EducationPage: React.FC = () => {
  return (
    <div className="edu-page">
      {/* ====================================================
          1. Hero Section
          ==================================================== */}
      <section className="edu-hero">
        <div className="edu-hero-ambient" aria-hidden="true" />
        <div className="container">
          <div className="edu-hero-grid">
            {/* Left Content */}
            <ScrollReveal delay={0}>
              <span className="edu-hero-badge">
                <GraduationCap size={16} /> SBLOOM · EDUCATION & ACADEMIA
              </span>
              <h1 className="edu-hero-title">
                Where Academic Excellence Meets <br />
                <span className="edu-hero-highlight">Inspiring Digital Authority.</span>
              </h1>
              <p className="edu-hero-desc">
                Choosing an education is one of life’s most aspirational decisions. We help visionary universities, schools, training institutes, and educators close the gap between their academic quality and what students and parents understand about them.
              </p>
              
              <div className="edu-hero-actions">
                <Link to="/contact" className="edu-btn-primary">
                  <span>Request Education Strategy</span>
                  <ArrowRight size={18} />
                </Link>
                <a href="#approach" className="edu-btn-secondary">
                  <span>Explore Our Approach</span>
                  <ChevronRight size={18} />
                </a>
              </div>

              <div className="edu-hero-proof">
                <div className="edu-proof-item">
                  <CheckCircle2 size={18} className="edu-proof-icon" />
                  <span>Predictable Intake Cycles</span>
                </div>
                <div className="edu-proof-item">
                  <CheckCircle2 size={18} className="edu-proof-icon" />
                  <span>Cinema-Grade Storytelling</span>
                </div>
                <div className="edu-proof-item">
                  <CheckCircle2 size={18} className="edu-proof-icon" />
                  <span>Academic Compliance</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Media Frame */}
            <ScrollReveal delay={150} className="edu-hero-visual-card">
              <div className="edu-hero-img-frame">
                <img 
                  src="/institute_image.png" 
                  alt="S-Bloom Education Campus and Students" 
                  className="edu-hero-img" 
                />
                
                {/* Floating Badge Top Right */}
                <div className="edu-float-badge badge-top-right">
                  <div className="float-badge-icon">
                    <TrendingUp size={22} />
                  </div>
                  <div className="float-badge-text">
                    <strong>+94% Tour-to-Enrollment</strong>
                    <span>High-Intent Prospective Families</span>
                  </div>
                </div>

                {/* Floating Badge Bottom Left */}
                <div className="edu-float-badge badge-bottom-left">
                  <div className="float-badge-icon">
                    <Sparkles size={22} />
                  </div>
                  <div className="float-badge-text">
                    <strong>Authentic Campus Life</strong>
                    <span>Cinema-Grade Student Stories</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ====================================================
          2. Impact Metrics Strip
          ==================================================== */}
      <section className="edu-metrics-strip">
        <div className="container">
          <div className="edu-metrics-grid">
            <ScrollReveal delay={50} className="edu-metric-card">
              <div className="edu-metric-num">3.4x</div>
              <div className="edu-metric-label">Increase in Qualified Student Applications</div>
            </ScrollReveal>
            <ScrollReveal delay={100} className="edu-metric-card">
              <div className="edu-metric-num">62%</div>
              <div className="edu-metric-label">Reduction in Prospective Student Drop-Off</div>
            </ScrollReveal>
            <ScrollReveal delay={150} className="edu-metric-card">
              <div className="edu-metric-num">8.5M+</div>
              <div className="edu-metric-label">Verified Video Views for Campus Stories</div>
            </ScrollReveal>
            <ScrollReveal delay={200} className="edu-metric-card">
              <div className="edu-metric-num">100%</div>
              <div className="edu-metric-label">Academic Integrity & Regulatory Compliance</div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ====================================================
          3. The Dilemma / Education Reality
          ==================================================== */}
      <section className="edu-dilemma-section">
        <div className="container">
          <div className="edu-section-header">
            <ScrollReveal delay={0}>
              <span className="edu-section-badge">THE MODERN ENROLLMENT LANDSCAPE</span>
              <h2 className="edu-section-title">The Enrollment Decision Has Evolved. Has Your Marketing?</h2>
              <p className="edu-section-subtitle">
                Families no longer make life-defining decisions based on transactional admission banners. They look for genuine community proof, transparent academic outcomes, and unmistakable institutional authority.
              </p>
            </ScrollReveal>
          </div>

          <div className="edu-dilemma-grid">
            {/* The Outdated Approach */}
            <ScrollReveal delay={100}>
              <div className="edu-dilemma-card dilemma-old">
                <span className="dilemma-tag">The Traditional Way</span>
                <h3>Transactional Enrollment Banners</h3>
                <p>
                  Seasonal panic ad-bursts when admission deadlines loom, pushing generic prospectus downloads that erode long-term institutional prestige.
                </p>
                <ul className="dilemma-points-list">
                  <li>
                    <span className="point-cross">✕</span>
                    <span>Last-minute ad rushes targeting disengaged audiences</span>
                  </li>
                  <li>
                    <span className="point-cross">✕</span>
                    <span>Dry stock photography that fails to convey real campus spirit</span>
                  </li>
                  <li>
                    <span className="point-cross">✕</span>
                    <span>Confusing program pages leading to high inquiry drop-offs</span>
                  </li>
                  <li>
                    <span className="point-cross">✕</span>
                    <span>Invisible faculty credentials and silent academic leadership</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* The S-Bloom Approach */}
            <ScrollReveal delay={200}>
              <div className="edu-dilemma-card dilemma-new">
                <span className="dilemma-tag">The S-Bloom System</span>
                <h3>Connected Digital Authority</h3>
                <p>
                  A year-round ecosystem of authentic student stories, faculty authority, and frictionless digital portals that make your institution the natural top choice.
                </p>
                <ul className="dilemma-points-list">
                  <li>
                    <span className="point-check">✓</span>
                    <span>Continuous authority building synchronized with the academic cycle</span>
                  </li>
                  <li>
                    <span className="point-check">✓</span>
                    <span>Cinema-grade campus documentaries & student ambassador reels</span>
                  </li>
                  <li>
                    <span className="point-check">✓</span>
                    <span>Frictionless, mobile-optimized course discovery and visit booking</span>
                  </li>
                  <li>
                    <span className="point-check">✓</span>
                    <span>Empowered faculty thought leadership that parents respect and trust</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ====================================================
          4. Dual Audience Pathways (Institutions vs Educators)
          ==================================================== */}
      <section className="edu-audiences-section">
        <div className="container">
          <div className="edu-section-header">
            <ScrollReveal delay={0}>
              <span className="edu-section-badge">TAILORED EDUCATION SOLUTIONS</span>
              <h2 className="edu-section-title">A Specialized Strategy for Every Academic Leader</h2>
              <p className="edu-section-subtitle">
                Whether you lead an established university campus or build a modern educational brand, we craft solutions attuned to your unique stakeholders.
              </p>
            </ScrollReveal>
          </div>

          {/* Row 1: For Institutions & Academies */}
          <div className="edu-audience-row">
            <ScrollReveal delay={100} className="edu-audience-text">
              <span className="aud-pill">
                <Building2 size={15} /> FOR INSTITUTIONS & UNIVERSITIES
              </span>
              <h3>Turn Your Campus Culture Into Your Strongest Enrollment Asset</h3>
              <p>
                Prospective students want to picture themselves thriving in your classrooms, labs, and student communities. We capture authentic campus vitality and transform it into high-intent admissions pipelines.
              </p>

              <div className="edu-benefit-grid">
                <div className="edu-benefit-box">
                  <strong>Predictable Influx</strong>
                  <span>Sustainable lead volume across every intake session.</span>
                </div>
                <div className="edu-benefit-box">
                  <strong>Campus Life in 4K</strong>
                  <span>Reels and shorts reflecting real student experiences.</span>
                </div>
                <div className="edu-benefit-box">
                  <strong>Parent Trust Funnels</strong>
                  <span>Dedicated content addressing safety, career outcomes, and ROI.</span>
                </div>
                <div className="edu-benefit-box">
                  <strong>Hyper-Local Dominance</strong>
                  <span>Optimized rankings for regional searches and program queries.</span>
                </div>
              </div>

              <Link to="/contact" className="edu-btn-primary" style={{ padding: '12px 26px', fontSize: '0.95rem' }}>
                <span>Partner for Institutional Growth</span>
                <ArrowRight size={16} />
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={200} className="edu-audience-media">
              <div className="edu-audience-img-wrapper">
                <img 
                  src="/institute_image.png" 
                  alt="University Campus Students and Life" 
                  className="edu-audience-img" 
                />
                <div className="edu-img-overlay-caption">
                  <span>🏛️ Campus Tour & Community Showcase</span>
                  <span>94% Attendance Rate</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Row 2: For Educators & Thought Leaders */}
          <div className="edu-audience-row reverse">
            <ScrollReveal delay={100} className="edu-audience-text">
              <span className="aud-pill">
                <UserCheck size={15} /> FOR EDUCATORS, PROFESSORS & EXPERTS
              </span>
              <h3>Elevate Your Intellectual Capital Into Recognized Digital Leadership</h3>
              <p>
                Great educators deserve a stage beyond the lecture hall. We help faculty members, authors, and EdTech founders translate deep expertise into engaged global followings, published authority, and high-demand executive programs.
              </p>

              <div className="edu-benefit-grid">
                <div className="edu-benefit-box">
                  <strong>Thought Leadership</strong>
                  <span>Authoritative long-form analysis, articles, and whitepapers.</span>
                </div>
                <div className="edu-benefit-box">
                  <strong>Global Masterclasses</strong>
                  <span>High-production studio lectures that attract international learners.</span>
                </div>
                <div className="edu-benefit-box">
                  <strong>Media-Ready Persona</strong>
                  <span>Optimized video reels and LinkedIn positioning for keynote speaking.</span>
                </div>
                <div className="edu-benefit-box">
                  <strong>Community Trust</strong>
                  <span>Direct learner loyalty and continuous mentorship engagement.</span>
                </div>
              </div>

              <Link to="/contact" className="edu-btn-primary" style={{ padding: '12px 26px', fontSize: '0.95rem' }}>
                <span>Build Your Personal Brand</span>
                <ArrowRight size={16} />
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={200} className="edu-audience-media">
              <div className="edu-audience-img-wrapper">
                <img 
                  src="/edu_expert.png" 
                  alt="Educator and Professor Thought Leadership" 
                  className="edu-audience-img" 
                />
                <div className="edu-img-overlay-caption">
                  <span>🎙️ Global Classroom & Executive Impact</span>
                  <span>Direct Learner Inbound</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ====================================================
          5. S-Bloom Approach (BUILD · CREATE · PROMOTE)
          ==================================================== */}
      <section className="edu-approach-section" id="approach">
        <div className="container">
          <div className="edu-section-header">
            <ScrollReveal delay={0}>
              <span className="edu-section-badge">OUR SYSTEMATIC METHODOLOGY</span>
              <h2 className="edu-section-title">The Three-Pillar S-Bloom Education Framework</h2>
              <p className="edu-section-subtitle">
                A connected approach engineered specifically around academic decision psychology and intake cycles.
              </p>
            </ScrollReveal>
          </div>

          <div className="edu-approach-cards-grid">
            {/* Card 1: BUILD */}
            <ScrollReveal delay={100}>
              <div className="edu-approach-card-v2">
                <div className="edu-card-step-badge">01</div>
                <span className="edu-card-phase">FOUNDATION & PLATFORMS</span>
                <h3>BUILD: The Digital Campus</h3>
                <p>
                  We engineer frictionless program discovery, virtual campus pathways, and seamless application portals that convert curious visitors into enrolled students.
                </p>
                <ul className="edu-deliverables-list">
                  <li>
                    <Check size={16} />
                    <span>Intuitive program architecture & prerequisites</span>
                  </li>
                  <li>
                    <Check size={16} />
                    <span>Mobile-first application & tour booking forms</span>
                  </li>
                  <li>
                    <Check size={16} />
                    <span>Academic SEO and local map ranking dominance</span>
                  </li>
                  <li>
                    <Check size={16} />
                    <span>Frictionless parent and student user experience</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Card 2: CREATE */}
            <ScrollReveal delay={200}>
              <div className="edu-approach-card-v2">
                <div className="edu-card-step-badge">02</div>
                <span className="edu-card-phase">CONTENT & AUTHORITY</span>
                <h3>CREATE: Cinema-Grade Stories</h3>
                <p>
                  We capture the pulse of your institution with cinema-grade cameras, producing authentic student-life reels, faculty spotlights, and alumni proof.
                </p>
                <ul className="edu-deliverables-list">
                  <li>
                    <Check size={16} />
                    <span>Dynamic student life reels and Day-in-the-Life shorts</span>
                  </li>
                  <li>
                    <Check size={16} />
                    <span>Faculty research showcases & Dean interviews</span>
                  </li>
                  <li>
                    <Check size={16} />
                    <span>Inspiring alumni career milestone documentaries</span>
                  </li>
                  <li>
                    <Check size={16} />
                    <span>Lab, library, and campus facility highlights</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Card 3: PROMOTE */}
            <ScrollReveal delay={300}>
              <div className="edu-approach-card-v2">
                <div className="edu-card-step-badge">03</div>
                <span className="edu-card-phase">REACH & CONVERSION</span>
                <h3>PROMOTE: Timed Campaigns</h3>
                <p>
                  We deploy hyper-targeted Meta Ads and search campaigns synchronized precisely with key admission deadlines and open house schedules.
                </p>
                <ul className="edu-deliverables-list">
                  <li>
                    <Check size={16} />
                    <span>Targeting synchronized with academic intake calendars</span>
                  </li>
                  <li>
                    <Check size={16} />
                    <span>Segmented parent vs. student messaging workflows</span>
                  </li>
                  <li>
                    <Check size={16} />
                    <span>High-attendance virtual webinars & open-day drives</span>
                  </li>
                  <li>
                    <Check size={16} />
                    <span>Retargeting to assist undecided applicant families</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ====================================================
          6. Academic Calendar Roadmap
          ==================================================== */}
      <section className="edu-roadmap-section">
        <div className="container">
          <div className="edu-section-header">
            <ScrollReveal delay={0}>
              <span className="edu-section-badge">LIFECYCLE PARTNERSHIP</span>
              <h2 className="edu-section-title">Harmonized with Your Admissions Calendar</h2>
              <p className="edu-section-subtitle">
                Education marketing requires precision timing. We align our initiatives with your academic deadlines throughout the entire annual cycle.
              </p>
            </ScrollReveal>
          </div>

          <div className="edu-timeline-grid">
            <ScrollReveal delay={50} className="edu-timeline-step">
              <span className="edu-quarter-pill">PHASE 1 · PRE-CYCLE</span>
              <h4>Authority & Awareness</h4>
              <p>Establish institutional prestige through faculty spotlights, campus storytelling, and research achievements before admissions open.</p>
            </ScrollReveal>

            <ScrollReveal delay={100} className="edu-timeline-step">
              <span className="edu-quarter-pill">PHASE 2 · OPEN ADMISSIONS</span>
              <h4>Inquiry Generation</h4>
              <p>Deploy high-intent search and social campaigns to drive prospectus downloads, campus tours, and open house registrations.</p>
            </ScrollReveal>

            <ScrollReveal delay={150} className="edu-timeline-step">
              <span className="edu-quarter-pill">PHASE 3 · DEADLINE ACCELERATION</span>
              <h4>Application Conversion</h4>
              <p>Targeted counseling nurture sequences, parent reassurance webinars, and scholarship guidance to maximize completed submissions.</p>
            </ScrollReveal>

            <ScrollReveal delay={200} className="edu-timeline-step">
              <span className="edu-quarter-pill">PHASE 4 · POST-CYCLE</span>
              <h4>Advocacy & Onboarding</h4>
              <p>Celebrate accepted cohorts, activate alumni advocacy networks, and prepare organic momentum for the next enrollment intake.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ====================================================
          7. Final High-Converting CTA
          ==================================================== */}
      <section className="edu-final-cta-section">
        <div className="edu-cta-ambient" aria-hidden="true" />
        <div className="container">
          <div className="edu-cta-inner">
            <ScrollReveal delay={0}>
              <span className="edu-cta-badge">
                <Sparkles size={16} /> TAKE THE NEXT STEP
              </span>
              <h2 className="edu-cta-title">
                Your Institution Inspires Minds. <br />
                Let’s Help More Students Discover It.
              </h2>
              <p className="edu-cta-desc">
                Book a 30-minute strategic education consultation with S-Bloom. We will evaluate your current enrollment funnel and present a customized digital authority blueprint tailored to your upcoming intake.
              </p>

              <div className="edu-cta-buttons">
                <Link to="/contact" className="edu-cta-primary-btn">
                  <span>Schedule Strategy Consultation</span>
                  <ArrowRight size={18} />
                </Link>
              </div>

              <div className="edu-cta-perks">
                <span><ShieldCheck size={16} color="#D9A52E" /> Complimentary 30-min intake diagnostic</span>
                <span><Calendar size={16} color="#D9A52E" /> Aligned to your academic calendar</span>
                <span><Award size={16} color="#D9A52E" /> 100% compliant with educational standards</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EducationPage;
