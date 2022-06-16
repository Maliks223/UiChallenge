import React from "react";
import "../Components/navBar.css";
import Logo from "../recources/RollsRoyceLogo.png";
const navBar = () => {
  return (
    <div className="navBar">
      <div className="navBarLeft">
        <div className="navBarTitle">Rolls Royce</div>
        <div>
          <img src={Logo} alt="#" />
        </div>
      </div>

      <div className="navBar">
        <a href="#cars-section">Cars</a>
        <a href="#about-section">About Us</a>
        <a href="#contact-section">Contact Us</a>
      </div>
    </div>
  );
};

export default navBar;
