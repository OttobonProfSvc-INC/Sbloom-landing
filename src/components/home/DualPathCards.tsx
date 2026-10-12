import React from 'react';
import { Link } from 'react-router';
import { ScrollReveal } from '../ScrollReveal';
import { Check } from 'lucide-react';

export const DualPathCards: React.FC = () => {
  return (
    <section className="dual-path-section" style={{ padding: '100px 0', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <ScrollReveal delay={0}>
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--text-primary)', marginBottom: '16px' }}>How can S-Bloom help you grow?</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
              Different goals. Tailored digital strategies.
            </p>
          </div>
        </ScrollReveal>

        <div className="dual-path-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', maxWidth: '1000px', margin: '0 auto' }}>
          
          {/* Card 1: Businesses */}
          <ScrollReveal delay={100} style={{ height: '100%' }}>
            <div className="path-card path-card-business" style={{ 
              backgroundColor: 'var(--bg-secondary)', 
              border: '1px solid var(--border-subtle)',
              borderRadius: '16px',
              padding: '40px',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, transparent, var(--gold-primary), transparent)' }}></div>
              
              <h3 style={{ fontSize: '1.75rem', color: 'var(--text-primary)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '8px', backgroundColor: 'rgba(217, 165, 46, 0.1)', color: 'var(--gold-deep)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                </span>
                sBLOOM for Business
              </h3>
              
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '32px', lineHeight: '1.6' }}>
                Build your online presence, strengthen credibility, and reach the right audience.
              </p>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', display: 'flex', flexDirection: 'column', gap: '16px', flexGrow: 1 }}>
                {['SEO and Google visibility', 'Websites and social media', 'Digital marketing and ads'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                    <Check size={18} style={{ color: 'var(--gold-primary)', flexShrink: 0, marginTop: '2px' }} />
                    {item}
                  </li>
                ))}
              </ul>
              
              <Link to="/contact" style={{
                display: 'block',
                width: '100%',
                padding: '16px',
                backgroundColor: 'var(--dark-bg)',
                color: 'var(--bg-primary)',
                textAlign: 'center',
                borderRadius: '8px',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }} className="path-btn-business">
                Grow Your Business →
              </Link>
            </div>
          </ScrollReveal>

          {/* Card 2: Creative Workspace */}
          <ScrollReveal delay={200} style={{ height: '100%' }}>
            <div className="path-card path-card-creative" style={{ 
              backgroundColor: 'var(--bg-secondary)', 
              border: '1px solid var(--border-subtle)',
              borderRadius: '16px',
              padding: '40px',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Subtle purple accent for Creative Workspace to distinguish it slightly, but keeping it premium */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, transparent, #9d84b7, transparent)' }}></div>
              
              <h3 style={{ fontSize: '1.75rem', color: 'var(--text-primary)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '8px', backgroundColor: 'rgba(157, 132, 183, 0.1)', color: '#9d84b7' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                </span>
                Creative Workspace
              </h3>
              
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '32px', lineHeight: '1.6' }}>
                Build your personal brand, showcase your work, and attract better opportunities.
              </p>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', display: 'flex', flexDirection: 'column', gap: '16px', flexGrow: 1 }}>
                {['Personal branding', 'Portfolio and online presence', 'Content and audience growth'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                    <Check size={18} style={{ color: '#9d84b7', flexShrink: 0, marginTop: '2px' }} />
                    {item}
                  </li>
                ))}
              </ul>
              
              <Link to="/creative-workspace" style={{
                display: 'block',
                width: '100%',
                padding: '16px',
                backgroundColor: 'var(--dark-bg)',
                color: 'var(--bg-primary)',
                border: 'none',
                textAlign: 'center',
                borderRadius: '8px',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }} className="path-btn-creative">
                Build Your Presence →
              </Link>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};
