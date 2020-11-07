import React, { Component } from "react";
import ArticaleCard from "../article-card/articale-card";

class CategoryPreview extends Component {
  constructor() {
    super();

    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    fetch(
      `http://newsapi.org/v2/top-headlines?country=il&category=sports&apiKey=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((res) => res.articles)
      .then((res) => this.setState({ articles: res }))
      .then(this.generateArticleCards)
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="category-preview">
        <div className="container">
          <h2 style={{ textAlign: "right" }}>ספורט</h2>
          <div class="row">
            {this.state.articles
            // filter articles with empty decription
              .filter(
                (article, index) =>
                  article.description !== "0" && article.description !== "")
              // filter to show 4 results
              .filter((article, index) => index < 4)
              .map(({ title, description, publishedAt, url, urlToImage }) => (
                <ArticaleCard
                  title={title}
                  description={description}
                  publishedAt={publishedAt}
                  url={url}
                  urlToImage={urlToImage}
                />
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default CategoryPreview;



