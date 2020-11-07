import React, { Component } from "react";
import M from "materialize-css";
import CarouselItem from "../carousel-item/carousel-item";

class Carousel extends Component {
  constructor() {
    super();
    // Material Initialization
    document.addEventListener("DOMContentLoaded", function () {
      this.carousel = document.querySelector(".carousel");
      this.instacne = M.Carousel.init(this.carousel, {
        indicators: true,
      });
    });
  }

  // get top headings data
  geTtopArticles = () => {
    fetch(
      "http://newsapi.org/v2/top-headlines?country=il&apiKey=798fae5901184ccf8e4880a3283c562d"
    )
      .then((res) => res.json())
      .then((res) => res.articles)
      .then((res) => res)
      .then((res) => this.buildCarouselItems(res))
      .catch(() => console.log("somthing faild"));
  };

  // build carousel items
  buildCarouselItems = (articles) => {
    console.log("buildCarouselItems", articles);
    // topArticles.map((article) => article);
  };

  componentDidMount() {
   // const articles = this.geTtopArticles();
    // this.buildCarouselItems(articles);
  }

  render() {
    return (
      <div class="carousel carousel-slider">
        <CarouselItem />
      </div>
    );
  }
}

export default Carousel;

// Top sports headlines from Israel

// fetch(
//   `http://newsapi.org/v2/top-headlines?country=il&category=sports&apiKey=${process.env.REACT_APP_API_KEY}`
// )
//   .then((res) => res.json())
//   .then((res) => console.log(res))
//   .catch(console.log("noob"));

//  fetch(
//   "http://newsapi.org/v2/top-headlines?country=il&category=sports&apiKey=798fae5901184ccf8e4880a3283c562d"
//  ).then((res) => console.log(res.json()));

/* slide */

// var instance = M.Carousel.getInstance(document.querySelectorAll(".carousel")[0]);
// instance.next();
