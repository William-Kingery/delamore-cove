import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logos/wave_logo-7.png';
import './Header.scss';


const Header = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const page = useLocation();

   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };
   const handleBookingClick = (e) => {
      e.preventDefault();
      const userConfirmed = window.confirm("You are being directed to our lovely booking manager Stay Waiheke.");
      if (userConfirmed) {
         window.open("https://www.staywaiheke.com/holiday-homes?keyword=delamore%20cove", "_blank", "noopener,noreferrer");
      }
   };

   return (
      <header className="header">
         <Link to="/" className="header__logo-link">
            <img src={logo} alt="Delamore Cove Logo" className="header__logo" />
         </Link>
         <a href="https://www.staywaiheke.com/holiday-homes?keyword=delamore%20cove" target="_blank" rel="noopener noreferrer" className="header__button" onClick={handleBookingClick}>Book Your Stay</a>
         <div className={`header__hamburger ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
            <div className="header__ham-line"></div>
            <div className="header__ham-line"></div>
            <div className="header__ham-line"></div>
         </div>
         <ul className={`header__dropdown ${isMenuOpen ? "open" : "hidden"}`}>
            {page.pathname !== "/" && <li className="header__drop-item"><Link className="header__item-link" to="/">Home</Link></li>}
            {page.pathname !== "/suites" && <li className="header__drop-item"><Link className="header__item-link" to="/suites">Suites</Link></li>}
            {page.pathname !== "/experiences" && <li className="header__drop-item"><Link className="header__item-link" to="/experiences">Experiences</Link></li>}
            {page.pathname !== "/getting-here" && <li className="header__drop-item"><Link className="header__item-link" to="/getting-here">Getting Here</Link></li>}
            <li className="header__drop-item"><a className="header__item-link" href="https://www.staywaiheke.com/holiday-homes?keyword=delamore%20cove" target="_blank" rel="noopener noreferrer" onClick={handleBookingClick}>Book Your Stay</a></li>
         </ul>
      </header>
   );
}

export default Header;

