// src/components/HomePage/ContactForm.jsx
import React, { useState } from 'react';
import './ContactForm.css';
import { trackEvent } from '../../utils/amplitudeTracker'; 
import emailjs from '@emailjs/browser';

// --- EMAILJS CONFIGURATION ---
// REPLACE THESE WITH YOUR ACTUAL KEYS
const SERVICE_ID = 'service_e2zy5ws'; 
const PUBLIC_KEY = 'zoMIuFPodloDD3Z0n';
const USER_CONFIRM_TEMPLATE_ID = 'template_p55ow6d';
const INTERNAL_ALERT_TEMPLATE_ID = 'template_7li5dxz'; 
// ------------------------------

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('Sending...');

    const form = event.target;
    const userEmail = form.email.value;
    const userName = form.name.value;
    const userFullName = `${userName} ${form.surname.value}`;

    // 1. Params for the User's "Thank You" email
    const userTemplateParams = {
      to_name: userName,
      to_email: userEmail, 
    };

    // 2. Params for the Internal Alert (Sent to the team)
    const internalTemplateParams = {
      from_name: userFullName,
      from_email: userEmail,
      message: form.message.value,
      page_uri: window.location.href,
      // COMMA SEPARATED LIST FOR MULTIPLE RECIPIENTS
      team_emails: 'horatiu@magnussonanalytica.com, daniel.radoi@magnussonanalytica.com, alexander.magnusson@magnussonanalytica.com, arran@magnussonanalytica.com'
    };
    
    try {
      await Promise.all([
        emailjs.send(SERVICE_ID, USER_CONFIRM_TEMPLATE_ID, userTemplateParams, PUBLIC_KEY),
        emailjs.send(SERVICE_ID, INTERNAL_ALERT_TEMPLATE_ID, internalTemplateParams, PUBLIC_KEY)
      ]);

      trackEvent('Form Submitted', { form_name: 'Contact Form - Direct Engagement' });
      setStatus('');
      setIsSubmitted(true);
    } catch (error) {
      console.error('Email Error:', error);
      setStatus(`Error: ${error.text || 'Check your Template IDs and Public Key.'}`);
    }
  };

  if (isSubmitted) {
    return (
      <section className="contact-section" id="contact-form">
        <h2 className="contact-title">Message Received!</h2>
        <div className="contact-form" style={{ textAlign: 'center', padding: '40px' }}>
          <p style={{ fontSize: '1.4rem', color: '#ff6b35', fontWeight: '600' }}>Check your inbox!</p>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', marginTop: '10px' }}>
            MA team will be in touch soon.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="contact-section" id="contact-form">
      <h2 className="contact-title">Let's have a chat</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group"><input type="text" name="name" placeholder="Name" required /></div>
        <div className="form-group"><input type="text" name="surname" placeholder="Surname" required /></div>
        <div className="form-group"><input type="email" name="email" placeholder="Email" required /></div>
        <div className="form-group"><textarea name="message" rows="5" placeholder="How can we help?" required></textarea></div>
        <button type="submit" className="cta-button form-submit-button" disabled={status === 'Sending...'}>
          {status === 'Sending...' ? 'Sending...' : 'Send Message'}
        </button>
        {status && <p style={{ marginTop: '20px', textAlign: 'center', color: '#ff6b35' }}>{status}</p>}
      </form>
    </section>
  );
}