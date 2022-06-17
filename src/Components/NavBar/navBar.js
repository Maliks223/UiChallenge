import React from "react";
import "../NavBar/navBar.css";
import Logo from "../recources/RollsRoyceLogo.png";
import { useInView } from 'react-intersection-observer';
import clsx from 'clsx';

const NavBar = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <div ref={ref} className={clsx("navBar", inView && 'navbar-inview')}>
      <div className="navBarLeft">
        <div className="navBarTitle">Rolls Royce</div>
        <div>
          <img src={Logo} alt="#" />
        </div>
      </div>

      <div className="navBarRight">
        <a href="#cars-section">Cars</a>
        <a href="#about-section">About Us</a>
        <a href="#contact-section">Contact Us</a>
      </div>
    </div>
  );
};

export default NavBar;
