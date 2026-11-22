import React from "react";
// import { Link } from "react-router-dom";
import logo from '../../assets/images/logos/wave_logo-7.png';
import './Footer.scss';


const Footer = () => {


   return (
      <footer className="footer">
         <div className="footer__logo-cont">
            <img src={logo} alt="Delamore Cove Logo" className="footer__logo" />
         </div>
         <div className="footer__managed-by">
            <p className="footer__header">Managed by Be My Guest Waiheke</p>
            <a href="https://bemyguestwaiheke.co.nz/collections/matiatia-bay" target="_blank" rel="noopener noreferrer" className="footer__managed-link">Visit Be My Guest Waiheke</a>
         </div>
         <div className="footer__contact">
            <p className="footer__header">Contact Us</p>
            <p className="footer__text">Email: <a href="mailto:Bookings@bemyguestwaiheke.co.nz">Bookings@bemyguestwaiheke.co.nz</a></p>
            <p className="footer__text">International: <a href="tel:+6493728462">+64 9 372 8462</a></p>
            <p className="footer__text">In New Zealand: <a href="tel:093728462">09 372 8462</a></p>
            <p className="footer__text">Toll free: <a href="tel:0800400248">0800 400 248</a></p>
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
