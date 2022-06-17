import React from "react";
import "../card/card.css";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";

const Card = ({ image, title, carInfo }) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  return (
    <div ref={ref} className={clsx("card", inView && `card-inview`)}>
      <div className="cardImage">
        <img src={image}></img>
      </div>
      <div>
        <div>{title}</div>
        <div className="hidden-text">{carInfo}</div>
      </div>
    </div>
  );
};

export default Card;
