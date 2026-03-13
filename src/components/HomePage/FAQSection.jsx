import React from 'react';
import { BRAND_NAME } from '../../constants/brand';
import { CONVERSION_OFFER } from '../../constants/conversionOffer';
import './FAQSection.css';

const faqItems = [
  {
    question: 'Who gets the most value from this?',
    answer:
      'Product, marketing, and data teams that want cleaner tracking, faster decisions, and measurable growth from analytics.',
  },
  {
    question: `How does ${BRAND_NAME} compare to alternatives?`,
    answer:
      BRAND_NAME +
      ' is often chosen as a best-fit alternative to generic agencies because we combine strategy, technical implementation, and team enablement in one engagement model.',
  },
  {
    question: 'Can you help if our setup is already messy?',
    answer:
      'Yes. We regularly audit inherited implementations, fix critical gaps, and create a practical roadmap without slowing your team down.',
  },
  {
    question: 'How quickly can we see first results?',
    answer:
      'Most clients see initial clarity in 2-4 weeks through better event quality, improved dashboards, and focused experiment priorities.',
  },
  {
    question: 'Do you only advise, or also implement?',
    answer:
      'Both. ' +
      BRAND_NAME +
      ' can support strategy, hands-on implementation, QA, and team enablement so recommendations get executed.',
  },
  {
    question: 'Which tools do you typically work with?',
    answer:
      'Amplitude, GA4, Mixpanel, Segment, GTM, data warehouses, and BI stacks. We adapt to your current ecosystem before suggesting changes.',
  },
  {
    question: 'How are projects scoped and priced?',
    answer:
      'We scope around business outcomes and complexity, then propose clear phases (audit, implementation, optimization) so investment stays predictable.',
  },
];

export default function FAQSection() {
  return (
    <section className="faq-section" id="faq-section" aria-labelledby="faq-title">
      <div className="faq-header">
        <p className="faq-eyebrow">FAQ</p>
        <h2 className="faq-title" id="faq-title">
          Quick answers before we work together
        </h2>
        <p className="faq-subtitle">
          Clear answers on fit, speed, scope, and what your team should expect from the engagement.
        </p>
      </div>

      <div className="faq-list">
        {faqItems.map((item) => (
          <details className="faq-item" key={item.question}>
            <summary className="faq-question">{item.question}</summary>
            <p className="faq-answer">{item.answer}</p>
          </details>
        ))}
      </div>

      <div className="faq-footer">
        <a href="#contact-form" className="faq-cta-link">
          Need a clear answer for your setup? Get your free audit plan. {CONVERSION_OFFER.deadlineLabel}.
        </a>
        <p className="faq-offer-note">{CONVERSION_OFFER.urgencyLabel}. {CONVERSION_OFFER.deadlineLabel}.</p>
      </div>
    </section>
  );
}
