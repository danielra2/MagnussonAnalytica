// src/components/HomePage/CollaborationSection.jsx

import React from 'react';
import './CollaborationSection.css';
import ampimage from '../../assets/img/ampimage.png';

export default function CollaborationSection() {
  return (
    <section className="collaboration-section">
      <div className="collaboration-container">
        <span className="collaboration-partner-tag">Amplitude</span>
        <h2 className="collaboration-main-title">Our Collaboration</h2>
        <div className="collaboration-content">
          <div className="collaboration-image-wrapper">
            <img src={ampimage} alt="Amplitude Certified Partner Delivery Logo" className="collaboration-logo" />
          </div>
          <div className="collaboration-text-wrapper">
            <p>
              Over the past years we have built a strong working relationship with Amplitude.
            </p>
            <p>
              As their official European partner, we have reviewed design changes, new features and expanding market opportunities.
            </p>
            <p>
              Our collaboration reaches further than just client management. To joint participation in events and workshops for the Amplitude Cohort Community, and the creation of training and workshop materials.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}