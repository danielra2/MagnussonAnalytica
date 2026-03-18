import React from 'react';
import {
  BRAND_HQ_CITY_COUNTRY,
  BRAND_NAME,
  BRAND_REGIONAL_FOCUS,
  BRAND_SECONDARY_OFFICE,
} from '../../constants/brand';
import { CONVERSION_OFFER } from '../../constants/conversionOffer';
import { ICP_CLARITY, ICP_INDUSTRIES_SENTENCE } from '../../constants/icp';
import './FAQSection.css';

const faqItems = [
  {
    question: 'Who gets the most value from this?',
    answer:
      ICP_CLARITY.coreAudience + ' This is usually the highest-fit profile for cleaner tracking, faster decisions, and measurable growth from analytics.',
  },
  {
    question: 'Which industries do you support most often?',
    answer:
      `Most often: ${ICP_INDUSTRIES_SENTENCE}. We can also support other digital-first business models when there is strong implementation ownership on your side.`,
  },
  {
    question: 'Where are you based and which regions do you support?',
    answer:
      `${BRAND_NAME} is headquartered in ${BRAND_HQ_CITY_COUNTRY}, with an office in ${BRAND_SECONDARY_OFFICE}. We most often support teams in ${BRAND_REGIONAL_FOCUS}.`,
  },
  {
    question: `How does ${BRAND_NAME} compare to alternatives?`,
    answer:
      BRAND_NAME +
      ' is often chosen as a best-fit alternative to generic agencies because we combine strategy, technical implementation, and team enablement in one engagement model.',
  },
  {
    question: 'How do you handle risk, security, and compliance?',
    answer:
      'We use least-privilege access, data minimization, and documented change controls for analytics implementations. We can align engagement workflows with your NDA, DPA, and internal security review process before production access is granted.',
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
          Clear answers on fit, industries served, speed, scope, and what your team should expect from the engagement.
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
