import { useState } from 'react';
import { Link } from 'react-router-dom';
import './EngineeringPage.css';
import ScrollToTop from '../ScrollToTop';

function EngineeringPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    linkedIn: '',
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

    const subject = encodeURIComponent('Application for Engineering Internship - Data Analytics');
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
University & Program: ${formData.linkedIn}
Portfolio / GitHub: ${formData.portfolio}
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
      <div className="engineering-page">
        <div className="engineering-hero">
          <Link to="/careers" className="back-link">← Back to Careers</Link>
          <h1>Engineering Internship - Data Analytics</h1>
          <div className="job-meta-header">
            <span className="meta-item">🎓 Internship</span>
            <span className="meta-item">🏢 Engineering</span>
            <span className="meta-item">📍 Sibiu</span>
          </div>
        </div>

        <div className="engineering-content">
          <div className="job-details">
            <section className="job-section">
              <h2>About the Internship</h2>
              <p>
                We're offering an exciting internship opportunity for engineering students at Magnusson Analytica.
                This is your chance to gain real-world experience in data analytics, work on actual client projects,
                and learn from experienced professionals in the field.
              </p>
              <p>
                As an intern, you'll be involved in building data solutions, analysing business metrics, and
                contributing to projects that help companies make data-driven decisions. This internship
                is designed to give you practical skills that complement your university education and prepare
                you for a successful career in data engineering and analytics.
              </p>
              <p>
                This internship is conducted on-site in Sibiu.
              </p>
            </section>

            <section className="job-section">
              <h2>What You'll Learn & Do</h2>
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
              <h2>What We Offer</h2>
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
              <h2>Apply Now</h2>
              {isSubmitted ? (
                <div className="success-message">
                  <p>✓ Your application email has been prepared!</p>
                  <p className="success-note">If your email client didn't open automatically, please send your application to: <strong>careers@magnussonanalytica.com</strong></p>
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
                      placeholder="Tell us about your interest in data analytics, what you hope to learn, and any relevant coursework or projects..."
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

export default EngineeringPage;
