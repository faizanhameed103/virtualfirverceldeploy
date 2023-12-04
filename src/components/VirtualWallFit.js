import React from "react";
import AboutBackgroundImage from "../Assets/wfit1.jpg";
import { Link } from "react-router-dom";
function VirtualWallFit() {
  return (
    <div className="about-section-container">
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Wall Decoration</p>
        <h1 className="primary-heading1">Virtual Fit Wall Decoration</h1>
        <p className="primary-text">
          Virtual wall decoration is an innovative concept that leverages
          technology to help individuals and interior designers transform plain
          walls into personalized works of art. This technology allows users to
          experiment with a wide range of wall decor options, from paint colors
          and wallpapers to artwork, decals, and more, all without the need to
          physically alter their living space.
        </p>
        <div className="about-buttons-container">
          <Link to="/virtualwallfitmore" className="link-button">
            <button className="secondary-button">Learn more</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default VirtualWallFit;
