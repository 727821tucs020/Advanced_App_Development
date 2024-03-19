// Contact.js
import React from 'react';
import ContactForm from "../../src/pages/contactform" // Import the ContactForm component
import contactImage from '../../src/assets/images/contactus.jpg'; // Import the image
import "../../src/assets/css/contact.css"; // Import the CSS file

const Contact = () => {
  return (
    <div className='contact-container'>
      <div className='left-section'>
        <img src={contactImage} alt="Contact" className="contact-image" />
      </div>
      <div className='right-section'>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
