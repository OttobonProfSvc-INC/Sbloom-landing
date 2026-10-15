import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import {
  Search,
  FileEdit,
  Lightbulb,
  Rocket,
  BarChart3,
  TrendingUp,
} from 'lucide-react';
import './HowItWorksPage.css';

const STEPS_DATA = [
  {
    num: '01',
    icon: Search,
    tint: 'lavender',
    title: 'Understand your business',
    desc: 'We learn about your services, audience, goals and current online presence to understand where you stand today.',
  },
  {
    num: '02',
    icon: FileEdit,
    tint: 'peach',
    title: 'Find opportunities',
    desc: "We analyze what's working, identify gaps, and find opportunities to help more people discover and choose you.",
  },
  {
    num: '03',
    icon: Lightbulb,
    tint: 'lavender',
    title: 'Create the right plan',
    desc: 'We build a clear, customized strategy with the right messaging, content and channels based on your goals.',
  },
  {
    num: '04',
    icon: Rocket,
    tint: 'peach',
    title: 'Put the plan into action',
    desc: 'We create content, improve your online presence and run targeted campaigns across the right platforms.',
  },
  {
    num: '05',
    icon: BarChart3,
    tint: 'lavender',
    title: 'Track and grow',
    desc: "We monitor performance, see what's working, and keep improving to bring you better visibility, enquiries and long-term growth.",
  },
];

