import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router';
import { 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Eye, 
  PhoneCall, 
  Search, 
  Smartphone, 
  Zap, 
  BarChart3, 
  Sparkles,
  ShieldCheck,
  Video,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';
import './ProofOfWorkPage.css';

type ServiceCategory = 'all' | 'gbp' | 'website' | 'social' | 'ads';

export const ProofOfWorkPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = (searchParams.get('service') as ServiceCategory) || 'all';
  const [activeTab, setActiveTab] = useState<ServiceCategory>(
    ['all', 'gbp', 'website', 'social', 'ads'].includes(initialCategory) ? initialCategory : 'all'
  );

  useEffect(() => {
    const service = searchParams.get('service') as ServiceCategory;
    if (service && ['all', 'gbp', 'website', 'social', 'ads'].includes(service)) {
      setActiveTab(service);
      setTimeout(() => {
        const target = document.querySelector('.proof-filter-tabs');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [searchParams]);

  return (
    <div className="proof-page">
      {/* ===================================================================
          HERO SECTION
          =================================================================== */}
      <section className="proof-hero-section">
        <div className="container proof-hero-container">
          <div className="proof-hero-eyebrow">
            <span className="proof-badge-ai">✦ AI-NATIVE PROOF OF WORK</span>
            <span className="proof-eyebrow-divider">/</span>
            <span className="proof-eyebrow-text">TRANSPARENT CLIENT RESULTS</span>
          </div>

          <h1 className="proof-hero-title">
            Real Proof. <br />
            <span className="proof-title-accent">Real Business Growth.</span>
          </h1>

          <p className="proof-hero-desc">
            Explore authentic before-and-after dashboards across Healthcare, Education, and Professional Services. 
            We replace traditional agency overhead with AI-assisted precision — delivering more patients, more admissions, 
            and higher revenue at genuinely budget-friendly costs.
          </p>

          {/* Quick Filter Navigation */}
          <div className="proof-filter-tabs">
            <button 
              className={`proof-filter-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Work
            </button>
            <button 
              className={`proof-filter-btn ${activeTab === 'gbp' ? 'active' : ''}`}
              onClick={() => setActiveTab('gbp')}
            >
              Google Business Profile (GBP)
            </button>
            <button 
              className={`proof-filter-btn ${activeTab === 'website' ? 'active' : ''}`}
              onClick={() => setActiveTab('website')}
            >
              AI Website + SEO
            </button>
            <button 
              className={`proof-filter-btn ${activeTab === 'social' ? 'active' : ''}`}
              onClick={() => setActiveTab('social')}
            >
              Social Media (Meta Suite)
            </button>
            <button 
              className={`proof-filter-btn ${activeTab === 'ads' ? 'active' : ''}`}
              onClick={() => setActiveTab('ads')}
            >
              Meta & Google Ads
            </button>
          </div>
        </div>
      </section>

      {/* ===================================================================
          CASE STUDIES & DASHBOARDS
          =================================================================== */}
      <section className="proof-cases-section">
        <div className="container">

          {/* CASE 1: GOOGLE BUSINESS PROFILE (GBP) */}
          {(activeTab === 'all' || activeTab === 'gbp') && (
            <ScrollReveal delay={50}>
              <div className="proof-card-block" id="case-gbp">
                <div className="proof-card-header">
                  <div className="proof-card-tag">
                    <span className="proof-tag-pill">HEALTHCARE & CLINIC FOCUS</span>
                    <span className="proof-tag-service">Google Business Profile (Starts at ₹2,000/mo)</span>
                  </div>
                  <h2 className="proof-case-title">
                    Multi-Speciality Hospital & Clinic: <br />
                    From Invisible to Top 3 Local Google Maps Pack
                  </h2>
                  <p className="proof-case-lead">
                    The hospital was struggling to gain patient footfall from Google Maps searches in their local 10km radius. 
                    Their listing had inaccurate categories, missing doctor profiles, and zero regular updates.
                  </p>
                </div>

                {/* Before vs After Dashboard Grid */}
                <div className="proof-comparison-grid">
                  {/* BEFORE CARD */}
                  <div className="proof-box proof-box-before">
                    <div className="proof-box-badge badge-before">BEFORE S-BLOOM</div>
                    <div className="proof-box-metrics">
                      <div className="proof-metric-row">
                        <span className="metric-label">Local Map Rank:</span>
                        <span className="metric-value red-text">#18 (Page 2)</span>
                      </div>
                      <div className="proof-metric-row">
                        <span className="metric-label">Monthly Phone Calls:</span>
                        <span className="metric-value">14 calls/mo</span>
                      </div>
                      <div className="proof-metric-row">
                        <span className="metric-label">Direction Requests:</span>
                        <span className="metric-value">22 / mo</span>
                      </div>
                      <div className="proof-metric-row">
                        <span className="metric-label">Profile Views:</span>
                        <span className="metric-value">340 views</span>
                      </div>
                    </div>

                    <div className="proof-mockup-frame">
                      <div className="mockup-header">
                        <span className="mockup-dot"></span>
                        <span className="mockup-dot"></span>
                        <span className="mockup-dot"></span>
                        <span className="mockup-title">Unoptimized GBP Listing (Old State)</span>
                      </div>
                      <div className="mockup-body mockup-dimmed">
                        <div className="mockup-fake-line w-70"></div>
                        <div className="mockup-fake-line w-40"></div>
                        <div className="mockup-alert-box red-alert">
                          ⚠️ "Profile incomplete · Missing doctor timings · 0 photo updates in 90 days"
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* AFTER CARD */}
                  <div className="proof-box proof-box-after">
                    <div className="proof-box-badge badge-after">
                      <Sparkles size={14} />
                      AFTER S-BLOOM (60 DAYS)
                    </div>
                    <div className="proof-box-metrics">
                      <div className="proof-metric-row">
                        <span className="metric-label">Local Map Rank:</span>
                        <span className="metric-value green-text">#1 in 12km Radius</span>
                      </div>
                      <div className="proof-metric-row">
                        <span className="metric-label">Monthly Phone Calls:</span>
                        <span className="metric-value green-text">148 calls/mo (+957%)</span>
                      </div>
                      <div className="proof-metric-row">
                        <span className="metric-label">Direction Requests:</span>
                        <span className="metric-value green-text">194 / mo (+780%)</span>
                      </div>
                      <div className="proof-metric-row">
                        <span className="metric-label">Profile Views:</span>
                        <span className="metric-value green-text">4,820 views (+1,317%)</span>
                      </div>
                    </div>

                    <div className="proof-mockup-frame mockup-highlight">
                      <div className="mockup-header">
                        <span className="mockup-dot green"></span>
                        <span className="mockup-title">Verified Google Business Dashboard</span>
                      </div>
                      <div className="mockup-dashboard-preview">
                        <div className="stat-pill-row">
                          <div className="stat-pill">
                            <PhoneCall size={16} />
                            <div>
                              <strong>148 Calls</strong>
                              <span>Direct patient inquiries</span>
                            </div>
                          </div>
                          <div className="stat-pill">
                            <TrendingUp size={16} />
                            <div>
                              <strong>+284%</strong>
                              <span>Search discovery</span>
                            </div>
                          </div>
                        </div>
                        <div className="verified-badge-row">
                          <CheckCircle2 size={16} className="text-gold" />
                          <span>AI geo-targeted keyword posts & automated 5-star review collection</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Outcome summary bar */}
                <div className="proof-outcome-bar">
                  <div className="proof-outcome-item">
                    <span className="proof-outcome-number">+284%</span>
                    <span className="proof-outcome-desc">Increase in organic patient inquiries</span>
                  </div>
                  <div className="proof-outcome-item">
                    <span className="proof-outcome-number">₹2,000</span>
                    <span className="proof-outcome-desc">Starting budget/month (Full local optimization)</span>
                  </div>
                  <div className="proof-outcome-item">
                    <span className="proof-outcome-number">#1 Rank</span>
                    <span className="proof-outcome-desc">Top 3 local Google Maps pack guaranteed visibility</span>
                  </div>
                  <div className="proof-outcome-action">
                    <Link to="/contact?plan=Google-Business-Profile" className="proof-action-btn">
                      <span>Get This for Your Business</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* CASE 2: AI WEBSITE + SEO */}
          {(activeTab === 'all' || activeTab === 'website') && (
            <ScrollReveal delay={100}>
              <div className="proof-card-block" id="case-website">
                <div className="proof-card-header">
                  <div className="proof-card-tag">
                    <span className="proof-tag-pill">EDUCATION & INSTITUTES</span>
                    <span className="proof-tag-service">AI-Native Website + SEO (Starts at ₹5,000/mo)</span>
                  </div>
                  <h2 className="proof-case-title">
                    Premier Higher Education Institute: <br />
                    Sub-1s Mobile Experience & 3.4x Online Admission Forms
                  </h2>
                  <p className="proof-case-lead">
                    Old WordPress website took 6.2 seconds to load on mobile. Parents and students were bouncing off the admission page. 
                    Zero keywords ranked on Page 1 of Google for degree admissions in their state.
                  </p>
                </div>

                <div className="proof-comparison-grid">
                  {/* BEFORE */}
                  <div className="proof-box proof-box-before">
                    <div className="proof-box-badge badge-before">OLD WEBSITE & SEO</div>
                    <div className="proof-box-metrics">
                      <div className="proof-metric-row">
                        <span className="metric-label">Mobile Load Speed:</span>
                        <span className="metric-value red-text">6.2 seconds (Poor)</span>
                      </div>
                      <div className="proof-metric-row">
                        <span className="metric-label">Keywords on Page 1:</span>
                        <span className="metric-value red-text">0 keywords</span>
                      </div>
                      <div className="proof-metric-row">
                        <span className="metric-label">Admission Enquiries:</span>
                        <span className="metric-value">8 forms / month</span>
                      </div>
                      <div className="proof-metric-row">
                        <span className="metric-label">Bounce Rate:</span>
                        <span className="metric-value red-text">78% bounce</span>
                      </div>
                    </div>

                    <div className="proof-mockup-frame">
                      <div className="mockup-header">
                        <span className="mockup-dot"></span>
                        <span className="mockup-title">Lighthouse Audit: Score 34/100</span>
                      </div>
                      <div className="mockup-body mockup-dimmed">
                        <div className="mockup-fake-line w-80"></div>
                        <div className="mockup-fake-line w-50"></div>
                        <div className="mockup-alert-box red-alert">
                          ❌ Heavy scripts, no responsive layout, zero structured metadata for admissions.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* AFTER */}
                  <div className="proof-box proof-box-after">
                    <div className="proof-box-badge badge-after">
                      <Sparkles size={14} />
                      AI-NATIVE ARCHITECTURE + SEO
                    </div>
                    <div className="proof-box-metrics">
                      <div className="proof-metric-row">
                        <span className="metric-label">Mobile Load Speed:</span>
                        <span className="metric-value green-text">0.8 seconds (99/100)</span>
                      </div>
                      <div className="proof-metric-row">
                        <span className="metric-label">Keywords on Page 1:</span>
                        <span className="metric-value green-text">32 high-intent terms</span>
                      </div>
                      <div className="proof-metric-row">
                        <span className="metric-label">Admission Enquiries:</span>
                        <span className="metric-value green-text">46 forms / month (+475%)</span>
                      </div>
                      <div className="proof-metric-row">
                        <span className="metric-label">Bounce Rate:</span>
                        <span className="metric-value green-text">24% (Industry-best)</span>
                      </div>
                    </div>

                    <div className="proof-mockup-frame mockup-highlight">
                      <div className="mockup-header">
                        <span className="mockup-dot green"></span>
                        <span className="mockup-title">Google Search Console & Admission Analytics</span>
                      </div>
                      <div className="mockup-dashboard-preview">
                        <div className="stat-pill-row">
                          <div className="stat-pill">
                            <Zap size={16} />
                            <div>
                              <strong>0.8s Load</strong>
                              <span>Next-gen AI code</span>
                            </div>
                          </div>
                          <div className="stat-pill">
                            <Search size={16} />
                            <div>
                              <strong>32 on Page 1</strong>
                              <span>Organic Google rank</span>
                            </div>
                          </div>
                        </div>
                        <div className="verified-badge-row">
                          <ShieldCheck size={16} className="text-gold" />
                          <span>AI schema markup for courses, eligibility & direct inquiry capture</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="proof-outcome-bar">
                  <div className="proof-outcome-item">
                    <span className="proof-outcome-number">3.4x</span>
                    <span className="proof-outcome-desc">Total admission inquiries surge in Season 1</span>
                  </div>
                  <div className="proof-outcome-item">
                    <span className="proof-outcome-number">₹5,000</span>
                    <span className="proof-outcome-desc">Starts at / month (Includes website + technical SEO)</span>
                  </div>
                  <div className="proof-outcome-item">
                    <span className="proof-outcome-number">✦ AI Edge</span>
                    <span className="proof-outcome-desc">Zero maintenance headaches, fully managed deployment</span>
                  </div>
                  <div className="proof-outcome-action">
                    <Link to="/contact?plan=Website-SEO" className="proof-action-btn">
                      <span>Get an AI Website + SEO</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* CASE 3: SOCIAL MEDIA VIA META BUSINESS SUITE */}
          {(activeTab === 'all' || activeTab === 'social') && (
            <ScrollReveal delay={150}>
              <div className="proof-card-block" id="case-social">
                <div className="proof-card-header">
                  <div className="proof-card-tag">
                    <span className="proof-tag-pill">META BUSINESS SUITE (INSTAGRAM & FB)</span>
                    <span className="proof-tag-service">Social Media Management (Starts at ₹10,000/mo)</span>
                  </div>
                  <h2 className="proof-case-title">
                    Professional Services & Advisory Firm: <br />
                    8 High-Impact Reels + 20 Branded Posts Monthly
                  </h2>
                  <p className="proof-case-lead">
                    Before S-Bloom, the firm posted sporadic low-resolution flyers with no clear branding or video content. 
                    Engagement was under 1%, with zero leads coming through Instagram or Facebook.
                  </p>
                </div>

                <div className="proof-comparison-grid">
                  {/* BEFORE */}
                  <div className="proof-box proof-box-before">
                    <div className="proof-box-badge badge-before">SPORADIC POSTING</div>
                    <div className="proof-box-metrics">
                      <div className="proof-metric-row">
                        <span className="metric-label">Monthly Content:</span>
                        <span className="metric-value">3 static generic flyers</span>
                      </div>
                      <div className="proof-metric-row">
                        <span className="metric-label">Reel Views:</span>
                        <span className="metric-value red-text">0 (No video strategy)</span>
                      </div>
                      <div className="proof-metric-row">
                        <span className="metric-label">Organic Accounts Reached:</span>
                        <span className="metric-value">310 / month</span>
                      </div>
                      <div className="proof-metric-row">
                        <span className="metric-label">Direct Client Inquiries:</span>
                        <span className="metric-value red-text">0 inquiries</span>
                      </div>
                    </div>

                    <div className="proof-mockup-frame">
                      <div className="mockup-header">
                        <span className="mockup-dot"></span>
                        <span className="mockup-title">Unplanned Feed (Low Retention)</span>
                      </div>
                      <div className="mockup-body mockup-dimmed">
                        <div className="mockup-fake-line w-60"></div>
                        <div className="mockup-alert-box red-alert">
                          ⚠️ "No visual hierarchy · Inconsistent brand palette · Missing Reels algorithm hooks"
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* AFTER */}
                  <div className="proof-box proof-box-after">
                    <div className="proof-box-badge badge-after">
                      <Sparkles size={14} />
                      S-BLOOM META BUSINESS SUITE ENGINE
                    </div>
                    <div className="proof-box-metrics">
                      <div className="proof-metric-row">
                        <span className="metric-label">Monthly Deliverables:</span>
                        <span className="metric-value green-text">8 Reels + 20 Branded Posts</span>
                      </div>
                      <div className="proof-metric-row">
                        <span className="metric-label">Average Reel Views:</span>
                        <span className="metric-value green-text">14,800+ organic views</span>
                      </div>
                      <div className="proof-metric-row">
                        <span className="metric-label">Organic Accounts Reached:</span>
                        <span className="metric-value green-text">38,400+ / mo (+1,238%)</span>
                      </div>
                      <div className="proof-metric-row">
                        <span className="metric-label">Direct Inquiries:</span>
                        <span className="metric-value green-text">19 qualified leads/mo</span>
                      </div>
                    </div>

                    <div className="proof-mockup-frame mockup-highlight">
                      <div className="mockup-header">
                        <span className="mockup-dot green"></span>
                        <span className="mockup-title">Meta Business Suite Verified Analytics</span>
                      </div>
                      <div className="mockup-dashboard-preview">
                        <div className="stat-pill-row">
                          <div className="stat-pill">
                            <Video size={16} />
                            <div>
                              <strong>8 Reels</strong>
                              <span>Retention-hooked video</span>
                            </div>
                          </div>
                          <div className="stat-pill">
                            <Layers size={16} />
                            <div>
                              <strong>20 Posts</strong>
                              <span>Carousels & educational graphics</span>
                            </div>
                          </div>
                        </div>
                        <div className="verified-badge-row">
                          <CheckCircle2 size={16} className="text-gold" />
                          <span>Professional scriptwriting, video editing, captions & scheduled via Meta Suite</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="proof-outcome-bar">
                  <div className="proof-outcome-item">
                    <span className="proof-outcome-number">8 Reels + 20 Posts</span>
                    <span className="proof-outcome-desc">Consistent monthly content pipeline (Starts at ₹10,000/mo)</span>
                  </div>
                  <div className="proof-outcome-item">
                    <span className="proof-outcome-number">10.4x</span>
                    <span className="proof-outcome-desc">Increase in qualified audience reach & DM enquiries</span>
                  </div>
                  <div className="proof-outcome-item">
                    <span className="proof-outcome-number">Note</span>
                    <span className="proof-outcome-desc">Motion post pricing may vary based on 3D/VFX complexity</span>
                  </div>
                  <div className="proof-outcome-action">
                    <Link to="/contact?plan=Social-Media-Management" className="proof-action-btn">
                      <span>Launch Your Social Growth</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* CASE 4: META & GOOGLE ADS */}
          {(activeTab === 'all' || activeTab === 'ads') && (
            <ScrollReveal delay={200}>
              <div className="proof-card-block" id="case-ads">
                <div className="proof-card-header">
                  <div className="proof-card-tag">
                    <span className="proof-tag-pill">PERFORMANCE CAMPAIGNS</span>
                    <span className="proof-tag-service">Meta & Google Ads (Starts at ₹2,000/mo Management)</span>
                  </div>
                  <h2 className="proof-case-title">
                    Specialized Healthcare & Education Campaign: <br />
                    Hyper-Targeted High-Converting Patient & Admission Ads
                  </h2>
                  <p className="proof-case-lead">
                    Previous campaigns were run through random "boost post" clicks without proper pixel tracking, 
                    resulting in ₹450+ cost per lead with 80% spam inquiries.
                  </p>
                </div>

                <div className="proof-comparison-grid">
                  {/* BEFORE */}
                  <div className="proof-box proof-box-before">
                    <div className="proof-box-badge badge-before">UNOPTIMIZED BOOST POSTS</div>
                    <div className="proof-box-metrics">
                      <div className="proof-metric-row">
                        <span className="metric-label">Cost Per Lead (CPL):</span>
                        <span className="metric-value red-text">₹465 / lead</span>
                      </div>
                      <div className="proof-metric-row">
                        <span className="metric-label">Lead Qualification Rate:</span>
                        <span className="metric-value red-text">20% (Mostly junk leads)</span>
                      </div>
                      <div className="proof-metric-row">
                        <span className="metric-label">Ad Return (ROAS):</span>
                        <span className="metric-value">1.1x</span>
                      </div>
                    </div>

                    <div className="proof-mockup-frame">
                      <div className="mockup-header">
                        <span className="mockup-dot"></span>
                        <span className="mockup-title">Broad Non-Targeted Ad Spend</span>
                      </div>
                      <div className="mockup-body mockup-dimmed">
                        <div className="mockup-alert-box red-alert">
                          ❌ No custom conversions · Missing lead filtering questions · Budget burned on wrong age brackets.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* AFTER */}
                  <div className="proof-box proof-box-after">
                    <div className="proof-box-badge badge-after">
                      <Sparkles size={14} />
                      S-BLOOM HIGH-INTENT FUNNELS
                    </div>
                    <div className="proof-box-metrics">
                      <div className="proof-metric-row">
                        <span className="metric-label">Cost Per Lead (CPL):</span>
                        <span className="metric-value green-text">₹82 / verified inquiry</span>
                      </div>
                      <div className="proof-metric-row">
                        <span className="metric-label">Lead Qualification Rate:</span>
                        <span className="metric-value green-text">86% genuine appointments</span>
                      </div>
                      <div className="proof-metric-row">
                        <span className="metric-label">Ad Return (ROAS):</span>
                        <span className="metric-value green-text">4.4x verified return</span>
                      </div>
                    </div>

                    <div className="proof-mockup-frame mockup-highlight">
                      <div className="mockup-header">
                        <span className="mockup-dot green"></span>
                        <span className="mockup-title">Google & Meta Ads Manager Dashboard</span>
                      </div>
                      <div className="mockup-dashboard-preview">
                        <div className="stat-pill-row">
                          <div className="stat-pill">
                            <BarChart3 size={16} />
                            <div>
                              <strong>₹82 CPL</strong>
                              <span>82% cost reduction</span>
                            </div>
                          </div>
                          <div className="stat-pill">
                            <TrendingUp size={16} />
                            <div>
                              <strong>4.4x ROAS</strong>
                              <span>Positive pipeline ROI</span>
                            </div>
                          </div>
                        </div>
                        <div className="verified-badge-row">
                          <CheckCircle2 size={16} className="text-gold" />
                          <span>Ad spend funds vary client to client based on specific goals & target reach</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="proof-outcome-bar">
                  <div className="proof-outcome-item">
                    <span className="proof-outcome-number">₹2,000 / mo</span>
                    <span className="proof-outcome-desc">Management fee (₹3,000 one-time setup if no ad account exists)</span>
                  </div>
                  <div className="proof-outcome-item">
                    <span className="proof-outcome-number">Tailored Funds</span>
                    <span className="proof-outcome-desc">Ad budget funds vary per client — 100% transparent reporting</span>
                  </div>
                  <div className="proof-outcome-item">
                    <span className="proof-outcome-number">Targeted</span>
                    <span className="proof-outcome-desc">Zero wasted budget on irrelevant audiences</span>
                  </div>
                  <div className="proof-outcome-action">
                    <Link to="/contact?plan=Meta-Google-Ads" className="proof-action-btn">
                      <span>Scale Your Ads with Us</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )}

        </div>
      </section>

      {/* ===================================================================
          WHY OUR PROOF IS DIFFERENT (THE BIG PITCH)
          =================================================================== */}
      <section className="proof-why-different-section">
        <div className="container">
          <div className="proof-why-box">
            <div className="proof-why-left">
              <span className="proof-why-eyebrow">WHY OUR WORK BEATS EVERY AGENCY</span>
              <h2 className="proof-why-title">
                Budget-Friendly Services. <br />
                Powered by AI. Verified by Data.
              </h2>
              <p className="proof-why-desc">
                Most agencies charge ₹30,000–₹1,00,000+ per month because they rely on bloated teams and outdated manual workflows. 
                At <strong>sBLOOM</strong>, we harness proprietary AI workflows to produce institutional-grade websites, 
                high-retention Reels, and algorithmic SEO in a fraction of the time — passing all the cost savings directly to you.
              </p>
              <div className="proof-why-checklist">
                <div className="proof-check-item">
                  <CheckCircle2 size={18} className="text-gold" />
                  <span>Purpose-built for Healthcare, Education & Professional Services</span>
                </div>
                <div className="proof-check-item">
                  <CheckCircle2 size={18} className="text-gold" />
                  <span>Transparent weekly dashboard updates with zero hidden markups</span>
                </div>
                <div className="proof-check-item">
                  <CheckCircle2 size={18} className="text-gold" />
                  <span>Plans starting as low as ₹2,000/month</span>
                </div>
              </div>
            </div>

            <div className="proof-why-right">
              <div className="proof-why-cta-card">
                <h3 className="proof-cta-card-title">Ready to see these numbers for your business?</h3>
                <p className="proof-cta-card-desc">
                  Tell us about your organization and get a tailored AI growth audit within 24 hours.
                </p>
                <Link to="/contact" className="btn-proof-primary">
                  <span>Talk to sBLOOM</span>
                  <ArrowRight size={18} />
                </Link>
                <Link to="/#pricing" className="btn-proof-secondary">
                  <span>View All Pricing Plans</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProofOfWorkPage;
