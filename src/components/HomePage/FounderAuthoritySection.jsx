import React from 'react';
import { FaAward, FaChartLine, FaUserTie } from 'react-icons/fa';
import alexPhoto from '../../assets/img/alexphoto.jpg';
import { trackButtonClick } from '../../utils/amplitudeTracker';
import { BRAND_NAME, FOUNDER_NAME, FOUNDER_TITLE } from '../../constants/brand';
import { CONVERSION_OFFER } from '../../constants/conversionOffer';
import './FounderAuthoritySection.css';

const credibilityPoints = [
  {
    icon: FaUserTie,
    title: 'Founder-led delivery',
    text: `Work directly with ${FOUNDER_NAME} to turn messy tracking and vague questions into an execution-ready plan.`,
  },
  {
    icon: FaAward,
    title: 'Official partner expertise',
    text: 'Get implementation guidance grounded in real Amplitude rollouts, not generic recommendations.',
  },
  {
    icon: FaChartLine,
    title: 'Built for measurable growth',
    text: 'Every engagement is designed to improve conversion, retention, or product adoption in a measurable way.',
  },
];

const trustSignals = [
  'Senior strategy without agency layers',
  'Official Amplitude Partner',
  'Built for product and growth teams',
];

export default function FounderAuthoritySection() {
  const handlePrimaryCtaClick = () => {
    trackButtonClick(`${CONVERSION_OFFER.primaryCtaLabel} - Founder Authority`, 'Founder Authority Section');
  };

  const handleSecondaryCtaClick = () => {
    trackButtonClick(`${CONVERSION_OFFER.secondaryCtaLabel} - Founder Authority`, 'Founder Authority Section');
  };

  return (
    <section className="authority-section" aria-labelledby="authority-title">
      <div className="authority-container">
        <aside className="authority-profile-card">
          <img src={alexPhoto} alt={`${FOUNDER_NAME}, ${FOUNDER_TITLE}`} className="authority-profile-photo" />
          <div className="authority-profile-copy">
            <p className="authority-profile-kicker">Founder Spotlight</p>
            <h3>{FOUNDER_NAME}</h3>
            <p>{FOUNDER_TITLE}, {BRAND_NAME}</p>
          </div>
        </aside>

        <div className="authority-content-card">
          <p className="authority-eyebrow">Authority</p>
          <h2 id="authority-title">Senior guidance that turns analytics work into shipped outcomes</h2>
          <p className="authority-intro">
            {BRAND_NAME} pairs senior strategy with hands-on implementation, so your team leaves
            with clearer data, faster decisions, and work that actually gets shipped.
          </p>

          <div className="authority-signals" aria-label="Credibility highlights">
            {trustSignals.map((signal) => (
              <span key={signal} className="authority-signal-pill">{signal}</span>
            ))}
          </div>

          <ul className="authority-points">
            {credibilityPoints.map((point) => {
              const Icon = point.icon;
              return (
                <li key={point.title} className="authority-point-item">
                  <div className="authority-icon-wrap">
                    <Icon aria-hidden="true" />
                  </div>
                  <div>
                    <h3>{point.title}</h3>
                    <p>{point.text}</p>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="authority-cta-group">
            <a href="/#contact-form" className="cta-button authority-cta" onClick={handlePrimaryCtaClick}>
              {CONVERSION_OFFER.primaryCtaLabel}
            </a>
            <a
              href="https://calendar.notion.so/meet/alexandermagnusson/0az364lq3"
              className="authority-secondary-link"
              onClick={handleSecondaryCtaClick}
            >
              {CONVERSION_OFFER.secondaryCtaLabel}
            </a>
          </div>
          <p className="authority-offer-note">{CONVERSION_OFFER.urgencyLabel}. {CONVERSION_OFFER.deadlineLabel}.</p>
        </div>
      </div>
    </section>
  );
}
