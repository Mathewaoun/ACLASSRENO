import React, { useState } from 'react';
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
    const [selectedImage, setSelectedImage] = useState(null);

    const openPopup = (image) => {
      setSelectedImage(image);
    };
    const closePopup = () => {
      setSelectedImage(null);
    };
    return (
        <div className="commercial1">
            <div className='Commercial'>
            <h1>Commerical Jobs</h1></div>
                <div className='Images'>
                <div className='Image2'>
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
export default Commercial;