export const HowItWorksPage: React.FC = () => {
  return (
    <div className="hiw-page">
      {/* Background ambient radial gradients */}
      <div className="hiw-bg-glow hiw-glow-top" aria-hidden="true" />
      <div className="hiw-bg-glow hiw-glow-bottom" aria-hidden="true" />

      {/* Decorative Wave Curves in Background */}
      <div className="hiw-bg-waves" aria-hidden="true">
        <svg viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M-80 200C180 120 400 280 580 440C760 600 1020 680 1280 620C1380 600 1480 540 1560 480"
            stroke="#EDE1D1"
            strokeWidth="32"
            opacity="0.38"
          />
          <path
            d="M-40 120C220 80 440 220 620 380C800 540 1060 620 1340 560"
            stroke="#F5ECE0"
            strokeWidth="22"
            opacity="0.55"
          />
        </svg>
      </div>

      <div className="container hiw-container">
        {/* =================================================================
           HERO SECTION: Title & Description + 4 Arched Visuals & Desk Scene
           ================================================================= */}
        <section className="hiw-hero-grid">
          {/* Left Column: Heading & Lead */}
          <div className="hiw-hero-text">
            <ScrollReveal delay={0}>
              <span className="hiw-eyebrow">HOW IT WORKS</span>
              
              <h1 className="hiw-hero-title">
                From understanding<br />
                to <span className="hiw-gold-italic">real growth.</span>
              </h1>
              
              <div className="hiw-title-underline" aria-hidden="true" />

              <p className="hiw-hero-desc">
                We follow a simple, structured process to understand your business, create the right strategy, and help you reach the right people with consistent execution.
              </p>
            </ScrollReveal>
          </div>

          {/* Right Column: 4 Arched Cards Cluster + Laptop & Books Scene */}
          <div className="hiw-hero-visual-wrap">
            <ScrollReveal delay={150}>
              <div className="hiw-visual-scene">
                {/* 4 Arches Cluster */}
                <div className="hiw-arches-cluster">
                  {/* Arch 1: Understand */}
                  <div className="hiw-arch-card hiw-arch-1">
                    <img
                      src="/hiw-understand.jpg"
                      alt="Understand your business"
                      className="hiw-arch-img"
                    />
                    <div className="hiw-arch-badge">
                      <div className="hiw-badge-icon-box">
                        <Search size={13} strokeWidth={2.4} />
                      </div>
                      <span className="hiw-badge-text">Understand</span>
                    </div>
                  </div>

                  {/* Arch 2: Plan */}
                  <div className="hiw-arch-card hiw-arch-2">
                    <img
                      src="/hiw-plan.jpg"
                      alt="Plan strategy"
                      className="hiw-arch-img"
                    />
                    <div className="hiw-arch-badge">
                      <div className="hiw-badge-icon-box">
                        <FileEdit size={13} strokeWidth={2.4} />
                      </div>
                      <span className="hiw-badge-text">Plan</span>
                    </div>
                  </div>

                  {/* Arch 3: Create & Promote */}
                  <div className="hiw-arch-card hiw-arch-3">
                    <img
                      src="/hiw-create-promote.jpg"
                      alt="Create and promote"
                      className="hiw-arch-img"
                    />
                    <div className="hiw-arch-badge">
                      <div className="hiw-badge-icon-box">
                        <Rocket size={13} strokeWidth={2.4} />
                      </div>
                      <span className="hiw-badge-text">Create & Promote</span>
                    </div>
                  </div>

                  {/* Arch 4: Track & Grow */}
                  <div className="hiw-arch-card hiw-arch-4">
                    <img
                      src="/hiw-track-grow.jpg"
                      alt="Track and grow analytics"
                      className="hiw-arch-img"
                    />
                    <div className="hiw-arch-badge">
                      <div className="hiw-badge-icon-box">
                        <BarChart3 size={13} strokeWidth={2.4} />
                      </div>
                      <span className="hiw-badge-text">Track & Grow</span>
                    </div>
                  </div>
                </div>

                {/* Desk Foreground Scene: Laptop & Book Stack */}
                <div className="hiw-desk-scene">
                  {/* Laptop Mockup */}
                  <div className="hiw-laptop-mockup">
                    <div className="hiw-laptop-lid">
                      <div className="hiw-laptop-screen">
                        <div className="hiw-screen-content">
                          <span className="hiw-screen-heading">Your Growth Journey</span>
                          <div className="hiw-screen-underline" />
                          <div className="hiw-chart-wrap">
                            <TrendingUp size={16} className="hiw-chart-arrow" strokeWidth={2.5} />
                            <div className="hiw-chart-bars">
                              <span className="hiw-bar" style={{ height: '30%' }} />
                              <span className="hiw-bar" style={{ height: '50%' }} />
                              <span className="hiw-bar" style={{ height: '70%' }} />
                              <span className="hiw-bar" style={{ height: '88%' }} />
                              <span className="hiw-bar is-top" style={{ height: '100%' }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="hiw-laptop-base" />
                  </div>

                  {/* Stack of 4 Books */}
                  <div className="hiw-book-stack">
                    <div className="hiw-book hiw-book-1">
                      <span className="hiw-book-spine">Strategy</span>
                    </div>
                    <div className="hiw-book hiw-book-2">
                      <span className="hiw-book-spine">Content</span>
                    </div>
                    <div className="hiw-book hiw-book-3">
                      <span className="hiw-book-spine">Visibility</span>
                    </div>
                    <div className="hiw-book hiw-book-4">
                      <span className="hiw-book-spine">Growth</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* =================================================================
           5 STEPS PROCESS SECTION WITH CONNECTING FLOW LINE
           ================================================================= */}
        <section className="hiw-steps-section">
          {/* Continuous Undulating Connecting Line SVG */}
          <div className="hiw-connecting-wave" aria-hidden="true">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M30 60 C 130 20, 170 100, 270 60 C 370 20, 410 100, 510 60 C 610 20, 650 100, 750 60 C 850 20, 890 100, 990 60 C 1090 20, 1130 90, 1180 60"
                stroke="#DECDB8"
                strokeWidth="2.5"
                strokeDasharray="4 4"
              />
            </svg>
          </div>

          <div className="hiw-steps-grid">
            {STEPS_DATA.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <ScrollReveal key={step.num} delay={120 + idx * 80} className="h-full">
                  <div className="hiw-step-card-wrap">
                    {/* Floating Step Number Pill on Wave */}
                    <div className="hiw-step-num-badge">
                      <span>{step.num}</span>
                    </div>

                    {/* Step Card Body */}
                    <div className="hiw-step-card">
                      {/* Circular Icon */}
                      <div className={`hiw-step-icon-circle hiw-tint-${step.tint}`}>
                        <IconComp size={20} strokeWidth={1.9} />
                      </div>

                      {/* Title */}
                      <h3 className="hiw-step-title">{step.title}</h3>

                      {/* Delicate Gold Accent Line */}
                      <div className="hiw-step-underline" aria-hidden="true" />

                      {/* Description */}
                      <p className="hiw-step-desc">{step.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HowItWorksPage;
