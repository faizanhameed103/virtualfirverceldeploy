import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/ffit1.png";
import { FiArrowRight } from "react-icons/fi";
import Testimonial from "./Testimonial";
import Contact from "./Contact";
import VirtualFitFurniture from "./VirtualFitFurniture";
import VirtualWallFit from "./VirtualWallFit";
import OurOfferings from "./OurOffering";
import SponsorLogo from "./SponsorLogo";
import ContactForm from "./ContactForm";
function Home() {
  return (
    <>
      <div className="home-container" id="/home">
        <div className="home-banner-container">
          <div className="home-bannerImage-container">
            <img src={BannerBackground} alt="" />
          </div>
          <div className="home-text-section">
            <h1 className="primary-heading">What We Offer</h1>
            <p className="primary-text">
              The Best Virtual Fit Solution for You
            </p>
          </div>
          <div className="home-image-section">
            <img src={BannerImage} alt="" />
          </div>
        </div>
      </div>
      <OurOfferings />

      <div className="your-container">
        <br></br>
        <div className="sponsor-logos-container">
          {/* Logos aligned horizontally */}
          <div className="sponsor-logos">
            <SponsorLogo
              imageUrl="https://mail.google.com/mail/u/0?ui=2&ik=8e5c57ceda&attid=0.1&permmsgid=msg-f:1784458496967092387&th=18c3ab8c6c26a8a3&view=att&disp=safe&realattid=f_lpsj5bv42"
              sponsorName="Upload Wall/Room Image"
            />
            <SponsorLogo
              imageUrl="https://mail.google.com/mail/u/0?ui=2&ik=8e5c57ceda&attid=0.2&permmsgid=msg-f:1784458496967092387&th=18c3ab8c6c26a8a3&view=att&disp=safe&realattid=f_lpsj5bur0"
              sponsorName="Upload item Image"
            />
            <SponsorLogo
              imageUrl="https://mail.google.com/mail/u/0?ui=2&ik=8e5c57ceda&attid=0.3&permmsgid=msg-f:1784458496967092387&th=18c3ab8c6c26a8a3&view=att&disp=safe&realattid=f_lpsj5bv01"
              sponsorName="Check it virtually"
            />
          </div>
        </div>
      </div>

      <VirtualFitFurniture />
      <VirtualWallFit />
      <Testimonial />
      <ContactForm />
    </>
  );
}

export default Home;
