import React, { useState } from "react";
import "../card/card.css";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";

const Card = ({ image, title, carInfo }) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  // const [showResults, setShowResults] = useState(false);
  // const onClick = () => setShowResults((prev) => !prev);

  return (
    <div ref={ref} className={clsx("card", inView && `card-inview`)}>
      <div className="cardImage">
        <img src={image}></img>
        {/* <button className="cardBtn" onClick={onClick}>
          {showResults ? "Less Info" : "More info "}
        </button> */}
      </div>
      <div className="cardInner">
        <div className="cardTitle">{title}</div>
        <div className="hidden-text">{carInfo}</div>
      </div>
    </div>
  );
};

export default Card;
