import React, { useState }  from 'react';
import "./Carousel.scss"

// images
import image12 from "../../assets/images/general/12.jpeg";
import image13 from "../../assets/images/general/13.jpeg";
import image14 from "../../assets/images/general/14.jpeg";
import image15 from "../../assets/images/general/15.jpg";
import image16 from "../../assets/images/general/16.jpg";
import image17 from "../../assets/images/general/17.jpg";


const Carousel = () => {

	const images = [image12, image13, image14, image15, image16, image17];
   const [currentIndex, setCurrentIndex] = useState(0);

   const goToPrevious = () => {
      const isFirstImage = currentIndex === 0;
      const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
   };

   const goToNext = () => {
      const isLastImage = currentIndex === images.length - 1;
      const newIndex = isLastImage ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
   };

   return (
      <div className="carousel">
         <div className="carousel__image-container">
            <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="carousel__image" />
         </div>
         <div className="carousel__indicators">
            {images.map((_, index) => (
               <div
                  key={index}
                  className={`carousel__indicator ${currentIndex === index ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
               ></div>
            ))}
         </div>
         <div className="carousel__controls">
            <button className="carousel__button" onClick={goToPrevious}>PREV</button>
            <button className="carousel__button" onClick={goToNext}>NEXT</button>
         </div>
      </div>
   );
}

export default Carousel



