import { Link } from "react-router-dom";
import heroImage from "../../assets/images/general/6.jpeg";
import "./Hero.scss";

const BOOKING_URL = "https://www.staywaiheke.com/holiday-homes?keyword=delamore%20cove";

const Hero = () => (
  <section className="hero" aria-labelledby="hero-title">
    <img
      className="hero__image"
      src={heroImage}
      alt="Aerial view across Delamore Cove and the water of Matiatia Bay"
    />
    <div className="hero__veil" aria-hidden="true" />
    <div className="hero__content shell">
      <p className="hero__eyebrow">Waiheke Island · Aotearoa New Zealand</p>
      <h1 className="hero__title" id="hero-title">A quieter side<br />of Waiheke.</h1>
      <p className="hero__copy">
        Four private stays held between native bush, open sky, and the changing waters of Matiatia Bay.
      </p>
      <div className="hero__actions">
        <Link className="button button--light" to="/suites">Explore the suites</Link>
        <a className="button hero__booking" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
          Check availability
        </a>
      </div>
    </div>
    <p className="hero__place">Matiatia Bay · 36.8° S</p>
  </section>
);

export default Hero;
