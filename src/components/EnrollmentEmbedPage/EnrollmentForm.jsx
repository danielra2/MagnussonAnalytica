// src/components/EnrollmentEmbedPage/EnrollmentForm.jsx
import React, { useState } from 'react';
import './EnrollmentForm.css';
import { trackEvent } from '../../utils/amplitudeTracker';
import emailjs from '@emailjs/browser';
import { CONVERSION_OFFER } from '../../constants/conversionOffer';

// --- EMAILJS CONFIGURATION ---
const SERVICE_ID = 'service_m41gwtd';
const PUBLIC_KEY = 'zoMIuFPodloDD3Z0n';
const USER_ENROLL_TEMPLATE_ID = 'template_p55ow6d';
const INTERNAL_ENROLL_ALERT_ID = 'template_7li5dxz';
// ------------------------------

export default function EnrollmentForm({ courseTitle }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('Sending course request...');

    const form = event.target;
    const userEmail = form.email.value;
    const userName = form.name.value;
    
    const userParams = {
      course_title: courseTitle,
      to_name: userName,
      to_email: userEmail,
    };

    const internalParams = {
      course_title: courseTitle,
      user_name: userName,
      user_email: userEmail,
      company: form.company.value || 'N/A',
      // COMMA SEPARATED LIST
      team_emails: 'horatiu@magnussonanalytica.com, daniel.radoi@magnussonanalytica.com, alexander.magnusson@magnussonanalytica.com, arran@magnussonanalytica.com'
    };
    
    try {
      await Promise.all([
        emailjs.send(SERVICE_ID, USER_ENROLL_TEMPLATE_ID, userParams, PUBLIC_KEY),
        emailjs.send(SERVICE_ID, INTERNAL_ENROLL_ALERT_ID, internalParams, PUBLIC_KEY)
      ]);

      trackEvent('Enrollment Form Submitted', { course_title: courseTitle });
      setStatus('');
      setIsSubmitted(true);
    } catch (error) {
      console.error('Enrollment Error:', error);
      setStatus('We could not send your course request. Please try again in a moment.');
    }
  };

  if (isSubmitted) {
    return (
      <div className="enrollment-form-container" style={{ textAlign: 'center', padding: '40px' }}>
        <p style={{ fontSize: '1.4rem', color: '#00d4aa', fontWeight: '600' }}>Your course request is in.</p>
        <p style={{ color: 'rgba(255, 255, 255, 0.8)', marginTop: '10px' }}>
          We will reply with fit, pricing, and next steps shortly.
        </p>
      </div>
    );
  }

  return (
    <form className="enrollment-form-container" onSubmit={handleSubmit}>
      <div className="form-group"><label htmlFor="email">Work Email*</label><input type="email" name="email" required /></div>
      <div className="form-group"><label htmlFor="name">Full Name*</label><input type="text" name="name" required /></div>
      <div className="form-group"><label htmlFor="company">Company / Role (Optional)</label><input type="text" name="company" /></div>
      <button type="submit" className="cta-button form-submit-button" disabled={status === 'Sending course request...'}>
        {status === 'Sending course request...' ? 'Sending course request...' : CONVERSION_OFFER.courseReserveCtaLabel}
      </button>
      <p className="enrollment-cta-proof">
        {CONVERSION_OFFER.courseProofLine} {CONVERSION_OFFER.deadlineLabel}.
      </p>
      <p className="enrollment-secondary-route">
        Prefer to confirm fit live?
        {' '}
        <a
          href="https://calendar.notion.so/meet/alexandermagnusson/0az364lq3"
          className="enrollment-secondary-link"
          onClick={() => trackEvent('Secondary CTA Clicked', { cta_name: CONVERSION_OFFER.secondaryCtaLabel, placement: 'Enrollment Form' })}
        >
          {CONVERSION_OFFER.secondaryCtaLabel}
        </a>
      </p>
      {status && <p style={{ marginTop: '20px', textAlign: 'center', color: '#ff6b35' }}>{status}</p>}
    </form>
  );
}