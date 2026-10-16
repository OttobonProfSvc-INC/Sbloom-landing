import React from 'react';
import { Link } from 'react-router';
import { Gift, ArrowRight, Check, Megaphone, Monitor, Sparkles } from 'lucide-react';
import { ScrollReveal } from '../ScrollReveal';
import './HomePricingSection.css';

const SocialMediaIcon: React.FC = () => (
  <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#BA7C3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="#BA7C3D" />
  </svg>
);

const GbpIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z"
      stroke="#BA7C3D"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 11.5C13.3807 11.5 14.5 10.3807 14.5 9C14.5 7.61929 13.3807 6.5 12 6.5C10.6193 6.5 9.5 7.61929 9.5 9C9.5 10.3807 10.6193 11.5 12 11.5Z"
      fill="#BA7C3D"
    />
  </svg>
);

const CurvedArrowSvg: React.FC = () => (
  <svg
    className="home-pricing-promo-arrow"
    width="54"
    height="32"
    viewBox="0 0 54 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 28C14 28 28 24 46 8"
      stroke="#BA7C3D"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <path
      d="M36 6L47 7.5L46 18"
      stroke="#BA7C3D"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SunburstSparks: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="10" y1="2" x2="10" y2="7" stroke="#BA7C3D" strokeWidth="2" strokeLinecap="round" />
    <line x1="3.5" y1="4.5" x2="7.5" y2="8.5" stroke="#BA7C3D" strokeWidth="2" strokeLinecap="round" />
    <line x1="16.5" y1="4.5" x2="12.5" y2="8.5" stroke="#BA7C3D" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const HomePricingSection: React.FC = () => {
  const plans = [
    {
      id: 'gbp',
      name: 'Google Business Profile (GBP)',
      badge: '+ AUTOMATION',
      icon: <GbpIcon />,
      isDualPrice: false,
      startsLabel: 'STARTS AT',
      price: '₹2,000',
      period: '/month',
      features: [
        'Profile setup & complete local verification',
        'Local SEO ranking to reach Top 3 on Google Maps',
      ],
      footnote: null,
      proofLink: '/proof-of-work?service=gbp',
      actionLabel: 'View Proof of Work',
    },
    {
      id: 'website-seo',
      name: 'Website + SEO',
      badge: '+ AI-POWERED',
      icon: <Monitor size={22} strokeWidth={2.2} />,
      isDualPrice: false,
      startsLabel: 'STARTS AT',
      price: '₹5,000',
      period: '/month',
      features: [
        'AI-enabled high-speed website design & architecture',
        'End-to-end technical & local SEO keyword optimization',
      ],
      footnote: null,
      proofLink: '/proof-of-work?service=website',
      actionLabel: 'View Proof of Work',
    },
    {
      id: 'social-media',
      name: 'Social Media Management',
      badge: 'META BUSINESS SUITE',
      icon: <SocialMediaIcon />,
      isDualPrice: false,
      startsLabel: 'STARTS AT',
      price: '₹10,000',
      period: '/month',
      features: [
        '8 High-Impact Reels + 20 Branded Posts monthly',
        'Content strategy, scriptwriting, hooks & caption optimization',
      ],
      footnote: '* Note: If you require 20+ reels, it will come under Motion. Motion post pricing may vary.',
      proofLink: '/proof-of-work?service=social',
      actionLabel: 'View Proof of Work',
    },
    {
      id: 'ads',
      name: 'Meta & Google Ads',
      badge: 'HIGH-INTENT LEADS',
      icon: <Megaphone size={22} strokeWidth={2.2} />,
      isDualPrice: true,
      startsLabel: 'STARTS AT',
      tier1Price: '₹2,000',
      tier1Note: 'If you have a Meta/Google Business account',
      tier2Price: '₹3,000',
      tier2Note: "If you don't have a Meta/Google Business account",
      features: [
        'Hyper-targeted Meta (Insta/FB) & Google Search campaigns',
        'Transparent weekly analytics & ROAS tracking dashboard',
      ],
      footnote: '* Note: Ad funding must be provided by the client. We do not provide ad funding. Our charge covers only the running and management of your ads.',
      proofLink: '/proof-of-work?service=ads',
      actionLabel: 'View Proof of Work',
    },
  ];

  return (
    <section className="home-pricing-section" id="pricing">
      <div className="home-pricing-container">
        {/* =================================================================
           TOP ROW: Eyebrow with Lines + Heading (Centered)
           ================================================================= */}
        <div className="home-pricing-hero-row">
          <div className="home-pricing-hero-text">
            <ScrollReveal delay={0}>
              <div className="home-pricing-eyebrow-container">
                <span className="home-pricing-eyebrow-line" aria-hidden="true" />
                <span className="home-pricing-eyebrow">BUDGET-FRIENDLY & AI-POWERED</span>
                <span className="home-pricing-eyebrow-line" aria-hidden="true" />
              </div>

              <h2 className="home-pricing-title">
                Simple Plans. <span className="home-pricing-title-serif">Real Business Growth.</span>
              </h2>
            </ScrollReveal>
          </div>
        </div>

        {/* =================================================================
           4 PRICING CARDS ROW
           ================================================================= */}
        <div className="home-pricing-cards-grid">
          {plans.map((plan, idx) => (
            <ScrollReveal key={plan.id} delay={100 + idx * 80} className="home-pricing-card-reveal">
              <div className="home-pricing-card">
                {/* Badge */}
                {plan.badge && (
                  <div className="home-pricing-card-top-badge">
                    {plan.badge}
                  </div>
                )}

                {/* Card Header: Icon Box + Plan Title (Clickable) */}
                <Link to={plan.proofLink} className="home-pricing-card-header">
                  <div className="home-pricing-icon-box">{plan.icon}</div>
                  <h3 className="home-pricing-card-title">{plan.name}</h3>
                </Link>

                {/* Price Display with "Starts at" */}
                {plan.isDualPrice ? (
                  <div className="home-pricing-dual-container">
                    <div className="home-pricing-starts-label">{plan.startsLabel}</div>
                    <div className="home-pricing-dual-wrap">
                      <div className="home-pricing-dual-pill">
                        <div className="home-pricing-dual-amount">{plan.tier1Price}</div>
                        <div className="home-pricing-dual-note">{plan.tier1Note}</div>
                      </div>
                      <div className="home-pricing-dual-pill">
                        <div className="home-pricing-dual-amount">{plan.tier2Price}</div>
                        <div className="home-pricing-dual-note">{plan.tier2Note}</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="home-pricing-price-wrap">
                    <div className="home-pricing-starts-label">{plan.startsLabel}</div>
                    <div className="home-pricing-amount-row">
                      <span className="home-pricing-amount">{plan.price}</span>
                      <span className="home-pricing-period">{plan.period}</span>
                    </div>
                  </div>
                )}

                {/* Checklist Features */}
                <ul className="home-pricing-features-list">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="home-pricing-feature-item">
                      <Check className="home-pricing-check-icon" size={15} strokeWidth={2.8} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Footnote if any (e.g. motion post / ad spend notice) */}
                {plan.footnote && (
                  <div className="home-pricing-card-footnote">
                    {plan.footnote}
                  </div>
                )}

                {/* Bottom Action: Clicks to Open Proof of Work Page */}
                <div className="home-pricing-card-footer">
                  <Link
                    to={plan.proofLink}
                    className="home-pricing-action-btn"
                    aria-label={`Open proof of work for ${plan.name}`}
                  >
                    <span>{plan.actionLabel}</span>
                    <ArrowRight size={15} strokeWidth={2.4} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* =================================================================
           BOTTOM NOTE
           ================================================================= */}
        <div className="home-pricing-transparency-note">
          <span>* Pricing may vary from client to client based on requirements.</span>
        </div>

        {/* =================================================================
           BOTTOM PROMOTIONAL BANNER (FREE GBP PROMO)
           ================================================================= */}
        <ScrollReveal delay={350}>
          <div className="home-pricing-promo-banner">
            <div className="home-pricing-promo-left">
              <div className="home-pricing-gift-box">
                <Gift size={26} strokeWidth={2.1} />
              </div>
              <div className="home-pricing-promo-divider" aria-hidden="true" />
              <p className="home-pricing-promo-text">
                Google Business Profile (GBP) is{' '}
                <span className="home-pricing-promo-free">FREE</span> when Social
                Media Management is chosen.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HomePricingSection;
