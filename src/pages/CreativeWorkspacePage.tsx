import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { ScrollReveal } from "../components/ScrollReveal";
import {
  Film,
  Camera,
  PenTool,
  FileText,
  MonitorSmartphone,
  Target,
  PlayCircle,
  Rocket,
  Users,
  TrendingUp,
  Sparkles,
  Laptop,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  ExternalLink,
  RotateCw,
  CheckCircle2,
  User,
  Mail,
  Phone,
  Link2,
  Briefcase,
  Wrench,
  MessageSquare,
} from 'lucide-react';
import { CreativeOrbit } from '../components/CreativeOrbit';
import './CreativeWorkspacePage.css';

interface CreativeRoleInfo {
  id: string;
  title: string;
  icon: React.ComponentType;
  description: string;
}

// Custom SVG Icons precisely matching uploaded img 2
const VideoEditorBadgeIcon: React.FC = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" stroke="#3B261D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {/* Video Player Display Screen */}
    <rect x="3.5" y="3.5" width="19" height="13.5" rx="3" stroke="#3B261D" strokeWidth="2" />
    {/* Play Triangle */}
    <polygon points="11,7.5 15.5,10.25 11,13" fill="#3B261D" stroke="none" />
    {/* Scissors at bottom right */}
    <circle cx="16.5" cy="23.5" r="2.2" stroke="#3B261D" strokeWidth="1.9" />
    <circle cx="23.5" cy="23.5" r="2.2" stroke="#3B261D" strokeWidth="1.9" />
    <line x1="18" y1="22" x2="23" y2="16.5" stroke="#3B261D" strokeWidth="1.9" strokeLinecap="round" />
    <line x1="22" y1="22" x2="17" y2="16.5" stroke="#3B261D" strokeWidth="1.9" strokeLinecap="round" />
  </svg>
);

const ContentWriterBadgeIcon: React.FC = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" stroke="#3B261D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {/* Document page with folded top-right corner */}
    <path
      d="M7 4C7 3.45 7.45 3 8 3H18L24 9V26C24 26.55 23.55 27 23 27H8C7.45 27 7 26.55 7 26V4Z"
      stroke="#3B261D"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path d="M18 3V9H24" stroke="#3B261D" strokeWidth="2" strokeLinejoin="round" />
    {/* Text lines */}
    <line x1="11" y1="12" x2="16" y2="12" stroke="#3B261D" strokeWidth="1.9" strokeLinecap="round" />
    <line x1="11" y1="16" x2="15" y2="16" stroke="#3B261D" strokeWidth="1.9" strokeLinecap="round" />
    {/* Pen writing at bottom right */}
    <path
      d="M20.5 16.5L24 20L22 22L18.5 18.5L20.5 16.5ZM18.5 18.5L17 23.5L22 22L18.5 18.5Z"
      fill="#FCEFE1"
      stroke="#3B261D"
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
  </svg>
);

const CREATIVE_ROLES: CreativeRoleInfo[] = [
  {
    id: 'video-editors',
    title: 'Video Editors',
    icon: VideoEditorBadgeIcon,
    description: 'Edit reels, promotional videos, and short videos for brands. Turn ideas into creative videos with smooth cuts and clear storytelling.'
  },
  {
    id: 'content-writers',
    title: 'Content Writers',
    icon: ContentWriterBadgeIcon,
    description: 'Write engaging video scripts, social media captions, articles, and brand stories that are easy to understand and help your business reach more people.'
  }
];

// Card Corner Waves component mirroring the uploaded design
const CardCornerWaves: React.FC = () => (
  <div className="cw-card-bg-waves" aria-hidden="true">
    <svg viewBox="0 0 320 340" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Top right organic curved waves */}
      <path d="M125 -30C175 35 245 65 345 35" stroke="#EFE2D0" strokeWidth="26" strokeLinecap="round" opacity="0.65" />
      <path d="M170 -50C230 25 290 75 360 145" stroke="#E6D5C0" strokeWidth="40" opacity="0.4" />
      <path d="M220 -25C260 45 305 95 350 195" stroke="#FAF2E8" strokeWidth="18" opacity="0.85" />
      {/* Bottom left organic curved waves */}
      <path d="-35 175C35 215 55 285 25 375" stroke="#EFE2D0" strokeWidth="26" strokeLinecap="round" opacity="0.55" />
      <path d="-55 225C25 255 75 305 105 375" stroke="#E6D5C0" strokeWidth="40" opacity="0.38" />
    </svg>
  </div>
);

interface CreativeFormData {
  fullName: string;
  email: string;
  phone: string;
  role: string;
  portfolioUrl: string;
  experience: string;
  skills: string;
  notes: string;
}

