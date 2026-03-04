import { useState } from 'react';
import { Link } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import './BusinessInternshipPage.css';
import ScrollToTop from '../ScrollToTop';

function BusinessInternshipPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    university: '',
    major: '',
    resumeLink: '',
    coverLetter: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaValue) return;

    setIsSubmitted(true);
  };

  return (
    <>
      <ScrollToTop />
      <div className="business-page">
        <div className="business-hero">
          <Link to="/careers" className="back-link">← Back to Careers</Link>
          <h1>Business Internship</h1>
          <div className="job-meta-header">
            <span className="meta-item">🎓 Internship</span>
            <span className="meta-item">💼 Business</span>
            <span className="meta-item">📍 Sibiu</span>
          </div>
        </div>

        <div className="business-content">
          <div className="job-details">
            <section className="job-section">
              <h2>About the Internship</h2>
              <p>
                Join Magnusson Analytica as a Business Intern and gain hands-on experience in a fast-growing analytics
                company. This internship offers the perfect opportunity to explore business operations, client relationships,
                and strategic initiatives while working alongside experienced professionals.
              </p>
              <p>
                As a Business Intern, you'll contribute to key business functions including client success, strategic research,
                business development, and operational projects. This role is ideal for students interested in learning how
                data-driven organisations operate and develop business acumen in a growing tech company.
              </p>
              <p>
                This internship is conducted on-site in Sibiu.
              </p>
            </section>

            <section className="job-section">
              <h2>What You'll Learn & Do</h2>
              <ul className="responsibilities-list">
                <li>Support client onboarding and implementation processes</li>
                <li>Assist in developing case studies and customer success stories</li>
                <li>Help manage client projects and communication</li>
                <li>Analyse business metrics and performance data</li>
                <li>Support marketing and business development initiatives</li>
                <li>Participate in strategic planning and brainstorming sessions</li>
                <li>Create presentations and reports for core stakeholders in client organisations</li>
                <li>Learn about product positioning and acquisition & product engagement strategies</li>
                <li>Build understanding of SaaS business models and analytics industry trends</li>
              </ul>
            </section>

            <section className="job-section">
              <h2>Requirements</h2>
              <ul className="requirements-list">
                <li>Currently enrolled in a Masters in Business Administration or other Masters courses within business, economics, marketing</li>
                <li>Strong written and verbal communication skills</li>
                <li>Excellent organisational and project management abilities</li>
                <li>Proficiency with Google Business suite (Sheets, Slides, Docs)</li>
                <li>Self-motivated with the ability to work independently</li>
                <li>Availability to work on-site in Sibiu</li>
                <li>English proficiency certificate at C1 or C2 level (or equivalent demonstrated fluency)</li>
                <li>Passion for data, business, and analytics</li>
              </ul>
            </section>

            <section className="job-section">
              <h2>Nice to Have</h2>
              <ul className="nice-to-have-list">
                <li>Previous internship, consulting project, or relevant business coursework</li>
                <li>Experience with CRM, analytics, or project management tools</li>
                <li>Interest in client-facing consultative work</li>
                <li>Basic understanding of SaaS and digital product business models</li>
                <li>Familiarity with presentation storytelling and executive communication</li>
              </ul>
            </section>

            <section className="job-section">
              <h2>What We Offer</h2>
              <ul className="benefits-list">
                <li>🎓 Hands-on learning experience with real client projects</li>
                <li>👨‍🏫 Mentorship from experienced business consultants</li>
                <li>🚀 Exposure to cutting-edge data technologies and tools</li>
                <li>💼 Work on diverse projects across different industries</li>
                <li>📜 Internship completion certificate and reference letter</li>
                <li>🔄 Potential for full-time position after completion</li>
              </ul>
            </section>
          </div>

          <div className="application-form-container">
            <div className="application-form-sticky">
              <h2>Apply Now</h2>
              {isSubmitted ? (
                <div className="success-message">
                  <p>✓ Your application has been prepared!</p>
                  <button onClick={() => setIsSubmitted(false)} className="reset-btn">
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="application-form">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john.doe@example.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 234 567 8900"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="university">University & Study Program *</label>
                    <input
                      type="text"
                      id="university"
                      name="university"
                      value={formData.university}
                      onChange={handleChange}
                      placeholder="e.g., Stockholm School of Economics - MBA"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="major">Major / Field of Study *</label>
                    <input
                      type="text"
                      id="major"
                      name="major"
                      value={formData.major}
                      onChange={handleChange}
                      placeholder="e.g., Business Administration"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="resumeLink">Resume Link *</label>
                    <input
                      type="url"
                      id="resumeLink"
                      name="resumeLink"
                      value={formData.resumeLink}
                      onChange={handleChange}
                      placeholder="Link to Google Drive, Dropbox, etc."
                      required
                    />
                    <small>Please share a link to your resume (Google Drive, Dropbox, etc.)</small>
                  </div>

                  <div className="form-group">
                    <label htmlFor="coverLetter">Why are you interested in this internship? *</label>
                    <textarea
                      id="coverLetter"
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleChange}
                      placeholder="Tell us about your interest in business consulting, what you hope to learn, and any relevant projects..."
                      rows="6"
                      required
                    ></textarea>
                  </div>

                  <div className="captcha-container">
                    <ReCAPTCHA
                      sitekey="6LdIen4sAAAAAFd_KliS6kGz_liS7yfIWhKtCcx_"
                      onChange={(value) => setCaptchaValue(value)}
                      theme="dark"
                    />
                  </div>

                  <button type="submit" className="submit-btn" disabled={!captchaValue}>
                    Send Application via Email
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BusinessInternshipPage;