import React from "react";
import "./carousel-item.scss";

const CarouselItem = (props) => {
  const { url, urlToImage ,title } = props;
  return (
    <a href={url}>
    <div className="img" style={{ backgroundImage: `url(${ urlToImage })` }}></div>
    <p className="title">{title}</p>
  </a>
  );
};

export default CarouselItem;

//https://lorempixel.com/800/400/food/2





