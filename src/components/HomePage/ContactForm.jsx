import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import './ContactForm.css';
import { trackEvent } from '../../utils/amplitudeTracker'; 
import emailjs from '@emailjs/browser';
import { CONVERSION_OFFER } from '../../constants/conversionOffer';

const SERVICE_ID = 'service_e2zy5ws'; 
const PUBLIC_KEY = 'zoMIuFPodloDD3Z0n';
const USER_CONFIRM_TEMPLATE_ID = 'template_p55ow6d';
const INTERNAL_ALERT_TEMPLATE_ID = 'template_7li5dxz'; 

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [status, setStatus] = useState('');
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!captchaValue) return;

    setStatus('Sending request...');

    const form = event.target;
    const userEmail = form.email.value;
    const userName = form.name.value;
    const userFullName = `${userName} ${form.surname.value}`;

    const userTemplateParams = {
      to_name: userName,
      to_email: userEmail, 
    };

    const internalTemplateParams = {
      from_name: userFullName,
      from_email: userEmail,
      message: form.message.value,
      page_uri: window.location.href,
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
      setStatus('We could not send your request. Please try again in a moment.');
    }
  };

  if (isSubmitted) {
    return (
      <section className="contact-section" id="contact-form">
        <h2 className="contact-title">Your audit request is in</h2>
        <div className="contact-form" style={{ textAlign: 'center', padding: '40px' }}>
          <p style={{ fontSize: '1.4rem', color: '#ff6b35', fontWeight: '600' }}>Check your inbox for next steps.</p>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', marginTop: '10px' }}>
            We will review your details and reply with the best next step for your analytics or growth goal.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="contact-section" id="contact-form">
      <h2 className="contact-title">Get your free audit plan</h2>
      <p className="contact-offer-banner">
        {CONVERSION_OFFER.campaignLabel} · {CONVERSION_OFFER.urgencyLabel} · {CONVERSION_OFFER.deadlineLabel}
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group"><input type="text" name="name" placeholder="First name" required /></div>
        <div className="form-group"><input type="text" name="surname" placeholder="Last name" required /></div>
        <div className="form-group"><input type="email" name="email" placeholder="Work email" required /></div>
        <div className="form-group"><textarea name="message" rows="5" placeholder="What outcome do you want to improve with analytics, experimentation, or reporting?" required></textarea></div>
        
        <div className="captcha-container">
          <ReCAPTCHA
            sitekey="6LdIen4sAAAAAFd_KliS6kGz_liS7yfIWhKtCcx_"
            onChange={(value) => setCaptchaValue(value)}
            theme="dark"
          />
        </div>

        <button type="submit" className="cta-button form-submit-button" disabled={!captchaValue || status === 'Sending request...'}>
          {status === 'Sending request...' ? 'Sending request...' : CONVERSION_OFFER.primaryCtaLabel}
        </button>
        <p className="contact-cta-proof">
          {CONVERSION_OFFER.proofLine} {CONVERSION_OFFER.deadlineLabel}.
        </p>
        <p className="contact-secondary-route">
          Prefer to talk it through live?
          {' '}
          <a
            href="https://calendar.notion.so/meet/alexandermagnusson/0az364lq3"
            className="contact-secondary-link"
            onClick={() => trackEvent('Secondary CTA Clicked', { cta_name: CONVERSION_OFFER.secondaryCtaLabel, placement: 'Contact Form' })}
          >
            {CONVERSION_OFFER.secondaryCtaLabel}
          </a>
        </p>
        {status && <p style={{ marginTop: '20px', textAlign: 'center', color: '#ff6b35' }}>{status}</p>}
      </form>
    </section>
  );
}