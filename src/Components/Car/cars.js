import React from "react";
import "../Car/cars.css";
import Card from "../card/card.js";
import "../Car/cars.css";
import ImgOne from "../recources/BannerImage.png";
import ImgTwo from "../recources/ImgTwo.png";
import ImgThree from "../recources/ImgThree.png";

const cars = () => {
  return (
    <div id="cars-section">
      <Card
        image={ImgThree}
        title={"Rolls Royce Boat Tail"}
        carInfo={
          "The car was designed by the company's specialised coachbuild division at its Goodwood plant, reinterpreting the 1910s Rolls-Royce Ltd Boat Tail car design. It draws aesthetic inspiration from yachts of the 1920s and 1930s. The car shares its chassis and engine with the Rolls-Royce Phantom; but has 1,813 bespoke parts."
        }
      />
      <Card
        image={ImgOne}
        title={"Rolls Royce Phantom"}
        carInfo={
          "Introduced in 1925, the New Phantom was Rolls-Royce's second 40/50 hp model. To differentiate between the 40/50 hp models, Rolls-Royce named the new model New Phantom and renamed the old model Silver Ghost Incorrect, just like the so-called Gullwing Mercedes-Benz, the company never referred to the first 40/50 hp model as the 'Silver Ghost"
        }
      />
      <Card
        image={ImgTwo}
        title={"Rolls Royce Ghost"}
        carInfo={
          "The official name of the Rolls-Royce Ghost was originally announced in April 2009, the vehicle was officially unveiled at the 2009 Frankfurt Motor Show, and went on sale in September 2009. Delivery in the UK and Europe began late in 2009."
        }
      />
    </div>
  );
};

export default cars;
