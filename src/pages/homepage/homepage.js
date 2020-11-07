import React, { Component } from "react";
import Carousel from "../../components/carousel/carousel";
import CategoryPreview from "../../components/category-preview/category-preview";

class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
        <Carousel />
        <CategoryPreview />
      </div>
    );
  }
}

export default Homepage;
