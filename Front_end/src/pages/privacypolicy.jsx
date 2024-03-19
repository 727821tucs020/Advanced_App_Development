// PrivacyPolicy.jsx
import React from 'react';
import "../../src/assets/css/privacypolicy.css"; // Import the CSS file

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <h1>Privacy Policy</h1>
      <p>
        At Home Care Services for Seniors, we are committed to protecting the privacy of our users.
        This Privacy Policy outlines the types of personal information we collect, how we use it,
        and the measures we take to safeguard your information.
      </p>
      <h2>Information We Collect</h2>
      <p>
        We collect personal information such as name, email address, phone number, and address
        when you sign up for our services or submit inquiries through our website.
      </p>
      <h2>How We Use Your Information</h2>
      <p>
        The personal information we collect is used to provide you with our services, respond to
        your inquiries, and improve our website and services.
      </p>
      <h2>Security Measures</h2>
      <p>
        We take appropriate security measures to protect your personal information from unauthorized
        access, alteration, disclosure, or destruction.
      </p>
      <h2>Changes to Privacy Policy</h2>
      <p>
        We reserve the right to update or modify this Privacy Policy at any time. Please review
        this Privacy Policy periodically for any changes.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
