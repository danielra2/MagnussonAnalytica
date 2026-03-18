import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import './MarketingPage.css';
import ScrollToTop from '../ScrollToTop';
import { BRAND_HQ_CITY_COUNTRY, BRAND_NAME, BRAND_SECONDARY_OFFICE } from '../../constants/brand';
import { trackEvent } from '../../utils/amplitudeTracker';
import { submitCareerApplication } from '../../utils/careerApplicationEmail';
import { isResumeUploadConfigured, uploadResumePdf } from '../../utils/resumeUpload';

const getInitialFormData = () => ({
  name: '',
  email: '',
  phone: '',
  university: '',
  portfolio: '',
  resumeLink: '',
  coverLetter: ''
});

const MAX_RESUME_FILE_SIZE_MB = 5;
const MAX_RESUME_FILE_SIZE_BYTES = MAX_RESUME_FILE_SIZE_MB * 1024 * 1024;

function MarketingPage() {
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

    if (isResumeUploadConfigured && !resumeFile) {
      setStatus('Please upload your CV as a PDF before submitting.');
      return;
    }

    if (!isResumeUploadConfigured && !formData.resumeLink.trim()) {
      setStatus('Please add a public CV link before submitting.');
      return;
    }

    try {
      let resumeUrl = formData.resumeLink.trim();
      let fileName = 'N/A';

      if (isResumeUploadConfigured) {
        setStatus('Uploading CV...');
        const uploadResult = await uploadResumePdf(resumeFile);
        resumeUrl = uploadResult.resumeUrl;
        fileName = uploadResult.fileName;
      }

      setStatus('Sending application...');
      await submitCareerApplication({
        roleTitle: 'Marketing Internship',
        applicantName: formData.name,
        applicantEmail: formData.email,
        pageUri: window.location.href,
        fields: [
          { label: 'Phone Number', value: formData.phone },
          { label: 'University & Study Program', value: formData.university },
          { label: 'Portfolio / Work Samples', value: formData.portfolio },
          { label: 'Resume URL', value: resumeUrl },
          { label: 'Resume Filename', value: fileName },
          { label: 'Motivation', value: formData.coverLetter },
        ],
      });

      trackEvent('Career Application Submitted', {
        role_title: 'Marketing Internship',
        page_location: 'Careers Marketing Page',
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
      <div className="marketing-page">
        <div className="marketing-hero">
          <Link to="/careers" className="back-link">← Back to Careers</Link>
          <h1>Marketing Internship</h1>
          <div className="job-meta-header">
            <span className="meta-item">🎓 Internship</span>
            <span className="meta-item">📈 Marketing</span>
            <span className="meta-item">📍 {BRAND_HQ_CITY_COUNTRY}</span>
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
                This internship is conducted on-site at our {BRAND_HQ_CITY_COUNTRY} HQ while supporting projects delivered with our {BRAND_SECONDARY_OFFICE} office.
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
                    {isResumeUploadConfigured ? (
                      <>
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
                      </>
                    ) : (
                      <>
                        <label htmlFor="resumeLink">CV Link *</label>
                        <input
                          type="url"
                          id="resumeLink"
                          name="resumeLink"
                          value={formData.resumeLink}
                          onChange={handleChange}
                          placeholder="https://drive.google.com/..."
                          required
                        />
                        <small>Direct upload is temporarily unavailable. Add a public CV link to continue.</small>
                      </>
                    )}
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

export default MarketingPage;