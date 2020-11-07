import React, { Component } from "react";
import M from "materialize-css";
import CarouselItem from "../carousel-item/carousel-item";

class Carousel extends Component {
  constructor() {
    super();
    // Material Initialization for for carousel
    document.addEventListener("DOMContentLoaded", function () {
      this.carousel = document.querySelector(".carousel");
      this.instacne = M.Carousel.init(this.carousel, {
        indicators: true,
      });
    });

    this.state = {
      topArticles: [],
    };
  }

  initCarousel = () => {};

  // get top headings data
  getTopArticles = () => {
    fetch(
      `http://newsapi.org/v2/top-headlines?country=il&apiKey=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((res) => res.articles)
      .then((res) => this.setState({ topArticles: res }))
      .catch(() => console.log("somthing faild"));
  };

  componentDidMount() {
    this.getTopArticles();
  }

  render() {
    return (
      <div className="carousel carousel-slider">
        <CarouselItem/>
        {/* {this.state.topArticles
          // filter articles with empty decription
          .filter(
            (article, index) =>
              article.description !== "0" && article.description !== ""
          )
          // filter to show 4 results
          // .filter((article, index) => index < 4)
          .map(({ title, description, publishedAt, url, urlToImage }) => (
            <CarouselItem
              title={title}
              description={description}
              publishedAt={publishedAt}
              url={url}
              urlToImage={urlToImage}
              key={publishedAt}
            />
          ))} */}
      </div>
    );
  }
}

export default Carousel;

/* slide */

// var instance = M.Carousel.getInstance(document.querySelectorAll(".carousel")[0]);
// instance.next();
