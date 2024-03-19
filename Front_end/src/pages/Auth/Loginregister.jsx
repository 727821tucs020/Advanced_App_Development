import React, { useState } from 'react';
import '../../../src/assets/css/loginregister.css';
import userIcon from '../../../src/assets/images/person.png';
import emailIcon from '../../../src/assets/images/email.png';
import passwordIcon from '../../../src/assets/images/password.png';

const Loginregister = () => {
    const [action, setAction] = useState("Login");

    return (
        <div className='login-register-page'>
            <div className='login-register-container'>
                <div className='login-register-header'>
                    <div className='login-register-text'>{action}</div>
                    <div className='login-register-underline'></div>
                </div>
                <div className='login-register-submit-container'>
                    <div className={action === "Login" ? "login-register-submit" : "login-register-submit gray"} onClick={() => setAction("Sign Up")}>Sign Up</div>
                    <div className={action === "Sign Up" ? "login-register-submit" : "login-register-submit gray"} onClick={() => setAction("Login")}>Login</div>
                </div>
                <div className='login-register-inputs'>
                    {action === "Login" ? null : (
                        <div className='login-register-input'>
                            <img src={userIcon} alt="User" />
                            <input type="text" placeholder='Name' />
                        </div>
                    )}
                    <div className='login-register-input'>
                        <img src={emailIcon} alt="Email" />
                        <input type="email" placeholder='Email ID' />
                    </div>
                    <div className='login-register-input'>
                        <img src={passwordIcon} alt="Password" />
                        <input type="password" placeholder='Password' />
                    </div>
                </div>
                {action === "Sign Up" ? null : (
                    <div className='login-register-forgot-password'>
                        Lost Password? <span>Click Here!</span>
                    </div>
                )}
           <a href="/" className='enter-button'>Enter</a> {/* Enter button */}

            </div>
            <div className='image-container'></div> {/* Image container */}
        </div>
    );
};

export default Loginregister;
