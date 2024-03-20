import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoImage from '../../../src/assets/images/Logo.png';
import '../../../src/assets/css/navbar.css'; 

function Navbar() {
    const links = [
        { name: 'Login', path: '/userlogin' },
        { name: 'Register', path: '/userlogin' },
        { name: 'About us ', path: '/aboutus' },
        { name: 'Contact us', path: '/contact' },
    
       
        
        
        
    ];

    const cities = ['Chennai', 'Coimbatore', 'Bangalore', 'Delhi', 'Hyderabad'];

    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <img src={LogoImage} alt="Helpee Logo" className="logo-image" />
                </div>
                <div className="dropdown">
                        <select className="city-dropdown">
                            <option value="" disabled selected>Select City</option>
                            {cities.map((city, index) => (
                                <option key={index} value={city}>
                                    {city}
                                </option>
                            ))}
                        </select>
                    </div>
                <div className="nav-links">
                    {links.map((link, index) => (
                        <NavLink
                            key={index}
                            to={link.path}
                            className="nav-link"
                            activeClassName="active-nav-link"
                        >
                            {link.name}
                        </NavLink>
                    ))}
                  
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
