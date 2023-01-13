import React from "react";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the adventure newsletter to receive our best vactation deals.
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="This Doesn't Work"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Education</h2>
            <Link to="/contact">MS Comp Sci</Link>
            <Link to="/">BA Mathematics</Link>
          </div>
          <div className="footer-link-items">
            <h2>Projects</h2>
            <Link to="/contact">Forage Compass</Link>
            <Link to="/">Kingdom of Frupal</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Practice Sites</h2>
            {/* <Link to="/contact">HackerRank</Link> */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.hackerrank.com/camilionaire"
            >
              HackerRank
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://leetcode.com/camilionaire/"
            >
              LeetCode
            </a>
          </div>
          <div className="footer-link-items">
            <h2>Contact</h2>
            {/* <Link to="https://www.linkedin.com/in/camilo-schaser-hughes/">
              LinkedIn
            </Link> */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/camilo-schaser-hughes/"
            >
              LinkedIn
            </a>
            <Link to="/contact">E-Mail</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link className="social-logo">
              CESH <i className="fab fa-typo3" />
            </Link>
          </div>
          <small className="website-rights">CESH c 2022</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
