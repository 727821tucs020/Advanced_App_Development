// Aboutus.js
import React from 'react';
import "../../src/assets/css/aboutus.css"; // Import the CSS file
import leftImage from "../../src/assets/images/Grandpa.png";
import rightImage from "../../src/assets/images/Grandma.png"; // Import right image
import team from "../../src/assets/images/team.png"

const Aboutus = () => {
  return (
    <>
    <div className="aboutus-container">
      <img src={leftImage} alt="Left Image" className="left-image" />
      <p>Building a better world for our elderly loved ones  <i class="fa-solid  fa-heart custom-icon"></i>
</p>
      <img src={rightImage} alt="Right Image" className="right-image" />
     
    </div>
    <div className='text-container'>
  <div className='text-section'>
 <p className='title'>OUR STORY</p>
    <p>Our story began with a simple idea - helping others. As humans, we are bound to help others and are always seeking 'Helper's High'. The warm glow of pro sociality certainly drives us in helping a fellow human being. So in 2019, when the world was at the highest gear and people were time constrained, we launched Helpee as a platform to seek and provide help.

 

We saw people, especially in urban India struggling to complete tasks, look after their loved ones or care for their pets. Helpee was designed in such a way that anyone could request help on our platform to be taken up by our verified community members.

 

Helpee began helping people even throughout the raging covid-19 pandemic with various requests from medicine deliveries to vaccination assists. As we got more requests on our platform, we quickly realised that most of our requests were coming from the elderly or from people who wanted us to care for their senior family members.

 

Our team understood this problem quite well as we had senior parents who lived alone far away from us. We knew the issues seniors faced everyday and it motivated us immensely to use Helpee as a platform to provide on-demand help for our loved ones.</p>
  </div>
  <div className='image-section'>
  <img src={team} alt="Your Image Alt Text" className="image" />
  </div>
</div>

    </>
  );
};

export default Aboutus;
