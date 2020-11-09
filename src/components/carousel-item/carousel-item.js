import React from "react";
import "./carousel-item.scss";

const CarouselItem = (props) => {
  const { url, urlToImage } = props;
  return (
    <a className="carousel-item" href={url}>
      <img src={urlToImage} alt="" />
    </a>
  );
};

export default CarouselItem;

//https://lorempixel.com/800/400/food/2





