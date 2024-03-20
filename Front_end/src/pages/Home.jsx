import React from 'react';
import '../../src/assets/css/home.css';
import bigImage from '../../src/assets/images/big2.png'; // Import your image
import bigImagee from '../../src/assets/images/big.png';

function Home() {
  return (
    <div>
      {/* First Home Container */}
      <div className="home-container">
        <div className="image-section">
          <img src={bigImagee} alt="Your Image Alt Text" className="image" />
        </div>
        <div className="text-section">
          <h1 className="white1">Qualified and Trained Caregivers & Attenders</h1>
          <h3 className="black">We provide trustworthy senior caregivers available all over India</h3>
          <ul className="white2">
            <li>✓ Experienced & Qualified Profiles</li>
            <li>✓ Background Check Documents on every Profile</li>
            <li>✓ Trained for Exceptional Quality of Service</li>
            <div className="whatsapp-button-container">
            <a href="https://web.whatsapp.com/" className="whatsapp-button">   
  <i className="fab fa-whatsapp fa-2x"></i> WhatsApp us
</a>

            </div>
          </ul>
        </div>
      </div>
      
      {/* Second Home Container */}
      <div className="home-container1">
        <div className="text1-section">
          <h1 className='x1'>Promoting health & wellness at the comfort of your home</h1>
          <p className='x2'>Home is where the heart is. We believe in healing at home where you find family centered care. Our caregivers enable personalised individual care to allow dignity, independence, and maximum comfort.</p>
          <div className="stats">
            <div className='y1'><h4>1000 <span className='plus'>+ </span>families</h4></div>
            <div className='y2'> <h4>1500 <span className='plus'>+ </span> caregivers</h4></div>
            <div className='y3'><h4>5 <span className='plus'>Plus</span>  cities</h4></div>
          </div>
        </div>
        <div className="image1-section">
  <img src={bigImage} alt="Your Image Alt Text" className="image" />
</div>

      </div>
      <div> <h2 className='jjj'>TYPE OF SERVICES WE PROVIDE</h2></div>
      <div class="services-container">
  <div class="section1">
    
    <ul className>
      <li>Assisted Daily Living - 5, 10 & 24 Hours</li>
      <li>Patient Care for Elderly</li>
      <li>Nursing Care for Elderly at-home</li>
      <li>Dementia Care for Elders at-home</li>
      <li>Alzheimer's Care for Elderly at-home</li>
    </ul>
  </div>
  
  <div class="section2">
   
    <ul className>
      <li>Medical Care for Seniors at-home</li>
      <li>Nursing Attenders at-home</li>
      <li>Caregivers for elderly at-home</li>
      <li>Caretakers for seniors at-home</li>
      <li>Hospital Attenders - 5, 10 & 24 Hours</li>
    </ul>
 <button class="book-button">
  <a href="/service" class="book">
    know more
  </a>
</button>

  </div>
</div>


    </div>
  );
}

export default Home;
