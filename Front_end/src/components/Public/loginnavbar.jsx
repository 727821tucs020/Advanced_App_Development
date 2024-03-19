import React from 'react';
import LogoImage from '../../../src/assets/images/Logo.png';
import "../../../src/assets/css/loginnavbar.css"

function LoginNavbar() {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <img src={LogoImage} alt="Helpee Logo" className="logo-image" />
                </div>
            </div>
        </nav>
    );
}

export default LoginNavbar;
