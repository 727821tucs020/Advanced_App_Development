import React, { useState } from 'react';
import '../../src/assets/css/payment.css';

const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle payment submission
    console.log('Payment submitted');

    // Navigate to home page after 2 seconds
    setTimeout(() => {
      window.location.href = '/'; // Navigate to the home page
    }, 2000);
  };

  return (
    <div className="payment-container">
      <h2>Secure Payment</h2>
      <form onSubmit={handleSubmit} className="payment-form">
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            maxLength="16"
            placeholder="Enter card number"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cardHolder">Card Holder</label>
          <input
            type="text"
            id="cardHolder"
            value={cardHolder}
            onChange={(e) => setCardHolder(e.target.value)}
            placeholder="Enter card holder's name"
            required
          />
        </div>
        <div className="form-group form-group-inline">
          <div>
            <label htmlFor="expiryDate">Expiry Date</label>
            <input
              type="text"
              id="expiryDate"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              maxLength="5"
              placeholder="MM/YY"
              required
            />
          </div>
          <div>
            <label htmlFor="cvv">CVV</label>
            <input
              type="password"
              id="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              maxLength="3"
              placeholder="CVV"
              required
            />
          </div>
        </div>
        <button type="submit" className="pay-button">Pay Now</button>
      </form>
    </div>
  );
};

export default Payment;
