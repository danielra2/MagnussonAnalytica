// src/components/EnrollmentEmbedPage/EnrollmentEmbedPage.jsx

import React from 'react';
import { useSearchParams } from 'react-router-dom';
import './EnrollmentEmbedPage.css';
import EnrollmentForm from './EnrollmentForm.jsx'; // Import the new component
import { CONVERSION_OFFER } from '../../constants/conversionOffer';

export default function EnrollmentEmbedPage() {
  const [searchParams] = useSearchParams();
  const courseTitle = searchParams.get('course') || 'General Inquiry'; 

  return (
      <section className="enrollment-embed-section">
          <h1 className="enrollment-embed-title">Start your course request</h1>
          <p className="enrollment-offer-banner">{CONVERSION_OFFER.campaignLabel} · {CONVERSION_OFFER.deadlineLabel}</p>
          <h2 className="enrollment-embed-subtitle">Selected course: {courseTitle}</h2>
                    <ul className="enrollment-proof-strip" aria-label="Enrollment outcomes">
                        <li>Choose the format that fits your team: 4 hours, 8 hours, or full day</li>
                        <li>Leave with exercises and workflows your team can apply immediately</li>
                        <li>{CONVERSION_OFFER.urgencyLabel}</li>
                    </ul>
          
          {/* Replaced HubSpot embed with native EnrollmentForm component */}
          <EnrollmentForm courseTitle={courseTitle} />

          <p className="enrollment-note">
              We only use your details to confirm fit, pricing, and next steps for this course.
          </p>
      </section>
  );
}