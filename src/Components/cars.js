import React from "react";
import "../Components/cars.css";
import card from "../Components/card.js";
import "../Components/card.css";
import ImgOne from "../recources/BannerImage.png";
import ImgTwo from "../recources/ImgTwo.png";
import ImgThree from "../recources/ImgThree.png";

const cars = () => {
  return (
    <div id="cars-section">
      <div className="card">
        <div className="cardImage">
          <img src={ImgOne}></img>
        </div>{" "}
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt iste nostrum magnam culpa rem eum nam in eaque qui ex?</div>
      </div>
      <div className="card">
        <div className="cardImage">
          <img src={ImgTwo}></img>
        </div>{" "}
        <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae at commodi eaque ipsam, veniam vero magni quas eligendi rem fuga.</div>
      </div>
      <div className="card">
        <div className="cardImage">
          <img src={ImgThree}></img>
        </div>{" "}
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio asperiores porro blanditiis cumque eligendi iusto a placeat. Quam, cum eos?</div>
      </div>
    </div>
  );
};

export default cars;
