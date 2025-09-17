// src/components/PrivacyPolicyPage/PrivacyPolicyPage.jsx

import React from 'react';
import './PrivacyPolicyPage.css'; // This will share styles with the blog

export default function PrivacyPolicyPage() {
  return (
    <div className="blog-page-container">
      <h1 className="blog-page-title">Privacy Policy</h1>
      <div className="blog-content-wrapper">
        <p>
          Your privacy is important to us. This policy outlines how Magnusson Analytica collects, uses, and protects your personal information.
        </p>
        
        <h2>Information We Collect</h2>
        <p>
          We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our services, such as your name, email address, and phone number.
        </p>
        
        <h2>How We Use Your Information</h2>
        <p>
          We use personal information collected via our website for a variety of business purposes described below. We use the information we collect or receive:
        </p>
        <ul>
          <li>To send you marketing and promotional communications.</li>
          <li>To process inquiries and fulfill requests.</li>
          <li>To improve our services and user experience.</li>
        </ul>
        
        <h2>Cookie Policy</h2>
        <p>
          This website uses cookies. Cookies are small data files stored on your browser. We use cookies to remember your preferences and for analytics purposes to help us understand how you use our site.
        </p>
        
        <h2>Your Privacy Choices</h2>
        <p>
          When you first visit our site, you are presented with a cookie consent banner. You can choose to accept or reject cookies. If you accept, a cookie will be stored to remember your choice.
        </p>
        
        <p>
          For any questions about this policy, please contact us at info@magnusson.com.
        </p>
      </div>
    </div>
  );
}