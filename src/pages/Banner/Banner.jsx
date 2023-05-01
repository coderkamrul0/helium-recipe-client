import React from "react";
import Background from "../../../public/images/banner-2.jpg";
import { Container } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-image"></div>
      <Container>
        <div className="banner-text">
          <h1>Helium</h1>
          <h2>Customer Satisfaction Is Our Ultimate Goal</h2>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
