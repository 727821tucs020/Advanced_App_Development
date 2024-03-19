// Dashboardcontent.jsx
import React from 'react';
import "../../../src/assets/css/dashboardcontent.css";
const Dashboardcontent = () => {
  return (
    <>
      <div className='content'>
        <div className="dashboard-content">
          <div className="dashboard-card">
            <h3>Home Care Services</h3>
            <p>Our home care services provide personalized care for seniors in the comfort of their own homes.</p>
            <div className="service-info">
              <div className="info">
                <h4>Registered Helpees</h4>
                <span>256</span>
              </div>
              <div className="info">
                <h4>Helpees with Caregivers</h4>
                <span>180</span>
              </div>
              <div className="info">
                <h4>Current Patients</h4>
                <span>95</span>
              </div>
            </div>
            <button>Learn More</button>
          </div>
          {/* Other dashboard cards */}
        </div>
      </div>
    </>
  );
};

export default Dashboardcontent;
