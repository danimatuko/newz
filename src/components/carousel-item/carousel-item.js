import React from "react";
import "./carousel-item.scss";

const CarouselItem = (props) => {
  const { url, urlToImage, title } = props;
  return (
    <div
      className="slide-wrapper"
      style={{ backgroundImage: `url(${urlToImage})` }}
    >
      <a href={url}>
        <p className="title">{title}</p>
      </a>
    </div>
  );
};

export default CarouselItem;

//https://lorempixel.com/800/400/food/2
