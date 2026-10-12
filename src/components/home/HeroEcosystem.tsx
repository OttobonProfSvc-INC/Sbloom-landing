import React from 'react';
import { Settings, Edit3, Megaphone, TrendingUp } from 'lucide-react';

export const HeroEcosystem: React.FC = () => {
  return (
    <div className="hero-ecosystem-wrapper" style={{ position: 'relative', width: '420px', maxWidth: '100%', aspectRatio: '1 / 1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      
      {/* Petals Group (Rotates CCW) */}
      <img 
        src="/petals.png" 
        alt="S-Bloom Ecosystem Petals"
        className="hero-petals"
        style={{
          position: 'absolute',
          width: '75%',
          height: '75%',
          objectFit: 'contain',
        }}
      />

      {/* Outer Ring Group (Rotates CW) */}
      <div className="hero-outer-ring" style={{ position: 'absolute', width: '90%', height: '90%', borderRadius: '50%', border: '2px dashed var(--border-light)' }}>
        
        {/* Nodes on the ring. We must counter-rotate them so they stay upright! */}
        {/* Top: Build */}
        <div className="ecosystem-node" style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)' }}>
          <div className="node-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', animation: 'spin-ccw 45s linear infinite' }}>
            <div className="node-icon" style={{ backgroundColor: 'var(--bg-primary)', padding: '8px', borderRadius: '50%', border: '1px solid var(--gold-primary)', color: 'var(--gold-primary)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Settings size={18} />
            </div>
            <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-primary)', backgroundColor: 'var(--bg-primary)', padding: '3px 8px', borderRadius: '12px', border: '1px solid var(--border-subtle)', whiteSpace: 'nowrap', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>BUILD</span>
          </div>
        </div>

        {/* Right: Create */}
        <div className="ecosystem-node" style={{ position: 'absolute', top: '50%', right: 0, transform: 'translate(50%, -50%)' }}>
          <div className="node-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', animation: 'spin-ccw 45s linear infinite' }}>
            <div className="node-icon" style={{ backgroundColor: 'var(--bg-primary)', padding: '8px', borderRadius: '50%', border: '1px solid var(--gold-primary)', color: 'var(--gold-primary)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Edit3 size={18} />
            </div>
            <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-primary)', backgroundColor: 'var(--bg-primary)', padding: '3px 8px', borderRadius: '12px', border: '1px solid var(--border-subtle)', whiteSpace: 'nowrap', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>CREATE</span>
          </div>
        </div>

        {/* Bottom: Promote */}
        <div className="ecosystem-node" style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translate(-50%, 50%)' }}>
          <div className="node-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', animation: 'spin-ccw 45s linear infinite' }}>
            <div className="node-icon" style={{ backgroundColor: 'var(--bg-primary)', padding: '8px', borderRadius: '50%', border: '1px solid var(--gold-primary)', color: 'var(--gold-primary)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Megaphone size={18} />
            </div>
            <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-primary)', backgroundColor: 'var(--bg-primary)', padding: '3px 8px', borderRadius: '12px', border: '1px solid var(--border-subtle)', whiteSpace: 'nowrap', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>PROMOTE</span>
          </div>
        </div>

        {/* Left: Grow */}
        <div className="ecosystem-node" style={{ position: 'absolute', top: '50%', left: 0, transform: 'translate(-50%, -50%)' }}>
          <div className="node-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', animation: 'spin-ccw 45s linear infinite' }}>
            <div className="node-icon" style={{ backgroundColor: 'var(--bg-primary)', padding: '8px', borderRadius: '50%', border: '1px solid var(--gold-primary)', color: 'var(--gold-primary)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <TrendingUp size={18} />
            </div>
            <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-primary)', backgroundColor: 'var(--bg-primary)', padding: '3px 8px', borderRadius: '12px', border: '1px solid var(--border-subtle)', whiteSpace: 'nowrap', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>GROW</span>
          </div>
        </div>
      </div>

      {/* Fixed Center Logo */}
      <img 
        src="/sbloom-logo-transparent.png" 
        alt="S-Bloom Logo"
        className="hero-center-logo"
        style={{
          position: 'absolute',
          width: '28%',
          height: '28%',
          objectFit: 'contain',
          backgroundColor: '#FFFEFC',
          borderRadius: '50%',
          padding: '12px',
          boxShadow: '0 4px 16px rgba(217, 165, 46, 0.15)',
          zIndex: 10
        }}
      />
    </div>
  );
};
