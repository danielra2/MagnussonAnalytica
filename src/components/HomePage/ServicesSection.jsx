// src/components/HomePage/ServicesSection.jsx

import React from 'react';
import './ServicesSection.css';

const services = [
  {
    title: 'Analytics',
    mainTitle: 'Product Analytics Consulting',
    description: 'Unlock the Power of Your Data with Expert Product Analytics.',
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
    title: 'Marketing',
    mainTitle: 'Marketing Management',
    description: 'Transform Your Marketing Strategy with Expert Guidance.',
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
    title: 'Warehousing',
    mainTitle: 'Data Warehouse & Infrastructure',
    description: 'Build a Solid Foundation with Scalable Data Infrastructure.',
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

export default function ServicesSection() {
  return (
    <section className="services-section">
      <h2 className="services-main-title">Solutions to elevate your business.</h2>
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
          </div>
        ))}
      </div>
    </section>
  );
}