import { useState } from 'react';
import { Link } from 'react-router-dom';
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent('Application for Business Internship - Magnusson Analytica');
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
University & Program: ${formData.university}
Major: ${formData.major}
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
      <div className="business-page">
        <div className="business-hero">
          <Link to="/careers" className="back-link">← Back to Careers</Link>
          <h1>Business Internship</h1>
          <div className="job-meta-header">
            <span className="meta-item">🎓 Internship</span>
            <span className="meta-item">💼 Business</span>
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
                As a Business Intern, you'll contribute to key business functions including client success, market research,
                business development, and operational projects. This role is ideal for students interested in learning how
                data-driven organizations operate and develop business acumen in a growing tech company.
              </p>
            </section>

            <section className="job-section">
              <h2>What You'll Learn & Do</h2>
              <ul className="responsibilities-list">
                <li>Support client onboarding and implementation processes</li>
                <li>Conduct market research and competitive analysis</li>
                <li>Assist in developing business proposals and case studies</li>
                <li>Help manage client relationships and communication</li>
                <li>Analyze business metrics and performance data</li>
                <li>Support marketing and business development initiatives</li>
                <li>Participate in strategic planning and brainstorming sessions</li>
                <li>Create presentations and reports for stakeholders</li>
                <li>Learn about product positioning and go-to-market strategies</li>
                <li>Build understanding of SaaS business models and analytics industry trends</li>
              </ul>
            </section>

            <section className="job-section">
              <h2>Requirements</h2>
              <ul className="requirements-list">
                <li>Currently enrolled in a Business, Economics, Marketing, or related degree program</li>
                <li>Strong written and verbal communication skills</li>
                <li>Excellent organizational and project management abilities</li>
                <li>Proficiency with Microsoft Office suite (Excel, PowerPoint, Word)</li>
                <li>Self-motivated with the ability to work independently</li>
                <li>Ability to work in a remote environment</li>
                <li>Fluent in English</li>
                <li>Passion for data, business, and analytics (experience preferred but not required)</li>
              </ul>
            </section>

            <section className="job-section">
              <h2>What We Offer</h2>
              <ul className="benefits-list">
                <li>Competitive hourly rate for internship position</li>
                <li>Fully remote work opportunity with flexible schedule</li>
                <li>Mentorship from experienced professionals</li>
                <li>Exposure to real-world business challenges and solutions</li>
                <li>Professional development and learning opportunities</li>
                <li>Potential for extension or full-time conversion based on performance</li>
              </ul>
            </section>

            <section className="job-section">
              <h2>How to Apply</h2>
              <p>
                Fill out the application form below with your information and we'll be in touch within 5-7 business days.
                Please ensure all fields are completed accurately so we can best review your application.
              </p>
            </section>
          </div>

          <div className="application-form-section">
            <h2>Apply Now</h2>
            {isSubmitted ? (
              <div className="success-message">
                <h3>Thank You for Your Application!</h3>
                <p>We've received your application and will review it shortly. Check your email for updates.</p>
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
                    placeholder="Your full name"
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
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="university">University & Graduation Year *</label>
                  <input
                    type="text"
                    id="university"
                    name="university"
                    value={formData.university}
                    onChange={handleChange}
                    placeholder="e.g., Stanford University, 2026"
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
                  <label htmlFor="resumeLink">Resume Link (Google Drive, Dropbox, etc.) *</label>
                  <input
                    type="url"
                    id="resumeLink"
                    name="resumeLink"
                    value={formData.resumeLink}
                    onChange={handleChange}
                    placeholder="https://drive.google.com/..."
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="coverLetter">Why are you interested in this internship? *</label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleChange}
                    placeholder="Tell us about your interest in Magnusson Analytica and what you hope to learn..."
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">Submit Application</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default BusinessInternshipPage;
