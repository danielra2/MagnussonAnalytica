// src/components/EnrollmentEmbedPage/EnrollmentEmbedPage.jsx

import React from 'react';
import { useSearchParams } from 'react-router-dom';
import './EnrollmentEmbedPage.css';
import EnrollmentForm from './EnrollmentForm.jsx'; // Import the new component

export default function EnrollmentEmbedPage() {
  const [searchParams] = useSearchParams();
  const courseTitle = searchParams.get('course') || 'General Inquiry'; 

  return (
      <section className="enrollment-embed-section">
          <h1 className="enrollment-embed-title">Secure Your Spot</h1>
          <h2 className="enrollment-embed-subtitle">Course: {courseTitle}</h2>
          
          {/* Replaced HubSpot embed with native EnrollmentForm component */}
          <EnrollmentForm courseTitle={courseTitle} />

          <p className="enrollment-note">
              Your data is safe with us. We will contact you shortly to confirm your enrollment details.
          </p>
      </section>
  );
}