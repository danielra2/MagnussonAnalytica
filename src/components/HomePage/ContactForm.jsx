// src/components/HomePage/ContactForm.jsx

import React from 'react';
import './ContactForm.css'; // We'll create this CSS file next

export default function ContactForm() {
  return (
    <section className="contact-section" id="contact-form">
      <h2 className="contact-title">Let's have a chat</h2>
      <form className="contact-form">
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
        <button type="submit" className="cta-button form-submit-button">Submit</button>
      </form>
    </section>
  );
}