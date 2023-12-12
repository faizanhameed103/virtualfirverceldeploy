import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/ffit1.png";
import Testimonial from "./Testimonial";
import VirtualFitFurniture from "./VirtualFitFurniture";
import VirtualWallFit from "./VirtualWallFit";
import OurOffering from "./OurOffering";
import SponsorLogo from "./SponsorLogo";
import ContactForm from "./ContactForm";
import Checkit from "../Assets/check it.png";
import ItemImage from "../Assets/item_image.png";
import LivingRoom from "../Assets/living-room.png";
import "./wcu.css";
import "./hiw.css";
function Home() {
  return (
    <>
      <div className="home-container" id="/home">
        <div className="home-banner-container">
          <div className="home-bannerImage-container">
            <img src={BannerBackground} alt="" />
          </div>
          <div className="home-text-section">
            <h1 className="primary-heading">What We Offer</h1>
            <p className="primary-text">
              The Best Virtual Fit Solution for You
            </p>
          </div>
          <div className="home-image-section">
            <img src={BannerImage} alt="" />
          </div>
        </div>
      </div>

      <div className="wcu spasectionce">
        <header className="wcu-header">
          <h1>Why choose us?</h1>
        </header>
        <section className="features">
          <div className="feature">
            <h2>Lowest price</h2>
            <p>
              Starting at only $12/month, you can virtually stage 6 images.
              That's cheaper than what most agencies charge for a single image.
            </p>
          </div>
          <div className="feature">
            <h2>No effort</h2>
            <p>
              No need to write detailed instructions for designers anymore. Just
              upload your pictures, choose room type and style, and the AI
              automatically adds beautiful, realistic looking furniture.
            </p>
          </div>
          <div className="feature">
            <h2>Fastest turnaround</h2>
            <p>
              Thanks to our advanced artificial intelligence, you get your
              virtually staged pictures within 10 seconds. No more waiting for
              designers.
            </p>
          </div>
          <div className="feature">
            <h2>Unlimited revisions</h2>
            <p>
              Had something different in mind? Instead of having to go back and
              forth with a designer, get more designs within seconds.
            </p>
          </div>
        </section>
      </div>
      <div className="spasectionce">
        <header className="wcu-header">
          <h1>How it Works ?</h1>
        </header>
        <section className="welcome-section">
          <div class="section-content">
            <div class="text">
              <h2>1. Upload your picture</h2>
              <p>
                Upload a picture of an empty room and choose the room type and
                style. We currently support staging living rooms, bedrooms,
                kitchens, dining rooms, home offices, and closets.
              </p>
            </div>
            <div class="image-container">
              <img src={Checkit} alt="Image 1" class="image-right" />
            </div>
          </div>
        </section>

        <section className="al-magic-section">
          <div class="section-content">
            <div class="text">
              <h2>2. AI Magic</h2>
              <p>
                Within 10 seconds our artificial intelligence processes the
                image to understand its size and style and adds beautiful,
                realistic-looking furniture.
              </p>
            </div>
            <div class="image-container">
              <img src={ItemImage} alt="Image 2" class="image-right" />
            </div>
          </div>
        </section>

        <section className="download-section">
          <div class="section-content">
            <div class="text">
              <h2>3. Download and use anywhere</h2>
              <p>
                Once the processing is completed you instantly get your staged
                photo. You can use your pictures anywhere you want for as long
                as you want.
              </p>
            </div>
            <div class="image-container">
              <img src={LivingRoom} alt="Image 3" class="image-right" />
            </div>
          </div>
        </section>
      </div>
      <header className="wcu-header">
        <h1>Our Services</h1>
      </header>
      <div className="spasectionce">
        {" "}
        <VirtualFitFurniture />
      </div>
      <div className="spasectionce">
        <VirtualWallFit />
      </div>
      <div className="spasectionce">
        <ContactForm />
      </div>
    </>
  );
}

export default Home;
