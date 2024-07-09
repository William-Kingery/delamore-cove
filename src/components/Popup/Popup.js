
import React, { useState } from 'react';
import './Popup.scss';

const Popup = ({ show, onClose, images, amenities }) => {
   const [currentImageIndex, setCurrentImageIndex] = useState(0);

   if (!show) {
      return null;
   }

   const handleNext = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
   };

   const handlePrev = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
   };

   return (
      <div className='popup'>
         <div className='popup__content'>
            <div className='popup__header'>
               <button className='popup__close' onClick={onClose}>X</button>
            </div>
            <div className='popup__images'>
               <img src={images[currentImageIndex]} alt={`Suite ${currentImageIndex + 1}`} />
               <div className='popup__nav'>
                  <button className='popup__button' onClick={handlePrev}>Previous</button>
                  <button className='popup__button' onClick={handleNext}>Next</button>
               </div>
            </div>
            <div className='popup__amenities'>
               <ul>
                  {amenities.map((amenity, index) => <li key={index}>{amenity}</li>)}
               </ul>
            </div>
         </div>
      </div>
   );
}

export default Popup;



