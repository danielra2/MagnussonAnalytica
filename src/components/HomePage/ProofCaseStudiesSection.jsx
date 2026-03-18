import React from 'react';
import './ProofCaseStudiesSection.css';
import { FaAward, FaChartBar, FaLinkedin, FaShieldAlt } from 'react-icons/fa';
import { BRAND_NAME } from '../../constants/brand';
import { CONVERSION_OFFER } from '../../constants/conversionOffer';
import { trackButtonClick } from '../../utils/amplitudeTracker';

const EXTERNAL_PROOF_SIGNALS = [
  { icon: FaAward, label: 'Official Amplitude Partner' },
  { icon: FaChartBar, label: 'All outcomes tracked in Amplitude' },
  { icon: FaLinkedin, label: 'Referenced by verified clients on LinkedIn' },
  { icon: FaShieldAlt, label: 'Security-first delivery workflows' },
];

const RISK_COMPLIANCE_POSTURE = [
  {
    id: 'least-privilege',
    title: 'Least-privilege access',
    description:
      'Only assigned team members receive scoped access to analytics, tag manager, and warehouse environments.',
  },
  {
    id: 'data-minimization',
    title: 'Data minimization by default',
    description:
      'Project implementation focuses on required events and properties so unnecessary personal data is not collected.',
  },
  {
    id: 'traceable-changes',
    title: 'Traceable implementation changes',
    description:
      'Tracking updates, QA checks, and reporting changes are documented so teams can verify what changed and when.',
  },
  {
    id: 'client-alignment',
    title: 'Client compliance alignment',
    description:
      'Engagement workflows can align with your legal and security controls, including NDA and DPA requirements.',
  },
];

const MINI_CASE_STUDIES = [
  {
    id: 'b2b-saas',
    context: 'B2B SaaS onboarding funnel',
    headline: 'Activation rate improved from 31% to 44% in 6 weeks.',
    summary:
      'The team had duplicate events and missing onboarding steps. We rebuilt the event taxonomy and fixed high-impact tracking gaps first.',
    metrics: [
      { label: 'Activation rate', value: '31% -> 44% (+13pp)' },
      { label: 'Critical event coverage', value: '68% -> 96%' },
      { label: 'Dashboard data lag', value: '48h -> 6h' },
    ],
    scope: 'Instrumentation cleanup, onboarding funnel mapping, QA workflow',
  },
  {
    id: 'ecommerce',
    context: 'Subscription ecommerce checkout',
    headline: 'Checkout completion increased from 41% to 58% in 8 weeks.',
    summary:
      'We aligned product and growth on one conversion definition, then prioritized experiment backlog based on step-level funnel leaks.',
    metrics: [
      { label: 'Checkout completion', value: '41% -> 58% (+17pp)' },
      { label: 'Experiment velocity', value: '1 -> 5 tests per month' },
      { label: 'CAC payback period', value: '7.2 -> 5.6 months' },
    ],
    scope: 'Funnel redesign, event QA, experiment prioritization',
  },
  {
    id: 'marketplace',
    context: 'Marketplace retention analytics',
    headline: 'Weekly retention visibility improved from 52% to 94% in 5 weeks.',
    summary:
      'The team could not separate acquisition quality from product friction. We introduced cohort monitoring and standardized retention dashboards.',
    metrics: [
      { label: 'Retention reporting coverage', value: '52% -> 94%' },
      { label: 'Duplicate event volume', value: '-63%' },
      { label: 'Decision cycle time', value: '10 days -> 3 days' },
    ],
    scope: 'Cohort framework, taxonomy governance, executive reporting layer',
  },
];

export default function ProofCaseStudiesSection({ id = 'proof-section' }) {
  const handleProofCtaClick = () => {
    trackButtonClick(`${CONVERSION_OFFER.primaryCtaLabel} - Proof Section`, 'Homepage Proof Section');
  };

  return (
    <section className="proof-case-studies-section" id={id} aria-labelledby="proof-case-studies-title">
      <div className="proof-case-studies-container">
        <header className="proof-case-studies-header">
          <p className="proof-case-studies-kicker">Proof</p>
          <h2 id="proof-case-studies-title">Mini case studies with concrete numbers.</h2>
          <p className="proof-case-studies-subtitle">
            {BRAND_NAME}
            {' '}
            helps teams move from ambiguous analytics debates to measurable, operational improvements.
          </p>
        </header>

        <div className="proof-case-studies-grid" role="list" aria-label="Mini case studies with concrete metrics">
          {MINI_CASE_STUDIES.map((study) => (
            <article key={study.id} className="proof-case-study-card" role="listitem">
              <p className="proof-case-study-context">{study.context}</p>
              <h3>{study.headline}</h3>
              <p className="proof-case-study-summary">{study.summary}</p>

              <ul className="proof-case-study-metrics" aria-label={`${study.context} metrics`}>
                {study.metrics.map((metric) => (
                  <li key={`${study.id}-${metric.label}`}>
                    <span className="proof-metric-label">{metric.label}</span>
                    <span className="proof-metric-value">{metric.value}</span>
                  </li>
                ))}
              </ul>

              <p className="proof-case-study-scope">
                <strong>Scope:</strong>
                {' '}
                {study.scope}
              </p>
            </article>
          ))}
        </div>

        <div className="proof-external-signals" aria-label="Third-party verification signals">
          {EXTERNAL_PROOF_SIGNALS.map(({ icon: Icon, label }) => (
            <span key={label} className="proof-external-signal">
              <Icon className="proof-external-signal-icon" aria-hidden="true" />
              {label}
            </span>
          ))}
        </div>

        <section className="proof-risk-compliance" aria-labelledby="proof-risk-compliance-title">
          <div className="proof-risk-compliance-header">
            <p className="proof-risk-compliance-kicker">Risk &amp; Compliance</p>
            <h3 id="proof-risk-compliance-title">
              Security and compliance posture stated clearly before implementation starts.
            </h3>
          </div>

          <ul className="proof-risk-compliance-list" aria-label="Risk and compliance posture details">
            {RISK_COMPLIANCE_POSTURE.map((item) => (
              <li key={item.id} className="proof-risk-compliance-item">
                <p className="proof-risk-compliance-item-title">{item.title}</p>
                <p className="proof-risk-compliance-item-description">{item.description}</p>
              </li>
            ))}
          </ul>

          <p className="proof-risk-compliance-note">
            Delivery plans are reviewed with your legal and security stakeholders before production-level access is granted.
          </p>
        </section>

        <div className="proof-case-studies-footer">
          <p className="proof-case-studies-disclaimer">
            Representative outcomes from recent analytics engagements. Baselines and timelines vary by team and implementation scope.
          </p>
          <a href="/#contact-form" className="cta-button proof-case-studies-cta" onClick={handleProofCtaClick}>
            {CONVERSION_OFFER.primaryCtaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
