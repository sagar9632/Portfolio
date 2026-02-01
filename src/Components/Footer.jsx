import { motion } from "framer-motion";
import "../Assets/style.css";
import {
  FaInstagram,
  FaBehance,
  FaDribbble,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <section id="footer" className="footer-section">
      <motion.div
        className="footer-card"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Logo */}
        <h2 className="footer-logo">SAGAR</h2>

        {/* Navigation */}
        <ul className="footer-nav">
         
           <li><a href="#hero">Home</a></li>
           <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Social Icons */}
        {/* <div className="footer-socials">
          <FaInstagram />
          <FaDribbble />
          <FaBehance />
        </div> */}

        {/* Contact Info */}
        <div className="footer-contact">
          <span>
            <FaEnvelope /> shindesagar9632@gmail.com
          </span>
          <span>
            <FaPhoneAlt /> 7848031412
          </span>
          <span>
             <a href="https://github.com/sagar9632" target="_blank" rel="noopener noreferrer">
              github.com/sagar9632 </a>
          </span>
        </div>

        {/* Bottom Text */}
        <p className="footer-bottom">
          Designed by <span>@shindesagar9632</span> | Software Developer
        </p>
      </motion.div>
    </section>
  );
}
