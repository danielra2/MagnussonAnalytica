// src/components/HomePage/CoursesSection.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './CoursesSection.css'; // Importă noul fișier CSS
import { trackButtonClick } from '../../utils/amplitudeTracker'; // Importăm funcția de tracking
import { CONVERSION_OFFER } from '../../constants/conversionOffer';
import { ICP_CLARITY, ICP_INDUSTRIES_SENTENCE } from '../../constants/icp';

export default function CoursesSection() {
  
    const trackClick = (courseName) => {
        trackButtonClick(courseName, 'Homepage Training Section');
    };

    const handlePrimaryCtaClick = () => {
        trackButtonClick(`${CONVERSION_OFFER.primaryCtaLabel} - Training Section`, 'Homepage Training Section');
    };

    return (
        <section className="training-section">
            <h2 className="training-title">Training built for better analytics decisions</h2>
            <p className="training-offer-strip">{CONVERSION_OFFER.campaignLabel} · {CONVERSION_OFFER.deadlineLabel}</p>
            <p className="training-icp-line">
                {ICP_CLARITY.coreAudience}
                {' '}
                Industries served most often: {ICP_INDUSTRIES_SENTENCE}.
            </p>
            <div className="card-container">
                <div className="training-card">
                    <h3 className="card-title">Data Analytics Training</h3>
                    <p className="card-description">Help analysts answer product and growth questions faster with stronger reporting and event analysis.</p>
                    <Link to="/amplitude-courses">
                        <button 
                            className="cta-button card-button"
                            onClick={() => trackClick(`${CONVERSION_OFFER.tertiaryCtaLabel} - Data Analytics`)} // NOU: Tracking
                        >
                            {CONVERSION_OFFER.tertiaryCtaLabel}
                        </button>
                    </Link>
                    <p className="card-cta-proof">4-hour foundations with practical analytics exercises.</p>
                </div>
                <div className="training-card">
                    <h3 className="card-title">Custom Workshops</h3>
                    <p className="card-description">Solve the exact tracking, funnel, and governance problems holding your team back.</p>
                    <Link to="/amplitude-courses">
                        <button 
                            className="cta-button card-button"
                            onClick={() => trackClick(`${CONVERSION_OFFER.tertiaryCtaLabel} - Custom Workshops`)} // NOU: Tracking
                        >
                            {CONVERSION_OFFER.tertiaryCtaLabel}
                        </button>
                    </Link>
                    <p className="card-cta-proof">Full-day custom workshops mapped to your product goals.</p>
                </div>
                <div className="training-card">
                    <h3 className="card-title">Certification Programs</h3>
                    <p className="card-description">Give product and growth teams practical skills for conversion, retention, and experimentation.</p>
                    <Link to="/amplitude-courses">
                        <button 
                            className="cta-button card-button"
                            onClick={() => trackClick(`${CONVERSION_OFFER.tertiaryCtaLabel} - Certification Programs`)} // NOU: Tracking
                        >
                            {CONVERSION_OFFER.tertiaryCtaLabel}
                        </button>
                    </Link>
                    <p className="card-cta-proof">8-hour advanced format focused on conversion and retention use cases.</p>
                </div>
            </div>
            <div className="training-section-cta">
                <a href="/#contact-form" className="cta-button training-primary-cta" onClick={handlePrimaryCtaClick}>
                    {CONVERSION_OFFER.primaryCtaLabel}
                </a>
                <p className="training-cta-proof">{CONVERSION_OFFER.proofLine} {CONVERSION_OFFER.deadlineLabel}.</p>
            </div>
        </section>
    );
}