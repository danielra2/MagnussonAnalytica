import { useState } from 'react';
import { Link } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import './BusinessInternshipPage.css';
import ScrollToTop from '../ScrollToTop';
import { BRAND_HQ_CITY_COUNTRY, BRAND_NAME, BRAND_SECONDARY_OFFICE } from '../../constants/brand';
import { trackEvent } from '../../utils/amplitudeTracker';
import { submitCareerApplication } from '../../utils/careerApplicationEmail';

const getInitialFormData = () => ({
  name: '',
  email: '',
  phone: '',
  university: '',
  major: '',
  resumeLink: '',
  coverLetter: '',
  aiUsage: ''
});

function BusinessInternshipPage() {
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
        roleTitle: 'Business Internship',
        applicantName: formData.name,
        applicantEmail: formData.email,
        pageUri: window.location.href,
        fields: [
          { label: 'Phone Number', value: formData.phone },
          { label: 'University & Study Program', value: formData.university },
          { label: 'Major / Field of Study', value: formData.major },
          { label: 'Resume Link', value: formData.resumeLink },
          { label: 'Motivation', value: formData.coverLetter },
          { label: 'AI Tools Usage', value: formData.aiUsage },
        ],
      });

      trackEvent('Career Application Submitted', {
        role_title: 'Business Internship',
        page_location: 'Careers Business Internship Page',
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
      <div className="business-page">
        <div className="business-hero">
          <Link to="/careers" className="back-link">← Back to Careers</Link>
          <h1>Business Internship</h1>
          <div className="job-meta-header">
            <span className="meta-item">🎓 Internship</span>
            <span className="meta-item">💼 Business</span>
            <span className="meta-item">📍 {BRAND_HQ_CITY_COUNTRY}</span>
          </div>
        </div>

        <div className="business-content">
          <div className="job-details">
            <section className="job-section">
              <h2>About the Internship</h2>
              <p>
                Build hands-on experience in client operations, strategic research, and commercial problem-solving inside
                a fast-growing analytics company.
              </p>
              <p>
                As a Business Intern at {BRAND_NAME}, you will support client success, research, and business development
                work while learning how data-led teams operate and grow.
              </p>
              <p>
                This internship is conducted on-site at our {BRAND_HQ_CITY_COUNTRY} HQ while supporting projects delivered with our {BRAND_SECONDARY_OFFICE} office.
              </p>
            </section>

            <section className="job-section">
              <h2>What You'll Learn & Deliver</h2>
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
                <li>Availability to work on-site in Sibiu, Romania</li>
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
              <h2>What You'll Leave With</h2>
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
                      placeholder="Tell us which business or client outcomes you want to learn to influence, and any relevant projects..."
                      rows="6"
                      required
                    ></textarea>
                  </div>

                  <div className="form-group">
                    <label htmlFor="aiUsage">Describe shortly a specific way you've used AI tools (e.g. ChatGPT, Claude, Gemini etc.) to complete a task or a project. What was the goal, how did you use the tool, and what was the outcome? *</label>
                    <textarea
                      id="aiUsage"
                      name="aiUsage"
                      value={formData.aiUsage}
                      onChange={handleChange}
                      required
                      rows="6"
                      placeholder="Describe the task or project, the AI tool you used, and the outcome..."
                    ></textarea>
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

export default BusinessInternshipPage;