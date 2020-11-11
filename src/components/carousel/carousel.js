import React, { Component } from "react";
// import Swiper core and required components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import "./carousel.scss";
import CarouselItem from "../../components/carousel-item/carousel-item";

// install Swiper components
SwiperCore.use([Navigation, Pagination, Autoplay]);

class Carousel extends Component {
  constructor() {
    super();

    this.state = {
      topArticles: [],
    };
  }

  componentWillMount() {
    //  get top headings data
    fetch(
      `http://newsapi.org/v2/top-headlines?country=il&apiKey=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((res) => res.articles)
      .then((res) => {
        this.setState({ topArticles: res });
     // console.log(this.state.topArticles);
      })
      .catch((err) => console.log("carousel -> error in fetch", err));
  }

  render() {
    return (
      <Swiper
        loop={true}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
        }}
        //   onSwiper={(swiper) => console.log(swiper)}
        //  onSlideChange={() => console.log("slide change")}
      >
        {this.state.topArticles
          // filter articles with empty decription or empty image
          .filter(
            (article, index) =>
              article.description !== "0" &&
              article.description !== "" &&
              article.description != null &&
              article.urlToImage != null
          )
          // filter to show 4 results
          .filter((article, index) => index < 4)
          .map(({ title, description, publishedAt, url, urlToImage }) => (
            <SwiperSlide key={publishedAt}>
              <CarouselItem
                title={title}
                url={url}
                urlToImage={urlToImage}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    );
  }
}

export default Carousel;
