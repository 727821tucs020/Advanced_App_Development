// Dashboardcontent.jsx
import React from 'react';
import "../../../src/assets/css/dashboardcontent.css";

const Dashboardcontent = () => {
  return (
    <>
      <div className='dashboard-content-container'>
        <a href="/sidebar" className="dashboard-back-button">Back</a>
        <div className="dashboard-content-wrapper">
          <div className="dashboard-card">
            <h3>Home Care Services</h3>
            <p>Our home care services provide personalized care for seniors in the comfort of their own homes.</p>
            <div className="dashboard-service-info">
              <div className="dashboard-info">
                <h4>Registered Helpees</h4>
                <span>256</span>
              </div>
              <div className="dashboard-info">
                <h4>Helpees with Caregivers</h4>
                <span>180</span>
              </div>
              <div className="dashboard-info">
                <h4>Current Patients</h4>
                <span>95</span>
              </div>
            </div>
          </div>
          {/* Additional user data */}
          <div className="dashboard-section">
            <h2>User Management</h2>
            <div className="dashboard-card dashboard-user-card">
              <table className="dashboard-user-table">
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>User 1</td>
                    <td>
                      <button className="dashboard-edit-button">Edit</button>
                      <button className="dashboard-delete-button">Delete</button>
                    </td>
                  </tr>
                  <tr>
                    <td>User 2</td>
                    <td>
                      <button className="dashboard-edit-button">Edit</button>
                      <button className="dashboard-delete-button">Delete</button>
                    </td>
                  </tr>
                  <tr>
                    <td>User 3</td>
                    <td>
                      <button className="dashboard-edit-button">Edit</button>
                      <button className="dashboard-delete-button">Delete</button>
                    </td>
                  </tr>
                  <tr>
                    <td>User 4</td>
                    <td>
                      <button className="dashboard-edit-button">Edit</button>
                      <button className="dashboard-delete-button">Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboardcontent;
