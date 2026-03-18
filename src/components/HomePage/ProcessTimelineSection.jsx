import React from 'react';
import './ProcessTimelineSection.css';
import { trackButtonClick } from '../../utils/amplitudeTracker';
import { CONVERSION_OFFER } from '../../constants/conversionOffer';
import { BRAND_NAME } from '../../constants/brand';

const PROCESS_STEPS = [
  {
    phase: '01',
    title: 'Audit Kickoff',
    timeframe: 'Day 0-2',
    detail: 'We align on your growth objective, funnel pressure points, and the metrics that need to become trustworthy first.',
  },
  {
    phase: '02',
    title: 'Signal Quality Review',
    timeframe: 'Day 3-5',
    detail: 'Our team reviews tracking quality, event structure, and attribution breaks so decisions are based on clean data.',
  },
  {
    phase: '03',
    title: 'Implementation Sprint',
    timeframe: 'Week 2',
    detail: 'We execute the highest-impact fixes in your stack and remove blockers that keep teams waiting on analytics.',
  },
  {
    phase: '04',
    title: 'Experiment Roadmap',
    timeframe: 'Week 3',
    detail: 'You receive a prioritized plan for tests, funnel changes, and reporting workflows your team can run immediately.',
  },
  {
    phase: '05',
    title: 'Enablement And Handover',
    timeframe: 'Week 4+',
    detail: 'We document what was shipped, train your team, and leave you with a practical operating rhythm for growth decisions.',
  },
];

export default function ProcessTimelineSection({ id = 'process-section' }) {
  const handleCtaClick = () => {
    trackButtonClick(`${CONVERSION_OFFER.primaryCtaLabel} - Process Timeline`, 'Homepage Process Timeline Section');
  };

  return (
    <section className="process-timeline-section" id={id} aria-labelledby="process-timeline-title">
      <div className="process-timeline-container">
        <div className="process-timeline-intro">
          <p className="process-kicker">How We Work</p>
          <h2 className="process-title" id="process-timeline-title">A clear timeline from audit to execution.</h2>
          <p className="process-subtitle">
            {BRAND_NAME}
            {' '}
            runs engagements in focused phases so your team always knows what happens next and what outcome to expect.
          </p>
          <a href="/#contact-form" className="cta-button process-cta-button" onClick={handleCtaClick}>
            {CONVERSION_OFFER.primaryCtaLabel}
          </a>
          <p className="process-proof">{CONVERSION_OFFER.proofLine}</p>
        </div>

        <ol className="process-timeline-list" aria-label="How we work timeline">
          {PROCESS_STEPS.map((step) => (
            <li className="process-timeline-item" key={step.phase}>
              <div className="process-phase-badge">{step.phase}</div>
              <article className="process-step-card">
                <header className="process-step-header">
                  <h3>{step.title}</h3>
                  <span>{step.timeframe}</span>
                </header>
                <p>{step.detail}</p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}