import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router';
import {
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Link2,
  Wrench,
  Clock,
  Sparkles,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  Send,
  Film,
  Camera,
  PenTool,
  FileText,
  MonitorSmartphone,
} from 'lucide-react';
import './ApplyPage.css';

interface CreativeApplicationData {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  role: string;
  experience: string;
  portfolioUrl: string;
  secondaryUrl: string;
  skills: string;
  availability: string;
  pitch: string;
}

const ROLES_LIST = [
  { id: 'video-editors', title: 'Video Editors', icon: Film },
  { id: 'videographers', title: 'Videographers', icon: Camera },
  { id: 'designers', title: 'Designers', icon: PenTool },
  { id: 'content-writers', title: 'Content Writers', icon: FileText },
  { id: 'digital-specialists', title: 'Digital Specialists', icon: MonitorSmartphone },
  { id: 'other', title: 'Other Creative Discipline', icon: Sparkles },
];

export const ApplyPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const prefillRole = searchParams.get('role') || '';

  const [formData, setFormData] = useState<CreativeApplicationData>({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    role: prefillRole,
    experience: '',
    portfolioUrl: '',
    secondaryUrl: '',
    skills: '',
    availability: 'Freelance / Project-Based',
    pitch: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefillRole) {
      // Find matching role in ROLES_LIST or set directly
      const matched = ROLES_LIST.find(
        (r) =>
          r.title.toLowerCase() === prefillRole.toLowerCase() ||
          r.id.toLowerCase() === prefillRole.toLowerCase()
      );
      if (matched) {
        setFormData((prev) => ({ ...prev, role: matched.title }));
      } else {
        setFormData((prev) => ({ ...prev, role: prefillRole }));
      }
    }
  }, [prefillRole]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRoleSelect = (roleTitle: string) => {
    setFormData((prev) => ({ ...prev, role: roleTitle }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 700);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      city: '',
      role: '',
      experience: '',
      portfolioUrl: '',
      secondaryUrl: '',
      skills: '',
      availability: 'Freelance / Project-Based',
      pitch: '',
    });
  };

  return (
    <div className="apply-page">
      {/* Background radial glows */}
      <div className="apply-bg-glow apply-glow-1" aria-hidden="true" />
      <div className="apply-bg-glow apply-glow-2" aria-hidden="true" />

      <div className="apply-container">
        {/* Navigation Breadcrumb */}
        <div className="apply-nav-bar">
          <Link to="/creative-workspace" className="apply-back-link">
            <ArrowLeft size={16} strokeWidth={2.2} />
            <span>Back to Creative Workspace</span>
          </Link>
          <span className="apply-brand-tag">sBLOOM Talent Network</span>
        </div>

        {submitted ? (
          /* SUCCESS SCREEN */
          <div className="apply-success-card">
            <div className="apply-success-icon-wrap">
              <CheckCircle2 size={44} strokeWidth={2.2} />
            </div>
            <span className="apply-success-pill">APPLICATION SUBMITTED</span>
            <h1 className="apply-success-title">Welcome to the Network, {formData.fullName}!</h1>
            <p className="apply-success-desc">
              We have received your application for the <strong>{formData.role || 'Creative Talent'}</strong> position.
              Our creative director and production team will review your portfolio and reach out regarding active client briefs and collaborative opportunities.
            </p>

            <div className="apply-summary-box">
              <div className="apply-summary-row">
                <span className="apply-summary-label">Role Applied:</span>
                <span className="apply-summary-val">{formData.role || 'Not specified'}</span>
              </div>
              <div className="apply-summary-row">
                <span className="apply-summary-label">Portfolio:</span>
                <span className="apply-summary-val apply-truncate">{formData.portfolioUrl || 'Provided'}</span>
              </div>
              <div className="apply-summary-row">
                <span className="apply-summary-label">Contact Email:</span>
                <span className="apply-summary-val">{formData.email}</span>
              </div>
              <div className="apply-summary-row">
                <span className="apply-summary-label">Availability:</span>
                <span className="apply-summary-val">{formData.availability}</span>
              </div>
            </div>

            <div className="apply-success-actions">
              <Link to="/creative-workspace" className="apply-btn-primary">
                <span>Explore Creative Workspace</span>
                <ArrowRight size={16} strokeWidth={2.2} />
              </Link>
              <button type="button" onClick={handleReset} className="apply-btn-secondary">
                Submit Another Application
              </button>
            </div>
          </div>
        ) : (
          /* MAIN FORM */
          <div className="apply-card">
            {/* Header */}
            <div className="apply-card-header">
              <div className="apply-eyebrow">
                <Sparkles size={14} className="apply-eyebrow-icon" />
                <span>CREATIVE NETWORK APPLICATION</span>
              </div>
              <h1 className="apply-title">Apply to Create with S-Bloom</h1>
              <p className="apply-subtitle">
                Partner with us on client video reels, executive cinematography, visual design systems, copywriting, and growth marketing campaigns.
              </p>
            </div>

            <form className="apply-form" onSubmit={handleSubmit}>
              {/* SECTION 1: ROLE SELECTION */}
              <div className="apply-section-block">
                <div className="apply-section-heading">
                  <span className="apply-step-badge">1</span>
                  <div>
                    <h3>Select Your Discipline</h3>
                    <p>Choose the creative role that best represents your core strengths.</p>
                  </div>
                </div>

                <div className="apply-roles-picker">
                  {ROLES_LIST.map((r) => {
                    const RoleIcon = r.icon;
                    const isSelected = formData.role.toLowerCase() === r.title.toLowerCase();
                    return (
                      <button
                        key={r.id}
                        type="button"
                        onClick={() => handleRoleSelect(r.title)}
                        className={`apply-role-pill-btn ${isSelected ? 'is-selected' : ''}`}
                      >
                        <RoleIcon size={18} strokeWidth={1.8} />
                        <span>{r.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* SECTION 2: CONTACT DETAILS */}
              <div className="apply-section-block">
                <div className="apply-section-heading">
                  <span className="apply-step-badge">2</span>
                  <div>
                    <h3>Your Contact Details</h3>
                    <p>How we can connect with you for projects and collaboration.</p>
                  </div>
                </div>

                <div className="apply-grid-2">
                  {/* Full Name */}
                  <div className="apply-field">
                    <label htmlFor="ap-fullName" className="apply-label">
                      Full Name <span className="apply-required">*</span>
                    </label>
                    <div className="apply-input-wrap">
                      <User size={16} className="apply-field-icon" />
                      <input
                        type="text"
                        id="ap-fullName"
                        name="fullName"
                        required
                        placeholder="e.g. Maya Chen"
                        className="apply-input"
                        value={formData.fullName}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="apply-field">
                    <label htmlFor="ap-email" className="apply-label">
                      Email Address <span className="apply-required">*</span>
                    </label>
                    <div className="apply-input-wrap">
                      <Mail size={16} className="apply-field-icon" />
                      <input
                        type="email"
                        id="ap-email"
                        name="email"
                        required
                        placeholder="you@domain.com"
                        className="apply-input"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="apply-field">
                    <label htmlFor="ap-phone" className="apply-label">
                      Phone / WhatsApp <span className="apply-required">*</span>
                    </label>
                    <div className="apply-input-wrap">
                      <Phone size={16} className="apply-field-icon" />
                      <input
                        type="tel"
                        id="ap-phone"
                        name="phone"
                        required
                        placeholder="+91 98765 43210"
                        className="apply-input"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  {/* City */}
                  <div className="apply-field">
                    <label htmlFor="ap-city" className="apply-label">
                      City / Location <span className="apply-required">*</span>
                    </label>
                    <div className="apply-input-wrap">
                      <MapPin size={16} className="apply-field-icon" />
                      <input
                        type="text"
                        id="ap-city"
                        name="city"
                        required
                        placeholder="e.g. Bangalore, Mumbai, Remote"
                        className="apply-input"
                        value={formData.city}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION 3: PORTFOLIO & WORK SAMPLES */}
              <div className="apply-section-block">
                <div className="apply-section-heading">
                  <span className="apply-step-badge">3</span>
                  <div>
                    <h3>Work Samples & Experience</h3>
                    <p>Share your portfolio, showreel, or links to your recent creative work.</p>
                  </div>
                </div>

                <div className="apply-grid-2">
                  {/* Portfolio URL */}
                  <div className="apply-field apply-col-full">
                    <label htmlFor="ap-portfolioUrl" className="apply-label">
                      Primary Portfolio / Showreel Link <span className="apply-required">*</span>
                    </label>
                    <div className="apply-input-wrap">
                      <Link2 size={16} className="apply-field-icon" />
                      <input
                        type="url"
                        id="ap-portfolioUrl"
                        name="portfolioUrl"
                        required
                        placeholder="https://behance.net/..., Google Drive, YouTube, Vimeo, or personal site"
                        className="apply-input"
                        value={formData.portfolioUrl}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  {/* Secondary Social / Profile URL */}
                  <div className="apply-field">
                    <label htmlFor="ap-secondaryUrl" className="apply-label">
                      Secondary Link <span className="apply-optional">(Optional)</span>
                    </label>
                    <div className="apply-input-wrap">
                      <Link2 size={16} className="apply-field-icon" />
                      <input
                        type="url"
                        id="ap-secondaryUrl"
                        name="secondaryUrl"
                        placeholder="Instagram, LinkedIn, Dribbble, GitHub"
                        className="apply-input"
                        value={formData.secondaryUrl}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  {/* Experience Level */}
                  <div className="apply-field">
                    <label htmlFor="ap-experience" className="apply-label">
                      Experience Level <span className="apply-required">*</span>
                    </label>
                    <div className="apply-input-wrap">
                      <Briefcase size={16} className="apply-field-icon" />
                      <select
                        id="ap-experience"
                        name="experience"
                        required
                        className="apply-select"
                        value={formData.experience}
                        onChange={handleInputChange}
                      >
                        <option value="">Select your experience level...</option>
                        <option value="1 - 2 Years">1 - 2 Years</option>
                        <option value="3 - 5 Years">3 - 5 Years</option>
                        <option value="5+ Years (Senior / Lead)">5+ Years (Senior / Lead)</option>
                        <option value="Independent Freelance Creator">Independent Freelance Creator</option>
                        <option value="Boutique Studio / Agency">Boutique Studio / Agency</option>
                      </select>
                    </div>
                  </div>

                  {/* Primary Software / Tools */}
                  <div className="apply-field">
                    <label htmlFor="ap-skills" className="apply-label">
                      Primary Software & Tools <span className="apply-optional">(Optional)</span>
                    </label>
                    <div className="apply-input-wrap">
                      <Wrench size={16} className="apply-field-icon" />
                      <input
                        type="text"
                        id="ap-skills"
                        name="skills"
                        placeholder="Premiere Pro, After Effects, DaVinci, Figma, Sony 4K"
                        className="apply-input"
                        value={formData.skills}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="apply-field">
                    <label htmlFor="ap-availability" className="apply-label">
                      Availability / Working Model
                    </label>
                    <div className="apply-input-wrap">
                      <Clock size={16} className="apply-field-icon" />
                      <select
                        id="ap-availability"
                        name="availability"
                        className="apply-select"
                        value={formData.availability}
                        onChange={handleInputChange}
                      >
                        <option value="Freelance / Project-Based">Freelance / Project-Based</option>
                        <option value="Part-Time Retainer (15-20 hrs/week)">Part-Time Retainer (15-20 hrs/week)</option>
                        <option value="Full-Time Dedicated">Full-Time Dedicated</option>
                        <option value="On-Call Weekend / Events">On-Call Weekend / Events</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Pitch / Notes */}
                <div className="apply-field" style={{ marginTop: '16px' }}>
                  <label htmlFor="ap-pitch" className="apply-label">
                    Brief Note / What excites you about S-Bloom? <span className="apply-optional">(Optional)</span>
                  </label>
                  <textarea
                    id="ap-pitch"
                    name="pitch"
                    rows={3}
                    placeholder="Tell us about the kinds of client projects you enjoy most, or your creative philosophy..."
                    className="apply-textarea"
                    value={formData.pitch}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* SUBMIT BUTTON */}
              <div className="apply-footer">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="apply-submit-btn"
                >
                  <Send size={18} strokeWidth={2.2} />
                  <span>{isSubmitting ? 'Submitting Application...' : 'Submit Creative Application'}</span>
                </button>
                <p className="apply-privacy-note">
                  🔒 Your contact information and portfolio links are kept private and only used for S-Bloom creative project allocations.
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplyPage;
