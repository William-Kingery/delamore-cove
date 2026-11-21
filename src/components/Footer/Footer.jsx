import { Link } from "react-router-dom";
import logo from "../../assets/images/logos/wave_logo-7.png";
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
          <a href="mailto:Bookings@bemyguestwaiheke.co.nz">Bookings@bemyguestwaiheke.co.nz</a>
          <a href="tel:+6493728462">International: +64 9 372 8462</a>
          <a href="tel:+6493728462">New Zealand: 09 372 8462</a>
          <a href="tel:0800400248">Toll free: 0800 400 248</a>
        </div>

        <div className="site-footer__managed">
          <p className="site-footer__label">Managed by Be My Guest Waiheke</p>
          <a
            href="https://bemyguestwaiheke.co.nz/collections/matiatia-bay"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book Delamore Cove through Be My Guest Waiheke"
          >
            <span className="site-footer__manager-wordmark">Be My Guest<br />Waiheke</span>
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
