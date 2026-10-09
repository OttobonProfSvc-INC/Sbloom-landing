import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "../ScrollReveal";

export interface IndustryStage {
  num: string;
  label: string;
  title: string;
  desc: string;
  list: string[];
}

interface IndustryScrollProcessProps {
  stages: IndustryStage[];
}

export const IndustryScrollProcess: React.FC<IndustryScrollProcessProps> = ({ stages }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return (
      <div className="edu-mobile-stages">
        {stages.map((stage, idx) => (
          <ScrollReveal key={idx} delay={idx * 100}>
            <div className="edu-mobile-stage">
              <div className="edu-mobile-num">{stage.num}</div>
              <div className="edu-mobile-content">
                <div className="edu-mobile-label">{stage.label}</div>
                <h2 className="edu-mobile-title">{stage.title}</h2>
                <p className="edu-mobile-desc">{stage.desc}</p>
                {stage.list.length > 0 && (
                  <ul className="edu-stage-list">
                    {stage.list.map((item, i) => (
                      <li key={i}>
                        <span className="edu-bullet"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {idx < stages.length - 1 && <div className="edu-mobile-line" />}
            </div>
          </ScrollReveal>
        ))}
      </div>
    );
  }

  return <DesktopScrollSection stages={stages} />;
};

const DesktopScrollSection: React.FC<{ stages: IndustryStage[] }> = ({ stages }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    let index = Math.floor(latest * 5);
    if (index >= 5) index = 4;
    setActiveIndex(index);
  });

  return (
    <div className="edu-scroll-container" ref={containerRef}>
      <div className="edu-sticky-section">
        {/* Background Number */}
        <div className="edu-bg-number">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 0.05, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {stages[activeIndex].num}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="container edu-scroll-content h-full relative z-10">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeIndex}
              className="edu-split-layout"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* Left Side */}
              <div className="edu-left">
                <div className="edu-huge-num">{stages[activeIndex].num}</div>
                <div className="edu-stage-label">{stages[activeIndex].label}</div>
                <h2 className="edu-stage-title">{stages[activeIndex].title}</h2>
              </div>

              {/* Right Side */}
              <div className="edu-right">
                <p className="edu-stage-desc">{stages[activeIndex].desc}</p>
                
                {stages[activeIndex].list.length > 0 && (
                  <ul className="edu-stage-list">
                    {stages[activeIndex].list.map((item, idx) => (
                      <motion.li 
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + (idx * 0.1), duration: 0.4 }}
                      >
                        <span className="edu-bullet"></span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Progress Indicators */}
          <div className="edu-progress-indicators">
            {stages.map((_, idx) => (
              <div key={idx} className="edu-indicator-wrapper">
                <div className={`edu-dot ${idx === activeIndex ? 'active' : ''}`} />
                {idx < stages.length - 1 && <div className="edu-line" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
