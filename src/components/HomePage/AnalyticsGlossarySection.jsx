import React from 'react';
import { Link } from 'react-router-dom';
import './AnalyticsGlossarySection.css';
import { BRAND_NAME } from '../../constants/brand';
import { CONVERSION_OFFER } from '../../constants/conversionOffer';
import { trackButtonClick } from '../../utils/amplitudeTracker';
import { ICP_INDUSTRIES_SENTENCE } from '../../constants/icp';

const GLOSSARY_TERMS = [
  {
    category: 'Instrumentation',
    term: 'Event',
    definition: 'A recorded user or system action, such as Signed Up, Viewed Pricing, or Completed Checkout.',
    importance: 'If events are inconsistent, every funnel, dashboard, and experiment result becomes harder to trust.',
  },
  {
    category: 'Instrumentation',
    term: 'Event Property',
    definition: 'Extra context attached to an event, such as plan type, device, country, or campaign source.',
    importance: 'Properties make analysis useful because they let teams slice behavior by segment instead of looking at averages only.',
  },
  {
    category: 'Governance',
    term: 'Taxonomy',
    definition: 'The naming system for events and properties so tracking stays consistent across teams and tools.',
    importance: 'A clean taxonomy reduces duplicate events, unclear labels, and reporting debates that slow execution.',
  },
  {
    category: 'Analysis',
    term: 'Funnel',
    definition: 'A sequence of steps users should move through, such as Landing Page to Signup to Activation.',
    importance: 'Funnels help teams spot where conversion breaks and which stage deserves attention first.',
  },
  {
    category: 'Growth',
    term: 'Activation',
    definition: 'The moment a user reaches the first meaningful outcome that suggests they understood the product value.',
    importance: 'Activation is often the clearest early signal that acquisition quality and onboarding are working together.',
  },
  {
    category: 'Retention',
    term: 'Cohort',
    definition: 'A group of users who share a trait or time period, such as users acquired in March or trial users from paid search.',
    importance: 'Cohorts show whether performance is truly improving or if one segment is hiding the real pattern.',
  },
  {
    category: 'Retention',
    term: 'Retention',
    definition: 'How well users return and continue receiving value from the product over time.',
    importance: 'Retention reveals whether growth is durable or whether new acquisition is covering up deeper product issues.',
  },
  {
    category: 'Attribution',
    term: 'Attribution',
    definition: 'The method used to assign credit for a conversion or revenue outcome to a channel, campaign, or touchpoint.',
    importance: 'Without clear attribution rules, marketing and product teams can optimize toward the wrong levers.',
  },
  {
    category: 'Experimentation',
    term: 'A/B Test',
    definition: 'A controlled experiment where two or more variants are compared to measure which one performs better.',
    importance: 'Tests only help when instrumentation is clean enough to measure impact without noise or bias.',
  },
  {
    category: 'Signal Quality',
    term: 'North Star Metric',
    definition: 'A primary metric that reflects whether customers are receiving recurring value from the product.',
    importance: 'A strong north star helps teams prioritize what to improve instead of chasing disconnected dashboard metrics.',
  },
];

export default function AnalyticsGlossarySection({ id = 'analytics-glossary-section' }) {
  const handleTrainingClick = () => {
    trackButtonClick(`${CONVERSION_OFFER.tertiaryCtaLabel} - Analytics Glossary`, 'Homepage Analytics Glossary Section');
  };

  const handleAuditClick = () => {
    trackButtonClick(`${CONVERSION_OFFER.primaryCtaLabel} - Analytics Glossary`, 'Homepage Analytics Glossary Section');
  };

  return (
    <section className="analytics-glossary-section" id={id} aria-labelledby="analytics-glossary-title">
      <div className="analytics-glossary-container">
        <header className="analytics-glossary-header">
          <div className="analytics-glossary-intro">
            <p className="analytics-glossary-kicker">Education</p>
            <h2 className="analytics-glossary-title" id="analytics-glossary-title">
              A shared glossary for the terms behind cleaner analytics decisions.
            </h2>
            <p className="analytics-glossary-subtitle">
              {BRAND_NAME}
              {' '}
              helps product, growth, and data teams align on meaning before they align on dashboards, funnels, experiments, and reporting workflows.
              {' '}
              Most often for teams in {ICP_INDUSTRIES_SENTENCE}.
            </p>
          </div>

          <aside className="analytics-glossary-callout" aria-label="Why glossary matters">
            <p className="analytics-glossary-callout-label">Why this matters</p>
            <p className="analytics-glossary-callout-text">
              Most analytics confusion starts before the dashboard. It starts when product, growth, and data teams use the same term to mean different things.
            </p>
          </aside>
        </header>

        <div className="analytics-glossary-grid">
          {GLOSSARY_TERMS.map((item) => (
            <article className="analytics-glossary-card" key={item.term}>
              <div className="analytics-glossary-card-header">
                <span className="analytics-glossary-category">{item.category}</span>
                <h3>{item.term}</h3>
              </div>
              <p className="analytics-glossary-definition">{item.definition}</p>
              <p className="analytics-glossary-importance">
                <strong>Why it matters:</strong>
                {' '}
                {item.importance}
              </p>
            </article>
          ))}
        </div>

        <div className="analytics-glossary-footer">
          <div>
            <p className="analytics-glossary-footer-title">Need your team speaking the same analytics language?</p>
            <p className="analytics-glossary-footer-text">
              Use this as a starting point, then go deeper with practical training, implementation support, or a focused audit plan.
            </p>
          </div>
          <div className="analytics-glossary-actions">
            <Link to="/amplitude-courses" className="cta-button analytics-glossary-primary-cta" onClick={handleTrainingClick}>
              {CONVERSION_OFFER.tertiaryCtaLabel}
            </Link>
            <a href="/#contact-form" className="analytics-glossary-secondary-cta" onClick={handleAuditClick}>
              {CONVERSION_OFFER.primaryCtaLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
