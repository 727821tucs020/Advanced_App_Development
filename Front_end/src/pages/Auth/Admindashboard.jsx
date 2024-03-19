// AdminDashboard.js
import React from 'react';
import "../../../src/assets/css/Admindashboard.css";

const AdminDashboard = () => {
    return (
        <div className='admin-dashboard'>
            <div className='sidebar'>
                <h2>Admin Dashboard</h2>
                <ul>
                    <li><a href="/dashboard1">Analytics</a></li>
                    <li><a href="/ap">charts</a></li>
                    <li><a href="#">Employees</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Reports</a></li>
                    <li><a href="#">Settings</a></li>
                </ul>
            </div>

            
        </div>
    );
};

export default AdminDashboard;
