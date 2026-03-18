// src/components/AmplitudeCoursesPage/AmplitudeCoursesPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './AmplitudeCoursesPage.css';
import { FaCheckCircle, FaStar, FaClock } from 'react-icons/fa';
import { BRAND_NAME } from '../../constants/brand';
import { trackButtonClick } from '../../utils/amplitudeTracker';
import { CONVERSION_OFFER } from '../../constants/conversionOffer';
import { ICP_CLARITY, ICP_INDUSTRIES_SENTENCE } from '../../constants/icp';

const coursesData = [
  {
    level: 'Essentials',
    title: 'Data Analyst Kickstart',
    price: 'Team pricing on request',
    duration: '4 Hours',
    ctaProof: 'Get analysts comfortable with events, dashboards, and reporting in one half-day session.',
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
    price: 'Team pricing on request',
    duration: '8 Hours',
    ctaProof: 'Help product and growth teams improve conversion and retention in an 8-hour practitioner track.',
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
    price: 'Custom workshop pricing',
    duration: 'Full Day',
    ctaProof: 'Align your live data model, governance, and team workflows in one full-day workshop.',
    features: [
      'Customized Curriculum based on your App',
      'Team-Specific Training (Devs, Product, Marketing)',
      'Data Governance & Quality Control Setup',
      'Long-Term Strategy Blueprint',
    ],
    color: '#2ecc71', // Green accent
  },
];

const comparisonCards = [
  {
    title: 'Choose this path when',
    points: [
      'Your team needs hands-on feedback tied to live events, funnels, and reporting.',
      'You want product, growth, or data teams applying the learning immediately.',
      'You need training that improves implementation quality, not just platform familiarity.',
    ],
  },
  {
    title: 'Choose a lighter option when',
    points: [
      'You only need a self-serve video library with no applied feedback.',
      'You are not ready to use the training inside active product work.',
      'You do not need help connecting learning to your current data model.',
    ],
  },
];

export default function AmplitudeCoursesPage() {
    
  return (
    <div className="amplitude-page-container">
      <h1 className="amplitude-main-title">Amplitude training built for faster product decisions</h1>
      <p className="courses-offer-badge">{CONVERSION_OFFER.campaignLabel} · {CONVERSION_OFFER.deadlineLabel}</p>
      <p className="amplitude-description">
        Give your team practical Amplitude skills they can apply to tracking quality, funnel analysis, retention, and experimentation right away.
      </p>
      <p className="amplitude-icp-line">
        {ICP_CLARITY.coreAudience}
        {' '}
        Industries served most often: {ICP_INDUSTRIES_SENTENCE}.
      </p>

      <div className="courses-pricing-grid">
        {coursesData.map((course, index) => {
          const courseCtaLabel = CONVERSION_OFFER.courseReserveCtaLabel;

          return (
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

                <Link
                  to={`/enrollment-embed?course=${encodeURIComponent(course.title)}`}
                  className="cta-button course-cta-button"
                  onClick={() => trackButtonClick(`${courseCtaLabel} - ${course.title}`, 'Amplitude Courses Page')}
                >
                  {courseCtaLabel}
                </Link>
                <p className="course-cta-proof">{course.ctaProof}</p>
              </div>
            </div>
          );
        })}
      </div>

      <section className="courses-comparison" aria-labelledby="courses-comparison-title">
        <h2 className="courses-comparison-title" id="courses-comparison-title">
          Choose the training path that fits your team
        </h2>
        <p className="courses-comparison-subtitle">
          Teams choose
          {' '}
          {BRAND_NAME}
          {' '}
          when they need Amplitude training that improves implementation quality and day-to-day decision-making, not just theoretical familiarity.
          {' '}
          Typical fit includes teams in {ICP_INDUSTRIES_SENTENCE}.
        </p>

        <div className="courses-comparison-grid">
          {comparisonCards.map((card) => (
            <article key={card.title} className="courses-comparison-card">
              <h3>{card.title}</h3>
              <ul>
                {card.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <Link to="/#contact-form" className="cta-button courses-comparison-cta">
          {CONVERSION_OFFER.secondaryCtaLabel}
        </Link>
        <p className="courses-comparison-proof">
          {CONVERSION_OFFER.courseProofLine} {CONVERSION_OFFER.deadlineLabel}.
        </p>
      </section>
    </div>
  );
}