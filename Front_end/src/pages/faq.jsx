// Faq.jsx
import React from 'react';
import '../assets/css/faq.css'; // Import the CSS file

const Faq = () => {
  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-question">
        <h2>How soon must I cancel my task?</h2>
        <p>You can cancel your task anytime, but we recommend canceling at least 24 hours in advance to avoid any cancellation fees.</p>
      </div>
      <div className="faq-question">
        <h2>Do I need to provide any materials or equipment for home services?</h2>
        <p>No. Not unless you have some specific products or equipment you want us to use.</p>
      </div>
      <div className="faq-question">
        <h2>How can I pay?</h2>
        <p>We accept various payment methods, including credit/debit cards, online transfers, and cash on delivery.</p>
      </div>
      <div className="faq-question">
        <h2>What is the cancellation fee?</h2>
        <p>The cancellation fee may vary depending on the service and timing of cancellation. Please refer to our cancellation policy for more information.</p>
      </div>
      <div className="faq-question">
        <h2>I want to know the charges for a caregiver.</h2>
        <p>Our caregiver charges may vary based on factors such as experience, duration of service, and specific requirements. Please contact us for a personalized quote.</p>
      </div>
      <div className="faq-question">
        <h2>I want to know the charges for home nursing.</h2>
        <p>Similar to caregiver charges, home nursing charges may vary depending on the level of care required and the duration of service. Please get in touch with us for detailed pricing information.</p>
      </div>
      <div className="faq-question">
        <h2>Do you provide hospital attendants?</h2>
        <p>Yes, we do provide hospital attendants who can assist patients during their hospital stay. Please let us know your requirements, and we will arrange the necessary assistance.</p>
      </div>
      <div className="faq-question">
        <h2>What is your phone number?</h2>
        <p>You can reach us at [Insert Phone Number] for any inquiries or assistance.</p>
      </div>
      <div className="faq-question">
        <h2>Which cities do you provide service at?</h2>
        <p>We currently provide our services in [List of Cities]. However, we are continuously expanding, so please check with us for updates on new service areas.</p>
      </div>
    </div>
  );
};

export default Faq;
