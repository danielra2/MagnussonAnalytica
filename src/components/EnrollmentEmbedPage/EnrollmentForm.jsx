// src/components/EnrollmentEmbedPage/EnrollmentForm.jsx

import React, { useState } from 'react';
import './EnrollmentForm.css';
import { trackEvent } from '../../utils/amplitudeTracker'; 

// --- CONFIGURATION FOR HUBSPOT ---
// These are the IDs for the Enrollment Form (Adjust as necessary if HubSpot IDs change)
const PORTAL_ID = '48960057'; 
const FORM_GUID = '283e2a2e-66c5-4885-a88f-f93e43d92302'; // Using the GUID from the original embed code
// ----------------------------------

export default function EnrollmentForm({ courseTitle }) {
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
        { name: 'email', value: formData.get('email') },
        { name: 'name', value: formData.get('name') },
        // Adaugă un câmp ascuns pentru titlul cursului
        { name: 'course_title', value: courseTitle }, 
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
        trackEvent('Enrollment Form Submitted', {
            form_name: 'Amplitude Course Enrollment',
            course_title: courseTitle,
        });

        setStatus('');
        setIsSubmitted(true);
      } else {
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
      <div className="enrollment-form-container" style={{ textAlign: 'center', padding: '40px' }}>
        <p style={{ 
            fontSize: '1.4rem', 
            color: '#00d4aa', // Success color
            fontWeight: '600' 
          }}>
          Success! Your enrollment for "{courseTitle}" has been received!
        </p>
        <p style={{ color: 'rgba(255, 255, 255, 0.8)', marginTop: '10px' }}>
          A member of the Magnusson Analytica team will contact you shortly to confirm details.
        </p>
      </div>
    );
  }

  return (
    <form className="enrollment-form-container" onSubmit={handleSubmit}>
      <p style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: '10px' }}>
        Please fill out the form below to secure your spot in **{courseTitle}**.
      </p>

      {/* Câmp Email */}
      <div className="form-group">
        <label htmlFor="email">Email*</label>
        <input type="email" id="email" name="email" placeholder="Your Email Address" required />
      </div>

      {/* Câmp Name */}
      <div className="form-group">
        <label htmlFor="name">Full Name*</label>
        <input type="text" id="name" name="name" placeholder="Your Full Name" required />
      </div>

      {/* Câmp Company/Role (Opțional, pentru context) */}
      <div className="form-group">
        <label htmlFor="company">Company / Role (Optional)</label>
        <input type="text" id="company" name="company" placeholder="Company Name or Role" />
      </div>

      <button type="submit" className="cta-button form-submit-button" disabled={status === 'Submitting...'}>
        {status === 'Submitting...' ? 'Submitting...' : 'Enroll Now'}
      </button>
      
      {status && status !== 'Submitting...' && (
          <p style={{ marginTop: '20px', textAlign: 'center', color: status.startsWith('Error') ? '#ff6b35' : '#00d4aa' }}>
              {status}
          </p>
      )}
    </form>
  );
}