import React from 'react';
import { Link } from 'react-router';
import { ScrollReveal } from "../components/ScrollReveal";
import { Film, Camera, PenTool, FileText, MonitorSmartphone, Target, PlayCircle, Rocket } from 'lucide-react';
import { CreativeOrbit } from '../components/CreativeOrbit';
import './CreativeWorkspacePage.css';

export const CreativeWorkspacePage = () => {
  const scrollToProcess = () => {
    const processSection = document.getElementById('collaboration-process');
    if (processSection) {
      processSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="cw-page">
      {/* Hero Section */}
      <section className="cw-hero">
        <div className="container cw-hero-grid">
          <div>
            <ScrollReveal delay={0}>
              <span className="cw-eyebrow">CREATIVE WORKSPACE · YOUR SKILLS, YOUR OPPORTUNITIES</span>
              <h1>Your creativity deserves a bigger stage.</h1>
              <p>
                Bring your skills to projects that value your expertise, and collaborate with S-Bloom to turn great ideas into meaningful work.
              </p>
              <button onClick={scrollToProcess} className="cw-btn">
                Explore Collaboration
              </button>
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

      {/* Roles Section */}
      <section className="cw-roles-section">
        <div className="container">
          <div className="cw-section-header">
            <ScrollReveal delay={100}>
              <h2>Your Expertise Has a Place Here</h2>
              <p>We collaborate with skilled professionals across creative, content, and digital disciplines.</p>
            </ScrollReveal>
          </div>
          
          <div className="cw-roles-grid">
            <ScrollReveal delay={200} className="h-full">
              <div className="cw-role-card">
                <Film className="cw-role-icon" size={32} />
                <h3>Video Editors</h3>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={300} className="h-full">
              <div className="cw-role-card">
                <Camera className="cw-role-icon" size={32} />
                <h3>Videographers</h3>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={400} className="h-full">
              <div className="cw-role-card">
                <PenTool className="cw-role-icon" size={32} />
                <h3>Designers</h3>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={500} className="h-full">
              <div className="cw-role-card">
                <FileText className="cw-role-icon" size={32} />
                <h3>Content Writers</h3>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={600} className="h-full">
              <div className="cw-role-card">
                <MonitorSmartphone className="cw-role-icon" size={32} />
                <h3>Digital Specialists</h3>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cw-cta-section">
        <div className="container">
          <ScrollReveal delay={100}>
            <h2>Ready to Collaborate with S-Bloom?</h2>
            <p>Bring your skills, experience, and ideas to projects that need your expertise.</p>
            <Link to="/contact" className="cw-btn" style={{ padding: '16px 40px', fontSize: '1.1rem' }}>
              Talk to S-Bloom
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default CreativeWorkspacePage;
