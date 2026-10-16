import React from 'react';
import { Link } from 'react-router';
import { Bot, Target, Wallet, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { ScrollReveal } from '../ScrollReveal';
import './WhyBetter.css';

export const WhyBetter: React.FC = () => {
  const pillars = [
    {
      id: 'ai-native',
      icon: <Bot size={26} />,
      tag: 'TECH INNOVATION',
      title: 'AI-Native Efficiency, Zero Agency Bloat',
      desc: 'Traditional agencies bill you for 10-person overheads and slow manual delivery. We leverage modern AI tools to build high-converting websites, conduct medical & institutional SEO, and edit retention-hooked Reels in half the time.',
      bullets: [
        'Websites that load in under 1 second',
        'AI-driven keyword analysis for local dominance',
        'Automated lead qualification funnels',
      ],
      badge: 'Up to 70% Less Cost',
    },
    {
      id: 'targeted-industries',
      icon: <Target size={26} />,
      tag: 'LASER FOCUS',
      title: 'Built Exclusively for 3 High-Trust Sectors',
      desc: 'We do not market e-commerce clothes or fast food. We specialize strictly in Healthcare, Education, and Professional Services — solving the exact crises you face: empty appointment books, declining student admissions, and invisible professional authority.',
      bullets: [
        'Healthcare: More local clinic & hospital patients',
        'Education: Predictable admission inquiries every season',
        'Professional Services: High-value corporate clients',
      ],
      badge: 'Domain Expertise',
    },
    {
      id: 'budget-friendly',
      icon: <Wallet size={26} />,
      tag: 'RADICAL AFFORDABILITY',
      title: 'Genuinely Budget-Friendly & Transparent',
      desc: 'Starting from just ₹2,000/month, every plan delivers measurable business outcomes rather than vanity follower counts. Complete transparency on ad spend with zero hidden retainers or surprise agency invoices.',
      bullets: [
        'Full GBP optimization from ₹2,000/month',
        'AI Website + SEO from ₹5,000/month',
        '8 Reels + 20 Posts via Meta Suite from ₹10,000/mo',
      ],
      badge: 'Starts at ₹2,000/mo',
    },
  ];

  return (
    <section className="why-better-section" id="why-sbloom">
      <div className="container why-better-container">
        {/* Section Header */}
        <div className="why-better-header">
          <ScrollReveal delay={0}>
            <div className="why-better-eyebrow">
              <span className="why-badge-glow">✦ THE S-BLOOM ADVANTAGE</span>
              <span className="why-eyebrow-sub">WHY OUR WORK IS BEST</span>
            </div>

            <h2 className="why-better-title">
              Why We Beat Every Other <br />
              <span className="why-title-serif">Digital Marketing Agency.</span>
            </h2>

            <p className="why-better-lead">
              You don't need vanity metrics. You need real patients walking through your clinic doors, 
              parents enrolling their children in your classrooms, and high-value clients seeking your professional counsel.
            </p>
          </ScrollReveal>
        </div>

        {/* 3 Pillar Cards Grid */}
        <div className="why-better-grid">
          {pillars.map((pillar, index) => (
            <ScrollReveal key={pillar.id} delay={120 + index * 90} className="why-better-card-reveal">
              <div className="why-better-card">
                <div className="why-card-top">
                  <div className="why-card-icon-wrap">
                    {pillar.icon}
                  </div>
                  <span className="why-card-badge">{pillar.badge}</span>
                </div>

                <div className="why-card-tag">{pillar.tag}</div>
                <h3 className="why-card-title">{pillar.title}</h3>
                <p className="why-card-desc">{pillar.desc}</p>

                <div className="why-card-bullets">
                  {pillar.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="why-bullet-item">
                      <CheckCircle2 size={15} className="why-bullet-icon" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom Banner Linking Directly to Proof of Work */}
        <ScrollReveal delay={280}>
          <div className="why-better-proof-banner">
            <div className="why-proof-banner-left">
              <div className="why-proof-icon-box">
                <ShieldCheck size={26} />
              </div>
              <div>
                <h4 className="why-proof-banner-title">Don't take our word for it. Inspect our real client dashboards.</h4>
                <p className="why-proof-banner-desc">
                  Browse before-and-after performance metrics for Google Business Profile, websites, and Meta Business Suite campaigns.
                </p>
              </div>
            </div>

            <div className="why-proof-banner-right">
              <Link to="/proof-of-work" className="why-proof-cta-btn">
                <span>Explore Proof of Work</span>
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WhyBetter;
