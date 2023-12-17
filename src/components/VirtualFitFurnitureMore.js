import React from "react";
import "./VFM.css"; // Your CSS file
import F1 from "../Assets/furniture1.jpg";
import F2 from "../Assets/furniture2.jpg";
import F3 from "../Assets/furniture3.jpg";
import BannerImage from "../Assets/furniture11.jpg";
import ImageSlider from "./ImageSlider";

import "./hiw.css";
const VirtualFitFurnitureMore = () => {
  return (
    <>
      <div className="spasectionce">
        <ImageSlider />
      </div>

      <div className="blog-container" id="furniture">
        <div className="blog-section">
          <div className="photo-part">
            <img src={F1} alt="Sample" />
          </div>
          <div className="photo-part">
            <img src={F1} alt="Sample" />
          </div>
        </div>

        <div className="blog-section">
          <div className="photo-part">
            <img src={F2} alt="Sample" />
          </div>
          <div className="photo-part">
            <img src={F2} alt="Sample" />
          </div>
        </div>

        <div className="blog-section">
          <div className="photo-part">
            <img src={F3} alt="Sample" />
          </div>
          <div className="photo-part">
            <img src={F3} alt="Sample" />
          </div>
        </div>
      </div>
    </>
  );
};

export default VirtualFitFurnitureMore;
