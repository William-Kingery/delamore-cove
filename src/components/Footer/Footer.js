import React from "react";
// import { Link } from "react-router-dom";
import logo from '../../assets/images/logos/wave_logo-6.png';
import wlogo from '../../assets/images/logos/stay_logo.png';
import './Footer.scss';


const Footer = () => {


   return (
      <footer className="footer">
         <div className="footer__logo-cont">
            <img src={logo} alt="Delamore Cove Logo" className="footer__logo" />
         </div>
         <div className="footer__managed-by">
            <p className="footer__header">Managed By:</p>
            <p className="footer__header">Stay Waiheke</p>
            <a href="https://www.staywaiheke.com/holiday-homes?keyword=delamore%20cove" target="_blank" rel="noopener noreferrer" className="footer__managed-link"><img src={wlogo} alt="Waiheke Escapes logo" className="footer__w-logo"/></a>
         </div>
         <div className="footer__contact">
            <p className="footer__header">Contact Us</p>
            <p className="footer__text">Email: bookings@staywaiheke.com</p>
            <p className="footer__text">Phone: +64 9 372 5402</p>
            <p className="footer__text">Mobile: +64 21 563 271</p>
         </div>
         {/* <div className="footer__social">
            <p className="footer__header">Find us</p>
            <Link to="/facebook" className="footer__social-link">Facebook</Link>
            <Link to="/instagram" className="footer__social-link">Instagram</Link>
         </div> */}
      </footer>
   );
}

export default Footer
