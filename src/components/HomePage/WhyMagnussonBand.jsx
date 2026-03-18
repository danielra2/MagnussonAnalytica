import React from 'react';
import { FaBolt, FaLayerGroup, FaUserTie, FaAward } from 'react-icons/fa';
import {
  BRAND_LOCATION_LINE,
  BRAND_NAME,
  BRAND_REGIONAL_FOCUS,
} from '../../constants/brand';
import { trackButtonClick } from '../../utils/amplitudeTracker';
import { CONVERSION_OFFER } from '../../constants/conversionOffer';
import { ICP_INDUSTRIES_SENTENCE } from '../../constants/icp';
import './WhyMagnussonBand.css';

const differentiators = [
  {
    icon: FaBolt,
    metric: '2-4 weeks',
    detail: 'to surface tracking issues, sharpen funnels, and set clear priorities.',
  },
  {
    icon: FaLayerGroup,
    metric: '3-phase model',
    detail: 'from audit to implementation to optimization without vendor handoffs.',
  },
  {
    icon: FaUserTie,
    metric: 'Founder-led delivery',
    detail: 'so decisions move faster and recommendations actually ship.',
  },
  {
    icon: FaAward,
    metric: 'Official partner depth',
    detail: 'for product and growth teams that need more than generic training.',
  },
];

export default function WhyMagnussonBand({ partnerCount = 0 }) {
  const handleBandCtaClick = () => {
    trackButtonClick(`${CONVERSION_OFFER.primaryCtaLabel} - Why Magnusson Band`, 'Homepage Why Magnusson Band');
  };

  return (
    <section className="why-magnusson-band" aria-labelledby="why-magnusson-title">
      <div className="why-magnusson-inner">
        <div className="why-magnusson-header">
          <p className="why-magnusson-kicker">Why teams choose us</p>
          <h2 id="why-magnusson-title">Why teams bring {BRAND_NAME} in</h2>
          <p className="why-magnusson-subtitle">
            Get strategy, implementation, and enablement from one team, so tracking quality and decision speed improve together.
            {' '}
            Best fit for product, growth, and data leaders in {ICP_INDUSTRIES_SENTENCE}.
            {' '}
            {BRAND_LOCATION_LINE}. Regional focus: {BRAND_REGIONAL_FOCUS}.
            {' '}
            {partnerCount > 0 ? `Trusted by ${partnerCount} visible partner brands.` : ''}
          </p>
          <p className="why-magnusson-offer">{CONVERSION_OFFER.urgencyLabel}. {CONVERSION_OFFER.deadlineLabel}.</p>
        </div>

        <div className="why-magnusson-grid" role="list" aria-label="Key differentiators">
          {differentiators.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.metric} className="why-magnusson-card" role="listitem">
                <div className="why-magnusson-icon-wrap">
                  <Icon aria-hidden="true" />
                </div>
                <p className="why-magnusson-metric">{item.metric}</p>
                <p className="why-magnusson-detail">{item.detail}</p>
              </article>
            );
          })}
        </div>

        <a href="/#contact-form" className="cta-button why-magnusson-cta" onClick={handleBandCtaClick}>
          {CONVERSION_OFFER.primaryCtaLabel}
        </a>
      </div>
    </section>
  );
}