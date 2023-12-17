import React, { useState } from "react";

const ImageSlider = () => {
  const images = [
    "https://picsum.photos/800/400/?image=1018",
    "https://picsum.photos/800/400/?image=1015",
    "https://picsum.photos/800/400/?image=1005",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState(null);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setError(null);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setError(null);
  };

  const handleImageError = () => {
    setError(`Error loading image: ${images[currentIndex]}`);
  };

  return (
    <div>
      <div style={{ position: "relative" }}>
        <div
          onClick={prevImage}
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            transform: "translateY(-50%)",
            cursor: currentIndex === 0 ? "not-allowed" : "pointer",
            fontSize: "24px",
            color: "white",
            zIndex: 1,
          }}
        >
          {"<"}
        </div>
        {error ? (
          <p>{error}</p>
        ) : (
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            onError={handleImageError}
            style={{ width: "100%" }}
          />
        )}
        <div
          onClick={nextImage}
          style={{
            position: "absolute",
            top: "50%",
            right: 0,
            transform: "translateY(-50%)",
            cursor:
              currentIndex === images.length - 1 ? "not-allowed" : "pointer",
            fontSize: "24px",
            color: "white",
            zIndex: 1,
          }}
        >
          {">"}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
