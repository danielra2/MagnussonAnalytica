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
      description: 'Perfect opportunity for engineering students to gain hands-on experience in data analytics and engineering.',
      requirements: ['Currently enrolled in Engineering program', 'Basic programming knowledge (Python/SQL)', 'Passionate about data and analytics'],
      status: 'Open'
    },
    {
      id: 'business-internship',
      title: 'Business Intern',
      department: 'Business Internship',
      type: 'Internship (3-6 months)',
      description: 'Join our team and gain practical experience in business operations, client relations, and strategic initiatives.',
      requirements: ['Currently enrolled in Business or related program', 'Strong communication skills', 'Passionate about business and analytics'],
      status: 'Open'
    },
    {
      id: 'marketing',
      title: 'Marketing Intern',
      department: 'Marketing Internship',
      type: 'Internship (3-6 months)',
      description: 'Join our team and gain hands-on experience in digital marketing, content creation, and campaign analytics.',
      requirements: ['Currently enrolled in Business/Marketing or related program', 'Strong communication and writing skills', 'Passionate about marketing and analytics'],
      status: 'Open'
    }
  ];

  return (
    <>
      <ScrollToTop />
      <div className="careers-page">
        <div className="careers-hero">
          <h1>Join Our Team</h1>
          <p className="careers-subtitle">Build the future of data analytics with us</p>
        </div>

        <div className="careers-content">
          <section className="careers-intro">
            <h2>Why Work With Us?</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <h3>🚀 Growth Opportunities</h3>
                <p>Continuous learning and career development in a fast-growing company</p>
              </div>
              <div className="benefit-card">
                <h3>🌍 Remote First</h3>
                <p>Work from anywhere with flexible hours and work-life balance</p>
              </div>
              <div className="benefit-card">
                <h3>💡 Innovation</h3>
                <p>Work with cutting-edge technologies and industry-leading clients</p>
              </div>
              <div className="benefit-card">
                <h3>🤝 Collaborative Culture</h3>
                <p>Join a talented team that values collaboration and creativity</p>
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
                      View Details & Apply
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
