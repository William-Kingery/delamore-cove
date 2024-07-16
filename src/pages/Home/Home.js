import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../../components/Header/Header";
import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/Footer";
import "./Home.scss"

// images
import image1 from "../../assets/images/general/1.jpeg";
import image2 from "../../assets/images/general/2.jpeg";
import image3 from "../../assets/images/general/3.jpeg";
import image4 from "../../assets/images/general/4.jpeg";
import image5 from "../../assets/images/general/5.jpeg";
import image6 from "../../assets/images/general/6.jpeg";
import image7 from "../../assets/images/general/7.jpeg";
import image8 from "../../assets/images/general/8.jpeg";
import image9 from "../../assets/images/general/9.jpeg";
import image10 from "../../assets/images/general/10.jpeg";
import image11 from "../../assets/images/general/11.jpeg";


const Home = () => {

   const images = [image2, image1, image3, image4, image5, image6, image7, image8, image9, image10, image11];
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

   return (
      <main>
         <Header />
         <hero>
            <div className="hero">
               <Slider {...settings}>
                  {images.map((image, index) => (
                     <div className="hero__image-cont" key={index}>
                        <img src={image} alt={`Slide ${index}`} className="hero__image" />
                     </div>
                  ))}
               </Slider>
            </div>
         </hero>
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
         <article className="article-2">
            <h3 className="article-2__header">Discover the Allure of Waiheke Island</h3>
            <Carousel />
            <div className="article-2__container">
               <p className="article-2__description" ref={(el) => (paragraphRefs.current[2] = el)}>
               Waiheke Island, a picturesque jewel off the coast of Auckland, New Zealand, invites you to experience its stunning beauty and serene charm at Delamore Cove. Known for its breathtaking beaches, lush vineyards, and vibrant community of just over 9,000 residents, Waiheke Island offers a warm welcome to visitors seeking tranquility and adventure alike.<br/>
               With a coastline stretching 100 kilometers, Waiheke Island is home to 25 magnificent beaches, each adorned with glistening turquoise waters. Popular spots like Oneroa, Little Oneroa, Palm Beach, and Onetangi beckon sunseekers and swimmers, while hidden gems such as Enclosure Bay, Rocky Bay, Woodside Bay, and Picnic Bay offer peaceful retreats. Explore the island’s mild climate and picturesque bays through numerous hiking trails or engage in exciting water sports like kayaking, paddleboarding, snorkeling and SCUBA diving.<br/>
               The island's warmer, drier microclimate creates an ideal environment for over 50 wineries, where vineyards thrive and produce exceptional wines. Indulge in tastings and vineyard tours that offer spectacular sea views. For beer enthusiasts, Waiheke boasts a variety of craft breweries, and spirits aficionados will find several distilleries to explore. The island's culinary scene is equally impressive, with award-winning restaurants and cafes serving delectable, locally sourced cuisine.<br/>
               Waiheke Island is a fantastic holiday destination year-round. In summer, bask in the sunshine and enjoy the vibrant beaches and bustling vineyards. In winter, discover a unique charm as the island offers slightly warmer temperatures, perfect for tranquil coastal strolls and wine tastings amidst frost-kissed vineyards. The island's ethereal winter beauty adds a touch of magic to your stay, making Delamore Cove the ultimate retreat for an unforgettable getaway on Waiheke Island.<br/>
               </p>
            </div>
            <div className="article-2__button-cont">
               <Link to="/suites" className="article-2__button">Explore Our Suites</Link>
            </div>
         </article>
         <Footer/>
      </main>
   );
}

export default Home;


