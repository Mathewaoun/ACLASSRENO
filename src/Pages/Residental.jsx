import React, { useState } from 'react';
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
  const [selectedImage, setSelectedImage] = useState(null);

  const openPopup = (image) => {
    setSelectedImage(image);
  };

  const closePopup = () => {
    setSelectedImage(null);
  };

  return (
    <div className="Residential-container">
      <div className="Residential">
        <h1>Residential Jobs</h1>
      </div>
      <div className="Images">
        <div className="Image1">
          <img src={Image1} alt=" " onClick={() => openPopup(Image1)} />
          <img src={Image2} alt=" " onClick={() => openPopup(Image2)} />
          <img src={Image3} alt=" " onClick={() => openPopup(Image3)} />
          <img src={Image4} alt=" " onClick={() => openPopup(Image4)} />
          <img src={Image5} alt=" " onClick={() => openPopup(Image5)} />
          <img src={Image6} alt=" " onClick={() => openPopup(Image6)} />
          <img src={Image7} alt=" " onClick={() => openPopup(Image7)} />
          <img src={Image8} alt=" " onClick={() => openPopup(Image8)} />
          <img src={Image9} alt=" " onClick={() => openPopup(Image9)} />
          <img src={Image10} alt=" " onClick={() => openPopup(Image10)} />
          <img src={Image11} alt=" " onClick={() => openPopup(Image11)} />
          <img src={Image12} alt=" " onClick={() => openPopup(Image12)} />
          <img src={Image13} alt=" " onClick={() => openPopup(Image13)} />
          <img src={Image14} alt=" " onClick={() => openPopup(Image14)} />
          <img src={Image15} alt=" " onClick={() => openPopup(Image15)} />
          <img src={Image16} alt=" " onClick={() => openPopup(Image16)} />
          <img src={Image17} alt=" " onClick={() => openPopup(Image17)} />
          <img src={Image18} alt=" " onClick={() => openPopup(Image18)} />
          <img src={Image19} alt=" " onClick={() => openPopup(Image19)} />
          <img src={Image20} alt=" " onClick={() => openPopup(Image20)} />
        </div>
      </div>
      {selectedImage && (
        <div className="popup-images">
          <span onClick={closePopup}>&times;</span>
          <img src={selectedImage} alt="" />
        </div>
      )}
    </div>
  );
}

export default Residential;
