import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import './EngineeringPage.css';
import ScrollToTop from '../ScrollToTop';
import { BRAND_HQ_CITY_COUNTRY, BRAND_NAME, BRAND_SECONDARY_OFFICE } from '../../constants/brand';
import { trackEvent } from '../../utils/amplitudeTracker';
import { submitCareerApplication } from '../../utils/careerApplicationEmail';
import { uploadResumePdf } from '../../utils/resumeUpload';

const getInitialFormData = () => ({
  name: '',
  email: '',
  phone: '',
  linkedIn: '',
  portfolio: '',
  coverLetter: ''
});

const MAX_RESUME_FILE_SIZE_MB = 5;
const MAX_RESUME_FILE_SIZE_BYTES = MAX_RESUME_FILE_SIZE_MB * 1024 * 1024;

function EngineeringPage() {
  const [formData, setFormData] = useState(getInitialFormData);
  const [resumeFile, setResumeFile] = useState(null);
  const resumeInputRef = useRef(null);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [status, setStatus] = useState('');
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleResumeFileChange = (e) => {
    const selectedFile = e.target.files?.[0] ?? null;

    if (!selectedFile) {
      setResumeFile(null);
      return;
    }

    if (selectedFile.type !== 'application/pdf') {
      setStatus('Please upload your CV as a PDF file.');
      setResumeFile(null);
      e.target.value = '';
      return;
    }

    if (selectedFile.size > MAX_RESUME_FILE_SIZE_BYTES) {
      setStatus(`Please upload a PDF smaller than ${MAX_RESUME_FILE_SIZE_MB}MB.`);
      setResumeFile(null);
      e.target.value = '';
      return;
    }

    setResumeFile(selectedFile);

    if (status && status !== 'Sending application...' && status !== 'Uploading CV...') {
      setStatus('');
    }
  };

  const resetFormState = () => {
    setFormData(getInitialFormData());
    setResumeFile(null);
    setCaptchaValue(null);
    setStatus('');
    setIsSubmitted(false);

    if (resumeInputRef.current) {
      resumeInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaValue || status === 'Sending application...' || status === 'Uploading CV...') return;

    if (!resumeFile) {
      setStatus('Please upload your CV as a PDF before submitting.');
      return;
    }

    try {
      setStatus('Uploading CV...');
      const { resumeUrl, fileName } = await uploadResumePdf(resumeFile);

      setStatus('Sending application...');
      await submitCareerApplication({
        roleTitle: 'Engineering Internship - Data Analytics',
        applicantName: formData.name,
        applicantEmail: formData.email,
        pageUri: window.location.href,
        fields: [
          { label: 'Phone Number', value: formData.phone },
          { label: 'University & Study Program', value: formData.linkedIn },
          { label: 'Portfolio / GitHub', value: formData.portfolio },
          { label: 'Resume URL', value: resumeUrl },
          { label: 'Resume Filename', value: fileName },
          { label: 'Motivation', value: formData.coverLetter },
        ],
      });

      trackEvent('Career Application Submitted', {
        role_title: 'Engineering Internship - Data Analytics',
        page_location: 'Careers Engineering Page',
      });

      setFormData(getInitialFormData());
      setResumeFile(null);
      setCaptchaValue(null);
      setStatus('');
      setIsSubmitted(true);

      if (resumeInputRef.current) {
        resumeInputRef.current.value = '';
      }
    } catch (error) {
      console.error('Career Application Error:', error);
      setStatus(error?.message || 'We could not send your application. Please try again in a moment.');
    }
  };

  const isSubmitting = status === 'Sending application...' || status === 'Uploading CV...';

  return (
    <>
      <ScrollToTop />
      <div className="engineering-page">
        <div className="engineering-hero">
          <Link to="/careers" className="back-link">← Back to Careers</Link>
          <h1>Engineering Internship - Data Analytics</h1>
          <div className="job-meta-header">
            <span className="meta-item">🎓 Internship</span>
            <span className="meta-item">🏢 Engineering</span>
            <span className="meta-item">📍 {BRAND_HQ_CITY_COUNTRY}</span>
          </div>
        </div>

        <div className="engineering-content">
          <div className="job-details">
            <section className="job-section">
              <h2>About the Internship</h2>
              <p>
                Build hands-on experience with analytics implementations, dashboards, and experimentation work used on
                real client accounts at {BRAND_NAME}.
              </p>
              <p>
                You will help ship data solutions, validate tracking, and turn product questions into reliable reporting,
                building practical skills that complement your university work and prepare you for data engineering and analytics roles.
              </p>
              <p>
                This internship is conducted on-site at our {BRAND_HQ_CITY_COUNTRY} HQ while supporting projects delivered with our {BRAND_SECONDARY_OFFICE} office.
              </p>
            </section>

            <section className="job-section">
              <h2>What You'll Learn & Build</h2>
              <ul className="responsibilities-list">
                <li>Learn how to implement product analytics with Amplitude</li>
                <li>Build and maintain dashboards to track product KPIs, funnels, and retention</li>
                <li>Write SQL queries to validate tracking data and answer product questions</li>
                <li>Support A/B testing analysis and experiment readouts with the team</li>
                <li>Work with customer engagement tools like Braze and connect marketing campaign performance to product data</li>
                <li>Collaborate on analytics specifications for new features and releases</li>
                <li>Perform data quality checks to ensure clean, reliable tracking</li>
                <li>Document tracking plans, dashboards, and insights for clients</li>
              </ul>
            </section>

            <section className="job-section">
              <h2>Requirements</h2>
              <ul className="requirements-list">
                <li>Currently enrolled in an Engineering degree program (Computer Science, Software Engineering, Data Science, or related field)</li>
                <li>Basic programming knowledge in JavaScript or similar language</li>
                <li>Fundamental understanding of SQL and databases</li>
                <li>Strong willingness to learn and adapt to new technologies</li>
                <li>Good problem-solving and analytical thinking skills</li>
                <li>Self-motivated with the ability to work independently</li>
                <li>English proficiency certificate at C1 or C2 level (or equivalent demonstrated fluency)</li>
                <li>Passionate about data, analytics, and technology</li>
              </ul>
            </section>

            <section className="job-section">
              <h2>Nice to Have</h2>
              <ul className="nice-to-have-list">
                <li>Any coursework or projects in product analytics, data analysis, or databases</li>
                <li>Interested in client-facing consultative work</li>
                <li>Familiarity with Amplitude, Mixpanel, GA4, or similar analytics tools</li>
                <li>Experience building analytical dashboards</li>
                <li>Basic understanding of experiment design and A/B testing</li>
                <li>Familiarity with Git or other version control systems</li>
              </ul>
            </section>

            <section className="job-section">
              <h2>What You'll Leave With</h2>
              <ul className="benefits-list">
                <li>🎓 Hands-on learning experience with real client projects</li>
                <li>👨‍🏫 Mentorship from experienced data consultants and analysts</li>
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
                    <label htmlFor="linkedIn">University & Study Program *</label>
                    <input
                      type="text"
                      id="linkedIn"
                      name="linkedIn"
                      value={formData.linkedIn}
                      onChange={handleChange}
                      required
                      placeholder="e.g., Technical University of Munich - Computer Science"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="portfolio">Portfolio / GitHub (if available)</label>
                    <input
                      type="url"
                      id="portfolio"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleChange}
                      placeholder="https://github.com/yourusername or link to projects"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="resumePdf">CV (PDF) *</label>
                    <input
                      type="file"
                      id="resumePdf"
                      name="resume_pdf"
                      accept=".pdf,application/pdf"
                      onChange={handleResumeFileChange}
                      ref={resumeInputRef}
                      required
                    />
                    <small>Upload your CV directly as a PDF (max {MAX_RESUME_FILE_SIZE_MB}MB).</small>
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
                      placeholder="Tell us which analytics problems you want to learn to solve, and any relevant coursework or projects..."
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

                  <button type="submit" className="submit-btn" disabled={!captchaValue || isSubmitting}>
                    {isSubmitting ? status : 'Submit Application'}
                  </button>
                  {status && !isSubmitting ? <p className="status-message">{status}</p> : null}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EngineeringPage;