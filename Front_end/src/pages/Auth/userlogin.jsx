import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../../../src/assets/css/userlogin.css';
import Welcome from "../../../src/assets/images/loginimage.jpg"

const UserLogin = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleReg = () => {
    var x = document.getElementById('loginUnique');
    var y = document.getElementById('registerUnique');
    var z = document.getElementById('btnUnique');

    x.style.left = '-450px';
    y.style.left = '50px';
    z.style.left = '110px';
  };

  const login = () => {
    var x = document.getElementById('loginUnique');
    var y = document.getElementById('registerUnique');
    var z = document.getElementById('btnUnique');

    x.style.left = '50px';
    y.style.left = '450px';
    z.style.left = '0px';
  };

  const validateInputs = () => {
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return false;
    }

    if (!isPasswordStrong(password)) {
      alert('Password must be at least 8 characters with a mix of uppercase and lowercase characters.');
      return false;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return false;
    }

    return true;
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isPasswordStrong = (password) => {
    return password.length >= 8;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (validateInputs()) {
      // You can add your registration logic here
      console.log('Registration details:', { name, email, password, confirmPassword });
      login(); // Redirect to login after registration
      navigate('/'); // Redirect to homepage
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Your login logic goes here
    // After successful login, navigate to homepage
    navigate('/');
  };

  return (
    <div className="userlogin-bg-unique">
      <div className="container-unique">
        <div className="form-box-unique">
          <div className="button-box-unique">
            <div id="btnUnique"></div>
            <button type="button" className="toggle-btn-unique" onClick={() => login()}>
              Log In
            </button>
            <button type="button" className="toggle-btn-unique" onClick={() => handleReg()}>
              Register
            </button>
          </div>
          <div className="social-icons-unique">
            <img src="https://res.cloudinary.com/duaotkbof/image/upload/v1708361256/wsvlujjfjbvjtvx9uhfz.png" alt="icon"></img>
            <img src="https://res.cloudinary.com/duaotkbof/image/upload/v1708361354/u6mzmxqq9n47oewrqs27.jpg" alt="icon"></img>
            <img src="https://res.cloudinary.com/duaotkbof/image/upload/v1708361390/ynjxe3yuji1fvsf0aded.png" alt="icon"></img>
          </div>
          <form id="loginUnique" className="input-group-unique" onSubmit={handleLogin}>
            <input
              type="text"
              className="input-field-unique"
              placeholder="Name"
              required
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="password"
              className="input-field-unique"
              placeholder="Enter Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="abc-unique">
              <input type="checkbox" className="chech-box-unique" />
              <span>Remember Password</span>
            </div>
            <button type="submit" className="submit-btn-unique">
              Login
            </button>
          </form>
          <form id="registerUnique" className="input-group-unique" onSubmit={handleRegister}>
            <input type="text" className="input-field-unique" placeholder="Name" required onChange={(e) => setName(e.target.value)} />
            <input
              type="text"
              className="input-field-unique"
              placeholder="Email"
              required
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
              title="Enter a valid email address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input type="password" className="input-field-unique" placeholder="Enter Password" required onChange={(e) => setPassword(e.target.value)} />
            <input
              type="password"
              className="input-field-unique"
              placeholder="Confirm Password"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div className="abc-unique">
              <input type="checkbox" className="chech-box-unique" />
              <span>I agree</span>
            </div>
            <button type="submit" className="submit-btn-unique">
              Register
            </button>
          </form>
        </div>
        <div className="image-container-unique">
          <img src={Welcome} alt="Your Image Alt Text" className="image-unique" />
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
