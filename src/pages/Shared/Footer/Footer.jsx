import React from "react";
import { Container } from "react-bootstrap";
import './Footer.css'
import { FaGithub,FaTwitter,FaFacebook, FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <div style={{backgroundColor: '#1D2024'}}>
        <Container>
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            Helium
          </h3>

          <p className="footer-links">
            <a href="#" className="link-1">
              Home
            </a>

            <a href="#">Blog</a>


            
          </p>

          <p style={{color: 'white'}} className="footer-company-name">Helium Dine Copyright © 2023</p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>Level-4, 34, Awal Centre </span> S Banani, Dhaka
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>+88 017 1111 2222</p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="mailto:heliumdine@company.com">heliumdine@company.com</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            Helium dine . Most popular Recipes provider in world. We have world best Chefs and best Recipes.So stay with us.
          </p>

          <div className="footer-icons">
            <a href="#">
              <FaGithub/>
            </a>
            <a href="#">
              <FaTwitter/>
            </a>
            <a href="#">
              <FaFacebook/>
            </a>
            <a href="#">
              <FaInstagram/>
            </a>
          </div>
        </div>
      </footer>
    </Container>
    </div>
  );
};

export default Footer;
