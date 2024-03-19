import React from 'react';
import '../../../src/assets/css/footer.css'


function Footer() {
    return (
        <div className='wrapper'>
        <footer className="footer">
            <div className="container">
                <div className="footer-section">
                    <h2 >Quick Links</h2>
                    <ul>
                        <li><a href="#">care services</a></li>
                        <li><a href="/privacy">Privacy Policy</a></li>
                        <li><a href="/terms">Terms and Conditions</a></li>
                        <li><a href="/faq">FAQ</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h2 className>Our Programs</h2>
                    <ul>
                        <li><a href="#">Ortho Rehabilitation</a></li>
                        <li><a href="#">Cardiac Rehabilitation</a></li>
                        <li><a href="#">Neuro Rehabilitation</a></li>
                        <li><a href="#">Post-Discharge Rehabilitation</a></li>
                        <li><a href="#">Parental Care</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h2>Contact Us</h2>
                    <div className="contact-info">       
                    <p>Email: <a href="mailto:Helpee@org.com" className="contact-link">Helpee@org.com</a></p>
                    <p>Phone: <a href="tel:+919025484672" className="contact-link">+91 9025484672</a></p>     
                    </div>
                    <div className="social-icons">
                    <li>
            <a href="https://www.facebook.com/planevent/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/BizBash" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/eventiaevents/?hl=en" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
                    </div>
                </div>
                <div className="footer-section">
                    <h2>Address</h2>
                    <p>123, Anna Salai</p>
                    <p>Chennai, Tamil Nadu</p>
                    <p>India - 600002 </p>
                    <p>© Helpee</p>
                </div>
                
            </div>
        </footer>
        </div>
    );
}

export default Footer;
