import React, { useState, useEffect } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import Image1 from '../Pictures/IMG_0775.jpeg';
import Image2 from '../Pictures/IMG_0785.jpeg';
import Image3 from '../Pictures/IMG_0781.jpeg';
import Image4 from '../Pictures/IMG_0783.jpeg';
import Image5 from '../Pictures/IMG_2491.jpg';
import Image6 from '../Pictures/IMG_2492.jpg';
import Image7 from '../Pictures/IMG_2497.jpg';
import Image8 from '../Pictures/IMG_2498.jpg';
import Image9 from '../Pictures/IMG_3525.jpg';
import Image10 from '../Pictures/IMG_3528.jpg';
import Image11 from '../Pictures/IMG_3530.jpg';
import Image12 from '../Pictures/IMG_3532.jpg';
import Image13 from '../Pictures/IMG_2487.jpg';
import Image14 from '../Pictures/IMG_3145.jpg';
import Image15 from '../Pictures/IMG_3142.jpg';
import Image16 from '../Pictures/IMG_3146.jpg';

function Commercial (){
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
        <div className="commercial1">
            <div className='Commercial'>
            <h1>Commerical Jobs</h1></div>
                <div className='Images'>
                <div className='Image2'>
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
                </div>
            </div>
            {popupVisible && (
            <div className="popup-images">
          <span className="popup-close" onClick={() => setPopupVisible(false)}> &times;
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
export default Commercial;