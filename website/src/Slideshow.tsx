// image slideshow for projects
import React, { useState } from 'react';

interface SlideshowProps {
  images: string[]; // An array of image URLs
}

export const Slideshow: React.FC<SlideshowProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="slideshow">
      <button onClick={goToPreviousSlide} className="prev-button">
        &lt;
      </button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <button onClick={goToNextSlide} className="next-button">
        &gt;
      </button>
    </div>
  );
};

export default Slideshow;
