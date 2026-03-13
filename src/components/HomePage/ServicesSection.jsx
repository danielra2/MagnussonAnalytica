// src/components/HomePage/ServicesSection.jsx

import React from 'react';
import './ServicesSection.css';
import { SERVICE_STACK_SPECIALIZATIONS } from '../../constants/capabilities';
import { BRAND_NAME } from '../../constants/brand';
import { trackButtonClick } from '../../utils/amplitudeTracker';
import { CONVERSION_OFFER } from '../../constants/conversionOffer';

const services = [
  {
    id: 'analytics',
    title: 'Analytics',
    mainTitle: 'Product Analytics Consulting',
    description: 'Fix tracking gaps, trust your funnels, and make product decisions faster.',
    bestFor:
      'Product and growth teams that need reliable tracking and faster experiment decisions without hiring a full analytics department.',
    alternativeTo:
      'Generalist digital agencies, one-off freelancer setups, or fragmented in-house ownership across multiple teams.',
    items: [
      'Analytics Implementation',
      'User Behaviour Analysis',
      'A/B Testing Strategy',
      'Third-party Integration',
      'Training & Enablement'
    ],
    color: '#ff6b35',
  },
  {
    id: 'marketing',
    title: 'Marketing',
    mainTitle: 'Marketing Management',
    description: 'Connect campaign spend to product behaviour and improve conversion quality.',
    bestFor:
      'Teams that want measurable paid and lifecycle growth tied directly to product analytics signals.',
    alternativeTo:
      'Channel-first agencies that optimize ad dashboards but do not connect outcomes to product usage and retention.',
    items: [
      'MarTech Implementation',
      'Ad Campaign Management',
      'Social Media Management',
      'Website Development',
      'SEO'
    ],
    color: '#ff6b35',
  },
  {
    id: 'warehousing',
    title: 'Warehousing',
    mainTitle: 'Data Warehouse & Infrastructure',
    description: 'Build reliable pipelines and reporting your team can trust every week.',
    bestFor:
      'Organizations scaling quickly that need trustworthy pipelines, governance, and reporting foundations.',
    alternativeTo:
      'Short-term fixes, siloed dashboards, and reactive engineering work that does not improve long-term data quality.',
    items: [
      'Data Warehousing',
      'Event Tracking Infrastructure',
      'Business Automation',
      'Dashboard & BI Pipelines',
      'Data Governance & Compliance'
    ],
    color: '#ff6b35',
  },
];

export default function ServicesSection({ id = 'services-section' }) {
  const handleCtaClick = () => {
    trackButtonClick(`${CONVERSION_OFFER.primaryCtaLabel} - Services Section`, 'Homepage Services Section');
  };

  const handleSecondaryCtaClick = () => {
    trackButtonClick(`${CONVERSION_OFFER.secondaryCtaLabel} - Services Section`, 'Homepage Services Section');
  };

  return (
    <section className="services-section" id={id} aria-labelledby="services-main-title">
      <h2 className="services-main-title" id="services-main-title">Cleaner data, sharper decisions, faster execution.</h2>
      <p className="services-positioning-intro">
        If you need clearer product insights and one team that can implement the work,
        {' '}
        {BRAND_NAME}
        {' '}
        brings strategy, delivery, and enablement into a single engagement.
      </p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card" style={{ '--card-color': service.color }}>
            <span className="service-tag">{service.title}</span>
            <h3 className="service-title">{service.mainTitle}</h3>
            <p className="service-description">{service.description}</p>
            <ul className="service-items">
              {service.items.map((item, i) => (
                <li key={i} className="service-item">
                  <span className="checkmark">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="service-stack-block">
              <p className="service-stack-label">Stack specialisations</p>
              <div className="service-stack-tags">
                {SERVICE_STACK_SPECIALIZATIONS[service.id].map((stackItem) => (
                  <span key={stackItem} className="service-stack-tag">{stackItem}</span>
                ))}
              </div>
            </div>

            <div className="service-comparison-block">
              <p className="service-comparison-line">
                <span className="service-comparison-key">Best for:</span>
                {' '}
                {service.bestFor}
              </p>
              <p className="service-comparison-line">
                <span className="service-comparison-key">Alternative to:</span>
                {' '}
                {service.alternativeTo}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="services-cta-block">
        <a href="/#contact-form" className="cta-button services-cta-button" onClick={handleCtaClick}>
          {CONVERSION_OFFER.primaryCtaLabel}
        </a>
        <a
          href="https://calendar.notion.so/meet/alexandermagnusson/0az364lq3"
          className="services-cta-secondary"
          onClick={handleSecondaryCtaClick}
        >
          {CONVERSION_OFFER.secondaryCtaLabel}
        </a>
        <p className="services-cta-proof">
          {CONVERSION_OFFER.proofLine} {CONVERSION_OFFER.deadlineLabel}.
        </p>
      </div>
    </section>
  );
}