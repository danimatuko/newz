import React, { Component } from "react";
//import M from "materialize-css";

// import Swiper core and required components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import "./carousel.scss";

// install Swiper components
SwiperCore.use([Navigation, Pagination, Autoplay]);

class Carousel extends Component {
  constructor() {
    super();

    this.state = {
      topArticles: [],
    };
  }

  // get top headings data
  // getTopArticles = () => {
  //   fetch(
  //     `http://newsapi.org/v2/top-headlines?country=il&apiKey=${process.env.REACT_APP_API_KEY}`
  //   )
  //     .then((res) => res.json())
  //     .then((res) => res.articles)
  //     .then((res) => {
  //       this.setState({ topArticles: res });
  //       console.log(this.state.topArticles);
  //     })
  //     .then(() => this.initCarousel())
  //     .catch((err) => console.log("somthing faild", err));
  // };

  componentDidMount() {}

  render() {
    return (
      <Swiper
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <img
            alt=""
            src="https://images.unsplash.com/photo-1441239372925-ac0b51c4c250?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1846&q=80"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt=""
            src="https://images.unsplash.com/12/till-the-cows-come-home.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt=""
            src="https://images.unsplash.com/photo-1441239372925-ac0b51c4c250?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1846&q=80"
          />
        </SwiperSlide>
        ...
      </Swiper>
    );
  }
}

export default Carousel;

/* slide */

// var instance = M.Carousel.getInstance(document.querySelectorAll(".carousel")[0]);
// instance.next();

// const elems = document.querySelector('.carousel');
// const duration = 3000; //milliseconds

// // Init
// M.Carousel.init(elems);

// // Time loop function
// setInterval(function () {
//   M.Carousel.getInstance(elems).next(); // See Materialize Documentation for next
// }, duration);

// <div className="carousel carousel-slider">
// <CarouselItem />
// {this.state.topArticles
//   // filter articles with empty decription or empty image
//   .filter(
//     (article, index) =>
//       article.description !== "0" &&
//       article.description !== "" &&
//       article.urlToImage != null
//   )
//   // filter to show 4 results
//   .filter((article, index) => index < 4)
//   .map(({ title, description, publishedAt, url, urlToImage }) => (
//     <CarouselItem
//       title={title}
//       description={description}
//       publishedAt={publishedAt}
//       url={url}
//       urlToImage={urlToImage}
//       key={publishedAt}
//     />
//   ))}
// </div>
