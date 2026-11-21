import { Link } from "react-router-dom";
import logo from "../../assets/images/logos/wave_logo-7.png";
import wlogo from "../../assets/images/logos/stay_logo.png";
import "./Footer.scss";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner shell">
        <div className="site-footer__brand">
          <Link to="/" aria-label="Delamore Cove home">
            <img src={logo} alt="Delamore Cove" className="site-footer__logo" />
          </Link>
          <p>Quiet island stays above Matiatia Bay.</p>
          <p>Waiheke Island, Aotearoa New Zealand</p>
        </div>

        <nav className="site-footer__nav" aria-label="Footer navigation">
          <p className="site-footer__label">Explore</p>
          <Link to="/suites">Suites</Link>
          <Link to="/experiences">Experiences</Link>
          <Link to="/getting-here">Getting here</Link>
        </nav>

        <div className="site-footer__contact">
          <p className="site-footer__label">Contact</p>
          <a href="mailto:bookings@staywaiheke.com">bookings@staywaiheke.com</a>
          <a href="tel:+6493725402">+64 9 372 5402</a>
          <a href="tel:+6421563271">+64 21 563 271</a>
        </div>

        <div className="site-footer__managed">
          <p className="site-footer__label">Managed by Stay Waiheke</p>
          <a
            href="https://www.staywaiheke.com/holiday-homes?keyword=delamore%20cove"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book Delamore Cove through Stay Waiheke"
          >
            <img src={wlogo} alt="Stay Waiheke" className="site-footer__manager-logo" />
          </a>
        </div>
      </div>

      <div className="site-footer__base shell">
        <p>© {year} Delamore Cove</p>
        <p>140 Delamore Drive, Oneroa</p>
      </div>
    </footer>
  );
};

export default Footer;
