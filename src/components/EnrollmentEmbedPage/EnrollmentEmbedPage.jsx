// src/components/EnrollmentEmbedPage/EnrollmentEmbedPage.jsx

import React from 'react';
import { useSearchParams } from 'react-router-dom';
import './EnrollmentEmbedPage.css';

// Codul embed furnizat de HubSpot
const HUBSPOT_EMBED_CODE = `
    <div 
        class="hs-form-frame" 
        data-region="na1" 
        data-form-id="283e2a2e-66c5-4885-a88f-f93e43d92302" 
        data-portal-id="48960057"
    ></div>
`;

export default function EnrollmentEmbedPage() {
  const [searchParams] = useSearchParams();
  const courseTitle = searchParams.get('course') || 'General Inquiry'; 

  return (
      <section className="enrollment-embed-section">
          <h1 className="enrollment-embed-title">Enrollment Form</h1>
          <h2 className="enrollment-embed-subtitle">Course: {courseTitle}</h2>
          <p className="enrollment-description">
            Please fill out the form below to secure your spot.
          </p>
          
          {/* SOLUȚIE FINALĂ: Randăm codul HTML direct. Această metodă 
             este cea mai robustă pentru codurile embed externe. */}
          <div 
              id="hubspot-form-target" 
              className="hubspot-form-wrapper"
              dangerouslySetInnerHTML={{ __html: HUBSPOT_EMBED_CODE }}
          />

          <p className="enrollment-note">
              Your data is safe with us. We will contact you shortly to confirm your enrollment details.
          </p>
      </section>
  );
}