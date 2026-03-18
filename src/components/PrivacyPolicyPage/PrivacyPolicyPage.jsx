// src/components/PrivacyPolicyPage/PrivacyPolicyPage.jsx

import React from 'react';
import './PrivacyPolicyPage.css'; // This will share styles with the blog
import {
  BRAND_HQ_CITY_COUNTRY,
  BRAND_INFO_EMAIL,
  BRAND_NAME,
  BRAND_REGIONAL_FOCUS,
  BRAND_SECONDARY_OFFICE,
} from '../../constants/brand';

export default function PrivacyPolicyPage() {
  return (
    <div className="blog-page-container">
      <h1 className="blog-page-title">Privacy Policy</h1>
      <div className="blog-content-wrapper">
        <p>
          Your privacy is important to us. This policy outlines how {BRAND_NAME} collects, uses, and protects your personal information.
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

        <h2>Company Location &amp; Regional Operations</h2>
        <p>
          {BRAND_NAME} is headquartered in {BRAND_HQ_CITY_COUNTRY}, with an office in {BRAND_SECONDARY_OFFICE}.
          {' '}
          Our typical delivery coverage includes {BRAND_REGIONAL_FOCUS}.
        </p>

        <h2>Security &amp; Compliance Posture</h2>
        <p>
          We apply a risk-aware operating model designed to protect personal information and client analytics environments.
        </p>
        <ul>
          <li>Access is limited to assigned team members and scoped to project needs (least-privilege access).</li>
          <li>We request and process only the data required for agreed services (data minimization).</li>
          <li>Implementation and reporting updates are documented so teams can review what changed and why.</li>
          <li>We can align project onboarding with your NDA, DPA, and internal security review requirements.</li>
        </ul>

        <h2>Data Retention &amp; Access Lifecycle</h2>
        <p>
          We periodically review active access during engagements and remove tool access when it is no longer required.
        </p>
        
        <h2>Cookie Policy</h2>
        <p>
          This website uses cookies. Cookies are small data files stored on your browser. We use cookies to remember your preferences and for analytics purposes to help us understand how you use our site.
        </p>
        
        <h2>Your Privacy Choices</h2>
        <p>
          When you first visit our site, you are presented with a cookie consent banner. You can choose to accept or reject cookies. If you accept, a cookie will be stored to remember your choice.
        </p>
        
        <p>
          For privacy, security, or compliance questions related to this policy, contact us at {BRAND_INFO_EMAIL}.
        </p>

        <p>
          This page describes our general privacy and security posture and does not replace client-specific contractual terms.
        </p>
      </div>
    </div>
  );
}