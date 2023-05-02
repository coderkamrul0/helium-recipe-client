import React from "react";
import { Container } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <Container>
        <div className="main">
          <div className="banner-text">
            <h4>Helium Dine</h4>
            <h1>Food Made With Love!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <button>Get Started</button>
          </div>
          <div className="banner-img">
            <img className="image" src="https://i.ibb.co/Tcz3822/dish.png" alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
