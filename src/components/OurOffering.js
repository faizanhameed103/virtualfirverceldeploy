import React from "react";
import "./sponsorlogo.css"; // Import your CSS file

const OurOffering = ({ imageUrl, sponsorName }) => {
  return (
    <div className="sponsor-logo">
      <img src={imageUrl} alt="Sponsor Logo" className="logo-img" />
      <p className="sponsor-text">{sponsorName}</p>
    </div>
  );
};
export default OurOffering;
