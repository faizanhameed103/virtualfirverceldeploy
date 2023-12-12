import React from "react";
import "./VFM.css"; // Your CSS file
import F1 from "../Assets/furniture1.jpg";
import F2 from "../Assets/furniture2.jpg";
import F3 from "../Assets/furniture3.jpg";
import BannerImage from "../Assets/furniture11.jpg";
const VirtualFitFurnitureMore = () => {
  return (
    <>
      <div className="banner spasectionce">
        <img src={BannerImage} alt="Banner" className="banner-image" />
      </div>
      <div className="blog-container" id="furniture">
        <div className="blog-section">
          <div className="photo-part">
            <img src={F1} alt="Sample" />
          </div>
          <div className="text-part">
            <h1>Virtually Fit Furniture</h1>
            <p>
              Virtual furniture fit is a revolutionary and innovative solution
              designed to transform the way we approach interior design and
              space planning...
            </p>
          </div>
        </div>

        <div className="blog-section">
          <div className="photo-part">
            <img src={F2} alt="Sample" />
          </div>
          <div className="text-part">
            <h1>Virtually Fit Furniture</h1>
            <p>
              Whether you’re planning a complete home makeover or simply
              considering a few changes to your existing decor, virtual
              furniture fit offers an immersive and interactive platform...
            </p>
          </div>
        </div>

        <div className="blog-section">
          <div className="photo-part">
            <img src={F3} alt="Sample" />
          </div>
          <div className="text-part">
            <h1>Virtually Fit Furniture</h1>
            <p>
              Virtual furniture fit is a revolutionary and innovative solution
              designed to transform the way we approach interior design and
              space planning...
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VirtualFitFurnitureMore;
