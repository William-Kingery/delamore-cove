import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import hero01 from "../../assets/images/hero/01.jpg";
import hero02 from "../../assets/images/hero/02.jpg";
import hero03 from "../../assets/images/hero/03.jpg";
import hero04 from "../../assets/images/hero/04.jpg";
import hero05 from "../../assets/images/hero/05.jpg";
import hero06 from "../../assets/images/hero/06.jpg";
import hero07 from "../../assets/images/hero/07.jpg";
import hero08 from "../../assets/images/hero/08.jpg";
import hero09 from "../../assets/images/hero/09.jpg";
import hero10 from "../../assets/images/hero/10.jpg";
import hero11 from "../../assets/images/hero/11.jpg";
import hero12 from "../../assets/images/hero/12.jpg";
import hero13 from "../../assets/images/hero/13.jpg";
import hero14 from "../../assets/images/hero/14.jpg";
import hero15 from "../../assets/images/hero/15.jpg";
import "./Hero.scss";

const BOOKING_URL = "https://www.staywaiheke.com/holiday-homes?keyword=delamore%20cove";

const heroImages = [
  { src: hero03, alt: "Aerial view across Matiatia Bay and the Waiheke coastline" },
  { src: hero04, alt: "Aerial view of Delamore Cove above Matiatia Bay" },
  { src: hero05, alt: "Delamore Cove held between native bush and the sea" },
  { src: hero06, alt: "Coastal landscape surrounding Delamore Cove" },
  { src: hero07, alt: "View across the blue waters and green headlands of Waiheke Island" },
  { src: hero08, alt: "Delamore Cove and the landscape of western Waiheke" },
  { src: hero09, alt: "Elevated view from Delamore Cove toward the Hauraki Gulf" },
  { src: hero10, alt: "Native bush and coastal scenery near Delamore Cove" },
  { src: hero11, alt: "The changing waters of Matiatia Bay" },
  { src: hero12, alt: "Wide island view from above Delamore Cove" },
  { src: hero13, alt: "Waiheke coastline and native landscape" },
  { src: hero14, alt: "Open water and island scenery from Delamore Cove" },
  { src: hero15, alt: "Sunset over Matiatia Bay" },
  { src: hero02, alt: "Delamore Cove entrance among native planting" },
  { src: hero01, alt: "Aerial property overview showing the four Delamore Cove suites" },
];

const Hero = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isInteracting, setIsInteracting] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const showPrevious = () => setActiveImage((index) => (index - 1 + heroImages.length) % heroImages.length);
  const showNext = () => setActiveImage((index) => (index + 1) % heroImages.length);

  useEffect(() => {
    const mediaQuery = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!mediaQuery) return undefined;
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener?.("change", updatePreference);
    return () => mediaQuery.removeEventListener?.("change", updatePreference);
  }, []);

  useEffect(() => {
    if (!isPlaying || isInteracting || prefersReducedMotion) return undefined;
    const timer = window.setInterval(showNext, 5500);
    return () => window.clearInterval(timer);
  }, [isPlaying, isInteracting, prefersReducedMotion, activeImage]);

  useEffect(() => {
    const nextImage = new Image();
    nextImage.src = heroImages[(activeImage + 1) % heroImages.length].src;
  }, [activeImage]);

  return (
    <section
      className="hero"
      aria-labelledby="hero-title"
      aria-roledescription="carousel"
      aria-label="Delamore Cove landscape gallery"
      onFocusCapture={() => setIsInteracting(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsInteracting(false);
      }}
    >
      <img
        key={heroImages[activeImage].src}
        className="hero__image"
        src={heroImages[activeImage].src}
        alt={heroImages[activeImage].alt}
        fetchPriority={activeImage === 0 ? "high" : "auto"}
      />
      <div className="hero__veil" aria-hidden="true" />

      <div className="hero__content shell">
        <p className="hero__eyebrow">Waiheke Island · Aotearoa New Zealand</p>
        <h1 className="hero__title" id="hero-title"><span>A quieter side</span><span>of Waiheke.</span></h1>
        <p className="hero__copy">Four private stays held between native bush, open sky, and the changing waters of Matiatia Bay.</p>
        <div className="hero__actions">
          <Link className="button button--light" to="/suites">Explore the suites</Link>
          <a className="button hero__booking" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Check availability</a>
        </div>
      </div>

      <div className="hero__controls" aria-label="Hero gallery controls">
        <p aria-live="polite">{String(activeImage + 1).padStart(2, "0")} / {String(heroImages.length).padStart(2, "0")}</p>
        <button type="button" onClick={showPrevious}>Previous</button>
        <button type="button" onClick={() => setIsPlaying((playing) => !playing)} aria-pressed={!isPlaying}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button type="button" onClick={showNext}>Next</button>
      </div>

      <p className="hero__place">Matiatia Bay · 36.8° S</p>
    </section>
  );
};

export default Hero;
