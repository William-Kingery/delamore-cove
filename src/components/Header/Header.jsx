import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/images/logos/wave_logo-7.png";
import "./Header.scss";

const BOOKING_URL = "https://bemyguestwaiheke.co.nz/collections/matiatia-bay";

const navigation = [
  { to: "/suites", label: "Suites" },
  { to: "/experiences", label: "Experiences" },
  { to: "/getting-here", label: "Getting here" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isMenuOpen);
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.classList.remove("menu-open");
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className={`site-header ${isScrolled ? "site-header--scrolled" : ""}`}>
      <div className="site-header__inner shell">
        <Link to="/" className="site-header__brand" aria-label="Delamore Cove home">
          <img src={logo} alt="Delamore Cove" className="site-header__logo" />
        </Link>

        <nav className="site-header__nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `site-header__nav-link ${isActive ? "is-active" : ""}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <a className="button site-header__booking" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
          Check availability
        </a>

        <button
          type="button"
          className="site-header__menu-button"
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="mobile-nav mobile-nav--open" id="mobile-navigation">
          <nav className="mobile-nav__inner" aria-label="Mobile navigation">
            <Link to="/" className="mobile-nav__link">Home</Link>
            {navigation.map((item) => (
              <Link key={item.to} to={item.to} className="mobile-nav__link">{item.label}</Link>
            ))}
            <a className="button mobile-nav__booking" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              Check availability
            </a>
            <p className="mobile-nav__note">Secure booking via Be My Guest Waiheke</p>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
