import React, { useState, useEffect } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import Image1 from '../Pictures/IMG_3169.jpg';
import Image2 from '../Pictures/Image1.jpg';
import Image3 from '../Pictures/IMG_7242.jpg';
import Image4 from '../Pictures/IMG_2963.jpg';
import Image5 from '../Pictures/IMG_1694.jpeg';
import Image6 from '../Pictures/IMG_3387.jpg';
import Image7 from '../Pictures/Image7.jpg';
import Image8 from '../Pictures/Image8.jpg';
import Image9 from '../Pictures/Image3.JPG';
import Image10 from '../Pictures/IMG_7246.jpg';
import Image11 from '../Pictures/IMG_0000.jpg';
import Image12 from '../Pictures/IMG_7250.jpg';
import Image13 from '../Pictures/IMG_3176.jpg';
import Image14 from '../Pictures/IMG_3896.jpg';
import Image15 from '../Pictures/IMG_4173.jpg';
import Image16 from '../Pictures/IMG_5502.jpg';
import Image17 from '../Pictures/IMG_7280.jpg';
import Image18 from '../Pictures/IMG_7282.jpg';
import Image19 from '../Pictures/IMG_0936.jpg';
import Image20 from '../Pictures/IMG_0935.jpg';


function Residential() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const images = document.querySelectorAll('.gallery-img');
    images.forEach((image) => {
      image.onclick = () => {
        setSelectedImage(image.getAttribute('src'));
        setPopupVisible(true);
      };
    });
  }, []);

  const handlePrevImage = () => {
    const images = document.querySelectorAll('.gallery-img');
    const currentIndex = Array.from(images).findIndex(
      (image) => image.getAttribute('src') === selectedImage
    );
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex].getAttribute('src'));
  };

  const handleNextImage = () => {
    const images = document.querySelectorAll('.gallery-img');
    const currentIndex = Array.from(images).findIndex(
      (image) => image.getAttribute('src') === selectedImage
    );
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex].getAttribute('src'));
  };

  return (
    <div className="Residential-container">
      <div className="Residential">
        <h1>Residential Jobs</h1>
      </div>
      <div className="Images">
        <div className="Image1">
          <img src={Image1} alt="" className="gallery-img" />
          <img src={Image2} alt="" className="gallery-img" />
          <img src={Image3} alt="" className="gallery-img" />
          <img src={Image4} alt="" className="gallery-img" />
          <img src={Image5} alt="" className="gallery-img" />
          <img src={Image6} alt="" className="gallery-img" />
          <img src={Image7} alt="" className="gallery-img" />
          <img src={Image8} alt="" className="gallery-img" />
          <img src={Image9} alt="" className="gallery-img" />
          <img src={Image10} alt="" className="gallery-img" />
          <img src={Image11} alt="" className="gallery-img" />
          <img src={Image12} alt="" className="gallery-img" />
          <img src={Image13} alt="" className="gallery-img" />
          <img src={Image14} alt="" className="gallery-img" />
          <img src={Image15} alt="" className="gallery-img" />
          <img src={Image16} alt="" className="gallery-img" />
          <img src={Image17} alt="" className="gallery-img" />
          <img src={Image18} alt="" className="gallery-img" />
          <img src={Image19} alt="" className="gallery-img" />
          <img src={Image20} alt="" className="gallery-img" />
        </div>
      </div>
      {popupVisible && (
        <div className="popup-images">
          <span
            className="popup-close"
            onClick={() => setPopupVisible(false)}
          >
            &times;
          </span>
          <img src={selectedImage} alt="" />
          <button className="popup-prev" onClick={handlePrevImage}>
          <FontAwesomeIcon icon={faArrowLeft}/>
          </button>
          <button className="popup-next" onClick={handleNextImage}>
            <FontAwesomeIcon icon={faArrowRight}/>
          </button>
        </div>
      )}
    </div>
  );
}

export default Residential;
