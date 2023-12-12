import React from "react";
import "./VFM.css"; // Your CSS file
import W1 from "../Assets/wall1.jpg";
import W2 from "../Assets/wall2.jpg";
import W3 from "../Assets/wall3.jpg";
import BannerImage from "../Assets/furniture11.jpg";

const VirtualFitWallMore = () => {
  return (
    <>
      <div className="banner spasectionce">
        <img src={BannerImage} alt="Banner" className="banner-image" />
      </div>
      <div className="blog-container" id="walldecoration">
        <div className="blog-section">
          <div className="photo-part">
            <img src={W1} alt="Sample" />
          </div>
          <div className="text-part">
            <h1>Virtually Fit Furniture</h1>
            <p>
              The idea of virtual wall decoration heralds a groundbreaking
              approach, utilizing cutting-edge technology to revolutionize the
              way individuals and interior designers reimagine their living
              spaces...
            </p>
          </div>
        </div>

        <div className="blog-section">
          <div className="photo-part">
            <img src={W2} alt="Sample" />
          </div>
          <div className="text-part">
            <h1>Virtually Fit Furniture</h1>
            <p>
              Virtual wall decoration stands as a pinnacle in the fusion of
              technology and interior design, offering an unparalleled avenue
              for personal expression within living spaces...
            </p>
          </div>
        </div>

        <div className="blog-section">
          <div className="photo-part">
            <img src={W3} alt="Sample" />
          </div>
          <div className="text-part">
            <h1>Virtually Fit Furniture</h1>
            <p>
              {" "}
              The advent of virtual wall decoration heralds a new era in the
              interior design landscape, presenting an avant-garde platform that
              melds the physical and digital realms harmoniously...
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VirtualFitWallMore;
