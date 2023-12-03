import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/ffit1.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import Testimonial from "./Testimonial";
import Contact from "./Contact";
function Home() {
  return (
    <>
      <div className="home-container" id="home">
        <div className="home-banner-container">
          <div className="home-bannerImage-container">
            <img src={BannerBackground} alt="" />
          </div>
          <div className="home-text-section">
            <h1 className="primary-heading">Welcome to Virtual Fit</h1>
            <p className="primary-text">
              The Best Virtual Fit Solution for You
            </p>
            <button className="secondary-button">
              Order Now <FiArrowRight />{" "}
            </button>
          </div>
          <div className="home-image-section">
            <img src={BannerImage} alt="" />
          </div>
        </div>
      </div>
      <Testimonial />
      <Contact />
    </>
  );
}

export default Home;
