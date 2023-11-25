import React from 'react'
import BannerBackground from "../Assets/home-banner-background.png";

export default function Contact() {
  return (

    <div className="work-section-wrapper" id='contact'>
      <div className="home-banner-container"> 
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
     </div>
      <div className="work-section-top">
        <h1 className="primary-heading" >Contact Us</h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.692933642515!2d68.81655977519502!3d27.726765624635178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3935d4af0e0f6721%3A0x6a57455ae708c7b!2sSukkur%20IBA%20University!5e0!3m2!1sen!2s!4v1699708863218!5m2!1sen!2s" width="100%" height="600px" style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <br></br>
        <br></br>
        <div>
          <div>
            <h2>Phone Number : +923024531083</h2>
            <h2>Email        : f03024531083@gmail.com</h2>
          </div>
        </div>

        </div>
    </div>
  )
}
