import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
    const images = [
        "https://delamore-cove.s3.us-east-2.amazonaws.com/10.jpg",
        "https://delamore-cove.s3.us-east-2.amazonaws.com/1-layout.png",
        "https://delamore-cove.s3.us-east-2.amazonaws.com/11.jpg",
        "https://delamore-cove.s3.us-east-2.amazonaws.com/12.jpg",
        "https://delamore-cove.s3.us-east-2.amazonaws.com/13+11.35.19.jpg",
        "https://delamore-cove.s3.us-east-2.amazonaws.com/4.jpg",
        "https://delamore-cove.s3.us-east-2.amazonaws.com/2.jpg",
        "https://delamore-cove.s3.us-east-2.amazonaws.com/3+11.35.19.jpg",
        "https://delamore-cove.s3.us-east-2.amazonaws.com/5.jpg",
        "https://delamore-cove.s3.us-east-2.amazonaws.com/6.jpg",
        "https://delamore-cove.s3.us-east-2.amazonaws.com/7.jpg",
        "https://delamore-cove.s3.us-east-2.amazonaws.com/8.jpg",
        "https://delamore-cove.s3.us-east-2.amazonaws.com/14.jpg",
        "https://delamore-cove.s3.us-east-2.amazonaws.com/15.jpg",
        "https://delamore-cove.s3.us-east-2.amazonaws.com/19.jpg",
    ];
    
     
    const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
        <button className="hero__nav-button hero__nav-button--prev" onClick={onClick}>
        <ChevronLeft size={24} />
        </button>
    );
    };
    
    const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
        <button className="hero__nav-button hero__nav-button--next" onClick={onClick}>
            <ChevronRight size={24} />
        </button>
    );
    };
      
    const settings = {
    dots: false,
    infinite: true,
    speed: 1100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    prevArrow: < CustomPrevArrow />,
    nextArrow: < CustomNextArrow />,
    };
    
    
    return (
        <article>
            <div className="hero">
            <Slider {...settings}>
               {images.map((image, index) => (
                  <div className="hero__image-cont" key={index}>
                  <img src={image} alt={`Slide ${index}`} className="hero__image" />
                  </div>
               ))}
            </Slider>
            </div>
         </article>
    );
}

export default Hero;
