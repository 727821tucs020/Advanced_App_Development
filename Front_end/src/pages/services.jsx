import React from 'react';
import "../../src/assets/css/services.css"
import image1 from '../../src/assets/images/big.png';
import image2 from '../../src/assets/images/caretaker.jpg';
import image3 from '../../src/assets/images/loginimage.jpg';
import image4 from '../../src/assets/images/alzimer.jpg';
import image5 from '../../src/assets/images/medcare.jpg';
import image6 from '../../src/assets/images/nurse.jpg';
// import image7 from '../../src/assets/images/medcare.jpg';
import image8 from '../../src/assets/images/nursingcare.jpg';

const Services = () => {
  return (
    <div className="services-container">
      <h2>Services Provided by Home Care Services</h2>
      <div className="services-list">
        <div className="services-card">
          <img
            src={image1}
            alt="Assisted Daily Living - 5, 10 & 24 Hours"
            className="services-image"
          />
          <h3 className="services-title">Assisted Daily Living - 5, 10 & 24 Hours</h3>
          <p className="services-description">
Assisted Daily Living - 5, 10 & 24 Hours provides comprehensive support and assistance with everyday tasks for individuals requiring varying levels of care over extended periods, ensuring their comfort and well-being around the clock.</p>
          <a href="/book" className="services-book-button">Book</a>
        </div>
        <div className="services-card">
          <img
            src={image2}
            alt="Patient Care for Elderly"
            className="services-image"
          />
          <h3 className="services-title">Patient Care for Elderly</h3>
          <p className="services-description">
Patient Care for Elderly offers specialized assistance and medical support tailored to the unique needs of elderly individuals, ensuring their comfort, safety, and overall health through compassionate and attentive care.</p>
          <a href="/book" className="services-book-button">Book</a>
        </div>
        {/* Additional Service Cards */}
        <div className="services-card">
          <img
            src={image3}
            alt="Nursing Care for Elderly at-home"
            className="services-image"
          />
          <h3 className="services-title">Nursing Care for Elderly at-home</h3>
          <p className="services-description">Nursing Care for Elderly at-home delivers specialized medical attention and support tailored to the unique requirements of elderly individuals within the familiar surroundings of their homes, promoting their health, independence, and overall quality of life under the guidance of skilled nursing professionals.




</p>
          <a href="/book" className="services-book-button">Book</a>
        </div>
        {/* Add more service cards as needed */}
        <div className="services-card">
          <img
            src={image4}
            alt="Nursing Care for Elderly at-home"
            className="services-image"
          />
          <h3 className="services-title">Dementia Care for Elders at-home</h3>
          <p className="services-description">
Dementia Care for Elders at-home offers compassionate and specialized support tailored to the needs of elderly individuals living with dementia in their own residences, focusing on creating a safe and supportive environment while providing personalized care and assistance to enhance their quality of life and well-being.





</p>
          <a href="/book" className="services-book-button">Book</a>
        </div>
        <div className="services-card">
          <img
            src={image5}
            alt="Nursing Care for Elderly at-home"
            className="services-image"
          />
          <h3 className="services-title">Alzheimer's Care for Elderly at-home</h3>
          <p className="services-description">Alzheimer's Care for Elderly at-home offers specialized assistance tailored to seniors diagnosed with Alzheimer's disease within their homes. It involves personalized interventions and compassionate support to enhance their quality of life, manage symptoms, and provide comfort for both the individual and their loved ones.</p>
          <a href="/book" className="services-book-button">Book</a>
        </div>
        <div className="services-card">
          <img
            src={image6}
            alt="Nursing Care for Elderly at-home"
            className="services-image"
          />
          <h3 className="services-title">Caretakers for seniors at-home</h3>
          <p className="services-description">Caretakers for seniors at-home" refers to professional caregivers who provide comprehensive support and assistance to elderly individuals within their own residences, offering personalized care, companionship, and assistance with daily activities to ensure their comfort, safety, and overall well-being in familiar surroundings.</p>
          <a href="/book" className="services-book-button">Book</a>
        </div>
        <div className="services-card">
          <img
            src={image5}
            alt="Nursing Care for Elderly at-home"
            className="services-image"
          />
          <h3 className="services-title">Medical Care for Seniors at-home</h3>
          <p className="services-description">Medical Care for Seniors at-home provides professional healthcare services tailored to the needs of elderly individuals within their own residences. It includes personalized medical treatments, monitoring, and assistance with daily activities to promote their well-being, independence, and comfort in familiar surroundings.






</p>
          <a href="/book" className="services-book-button">Book</a>
        </div>
        <div className="services-card">
          <img
            src={image8}
            alt="Nursing Care for Elderly at-home"
            className="services-image"
          />
          <h3 className="services-title">Nursing Attenders at-home</h3>
          <p className="services-description">Nursing Attenders at-home offers skilled nursing assistance and care for seniors in the comfort of their own residences. This service includes professional support with medical needs, personal care, and daily activities, ensuring the well-being and safety of elderly individuals in their familiar environment.





</p>
          <a href="/book" className="services-book-button">Book</a>
        </div>
      </div>
    </div>
  );
};

export default Services;
