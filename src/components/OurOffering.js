import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "./ouroffering.css"; // Import the CSS file

library.add(faCheckCircle);

const BulletPoint = ({ point }) => {
  return (
    <li>
      <FontAwesomeIcon icon="check-circle" className="fa-xs mr-2" />
      {point}
    </li>
  );
};

const OurOfferings = () => {
  const bulletPoints = [
    "Develop Virtual Try-On Solution for businesses",
    "Take customer's shopping experience to a whole new level",
    "Increase brand recall",
    "Boost your digital strategy",
    "Cut down returns",
    "Build trust",
    "Increase your engagement",
    "Increase conversions",
    "Engage with millennials",
    "Test new product ideas",
  ];

  return (
    <div className="our-offerings">
      <h2 className="offerings-heading">Our Offerings</h2>
      <ul className="offerings-list">
        {bulletPoints.map((point, index) => (
          <BulletPoint key={index} point={point} />
        ))}
      </ul>
    </div>
  );
};

export default OurOfferings;
