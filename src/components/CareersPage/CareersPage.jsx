import { Link } from 'react-router-dom';
import './CareersPage.css';
import ScrollToTop from '../ScrollToTop';

function CareersPage() {
  const jobPostings = [
    {
      id: 'engineering',
      title: 'Engineering Intern - Data Analytics',
      department: 'Engineering Internship',
      type: 'Internship (3-6 months)',
      description: 'Build real analytics implementations, dashboards, and experiment workflows used on client projects.',
      requirements: ['Currently enrolled in Engineering program', 'Basic programming knowledge (Python/SQL)', 'Passionate about data and analytics'],
      status: 'Open'
    },
    {
      id: 'business-internship',
      title: 'Business Intern',
      department: 'Business Internship',
      type: 'Internship (3-6 months)',
      description: 'Learn how research, client delivery, and growth operations work inside a live analytics consultancy.',
      requirements: ['Currently enrolled in Business or related program', 'Strong communication skills', 'Passionate about business and analytics'],
      status: 'Open'
    },
    {
      id: 'marketing',
      title: 'Marketing Intern',
      department: 'Marketing Internship',
      type: 'Internship (3-6 months)',
      description: 'Create campaigns and content tied to reporting, conversion, and growth outcomes.',
      requirements: ['Currently enrolled in Business/Marketing or related program', 'Strong communication and writing skills', 'Passionate about marketing and analytics'],
      status: 'Open'
    }
  ];

  return (
    <>
      <ScrollToTop />
      <div className="careers-page">
        <div className="careers-hero">
          <h1>Build client-ready skills on real analytics projects</h1>
          <p className="careers-subtitle">Learn with direct mentorship in Sibiu while contributing to live client work</p>
        </div>

        <div className="careers-content">
          <section className="careers-intro">
            <h2>What you will leave with</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <h3>🚀 Faster Skill Growth</h3>
                <p>Build practical analytics, growth, and communication skills on live work.</p>
              </div>
              <div className="benefit-card">
                <h3>🏢 On-site Mentorship</h3>
                <p>Work alongside the team in Sibiu and get rapid feedback as you learn.</p>
              </div>
              <div className="benefit-card">
                <h3>💡 Client Exposure</h3>
                <p>Contribute to deliverables used by product, growth, and data teams.</p>
              </div>
              <div className="benefit-card">
                <h3>🤝 Small-Team Ownership</h3>
                <p>Take ownership early and learn how collaboration works inside a consultancy team.</p>
              </div>
            </div>
          </section>

          <section className="job-listings">
            <h2>Open Positions</h2>
            <div className="jobs-grid">
              {jobPostings.map((job) => (
                <div key={job.id} className={`job-card ${job.status === 'Coming Soon' ? 'coming-soon' : ''}`}>
                  <div className="job-header">
                    <h3>{job.title}</h3>
                    <span className={`job-status ${job.status === 'Open' ? 'status-open' : 'status-soon'}`}>
                      {job.status}
                    </span>
                  </div>
                  <div className="job-meta">
                    <span className="job-department">{job.department}</span>
                    <span className="job-separator">•</span>
                    <span className="job-type">{job.type}</span>
                  </div>
                  <p className="job-description">{job.description}</p>
                  <ul className="job-requirements">
                    {job.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                  {job.status === 'Open' ? (
                    <Link to={`/careers/${job.id}`} className="job-apply-btn">
                      See Role Details & Apply
                    </Link>
                  ) : (
                    <button className="job-apply-btn job-apply-btn-disabled" disabled>
                      Coming Soon
                    </button>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default CareersPage;