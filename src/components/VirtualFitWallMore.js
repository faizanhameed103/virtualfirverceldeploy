import React from "react";
import "./VFM.css"; // Your CSS file
import W1 from "../Assets/wall1.jpg";
import W2 from "../Assets/wall2.jpg";
import W3 from "../Assets/wall3.jpg";
import ImageSlider from "./ImageSlider";
import "./hiw.css";
import BannerImage from "../Assets/furniture11.jpg";

const VirtualFitWallMore = () => {
  return (
    <>
      <div className="spasectionce">
        <ImageSlider />
      </div>

      <div className="blog-container" id="walldecoration">
        <div className="blog-section">
          <div className="photo-part">
            <img src={W1} alt="Sample" />
          </div>
          <div className="photo-part">
            <img src={W1} alt="Sample" />
          </div>
        </div>

        <div className="blog-section">
          <div className="photo-part">
            <img src={W2} alt="Sample" />
          </div>
          <div className="photo-part">
            <img src={W2} alt="Sample" />
          </div>
        </div>

        <div className="blog-section">
          <div className="photo-part">
            <img src={W3} alt="Sample" />
          </div>
          <div className="photo-part">
            <img src={W3} alt="Sample" />
          </div>
        </div>
      </div>
    </>
  );
};

export default VirtualFitWallMore;
