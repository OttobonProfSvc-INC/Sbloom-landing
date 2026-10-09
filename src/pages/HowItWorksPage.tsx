import { ScrollReveal } from "../components/ScrollReveal";

export const HowItWorksPage = () => {
  return (
    <div className="page phase5-wrapper">
      <section className="phase5-hero">
        <div className="container text-center">
          <ScrollReveal delay={0}>
            <span className="phase5-hero-label">HOW IT WORKS</span>
            <h1 className="phase5-hero-title mx-auto">Strategy first. Execution second.</h1>
            <p className="phase5-hero-desc mx-auto">
              We approach every new client engagement systematically. BUILD, CREATE, and PROMOTE are selected according to the diagnosed needs.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="phase5-content">
        <div className="container">
          <div className="hiw-process phase5-process">
            <div className="hiw-line-bg"></div>
            
            <ScrollReveal delay={100} className="hiw-step">
              <div className="hiw-indicator"></div>
              <div className="hiw-step-line"></div>
              <div className="hiw-step-num">01</div>
              <h3>UNDERSTAND</h3>
              <p>We begin by thoroughly understanding your organization, the services you provide, your business goals, your target audiences, and your current digital footprint.</p>
            </ScrollReveal>

            <ScrollReveal delay={200} className="hiw-step">
              <div className="hiw-indicator"></div>
              <div className="hiw-step-line"></div>
              <div className="hiw-step-num">02</div>
              <h3>DIAGNOSE</h3>
              <p>We identify the specific communication and visibility gaps preventing your intended audience from discovering, understanding, or evaluating your services.</p>
            </ScrollReveal>

            <ScrollReveal delay={300} className="hiw-step">
              <div className="hiw-indicator"></div>
              <div className="hiw-step-line"></div>
              <div className="hiw-step-num">03</div>
              <h3>STRATEGIZE</h3>
              <p>We define clear priorities, audience-specific messaging, the appropriate marketing channels, and measurable objectives.</p>
            </ScrollReveal>

            <ScrollReveal delay={400} className="hiw-step">
              <div className="hiw-indicator"></div>
              <div className="hiw-step-line"></div>
              <div className="hiw-step-num">04</div>
              <h3>EXECUTE</h3>
              <p>We deploy the precise mix of BUILD, CREATE, and PROMOTE activities required to address the diagnosed gaps.</p>
            </ScrollReveal>

            <ScrollReveal delay={500} className="hiw-step">
              <div className="hiw-indicator"></div>
              <div className="hiw-step-num">05</div>
              <h3>MEASURE AND IMPROVE</h3>
              <p>We continuously review relevant performance indicators, identify what is working, and recommend appropriate improvements to support long-term growth.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;
