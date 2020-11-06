import React from "react";
import ArticaleCard from "../article-card/articale-card";

const CategoryPreview = () => {
  return (
    <div className="category-preview">
      <div className="container">
        <h2 style={{ textAlign: "right" }}>ספורט</h2>
        <div class="row">
          <div class="col s12 m6 l3">
            <ArticaleCard />
          </div>
          <div class="col s12 m6 l3">
            <ArticaleCard />
          </div>
          <div class="col s12 m6 l3">
            <ArticaleCard />
          </div>
          <div class="col s12 m6 l3">
            <ArticaleCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPreview;
