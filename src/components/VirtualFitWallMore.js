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
        <div className="banner-content">
          {/* Your banner content goes here */}
          <h1>Virtual Wall Fit</h1>
          <p>Empower Your Space with Virtual Wall Fit!</p>
        </div>
      </div>
      <div className="blog-container" id="walldecoration">
        <div className="blog-section">
          <div className="photo-part">
            <img
              src={W1} // Replace with your image URL
              alt="Sample"
            />
          </div>
          <div className="text-part">
            <h1>Virtually Wall Fit</h1>
            <p>
              The idea of virtual wall decoration heralds a groundbreaking
              approach, utilizing cutting-edge technology to revolutionize the
              way individuals and interior designers reimagine their living
              spaces. This innovative concept introduces a realm where walls
              cease to be mere partitions; they become canvases waiting to be
              adorned with customized artistry. By harnessing this technology,
              individuals can embark on a creative journey, exploring an
              extensive array of design elements. From an extensive palette of
              paint hues to an ever-expanding library of wallpapers, decals, and
              stunning artwork collections, the possibilities become boundless.
              This revolutionary approach liberates individuals from the
              constraints of conventional interior design, enabling them to
              experiment, envision, and materialize their artistic aspirations
              with unparalleled convenience.
            </p>
          </div>
        </div>

        <div className="blog-section">
          <div className="text-part">
            <h1>Virtually Wall Fit</h1>
            <p>
              Virtual wall decoration stands as a pinnacle in the fusion of
              technology and interior design, offering an unparalleled avenue
              for personal expression within living spaces. This transformative
              concept transcends the traditional confines of wall embellishment,
              opening doors to a realm of infinite creativity. By embracing this
              technological innovation, individuals and design enthusiasts gain
              the ability to curate their environments effortlessly. They can
              sample diverse paint tones, explore eclectic wallpaper designs,
              experiment with striking artwork, and seamlessly visualize their
              choices in real-time without making any physical alterations. This
              digital playground empowers users to shape and redefine their
              spaces, allowing their imagination to flourish as they craft
              unique, personalized aesthetics that resonate with their
              individuality.
            </p>
          </div>

          <div className="photo-part">
            <img
              src={W2} // Replace with your image URL
              alt="Sample"
            />
          </div>
        </div>

        {/* Section 3 */}
        <div className="blog-section">
          <div className="photo-part">
            <img src={W3} alt="Sample" />
          </div>
          <div className="text-part">
            <h1>Virtually Wall Fit</h1>
            <p>
              The advent of virtual wall decoration heralds a new era in the
              interior design landscape, presenting an avant-garde platform that
              melds the physical and digital realms harmoniously. This
              pioneering concept redefines the very essence of wall adornment,
              offering an immersive experience that thrives on versatility and
              innovation. Through the lens of this technology, users and
              designers alike are invited into an expansive universe of creative
              exploration. They can effortlessly experiment with an extensive
              spectrum of design elements, from subtle color variations to
              intricate patterns, textures, and captivating artwork. This
              dynamic platform enables users to navigate through an eclectic
              array of decor options, empowering them to envision,
              conceptualize, and refine their ideal aesthetic vision for their
              living spaces, all in a virtual realm that transcends the
              limitations of the physical world.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VirtualFitWallMore;
