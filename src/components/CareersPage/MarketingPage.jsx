import { useState } from 'react';
import { Link } from 'react-router-dom';
import './MarketingPage.css';
import ScrollToTop from '../ScrollToTop';

function MarketingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    university: '',
    portfolio: '',
    resumeLink: '',
    coverLetter: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent('Application for Marketing Internship - Magnusson Analytica');
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
  University & Program: ${formData.university}
Portfolio / Work Samples: ${formData.portfolio}
Resume Link: ${formData.resumeLink}

  Why I'm interested in this internship:
${formData.coverLetter}
    `);

    window.location.href = `mailto:careers@magnussonanalytica.com?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
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
          </div>
        </div>

        <div className="marketing-content">
          <div className="job-details">
            <section className="job-section">
              <h2>About the Internship</h2>
              <p>
                We are looking for a Marketing Intern to support growth and brand initiatives at
                Magnusson Analytica. This internship gives you the opportunity to learn practical digital marketing
                skills while contributing to real campaigns.
              </p>
              <p>
                You will collaborate with experienced team members on content, campaign execution, and reporting,
                developing hands-on experience in B2B marketing and analytics.
              </p>
            </section>

            <section className="job-section">
              <h2>What You&apos;ll Do</h2>
              <ul className="responsibilities-list">
                <li>Plan and execute full-funnel marketing campaigns (awareness, consideration, conversion)</li>
                <li>Create content for website, newsletters, and social channels</li>
                <li>Support SEO and campaign optimization activities</li>
                <li>Track campaign performance and prepare simple reports</li>
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
                <li>Excellent written and verbal communication skills in English</li>
                <li>Ability to work independently in a remote environment</li>
              </ul>
            </section>

            <section className="job-section">
              <h2>Nice to Have</h2>
              <ul className="nice-to-have-list">
                <li>Previous internship, student project, or coursework in marketing</li>
                <li>Familiarity with Google Analytics, HubSpot, or similar tools</li>
                <li>Experience with Canva, basic design, or short-form video content</li>
                <li>Interest in B2B, SaaS, or analytics-related topics</li>
              </ul>
            </section>

            <section className="job-section">
              <h2>What We Offer</h2>
              <ul className="benefits-list">
                <li>🎓 Hands-on internship experience on real marketing projects</li>
                <li>🌍 Remote-first setup with flexible schedule</li>
                <li>👨‍🏫 Mentorship from experienced professionals</li>
                <li>🚀 Growth opportunities and potential for long-term collaboration</li>
              </ul>
            </section>
          </div>

          <div className="application-form-container">
            <div className="application-form-sticky">
              <h2>Apply Now</h2>
              {isSubmitted ? (
                <div className="success-message">
                  <p>✓ Your application email has been prepared!</p>
                  <p className="success-note">If your email client didn&apos;t open automatically, please send your application to: <strong>careers@magnussonanalytica.com</strong></p>
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
                      placeholder="Tell us about your interest in marketing, what you hope to learn, and any relevant projects..."
                    />
                  </div>

                  <button type="submit" className="submit-btn">
                    Send Application via Email
                  </button>
                  <p className="form-note">
                    This will open your email client with your application details
                  </p>
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