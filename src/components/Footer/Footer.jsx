import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h1>SHANKAR.S</h1>
          <h4>MERN Stack Developer</h4>
        </div>
        <div className="footer-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/sitemap">Sitemap</Link>
        </div>
        <div className="footer-contact">
          <p>&copy; 2024 React Redux Task. All rights reserved.</p>
        </div>
        <div className="footer-social">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={30} color="#fff" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={30} color="#fff" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={30} color="#fff" />
          </a>
        </div>
        <div className="footer-newsletter">
          <form>
            <label htmlFor="email">Sign up for our newsletter:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
}
