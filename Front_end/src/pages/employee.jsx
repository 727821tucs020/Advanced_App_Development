import React from 'react';
import "../../src/assets/css/employee.css";

const employees = [
  {
    id: 1,
    name: "John Doe",
    position: "Caregiver",
    experience: 5,
    location: "Mumbai, India",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Registered Nurse",
    experience: 8,
    location: "Delhi, India",
  },
  {
    id: 3,
    name: "Michael Johnson",
    position: "Physical Therapist",
    experience: 10,
    location: "Bangalore, India",
  },
  {
    id: 4,
    name: "Emily Brown",
    position: "Occupational Therapist",
    experience: 7,
    location: "Chennai, India",
  },
  {
    id: 5,
    name: "David Lee",
    position: "Speech Therapist",
    experience: 6,
    location: "Kolkata, India",
  },
  {
    id: 6,
    name: "benjamin",
    position: " Therapist",
    experience: 6,
    location: "Kolkata, India",
  },
  {
    id: 7,
    name: "devin cooper",
    position: "mental Therapist",
    experience: 6,
    location: "Kolkata, India",
  },
  {
    id: 8,
    name: "Sarah Williams",
    position: "Geriatric Nurse",
    experience: 9,
    location: "Hyderabad, India",
  }
  
];

const Employee = () => {
  return (
    <div>
      <div className="employee-container">
        {employees.map(employee => (
          <div className="employee-card" key={employee.id}>
            <div className="employee-profile">
              <div className="employee-details">
                <h2 className="employee-name">{employee.name}</h2>
                <p className="employee-position">{employee.position}</p>
                <p className="employee-info">Years of Experience: {employee.experience}</p>
                <p className="employee-info">Location: {employee.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="back-container">
        <a href="/sidebar" className="back-button">Back</a>
      </div>
    </div>
  );
}

export default Employee;
