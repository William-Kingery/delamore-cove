import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './GettingHere.scss'

import image2 from "../../assets/images/general/2.jpeg";

const GettingHere = () => {
   return (
      <main>
         <Header/>
         <hero>
            <div className='get-hero'>
               <h3 className="get-hero__text-overlay">Traveling to the "Island of Wine"</h3>
               <img className='get-hero__image' src={image2} alt='Waiheke Cove with sailboat'></img>
            </div>
         </hero>
         <article className='get-article'>
            <div className='get-article__exploring-cont'>
               <p className='get-article__exploring'>Exploring the captivating Waiheke Island is effortless. 
                  Just a scenic 40-minute ferry ride or a quick 10-minute flight from Auckland City brings you to this stunning destination.
               </p>
            </div>
            <div className='get-article__travel'>
               <div className='get-article__transport'>
                  <h3 className='get-article__header'>Traveling to Waiheke by Sea</h3>
                  <ul className='get-article__list'>
                     <li className=''><a className='get-article__item-link' href='https://www.fullers.co.nz/destinations-and-experiences/destinations/waiheke-island/'>Fullers</a> Walk-on ferry from downtown Auckland</li>
                     <li><a className='get-article__item-link' href='https://islanddirect.co.nz/'>Island Direct</a> Walk-on ferry from downtown Auckland</li>
                     <li><a className='get-article__item-link' href='https://www.sealink.co.nz/'>Sealink</a> Car ferry from Auckland</li>
                  </ul>
               </div>
               <div className='get-article__transport'>
                  <h3 className='get-article__header'>Traveling to Waiheke by Air</h3>
                  <p className='get-article__description'>We are located approximately 20 minutes from Waikiki Island-Carson Airfield</p>
                  <ul className='get-article__list'>
                     <li><a className='get-article__item-link' href='https://islandaviation.co.nz/'>Island Aviation</a></li>
                     <li><a className='get-article__item-link' href='https://www.heletranz.co.nz/product/omana-heli-dine-stay/'>Heletranz Helicopter</a></li>
                     <li><a className='get-article__item-link' href='https://inflitecharters.com/'>Inflite Charters</a></li>
                     <li><a className='get-article__item-link' href='https://www.helicopterme.co.nz/'>HeliMe</a></li>
                  </ul>
               </div>
               <div className='get-article__transport'>
                  <h3 className='get-article__header'>Vehical Rentals</h3>
                  <p className='get-article__description'>If you like the idea of exploring the island by car, Waiheke features several car rental services:</p>   
                  <ul className='get-article__list'>
                     <li><a className='get-article__item-link' href='https://www.staywaiheke.com/rental-cars'>Stay Waiheke</a></li>
                     <li><a className='get-article__item-link' href='https://www.waihekerentals.co.nz/'>Waiheke Auto Rentals</a></li>
                     <li><a className='get-article__item-link' href='https://www.gorentals.co.nz/rental-car-locations/waiheke/'>GO Rentals</a></li>
                  </ul> 
                  <p className='get-article__description'>At Delamore Cove, we offer ample parking, a significant advantage as few places on the island provide this convenience. 
                     Parking is right outside your front door, making it ideal for anyone with mobility issues. 
                     Unlike other places where you might have to park and walk uphill to reach your accommodation, our parking is easily accessible.
                  </p> 
               </div>
               <div className='get-article__transport'>
                  <h3 className='get-article__header'>Directions to Delamore Cove</h3>
                  <p className='get-article__description'><div className='get-article__bold'>Address:</div> 140 Delamore Drive, Oneroa, Waiheke Island 1081, New Zealand</p>
                  <p className='get-article__bold'>Directions: <a className='get-article__item-link' href='https://www.google.com/maps/dir//140+Delamore+Drive,+Oneroa,+Waiheke+Island+1081,+New+Zealand/@-36.7758583,174.9526125,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x6d72cb905c7f8a45:0x6f059875bb2cc67e!2m2!1d174.993812!2d-36.7759342!3e0?entry=ttu'
                  >Open with Google Maps</a></p>
               </div>
            </div>
         </article>
         <Footer/>
      </main>
   )
} 

export default GettingHere


