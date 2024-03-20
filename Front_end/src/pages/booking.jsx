import React, { useState } from 'react';
import "../../src/assets/css/booking.css";

const Booking = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    serviceType: '',
    serviceDetails: '',
    preferredDate: '',
    preferredTime: '',
    careType: '', // New field for the type of care
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="booking-container">
      <h2 className='fdd'>Booking Form for Home Care Services</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="serviceType">Service Type:</label>
          <select
            id="serviceType"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            required
          >
            <option value="">Select Service Type</option>
            <option value="Companionship">Companionship</option>
            <option value="Personal Care">Personal Care</option>
            <option value="Housekeeping">Housekeeping</option>
            <option value="Transportation">Transportation</option>
            <option value="Meal Preparation">Meal Preparation</option>
            {/* Add more service types as needed */}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="serviceDetails">Service Details:</label>
          <textarea
            id="serviceDetails"
            name="serviceDetails"
            value={formData.serviceDetails}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="preferredDate">Preferred Date:</label>
          <input
            type="date"
            id="preferredDate"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="preferredTime">Preferred Time:</label>
          <input
            type="time"
            id="preferredTime"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="careType">Type of Care:</label>
          <select
            id="careType"
            name="careType"
            value={formData.careType}
            onChange={handleChange}
            required
          >
            <option value="">Select Type of Care</option>
            <option value="Elderly Care">Elderly Care</option>
            <option value="Disability Care">Disability Care</option>
            <option value="Post-Surgery Care">Post-Surgery Care</option>
            <option value="Palliative Care">Palliative Care</option>
            {/* Add more care types as needed */}
          </select>
        </div>
        <button class="book-button">
  <a href="/pay" class="book">
    Submit
  </a>
</button>
      
      </form>
    </div>
  );
};

export default Booking;
