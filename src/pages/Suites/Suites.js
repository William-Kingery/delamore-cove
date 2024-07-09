import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Popup from '../../components/Popup/Popup';
import suiteData from '../../data/suiteData';
import './Suites.scss'



const Suites  = () => {

   const [showPopup, setShowPopup] = useState(false);
   const [popupContent, setPopupContent] = useState({ images: [], amenities: [] });

   const handleShowPopup = (suite) => {
      setPopupContent(suite);
      setShowPopup(true);
   };

   const handleClosePopup = () => {
      setShowPopup(false);
   };

   const handleBookingClick = (e, href) => {
      e.preventDefault();
      const userConfirmed = window.confirm("You are being directed to our lovely booking manager Stay Waiheke.");
      if (userConfirmed) {
         window.open(href, "_blank", "noopener,noreferrer");
      }
   };

   return (
      <main>
         <Header/>
         <section className='villas'>
            <h1 className='villas__header'>Explore Delamore Cove Suites</h1>
            <p className='villas__main-description'>Delamore Cove, with its elevated position, offers breathtaking, uninterrupted views of the sea and surrounding bushland, providing stunning sunsets across the Bay to Motuihe Island and beyond. 
               The romance of passing yachts and ferries gliding to and from the island, combined with the iconic weathered red woodshed on the foreshore, with its pile mooring and tethered yachts, draws your eye and serves as a charming reminder of yesteryear.
               On clear nights, enjoy the dazzling display of stars in the Milky Way and the distant city lights.</p>
            {Array.isArray(suiteData) ? suiteData.map((suite, index) => (
               <div key={index} className='villas__main-container' onClick={() => handleShowPopup(suite)}>
                  <div className='villas__img-cont'>
                     <img className='villas__img' src={suite.images[0]} alt={`${suite.name} room`} />
                  </div>
                  <div className='villas__container'>
                     <h2 className='villas__name'>{suite.name}</h2>
                     <p className='villas__tap'>Tap to Open</p>
                     <div className='villas__description-cont'>
                        <p className='villas__description'>{suite.description}</p>
                     </div>
                     <div className="villas__button-cont">
                        <a href={suite.href} target="_blank" rel="noopener noreferrer" className="villas__button" onClick={(e) => handleBookingClick(e, suite.href)}>Reserve {suite.name} Suite</a>
                     </div>
                  </div>
               </div>
            )) : <div>Error: suiteData is not an array</div>} 
               <Popup show={showPopup} onClose={handleClosePopup} images={popupContent.images} amenities={popupContent.amenities} />
         </section>
         <Footer/>
      </main>
   )
}

export default Suites




