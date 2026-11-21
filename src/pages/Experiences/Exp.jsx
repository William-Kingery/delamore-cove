import React, { useEffect } from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import './Exp.scss';

import image6 from "../../assets/images/general/6.jpeg";
import image13 from "../../assets/images/general/13.jpeg";
import image17 from "../../assets/images/general/17.jpg";
import image18 from "../../assets/images/general/18.jpeg";

const Experiences = () => {

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   return (
      <main className="exp">
         <Header/>
         <article>
            <div className='exp-hero'>
               <h2 className="exp-hero__text-overlay">What We Love<br/>On<br/>Waiheke</h2>
               <img className='exp-hero__image' src={image6} alt='Waiheke Cove with sailboat'></img>
            </div>
         </article>
         <article className="exp-article">
            <div className="exp-article__main-cont">
               <div className="exp-article__cont">
                  <div className="exp-article__img-cont">
                     <h3 className="exp-article__header">Wineries</h3>
                     <img className="exp-article__image" src={image17} alt='Waiheke vinyard'></img>
                  </div>
                  <div className="exp-article__container">
                     <div className="exp-article__experience-cont">
                        <h3 className="exp-article__experience"><a href="https://mudbrick.co.nz" target="_blank" rel="noopener noreferrer" className="exp-article__link">
                           Mudbrick Winery</a></h3>
                        <p className="exp-article__description">Undoubtedly one of the most breathtaking wineries on Waiheke. 
                           Nestled in exquisite gardens with expansive sea views, Mudbrick’s vineyard and restaurant epitomize elegance. 
                        </p>
                        <p className="exp-article__description"><strong>Wine Tastings:</strong> Reserve tasting $25 for 4 wines, flagship tasting $30 for 3 wines.</p>
                        <p className="exp-article__description"><strong>Distance:</strong> 6-minute drive from Delamore Cove</p>
                     </div>
                     <div className="exp-article__experience-cont">
                        <h3 className="exp-article__experience"><a href="https://cablebay.nz/#:~:text=At%20Cable%20Bay%20Vineyards%20we,suited%20to%20our%20unique%20climates." target="_blank" rel="noopener noreferrer" className="exp-article__link">
                           Cable Bay Vinyards</a></h3>
                        <p className="exp-article__description">Exquisite cuisine, award-winning wines, and breathtaking views. 
                           The picturesque grounds provide a perfect backdrop for an unforgettable experience.  
                        </p>
                        <p className="exp-article__description"><strong>Wine Tastings:</strong> Swift River tasting for $20, Glistening Waters tasting for $30</p>
                        <p className="exp-article__description"><strong>Distance:</strong> 5-minute drive from Delamore Cove</p>
                     </div>
                     <div className="exp-article__experience-cont">
                        <h3 className="exp-article__experience"><a href="https://www.manowar.co.nz/" target="_blank" rel="noopener noreferrer" className="exp-article__link">
                        Man O' War</a></h3>
                        <p className="exp-article__description">One of Waiheke’s is a picturesque vineyards, uniquely situated right by the beach. 
                           Its remote location on the island’s western edge also makes it one of the most exclusive. 
                        </p>
                        <p className="exp-article__description"><strong>Wine Tastings:</strong> Flagship Tasting $32 per person, Kulta Tasting $75 per person, including sourdough and Man O' War olive oil</p>
                        <p className="exp-article__description"><strong>Distance:</strong> 40-minute drive from Delamore Cove</p>
                     </div>
                     <div className="exp-article__experience-cont">
                        <h3 className="exp-article__experience"><a href="https://www.casitamiro.co.nz/" target="_blank" rel="noopener noreferrer" className="exp-article__link">
                        Casita Miro</a></h3>
                        <p className="exp-article__description">Small and richly atmospheric vineyard, drawing inspiration from Spanish and Mediterranean influences. 
                           The picturesque grounds are adorned with Gaudi-esque mosaics and olive trees.
                        </p>
                        <p className="exp-article__description"><strong>Wine Tasting:</strong> five wines for $20</p>
                        <p className="exp-article__description"><strong>Distance:</strong> 15-minute drive from Delamore Cove</p>
                     </div>
                  </div> 
               </div>
               <div className="exp-article__cont">
                  <div className="exp-article__img-cont">
                     <h3 className="exp-article__header">Restaurants</h3>
                     <img className="exp-article__image" src={image18} alt='Waiheke vinyard'></img>
                  </div>
                  <div className="exp-article__container">
                     <div className="exp-article__experience-cont">
                        <h3 className="exp-article__experience"><a href="https://www.theoysterinn.co.nz/" target="_blank" rel="noopener noreferrer" className="exp-article__link">
                        The Oyster Inn</a></h3>
                        <p className="exp-article__description"><strong>Why we love it:</strong>Delicious seafood, oysters on the half shell and views of Oneroa Bay.</p>
                        <p className="exp-article__description"><strong>Distance:</strong> 5-minute drive from Delamore Cove</p>
                     </div>
                     <div className="exp-article__experience-cont">
                        <h3 className="exp-article__experience"><a href="https://kimaha.nz/" target="_blank" rel="noopener noreferrer" className="exp-article__link">
                        Ki Maha</a></h3>
                        <p className="exp-article__description"><strong>Why we love it:</strong> Sustainably harvested seafood, ethically farmed meats, and locally sourced seasonal fruit and vegetables. Views of the beautiful Onetangi Bay.</p>
                        <p className="exp-article__description"><strong>Distance:</strong> 20-minute drive from Delamore Cove</p>
                     </div>
                     <div className="exp-article__experience-cont">
                        <h3 className="exp-article__experience"><a href="https://www.redcrab.co.nz/" target="_blank" rel="noopener noreferrer" className="exp-article__link">
                        Red Crab</a></h3>
                        <p className="exp-article__description"><strong>Why we love it:</strong> Delicious Thai cuisine with amazing views of Oneroa Bay.</p>
                        <p className="exp-article__description"><strong>Distance:</strong> 5-minute drive from Delamore Cove</p>
                     </div>
                     <div className="exp-article__experience-cont">
                        <h3 className="exp-article__experience"><a href="https://wildestate.co.nz/" target="_blank" rel="noopener noreferrer" className="exp-article__link">
                        Wild on Waiheke</a></h3>
                        <p className="exp-article__description"><strong>Why we love it:</strong> Delicious food, wine, beer and bar game. What more could you ask for!</p>
                        <p className="exp-article__description"><strong>Distance:</strong> 15-minute drive from Delamore Cove</p>
                     </div>
                  </div>   
               </div>              
               <div className="exp-article__cont">
                  <div className="exp-article__img-cont">
                     <h3 className="exp-article__header">Hiking</h3>
                     <img className="exp-article__image" src={image13} alt='Waiheke vinyard'></img>
                  </div>
                  <div className="exp-article__container">
                     <div className="exp-article__experience-cont">
                        <h3 className="exp-article__experience"><a href="https://www.alltrails.com/trail/new-zealand/auckland/northern-walk-matiatia-owhanake-oneroa" target="_blank" rel="noopener noreferrer" className="exp-article__link">
                        Northern Walk</a></h3>
                        <p className="exp-article__description"><strong>Length:</strong> 9 km</p>
                        <p className="exp-article__description"><strong>Type:</strong> Loop</p>
                        <p className="exp-article__description"><strong>Location:</strong> 7-27 Ocean View Road, Auckland 1081, New Zealand</p>
                     </div>
                     <div className="exp-article__experience-cont">
                        <h3 className="exp-article__experience"><a href="https://www.alltrails.com/trail/new-zealand/auckland/waiheke-island-short-loop" target="_blank" rel="noopener noreferrer" className="exp-article__link">
                        Waiheke Island Short Loop</a></h3>
                        <p className="exp-article__description"><strong>Length:</strong> 5.6 km</p>
                        <p className="exp-article__description"><strong>Type:</strong> Loop</p>
                        <p className="exp-article__description"><strong>Location:</strong> Access to this trail is right outside our gates.</p>
                     </div>
                     <div className="exp-article__experience-cont">
                        <h3 className="exp-article__experience"><a href="https://www.alltrails.com/trail/new-zealand/auckland/southern-walk-matiatia-church-bay-oneroa-loop" target="_blank" rel="noopener noreferrer"className="exp-article__link">
                        Southern Walk</a></h3>
                        <p className="exp-article__description"><strong>Length:</strong> 8.3 km</p>
                        <p className="exp-article__description"><strong>Type:</strong> Loop</p>
                        <p className="exp-article__description"><strong>Location:</strong> 7-27 Ocean View Road, Auckland 1081, New Zealand</p>
                     </div>
                     <div className="exp-article__experience-cont">
                        <h3 className="exp-article__experience"><a href="https://www.alltrails.com/trail/new-zealand/auckland/oneroa-beach-track" target="_blank" rel="noopener noreferrer" className="exp-article__link">
                        Oneroa Beach Track</a></h3>
                        <p className="exp-article__description"><strong>Length:</strong> 3.5 km</p>
                        <p className="exp-article__description"><strong>Type:</strong> Out & Back</p>
                        <p className="exp-article__description"><strong>Location:</strong> 36 Beach Parade, Oneroa, Waiheke Island 1081, New Zealand</p>
                     </div>
                  </div>
               </div>
            </div>
         </article>
         <Footer/>
      </main>     
   );
};

export default Experiences;



