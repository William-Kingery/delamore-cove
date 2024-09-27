import React, { useEffect, useRef} from "react";
import { Link, useNavigate} from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import suiteData from '../../data/suiteData';
import Header from "../../components/Header/Header"
import Review from "../../components/Review/Review"
import Footer from "../../components/Footer/Footer";
import "./Home.scss"

// images
import image1 from "../../assets/images/general/1.jpeg";
import imageLayout from "../../assets/images/general/1-layout.jpg";
import image2 from "../../assets/images/general/2.jpeg";
import image3 from "../../assets/images/general/3.jpeg";
import image4 from "../../assets/images/general/4.jpeg";
import image5 from "../../assets/images/general/5.jpeg";
import image6 from "../../assets/images/general/6.jpeg";
import image7 from "../../assets/images/general/7.jpeg";
import image8 from "../../assets/images/general/8.jpeg";
import image9 from "../../assets/images/general/9.jpeg";
import image11 from "../../assets/images/general/11.jpeg";
import image19 from "../../assets/images/general/19.jpg";
import image20 from "../../assets/images/general/20.jpg";



const Home = () => {

   const images = [image2, imageLayout, image1, image3, image4, image5, image6, image7, image8, image9, image11, image19, image20];
   const settings = {
      dots: true,
      infinite: true,
      speed: 1100,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
   };

   const paragraphRefs = useRef([]);
   useEffect(() => {
      const options = {
         root: null,
         rootMargin: "0px",
         threshold: 0.5, 
      };

      const observer = new IntersectionObserver((entries) => {
         entries.forEach((entry) => {
            if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
         }
         });
      }, options);

      paragraphRefs.current.forEach((ref) => {
         observer.observe(ref);
      });

      return () => {
         observer.disconnect();
      };
   }, []);

   const handleBookingClick = (e) => {
      e.preventDefault();
      const userConfirmed = window.confirm("You are being directed to our lovely booking manager Stay Waiheke.");
      if (userConfirmed) {
         window.open("https://www.staywaiheke.com/holiday-homes?keyword=delamore%20cove", "_blank", "noopener,noreferrer");
      }
   };
   const navigate = useNavigate();

   const handleSuiteClick = (index) => {
      navigate('/suites', { state: { suiteId: index } });
   };
   
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);
   
   return (
      <main>
         <Header />
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
         <article className="article">
            <h1 className="article__header">Welcome to Delamore Cove</h1>
            <h2 className="article__subheader">WAIHEKE ISLAND, NEW ZEALAND</h2>
            <div className="article__paragraph-cont">
               <p className="article__paragraph" ref={(el) => (paragraphRefs.current[0] = el)}>
                  Embark on a journey of tranquility at Delamore Cove, a secluded haven nestled within the breathtaking landscapes of Waiheke Island, New Zealand. This exclusive retreat offers an array of accommodations, including four elegantly appointed rooms, each designed to immerse guests in the natural beauty of the surrounding landscape.<br/>
                  From the moment you arrive, you'll be captivated by the stunning views and serene surroundings that define this enchanting estate. Perched atop the private grounds of the gated Delamore Cove, each accommodation boasts uninterrupted vistas of the sea and lush bushland, creating a picturesque backdrop for unforgettable moments.<br/>
                  Whether you're admiring the vibrant hues of a sunset cascading across the Bay to Motuihe Island or stargazing under the Milky Way's dazzling display, every experience at Delamore Cove is imbued with a sense of wonder.<br/>
               </p>
               <div className="article__villas-button-cont">
                  <Link to="/suites" className="article__villas-button">Explore Our Suites</Link>
               </div>
               <p className="article__paragraph" ref={(el) => (paragraphRefs.current[1] = el)}>
                  Ideal for families and groups, the estate features a variety of amenities to ensure a comfortable and memorable stay. Enjoy leisurely evenings on the private covered porch and BBQ area, or prepare delicious meals in the well-equipped kitchenettes. Each room offers a unique blend of comfort and charm, with cozy furnishings and modern conveniences to enhance your experience.<br/>
                  Conveniently located just minutes from Oneroa Village, with its eclectic mix of cafes, restaurants, and boutique shops, and close to renowned vineyards such as Mudbrick and Cable Bay, Delamore Cove provides the perfect base for exploring the island's rich cultural and culinary offerings.<br/>
                  For outdoor enthusiasts, the estate's proximity to the popular Te Ara Hura track offers endless opportunities for hiking and exploration, with trails starting directly from the property entrance.<br/>
                  With its tranquil setting, impeccable amenities, and stunning surroundings, Delamore Cove is the ultimate retreat for those seeking a truly unforgettable getaway on Waiheke Island.<br/>
               </p>
            </div>
            <div className="article__button-cont">
               <a href="https://www.staywaiheke.com/holiday-homes?keyword=delamore%20cove" target="_blank" rel="noopener noreferrer" className="article__button" onClick={handleBookingClick}>Book Your Stay</a>
            </div>   
         </article>
         <article className="suite">
            <h3 className="suite__header">Discover the Suites at Delamore Cove</h3>
            <div className="suite__container">
               {suiteData.map((suite, index) => (
               <div key={index} className="suite__item" onClick={() => handleSuiteClick(index)}>
                  <img src={suite.images[0]} alt={`${suite.name}`} className="suite__image" />
                  <h3 className="suite__name">{suite.name}</h3>
                  <p className="suite__tap">Tap to View</p>
                  <div className="suite__short-cont">
                     <p className="suite__short">{suite.short}</p>
                     <p className="suite__price">{suite.price}</p>
                  </div>
               </div>
               ))}
            </div>
            <div className="suite__button-cont">
               <Link to="/suites" className="suite__button">Explore Our Suites</Link>
            </div>
         </article>
         <article>
            <Review/>
         </article>
         <Footer/>
      </main>
   );
}

export default Home;


