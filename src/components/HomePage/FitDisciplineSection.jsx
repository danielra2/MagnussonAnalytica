import React from 'react';
import './FitDisciplineSection.css';
import { BRAND_NAME } from '../../constants/brand';
import { CONVERSION_OFFER } from '../../constants/conversionOffer';
import { trackButtonClick } from '../../utils/amplitudeTracker';
import { ICP_INDUSTRIES_SENTENCE } from '../../constants/icp';

const ALTERNATIVE_OPTIONS = [
  {
    title: 'Build a full in-house analytics team first',
    detail:
      'Strong long-term path, but hiring and onboarding usually take months before signal quality and experiment velocity improve.',
  },
  {
    title: 'Use multiple specialists across agencies and freelancers',
    detail:
      'Can work, but often creates handoff delays and fragmented ownership across implementation, QA, and decision-making.',
  },
  {
    title: 'Keep patching the stack internally as issues appear',
    detail:
      'Low short-term effort, but hidden tracking debt compounds and slows product, growth, and reporting teams over time.',
  },
  {
    title: 'Buy another analytics tool without fixing instrumentation',
    detail:
      'New tooling can add visibility, but poor event quality still leads to unreliable insights and low confidence decisions.',
  },
];

const NOT_A_FIT = [
  'Teams looking for vanity dashboards without fixing measurement quality.',
  'Companies that only want a one-off setup and no internal enablement afterward.',
  'Organizations unwilling to allocate owner time for implementation and QA decisions.',
  'Teams seeking a pure media-buying or creative production agency relationship.',
];

export default function FitDisciplineSection({ id = 'fit-discipline-section' }) {
  const handlePrimaryCtaClick = () => {
    trackButtonClick(`${CONVERSION_OFFER.primaryCtaLabel} - Fit Discipline`, 'Homepage Fit Discipline Section');
  };

  const handleSecondaryCtaClick = () => {
    trackButtonClick(`${CONVERSION_OFFER.secondaryCtaLabel} - Fit Discipline`, 'Homepage Fit Discipline Section');
  };

  return (
    <section className="fit-discipline-section" id={id} aria-labelledby="fit-discipline-title">
      <div className="fit-discipline-container">
        <header className="fit-discipline-header">
          <p className="fit-discipline-kicker">Fit Discipline</p>
          <h2 className="fit-discipline-title" id="fit-discipline-title">
            The right partner is a fit decision, not just a capability checklist.
          </h2>
          <p className="fit-discipline-subtitle">
            {BRAND_NAME}
            {' '}
            is built for product, growth, and data teams that want clean instrumentation,
            execution ownership, and a practical rhythm for better growth decisions.
            {' '}
            Most common fit: digital-first scale-ups and mid-market companies in {ICP_INDUSTRIES_SENTENCE}.
          </p>
        </header>

        <div className="fit-discipline-grid">
          <article className="fit-card fit-card-alternatives" aria-labelledby="fit-alternatives-title">
            <h3 id="fit-alternatives-title">Alternatives you might be weighing</h3>
            <p>
              These options can be valid depending on your stage, urgency, and internal bandwidth.
            </p>
            <p className="fit-industry-line">
              <strong>Industries we support most often:</strong>
              {' '}
              {ICP_INDUSTRIES_SENTENCE}.
            </p>
            <ul className="fit-card-list">
              {ALTERNATIVE_OPTIONS.map((option) => (
                <li key={option.title} className="fit-card-item">
                  <h4>{option.title}</h4>
                  <p>{option.detail}</p>
                </li>
              ))}
            </ul>
          </article>

          <article className="fit-card fit-card-not-for" aria-labelledby="fit-not-for-title">
            <h3 id="fit-not-for-title">Who we are not for</h3>
            <p>
              A clear no-fit early saves both teams months of friction.
            </p>
            <ul className="fit-card-list fit-card-list-compact">
              {NOT_A_FIT.map((item) => (
                <li key={item} className="fit-card-item">
                  <p>{item}</p>
                </li>
              ))}
            </ul>

            <div className="fit-cta-block">
              <a href="/#contact-form" className="cta-button fit-primary-cta" onClick={handlePrimaryCtaClick}>
                {CONVERSION_OFFER.primaryCtaLabel}
              </a>
              <a
                href="https://calendar.notion.so/meet/alexandermagnusson/0az364lq3"
                className="fit-secondary-cta"
                onClick={handleSecondaryCtaClick}
              >
                {CONVERSION_OFFER.secondaryCtaLabel}
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
