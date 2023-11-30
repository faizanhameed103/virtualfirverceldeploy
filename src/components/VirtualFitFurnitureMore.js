import React from 'react';
import './VFM.css'; // Your CSS file
import Navbar from './Navbar';
import F1 from '../Assets/furniture1.jpg'
import F2 from '../Assets/furniture2.jpg'
import F3 from '../Assets/furniture3.jpg'
const VirtualFitFurnitureMore = () => {
  return (
    <div className="blog-container">
      <div className="blog-section">
        <div className="photo-part">
          <img
            src={F1} // Replace with your image URL
            alt="Sample"
          />
        </div>
        <div className="text-part">
          <h1>Virtually Fit Furniture</h1>
          <p>
Virtual furniture fit is a revolutionary and innovative solution designed to transform the way we approach interior design and space planning. This technology leverages the power of augmented reality (AR) or virtual reality (VR) to enable individuals, designers, and homeowners to virtually experiment with different furniture arrangements within their living spaces.
With virtual furniture fit, you can superimpose 3D models of furniture items onto your room through a smartphone app or a VR headset, giving you the ability to visualize how various pieces will look and fit in your actual environment. This not only simplifies the decision-making process but also helps in preventing costly mistakes, as you can assess factors like scale, color, and placement without the need to physically move or purchase any furniture.</p>
        </div>
      </div>

      <div className="blog-section"> 
        <div className="text-part">
          <h1>Virtually Fit Furniture</h1>
          <p>
          Whether you’re planning a complete home makeover or simply considering a few changes to your existing decor, virtual furniture fit offers an immersive and interactive platform for trying out various layouts and styles, ensuring that your space is both aesthetically pleasing and functional. This technology has become an invaluable tool for interior designers, retail furniture outlets, and consumers alike, providing a seamless and engaging experience that makes the interior design process more efficient and enjoyable.

Virtual furniture fit goes beyond mere visualization; it empowers users to explore a wide range of design options, experiment with different furniture combinations, and fine-tune every aspect of their interior spaces. By interacting with virtual furniture in real-time, users can gauge how each piece fits within the context of their room’s architecture, lighting, and decor style.</p>
        </div>
      <div className="photo-part">
          <img
            src={F2} // Replace with your image URL
            alt="Sample"
          />
        </div>
       
      </div>

      {/* Section 3 */}
      <div className="blog-section">
      <div className="photo-part">
          <img
            src={F3} // Replace with your image URL
            alt="Sample"
          />
        </div>
        <div className="text-part">
          <h1>Virtually Fit Furniture</h1>
          <p>
Virtual furniture fit is a revolutionary and innovative solution designed to transform the way we approach interior design and space planning. This technology leverages the power of augmented reality (AR) or virtual reality (VR) to enable individuals, designers, and homeowners to virtually experiment with different furniture arrangements within their living spaces.

With virtual furniture fit, you can superimpose 3D models of furniture items onto your room through a smartphone app or a VR headset, giving you the ability to visualize how various pieces will look and fit in your actual environment. This not only simplifies the decision-making process but also helps in preventing costly mistakes, as you can assess factors like scale, color, and placement without the need to physically move or purchase any furniture.</p>
        </div>
      </div>
    </div>
  );
};

export default VirtualFitFurnitureMore;
