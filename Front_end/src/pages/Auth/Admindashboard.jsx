import React from 'react';
import "../../../src/assets/css/Admindashboard.css";

const AdminDashboard = () => {
    const handleLogout = () => {
        const confirmed = window.confirm("Are you sure you want to log out?");
        if (confirmed) {
            // Perform logout action
            // For example, redirect to logout page
            window.location.href = "/userlogin";
        }
    };

    return (
        <div className='admin-dashboard'>
            <div className='sidebar'>
                <h2>Admin Dashboard</h2>
                <ul>
                    <li><a href="/dashboard1">Analytics</a></li>
                    <li><a href="/ap">Charts</a></li>
                    <li><a href="/employee">Employees</a></li>
                    <li><button onClick={handleLogout}>Logout</button></li>
                </ul>
            </div>
            <div className="main-content">
                <h1 className='sssi'>Welcome to Admin Dashboard</h1>
                <div className="section">
                    <h2>Feedback</h2>
                    <div className="feedback">
                        <div className="feedback-item">
                            <div className="feedback-header">
                                <h3>John Doe</h3>
                                <span>Rated: 4.5/5</span>
                            </div>
                            <p className="feedback-content">Great service! The caregivers are very attentive and caring towards the seniors. Highly recommend!</p>
                        </div>
                        <div className="feedback-item">
                            <div className="feedback-header">
                                <h3>Jane Smith</h3>
                                <span>Rated: 5/5</span>
                            </div>
                            <p className="feedback-content">Excellent experience! The website is user-friendly and the support staff are responsive to queries.</p>
                        </div>
                        {/* Add more feedback items as needed */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