export const CreativeWorkspacePage = () => {
  const [flippedRoles, setFlippedRoles] = useState<Record<string, boolean>>({});
  const [formHighlight, setFormHighlight] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState<CreativeFormData>({
    fullName: '',
    email: '',
    phone: '',
    role: '',
    portfolioUrl: '',
    experience: '',
    skills: '',
    notes: '',
  });

  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If URL contains hash #creative-apply or path /apply
    if (
      window.location.hash === '#creative-apply' ||
      window.location.pathname.includes('/apply')
    ) {
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: 'smooth' });
        setFormHighlight(true);
        setTimeout(() => setFormHighlight(false), 1800);
      }, 250);
    }
  }, []);

  const scrollToRoles = () => {
    const rolesSection = document.getElementById('roles');
    if (rolesSection) {
      rolesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToApply = (prefillRole?: string) => {
    if (prefillRole) {
      setFormData(prev => ({ ...prev, role: prefillRole }));
    }
    setFormHighlight(true);
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      setFormHighlight(false);
    }, 1800);
  };

  const handleFlipToBack = (roleId: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setFlippedRoles(prev => ({
      ...prev,
      [roleId]: true,
    }));
  };

  const handleFlipToFront = (roleId: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setFlippedRoles(prev => ({
      ...prev,
      [roleId]: false,
    }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleResetForm = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      role: '',
      portfolioUrl: '',
      experience: '',
      skills: '',
      notes: '',
    });
  };

  return (
    <div className="cw-page">
      {/* Hero Section */}
      <section className="cw-hero">
        <div className="container cw-hero-grid">
          <div>
            <ScrollReveal delay={0}>
              <div className="cw-eyebrow-wrap">
                <span className="cw-eyebrow">CREATIVE WORKSPACE</span>
                <span className="cw-eyebrow-line" />
              </div>

              <h1 className="cw-hero-title">
                Create with S-Bloom.<br />
                <span className="cw-gold-text">Grow with us.</span>
              </h1>

              <p className="cw-hero-lead">
                Join our creative network.
              </p>

              <p className="cw-hero-desc">
                Work with S-Bloom on creative projects, digital content, and ideas that help businesses grow. We're looking to connect with talented people who want to create meaningful work together.
              </p>

              <div className="cw-hero-actions">
                <button onClick={scrollToRoles} className="cw-btn-primary">
                  <span>Explore Opportunities</span>
                  <ArrowRight size={18} strokeWidth={2.2} className="cw-btn-arrow" />
                </button>
                <button onClick={() => scrollToApply()} className="cw-btn-secondary">
                  Apply Now
                </button>
              </div>
            </ScrollReveal>
          </div>
          
          <div className="cw-visual" style={{ zIndex: 10 }}>
            <ScrollReveal delay={200} className="w-full h-full" style={{ position: 'relative', width: '100%', height: '100%' }}>
              <CreativeOrbit />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Collaboration Process */}
      <section id="collaboration-process" className="cw-process-section">
        <div className="cw-radial-highlight"></div>
        <div className="container">
          <div className="cw-section-header">
            <ScrollReveal delay={100}>
              <h2>How We Work Together</h2>
              <p>A clear process from project brief to final delivery.</p>
            </ScrollReveal>
          </div>
          
          <div className="cw-process-grid">
            <div className="cw-process-line"></div>
            
            <ScrollReveal delay={200} className="h-full">
              <div className="cw-process-card">
                <span className="cw-process-bg-num">01</span>
                <div className="cw-process-header">
                  <Target className="cw-process-icon" size={28} />
                  <h3>S-Bloom Strategy</h3>
                </div>
                <p>We secure the client and prepare the brief, script, or technical requirements.</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={300} className="h-full">
              <div className="cw-process-card">
                <span className="cw-process-bg-num">02</span>
                <div className="cw-process-header">
                  <PlayCircle className="cw-process-icon" size={28} />
                  <h3>Partner Execution</h3>
                </div>
                <p>You take on the assigned project and deliver your specialized work.</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={400} className="h-full">
              <div className="cw-process-card">
                <span className="cw-process-bg-num">03</span>
                <div className="cw-process-header">
                  <Rocket className="cw-process-icon" size={28} />
                  <h3>S-Bloom Deployment</h3>
                </div>
                <p>We coordinate final deployment, campaign management, and client feedback.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Roles Section with 4 Equal-Width Cards matching Image 2 */}
      <section id="roles" className="cw-roles-section">
        <div className="container">
          <div className="cw-section-header">
            <ScrollReveal delay={100}>
              <h2>Your Expertise Has a Place Here</h2>
              <p>Explore opportunities to collaborate with S-Bloom on impactful client projects.</p>
            </ScrollReveal>
          </div>
          
          <div className="cw-roles-grid">
            {CREATIVE_ROLES.map((role, idx) => {
              const IconComponent = role.icon;

              return (
                <ScrollReveal key={role.id} delay={100 + idx * 80} className="h-full">
                  <div className="cw-role-card">
                    <div className="cw-role-icon-box">
                      <IconComponent size={28} strokeWidth={1.9} className="cw-role-icon" />
                    </div>
                    
                    <h3 className="cw-role-title">{role.title}</h3>
                    <p className="cw-role-desc">{role.description}</p>
                    
                    <button
                      type="button"
                      className="cw-role-apply-btn"
                      onClick={() => scrollToApply(role.title)}
                    >
                      <span>Apply Now</span>
                      <ArrowRight size={15} strokeWidth={2.4} />
                    </button>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEPARATE CREATIVE APPLICATION FORM SECTION */}
      <section id="creative-apply" ref={formRef} className="cw-apply-section">
        <div className="cw-apply-container">
          <ScrollReveal delay={100}>
            <div className="cw-apply-header">
              <div className="cw-apply-eyebrow">
                <span className="cw-apply-eyebrow-text">QUICK APPLICATION</span>
                <span className="cw-apply-eyebrow-line" />
              </div>
              <h2 className="cw-apply-title">Join the S-Bloom Creative Network</h2>
              <p className="cw-apply-subtitle">
                Submit your portfolio and contact details below. We'll reach out with matching projects.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className={`cw-apply-card ${formHighlight ? 'highlight-focus' : ''}`}>
              {submitted ? (
                <div className="cw-apply-success">
                  <div className="cw-success-icon-wrap">
                    <CheckCircle2 size={32} strokeWidth={2.2} />
                  </div>
                  <h3 className="cw-success-title">Creative Application Received!</h3>
                  <p className="cw-success-msg">
                    Thank you, <strong>{formData.fullName || 'Creator'}</strong>. We have received your portfolio details for the <strong>{formData.role || 'Creative Network'}</strong> role. Our team will review your work and contact you with matching projects.
                  </p>
                  <button type="button" className="cw-reset-btn" onClick={handleResetForm}>
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form className="cw-apply-form" onSubmit={handleSubmit}>
                  <div className="cw-apply-form-grid">
                    {/* Full Name */}
                    <div className="cw-form-group">
                      <label htmlFor="cw-fullName" className="cw-form-label">
                        Full Name <span className="cw-req-star">*</span>
                      </label>
                      <div className="cw-input-wrap">
                        <User size={15} strokeWidth={1.8} className="cw-input-icon" />
                        <input
                          type="text"
                          id="cw-fullName"
                          name="fullName"
                          required
                          placeholder="Your full name"
                          className="cw-input"
                          value={formData.fullName}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="cw-form-group">
                      <label htmlFor="cw-email" className="cw-form-label">
                        Email Address <span className="cw-req-star">*</span>
                      </label>
                      <div className="cw-input-wrap">
                        <Mail size={15} strokeWidth={1.8} className="cw-input-icon" />
                        <input
                          type="email"
                          id="cw-email"
                          name="email"
                          required
                          placeholder="you@domain.com"
                          className="cw-input"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div className="cw-form-group">
                      <label htmlFor="cw-phone" className="cw-form-label">
                        Phone / WhatsApp <span className="cw-req-star">*</span>
                      </label>
                      <div className="cw-input-wrap">
                        <Phone size={15} strokeWidth={1.8} className="cw-input-icon" />
                        <input
                          type="tel"
                          id="cw-phone"
                          name="phone"
                          required
                          placeholder="+91 98765 43210"
                          className="cw-input"
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    {/* Role / Discipline */}
                    <div className="cw-form-group">
                      <label htmlFor="cw-role" className="cw-form-label">
                        Creative Role <span className="cw-req-star">*</span>
                      </label>
                      <div className="cw-input-wrap">
                        <Briefcase size={15} strokeWidth={1.8} className="cw-input-icon" />
                        <select
                          id="cw-role"
                          name="role"
                          required
                          className="cw-select"
                          value={formData.role}
                          onChange={handleInputChange}
                        >
                          <option value="">Select your discipline...</option>
                          <option value="Video Editors">Video Editors</option>
                          <option value="Content Writers">Content Writers</option>
                          <option value="Other Creative Role">Other Creative Role</option>
                        </select>
                      </div>
                    </div>

                    {/* Portfolio / Reel Link */}
                    <div className="cw-form-group cw-apply-full-width">
                      <label htmlFor="cw-portfolioUrl" className="cw-form-label">
                        Portfolio / Reel Link <span className="cw-req-star">*</span>
                      </label>
                      <div className="cw-input-wrap">
                        <Link2 size={15} strokeWidth={1.8} className="cw-input-icon" />
                        <input
                          type="url"
                          id="cw-portfolioUrl"
                          name="portfolioUrl"
                          required
                          placeholder="Behance, Google Drive, YouTube, Vimeo, Instagram, or portfolio URL"
                          className="cw-input"
                          value={formData.portfolioUrl}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="cw-apply-submit-btn"
                    disabled={isSubmitting}
                  >
                    <span>{isSubmitting ? 'Submitting Application...' : 'Submit Application'}</span>
                    <ArrowRight size={16} strokeWidth={2.4} />
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="cw-cta-section">
        <div className="container">
          <ScrollReveal delay={100}>
            <h2>Ready to Collaborate with S-Bloom?</h2>
            <p>Bring your skills, experience, and ideas to projects that need your expertise.</p>
            <button
              onClick={() => scrollToApply()}
              className="cw-btn"
              style={{
                padding: '16px 40px',
                fontSize: '1.1rem',
                border: 'none',
                cursor: 'pointer',
                borderRadius: '8px',
                background: '#FFFFFF',
                color: '#1C1917',
                fontWeight: 650,
              }}
            >
              Apply to S-Bloom Creative Network →
            </button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default CreativeWorkspacePage;

