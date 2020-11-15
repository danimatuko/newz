import React, { Component } from "react";
import Carousel from "../../components/carousel/carousel";
//import CategoryPreview from "../../components/category-preview/category-preview";
import Categories from "../../components/categories/categories";


class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
        <Carousel />
        <Categories />
      </div>
    );
  }
}

export default Homepage;
