import React from "react";
import "./index.css";

const Hero = ({ backgroundImageSrc, text }) => {
  return (
    <div
      className="hero-container"
      style={{ backgroundImage: `url(https://picsum.photos/1800/2000)` }}
    >
      <h1 className="hero-text">Lorem, ipsum dolor.</h1>
    </div>
  );
};

export default Hero;
