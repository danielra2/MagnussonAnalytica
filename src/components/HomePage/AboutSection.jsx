// src/components/HomePage/AboutSection.jsx

import React from 'react';
import './AboutSection.css';
import { FaPhoneAlt, FaLaptopCode, FaChartLine } from 'react-icons/fa';
import { trackButtonClick } from '../../utils/amplitudeTracker'; // Importăm funcția de tracking
import {
  BRAND_LOCATION_LINE,
  BRAND_NAME,
  BRAND_REGIONAL_FOCUS,
} from '../../constants/brand';
import { CONVERSION_OFFER } from '../../constants/conversionOffer';
import { ICP_CLARITY, ICP_INDUSTRIES_SENTENCE } from '../../constants/icp';

export default function AboutSection() {
  
  // Funcție handler pentru click
  const handlePrimaryCtaClick = () => {
    trackButtonClick(`${CONVERSION_OFFER.primaryCtaLabel} - About Section`, 'Homepage About Section');
  };

  const handleSecondaryCtaClick = () => {
    trackButtonClick(`${CONVERSION_OFFER.secondaryCtaLabel} - About Section`, 'Homepage About Section');
  };

  return (
    <section className="about-section" id="about-section">
      <div className="about-content-container">
        <h2 className="about-main-title">One partner from tracking cleanup to growth action</h2>
        <div className="about-partner-text">
          <p className="partner-text-base">
            We are proud to be an <span className="highlight-orange">official Amplitude Partner</span>, helping teams turn cleaner tracking and better reporting into faster product decisions.
          </p>
        </div>
        <div className="about-text-container">
          <p className="about-text">
            When analytics strategy, implementation, and reporting live with different vendors,
            teams lose time, confidence, and momentum.
          </p>
          <p className="about-text">
            At {BRAND_NAME}, we combine setup, QA, strategy, and enablement so your team can move
            from messy data to clear next actions.
          </p>
          <p className="about-text">
            {ICP_CLARITY.coreAudience}
            {' '}
            We most often support teams in {ICP_INDUSTRIES_SENTENCE}.
          </p>
          <p className="about-text">
            {BRAND_LOCATION_LINE}. Regional focus: {BRAND_REGIONAL_FOCUS}.
          </p>
        </div>

        <div className="how-it-works">
          <h3 className="how-it-works-title">What you get:</h3>
          <ul className="how-it-works-list">
            <li className="how-it-works-item animated-item">
              <div className="icon-wrapper">
                <FaPhoneAlt />
              </div>
              <p className="how-it-works-text">
                Start with a focused call to uncover the blockers slowing reporting, experimentation, or conversion.
              </p>
            </li>
            <li className="how-it-works-item animated-item">
              <div className="icon-wrapper">
                <FaLaptopCode />
              </div>
              <p className="how-it-works-text">
                We fix implementation gaps, align the stack, and train your team so insights can be used immediately.
              </p>
            </li>
            <li className="how-it-works-item animated-item">
              <div className="icon-wrapper">
                <FaChartLine />
              </div>
              <p className="how-it-works-text">
                You leave with cleaner data, clearer priorities, and a plan that supports measurable growth.
              </p>
            </li>
          </ul>
        </div>
        <div className="about-cta-container">
          <a href="/#contact-form" className="cta-button" onClick={handlePrimaryCtaClick}>
            {CONVERSION_OFFER.primaryCtaLabel}
          </a>
          <a
            href="https://calendar.notion.so/meet/alexandermagnusson/0az364lq3"
            className="about-secondary-cta"
            onClick={handleSecondaryCtaClick}
          >
            {CONVERSION_OFFER.secondaryCtaLabel}
          </a>
          <p className="about-cta-proof">
            {CONVERSION_OFFER.proofLine} {CONVERSION_OFFER.deadlineLabel}.
          </p>
        </div>
      </div>
    </section>
  );
}