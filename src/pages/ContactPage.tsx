import { ScrollReveal } from "../components/ScrollReveal";

export const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="page phase5-wrapper">
      <section className="phase5-hero">
        <div className="container text-center">
          <ScrollReveal delay={0}>
            <span className="phase5-hero-label">STRATEGY REQUEST</span>
            <h1 className="phase5-hero-title mx-auto">Let's discuss your digital growth.</h1>
            <p className="phase5-hero-desc mx-auto">
              Tell us about your organization and what you are trying to achieve. We'll help you diagnose the gaps and find the right strategic starting point.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="phase5-content">
        <div className="container">
          <div className="contact-form-container">
            <ScrollReveal delay={100}>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input type="text" id="fullName" required />
                </div>
                <div className="form-group">
                  <label htmlFor="organization">Organization Name</label>
                  <input type="text" id="organization" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" />
                </div>
                <div className="form-group">
                  <label htmlFor="industry">Industry</label>
                  <select id="industry" required>
                    <option value="">Select an industry...</option>
                    <option value="Education">Education</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Consulting & Professional Services">Consulting & Professional Services</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="challenge">What is your biggest current marketing challenge?</label>
                  <textarea id="challenge" rows={4} required></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="goals">What are your primary business goals for the next 6 months?</label>
                  <textarea id="goals" rows={4} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary submit-btn" disabled style={{ opacity: 0.5, cursor: 'not-allowed' }}>Request Strategy Consultation</button>
                <div className="form-note" style={{ color: 'var(--text-secondary)', fontStyle: 'italic', marginTop: '16px', textAlign: 'center' }}>
                  Submission is currently disabled. We are waiting on configuration for a secure backend endpoint to receive these requests.
                </div>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
