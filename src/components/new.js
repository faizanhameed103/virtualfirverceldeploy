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
import WallImage from "../Assets/wall.png";
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
            <p className="primary-text">
              The Best Virtual Fit Solution for You. The Best Virtual Fit
              Solution for You. The Best Virtual Fit Solution for YouThe Best
              Virtual Fit Solution for YouThe Best Virtual Fit Solution for You
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
        <h3 className="wcu-sub-header mt-lg-1">Indivisuals</h3>
        <section className="features">
          <div className="feature">
            <h2>Instant Interaction, Zero Latency</h2>
            <p>
              Experience seamless, real-time interaction with decor items,
              effortlessly moving and adjusting them with zero latency for a
              smooth virtual try-on experience.
            </p>
          </div>
          <div className="feature">
            <h2>Personalization and Customization</h2>
            <p>
              Tailor the experience to your preferences with extensive
              personalization options, allowing experimentation with different
              styles, sizes, and placements.
            </p>
          </div>
          <div className="feature">
            <h2>Time and Cost Efficiency</h2>
            <p>
              Streamline decoration planning, saving time and money by virtually
              experimenting with different options before making any physical
              purchases.
            </p>
          </div>
        </section>
        <h3 className="wcu-sub-header my-lg-1">Businesses</h3>
        <section className="features">
          <div className="feature">
            <h2>Enhanced Customer Engagement</h2>
            <p>
              Implementing a virtual try-on solution on your ecommerce website
              allows customers to engage with your products in a more immersive
              way, increasing interest and interaction..
            </p>
          </div>
          <div className="feature">
            <h2>Cross-Selling Opportunities</h2>
            <p>
              Use the virtual try-on platform to suggest complementary items or
              showcase how different pieces can be combined. This opens up
              cross-selling opportunities and encourages customers to explore
              more of your product catalog.
            </p>
          </div>
          <div className="feature">
            <h2>Increased Conversion Rates</h2>
            <p>
              The ability for customers to virtually try on products boosts
              confidence in purchasing decisions, translating to higher
              conversion rates as shoppers feel more certain about their
              choices..
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
              <h2>1. Upload your Wall Picture</h2>
              <p>
                Begin by uploading a photo of the empty wall where you imagine
                placing your chosen decor item / Wall Art.
              </p>
            </div>
            <div class="image-container">
              <img src={WallImage} alt="Image 1" class="image-right" />
            </div>
          </div>
        </section>

        <section className="al-magic-section">
          <div class="section-content">
            <div class="text">
              <h2>2. Upload Image of Decor Item / Wall Art</h2>
              <p>
                Choose or upload your favorite decor items / Wall Art,
                effortlessly overlaying them onto your wall picture.
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
              <h2>3. Check it virtually</h2>
              <p>
                Use your mouse to experiment with placement, virtually trying on
                different décor options to find your perfect look.
              </p>
            </div>
            <div class="image-container">
              <img src={Checkit} alt="Image 3" class="image-right" />
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
