import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/ffit1.png";
import Testimonial from "./Testimonial";
import VirtualFitFurniture from "./VirtualFitFurniture";
import VirtualWallFit from "./VirtualWallFit";
import OurOffering from "./OurOffering";
import SponsorLogo from "./SponsorLogo";
import ContactForm from "./ContactForm";
import Checkit from "../Assets/check it.png";
import ItemImage from "../Assets/item_image.png";
import LivingRoom from "../Assets/living-room.png";
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
      <div className="spasectionce your-container">
        <h1>Our Offerings</h1>
        <div className="sponsor-logos-container">
          {" "}
          <div className="sponsor-logos">
            <OurOffering
              imageUrl={LivingRoom}
              sponsorName="Develop Virtual Try-On Solution for businesses"
            />
            <OurOffering
              imageUrl={Checkit}
              sponsorName="Take customer's shopping experience to a whole new level"
            />
            <OurOffering
              imageUrl={ItemImage}
              sponsorName="Increase brand recall"
            />
            <OurOffering
              imageUrl={LivingRoom}
              sponsorName="Boost your digital strategy"
            />
            <OurOffering imageUrl={Checkit} sponsorName="Cut down returns" />
            <OurOffering imageUrl={ItemImage} sponsorName="Build trust" />
          </div>
        </div>
      </div>

      <div className="your-container spasectionce">
        <br></br>
        <div className="sponsor-logos-container">
          {/* Logos aligned horizontally */}
          <div className="sponsor-logos">
            <SponsorLogo
              imageUrl={LivingRoom}
              sponsorName="Upload Wall/Room Image"
            />
            <SponsorLogo imageUrl={Checkit} sponsorName="Upload item Image" />
            <SponsorLogo
              imageUrl={ItemImage}
              sponsorName="Check it virtually"
            />
          </div>
        </div>
      </div>
      <div className="spasectionce">
        {" "}
        <VirtualFitFurniture />
      </div>
      <div className="spasectionce">
        <VirtualWallFit />
      </div>

      <div className="spasectionce">
        <Testimonial />
      </div>

      <div className="spasectionce">
        <ContactForm />
      </div>
    </>
  );
}

export default Home;
