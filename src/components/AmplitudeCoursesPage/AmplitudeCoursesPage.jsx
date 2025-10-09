// src/components/AmplitudeCoursesPage/AmplitudeCoursesPage.jsx

import React from 'react';
import './AmplitudeCoursesPage.css';
import { FaCheckCircle, FaStar, FaClock } from 'react-icons/fa';

const coursesData = [
  {
    level: 'Essentials',
    title: 'Data Analyst Kickstart',
    price: 'Contact us',
    duration: '4 Hours',
    features: [
      'Amplitude Data Model Mastery',
      'Basic Report Generation (Charts & Dashboards)',
      'Event Segmentation Fundamentals',
      'One-on-One Q&A Session',
    ],
    color: '#3498db', // Blue accent
  },
  {
    level: 'Advanced',
    title: 'Product Growth Strategist',
    price: 'Contact us',
    duration: '8 Hours',
    features: [
      'Advanced User Behavior Flows',
      'Conversion Funnel Optimization',
      'Retention & Cohort Analysis Deep Dive',
      'A/B Testing Implementation Strategy',
      'Certification of Completion',
    ],
    color: '#ff6b35', // Orange accent (Primary)
    isRecommended: true,
  },
  {
    level: 'Masterclass',
    title: 'Custom Workshop & Data Governance',
    price: 'Contact Us',
    duration: 'Full Day',
    features: [
      'Customized Curriculum based on your App',
      'Team-Specific Training (Devs, Product, Marketing)',
      'Data Governance & Quality Control Setup',
      'Long-Term Strategy Blueprint',
    ],
    color: '#2ecc71', // Green accent
  },
];

export default function AmplitudeCoursesPage() {
  return (
    <div className="amplitude-page-container">
      <h1 className="amplitude-main-title">Amplitude Certified Courses</h1>
      <p className="amplitude-description">
        Transform your team into Amplitude experts. Our courses are structured based on practical implementation experience, covering data analysis, conversion optimization, and data governance.
      </p>

      <div className="courses-pricing-grid">
        {coursesData.map((course, index) => (
          <div 
            key={index} 
            className={`course-card ${course.isRecommended ? 'recommended-card' : ''}`}
            style={{ '--card-accent-color': course.color }}
          >
            {course.isRecommended && <span className="recommended-tag"><FaStar /> Most Popular</span>}
            <div className="card-header">
              <h3 className="course-level">{course.level}</h3>
              <h2 className="course-title">{course.title}</h2>
              <p className="course-duration"><FaClock /> {course.duration} Training</p>
            </div>
            
            <ul className="course-features">
              {course.features.map((feature, i) => (
                <li key={i}><FaCheckCircle /> {feature}</li>
              ))}
            </ul>

            <div className="card-footer">
                <p className="course-price">{course.price}</p>
                {/* Butonul "Get a Quote" va avea acum stilul CTA implicit */}
                <button className="cta-button course-cta-button">
                    {course.price === 'Contact Us' ? 'Get a Quote' : 'Enroll Now'}
                </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}