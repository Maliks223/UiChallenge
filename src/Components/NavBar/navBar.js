import React, { useState } from "react";
import "../NavBar/navBar.css";
import Logo from "../recources/RollsRoyceLogo.png";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";

const NavBar = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const [toggle, setToggle] = useState(false);

  return (
    <div ref={ref} className={clsx("navBar", inView && "navbar-inview")}>
      <div className="navBarLeft">
        <div className="navBarTitle">Rolls Royce</div>
        <div>
          <img src={Logo} alt="#" />
        </div>
      </div>

      <div className="navBarRight">
        <a className="link" href="#cars-section">Cars</a>
        <a className="link" href="#about-section">About Us</a>
        <a className="link" href="#contact-section">Contact Us</a>
      </div>
      <button
        className="burger-menu"
        onClick={() => setToggle((prev) => !prev)}
      >
        <i class="fa fa-bars icon"></i>
      </button>

      <div className={clsx("mobile-menu", toggle && "toggle")}>
          <i onClick={() => setToggle((prev) => !prev)} class="fa fa-close close-icon"></i>
        <a className="link-1" onClick={() => setToggle((prev) => !prev)} href="#cars-section">
          Cars
        </a>
        <a className="link-2" onClick={() => setToggle((prev) => !prev)} href="#about-section">
          About Us
        </a>
        <a className="link-3" onClick={() => setToggle((prev) => !prev)} href="#contact-section">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default NavBar;
