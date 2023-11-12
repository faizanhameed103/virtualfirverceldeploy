import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/ffit4.png";

function VirtualFitFurniture() {
  return (
    <div className="about-section-container" id="furniture">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Furniture</p>
        <h1 className="primary-heading">
          Virtual Fit Furniture
        </h1>
        <p className="primary-text">
        Virtual furniture fit is a revolutionary and innovative solution designed to transform the way we approach interior design and space planning. This technology leverages the power of augmented reality (AR) or virtual reality (VR) to enable individuals, designers, and homeowners to virtually experiment with different furniture arrangements within their living spaces.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default VirtualFitFurniture
