import { Car, Plane, Ship } from "lucide-react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import arrivalImage from "../../assets/images/general/2.jpeg";
import map from "../../assets/images/general/map.jpg";
import "./GettingHere.scss";

const seaLinks = [["Fullers", "Walk-on ferry from downtown Auckland", "https://www.fullers.co.nz/destinations-and-experiences/destinations/waiheke-island/"], ["Island Direct", "Walk-on ferry from downtown Auckland", "https://islanddirect.co.nz/"], ["SeaLink", "Vehicle ferry from Auckland", "https://www.sealink.co.nz/"]];
const airLinks = [["Island Aviation", "https://islandaviation.co.nz/"], ["Heletranz", "https://www.heletranz.co.nz/product/omana-heli-dine-stay/"], ["Inflite Charters", "https://inflitecharters.com/"], ["Helicopter Me", "https://www.helicopterme.co.nz/"]];
const carLinks = [["Waiheke Auto Rentals", "https://www.waihekerentals.co.nz/"], ["GO Rentals", "https://www.gorentals.co.nz/rental-car-locations/waiheke/"]];
const directionsUrl = "https://www.google.com/maps/dir//140+Delamore+Drive,+Oneroa,+Waiheke+Island+1081,+New+Zealand/@-36.7758583,174.9526125,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x6d72cb905c7f8a45:0x6f059875bb2cc67e!2m2!1d174.993812!2d-36.7759342!3e0?entry=ttu";

const GettingHere = () => (
  <main className="page">
    <Header />
    <header className="arrival-hero">
      <img src={arrivalImage} alt="Looking across the coast and water near Delamore Cove" />
      <div className="arrival-hero__veil" />
      <div className="arrival-hero__content shell">
        <p className="eyebrow">Your arrival</p>
        <h1 className="display-title">Cross the water.<br />Slow the pace.</h1>
        <p>Waiheke begins with the journey. From Auckland, come by passenger ferry, vehicle ferry, or air, then make your way to the quiet western edge of the island.</p>
      </div>
    </header>

    <section className="arrival-intro shell" aria-labelledby="arrival-title">
      <div><p className="eyebrow">A simple journey</p><h2 className="section-title" id="arrival-title">From city to cove.</h2></div>
      <p className="lede">Most guests arrive at Matiatia ferry terminal, just around the bay. Hire a vehicle, arrange a taxi, or bring your own car across with SeaLink. Onsite parking makes coming and going easy once you are here.</p>
    </section>

    <section className="arrival-options shell" aria-label="Ways to reach Waiheke">
      <article className="arrival-option">
        <Ship aria-hidden="true" /><p className="arrival-option__step">01 · By sea</p><h2>The classic crossing.</h2>
        <p>Passenger ferries leave downtown Auckland for Matiatia, while vehicle ferries arrive elsewhere on the island.</p>
        <ul>{seaLinks.map(([name, detail, href]) => <li key={name}><a href={href} target="_blank" rel="noopener noreferrer"><strong>{name}</strong><span>{detail}</span></a></li>)}</ul>
      </article>
      <article className="arrival-option">
        <Plane aria-hidden="true" /><p className="arrival-option__step">02 · By air</p><h2>A different view.</h2>
        <p>Scheduled and chartered air services connect Auckland and Waiheke. Confirm transfers and landing details directly with your chosen operator.</p>
        <ul>{airLinks.map(([name, href]) => <li key={name}><a href={href} target="_blank" rel="noopener noreferrer"><strong>{name}</strong><span>View operator</span></a></li>)}</ul>
      </article>
      <article className="arrival-option">
        <Car aria-hidden="true" /><p className="arrival-option__step">03 · On the island</p><h2>Move at your pace.</h2>
        <p>A vehicle is useful for vineyards and beaches further afield. Parking is available close to the accommodation.</p>
        <ul>{carLinks.map(([name, href]) => <li key={name}><a href={href} target="_blank" rel="noopener noreferrer"><strong>{name}</strong><span>View rentals</span></a></li>)}</ul>
      </article>
    </section>

    <section className="arrival-map shell">
      <div className="arrival-map__image"><img src={map} alt="Map showing Delamore Cove above Matiatia Bay on Waiheke Island" loading="lazy" /></div>
      <div className="arrival-map__content">
        <p className="eyebrow">The final stretch</p><h2 className="section-title">Find the cove.</h2>
        <address>140 Delamore Drive<br />Oneroa, Waiheke Island 1081<br />Aotearoa New Zealand</address>
        <p>Turn into Delamore Drive from Ocean View Road and follow it toward the coast. Parking is onsite, close to the suites. If you have specific mobility needs, contact Be My Guest Waiheke before arrival so the best suite and access can be confirmed.</p>
        <a className="button" href={directionsUrl} target="_blank" rel="noopener noreferrer">Open in Google Maps</a>
      </div>
    </section>
    <Footer />
  </main>
);

export default GettingHere;
