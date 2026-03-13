import { useState } from 'react';
import { Link } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import './MarketingPage.css';
import ScrollToTop from '../ScrollToTop';
import { BRAND_NAME } from '../../constants/brand';
import { trackEvent } from '../../utils/amplitudeTracker';
import { submitCareerApplication } from '../../utils/careerApplicationEmail';

const getInitialFormData = () => ({
  name: '',
  email: '',
  phone: '',
  university: '',
  portfolio: '',
  resumeLink: '',
  coverLetter: ''
});

function MarketingPage() {
  const [formData, setFormData] = useState(getInitialFormData);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [status, setStatus] = useState('');
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const resetFormState = () => {
    setFormData(getInitialFormData());
    setCaptchaValue(null);
    setStatus('');
    setIsSubmitted(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaValue || status === 'Sending application...') return;

    setStatus('Sending application...');

    try {
      await submitCareerApplication({
        roleTitle: 'Marketing Internship',
        applicantName: formData.name,
        applicantEmail: formData.email,
        pageUri: window.location.href,
        fields: [
          { label: 'Phone Number', value: formData.phone },
          { label: 'University & Study Program', value: formData.university },
          { label: 'Portfolio / Work Samples', value: formData.portfolio },
          { label: 'Resume Link', value: formData.resumeLink },
          { label: 'Motivation', value: formData.coverLetter },
        ],
      });

      trackEvent('Career Application Submitted', {
        role_title: 'Marketing Internship',
        page_location: 'Careers Marketing Page',
      });

      setFormData(getInitialFormData());
      setCaptchaValue(null);
      setStatus('');
      setIsSubmitted(true);
    } catch (error) {
      console.error('Career Application Error:', error);
      setStatus('We could not send your application. Please try again in a moment.');
    }
  };

  return (
    <>
      <ScrollToTop />
      <div className="marketing-page">
        <div className="marketing-hero">
          <Link to="/careers" className="back-link">← Back to Careers</Link>
          <h1>Marketing Internship</h1>
          <div className="job-meta-header">
            <span className="meta-item">🎓 Internship</span>
            <span className="meta-item">📈 Marketing</span>
            <span className="meta-item">📍 Sibiu</span>
          </div>
        </div>

        <div className="marketing-content">
          <div className="job-details">
            <section className="job-section">
              <h2>About the Internship</h2>
              <p>
                Build hands-on experience creating campaigns, content, and reporting that support real growth goals
                at {BRAND_NAME}.
              </p>
              <p>
                You will work with the team on messaging, execution, and performance reporting so you learn how
                marketing connects to pipeline and product usage.
              </p>
              <p>
                This internship is conducted on-site in Sibiu.
              </p>
            </section>

            <section className="job-section">
              <h2>What You&apos;ll Learn & Deliver</h2>
              <ul className="responsibilities-list">
                <li>Plan and execute full-funnel marketing campaigns (awareness, consideration, conversion)</li>
                <li>Create content for website, newsletters, and social channels</li>
                <li>Support SEO and campaign optimisation activities</li>
                <li>Track campaign performance and prepare reports</li>
                <li>Help with market research and competitor analysis</li>
                <li>Collaborate with sales and delivery teams on messaging</li>
                <li>Assist in keeping a consistent brand voice across channels</li>
              </ul>
            </section>

            <section className="job-section">
              <h2>Requirements</h2>
              <ul className="requirements-list">
                <li>Currently enrolled in Marketing, Business, Communications, or related degree program</li>
                <li>Strong written and verbal communication skills</li>
                <li>Basic understanding of digital marketing channels</li>
                <li>Interest in analytics, growth, and campaign performance</li>
                  <li>English proficiency certificate at C1 or C2 level (or equivalent demonstrated fluency)</li>
                <li>Self-motivated with the ability to work independently</li>
              </ul>
            </section>

            <section className="job-section">
              <h2>Nice to Have</h2>
              <ul className="nice-to-have-list">
                <li>Previous internship, student project, or coursework in marketing</li>
                <li>Familiarity with Product Analytics, and the business consultant industry</li>
                <li>Experience with Canva, basic design, and short-form video content</li>
                <li>Interest in B2B, SaaS, or analytics-related topics</li>
              </ul>
            </section>

            <section className="job-section">
              <h2>What You&apos;ll Leave With</h2>
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
              <h2>Start Your Application</h2>
              {isSubmitted ? (
                <div className="success-message">
                  <p>✓ Your application was sent.</p>
                  <button onClick={resetFormState} className="reset-btn">
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
                      required
                      placeholder="John Doe"
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
                      required
                      placeholder="john.doe@example.com"
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
                      required
                      placeholder="e.g., University of Bucharest - Marketing"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="portfolio">Portfolio / Work Samples</label>
                    <input
                      type="url"
                      id="portfolio"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleChange}
                      placeholder="https://your-portfolio.com"
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
                      required
                      placeholder="Link to Google Drive, Dropbox, etc."
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
                      required
                      rows="6"
                      placeholder="Tell us which growth outcomes you want to learn to influence, and any relevant marketing projects..."
                    />
                  </div>

                  <div className="captcha-container">
                    <ReCAPTCHA
                      sitekey="6LdIen4sAAAAAFd_KliS6kGz_liS7yfIWhKtCcx_"
                      onChange={(value) => setCaptchaValue(value)}
                      onExpired={() => setCaptchaValue(null)}
                      onErrored={() => setCaptchaValue(null)}
                      theme="dark"
                    />
                  </div>

                  <button type="submit" className="submit-btn" disabled={!captchaValue || status === 'Sending application...'}>
                    {status === 'Sending application...' ? 'Sending application...' : 'Submit Application'}
                  </button>
                  {status && status !== 'Sending application...' ? <p className="status-message">{status}</p> : null}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MarketingPage;