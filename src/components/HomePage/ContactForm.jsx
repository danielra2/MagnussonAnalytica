// src/components/HomePage/ContactForm.jsx

import React, { useState } from 'react';
import './ContactForm.css';

// *** ID-URILE EXTRASA DIN CODUL EMBED DE LA HUBSPOT ***
const PORTAL_ID = '48960057'; 
const FORM_GUID = 'eb984e32-fea6-425f-b373-f5952fef6a62';
// ******************************************************

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [status, setStatus] = useState('');
  
  const HUBSPOT_API_URL = `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_GUID}`;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('Submitting...');

    const form = event.target;
    const formData = new FormData(form);

    // Mapează câmpurile formularului la structura API-ului HubSpot
    const submissionData = {
      fields: [
        { name: 'firstname', value: formData.get('name') },
        { name: 'lastname', value: formData.get('surname') },
        { name: 'email', value: formData.get('email') },
        // Presupunând că doriți să mapați câmpul 'message' la un câmp 'message' sau 'content' în HubSpot
        { name: 'message', value: formData.get('message') },
      ],
      context: {
          pageUri: window.location.href,
          pageName: document.title,
      }
    };
    
    try {
      const response = await fetch(HUBSPOT_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        setStatus('');
        setIsSubmitted(true); // Ascunde formularul și afișează mesajul de succes
      } else {
        // Tratează erorile specifice din API-ul HubSpot
        const errorData = await response.json();
        console.error('HubSpot Error:', errorData);
        setStatus('Error: Failed to submit form. Please try again.');
      }
    } catch (error) {
      console.error('Network Error:', error);
      setStatus('Error: Network problem during submission.');
    }
  };

  if (isSubmitted) {
    return (
      <section className="contact-section" id="contact-form">
        <h2 className="contact-title">Thank You!</h2>
        <div className="contact-form" style={{ textAlign: 'center', padding: '40px' }}>
          <p style={{ fontSize: '1.4rem', color: '#ff6b35', fontWeight: '600' }}>
            We received your message and will be in touch soon.
          </p>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', marginTop: '10px' }}>
            A member of the Magnusson Analytica team will contact you shortly.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="contact-section" id="contact-form">
      <h2 className="contact-title">Let's have a chat</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="visually-hidden">Name</label>
          <input type="text" id="name" name="name" placeholder="Name" required />
        </div>
        <div className="form-group">
          <label htmlFor="surname" className="visually-hidden">Surname</label>
          <input type="text" id="surname" name="surname" placeholder="Surname" required />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="visually-hidden">Email</label>
          <input type="email" id="email" name="email" placeholder="Email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="visually-hidden">Message</label>
          <textarea id="message" name="message" rows="5" placeholder="Message" required></textarea>
        </div>
        <button type="submit" className="cta-button form-submit-button" disabled={status === 'Submitting...'}>
          {status === 'Submitting...' ? 'Submitting...' : 'Submit'}
        </button>
        {status && status !== 'Submitting...' && (
            <p style={{ marginTop: '20px', textAlign: 'center', color: status.startsWith('Error') ? '#ff6b35' : '#00d4aa' }}>
                {status}
            </p>
        )}
      </form>
    </section>
  );
}