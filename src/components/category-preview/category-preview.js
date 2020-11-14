import React, { Component } from "react";
import ArticaleCard from "../article-card/articale-card";

class CategoryPreview extends Component {
  constructor(props) {
    super();
    this.state = {
      articles: [],
    };
  }

  getTopHeadingsByCategory = () => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=il&category=${this.props.categoryName}&apiKey=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((res) => res.articles)
      .then((res) => {
        this.setState({ articles: res });
      })
      .catch((err) => console.log("category-preview -> error in fetch", err));
  };

  componentWillMount() {
    this.getTopHeadingsByCategory();
  }

  /* IMPORTANT: sometimes the API returns objects with empty fields */

  render() {
    return (
      <div className="category-preview">
        <div className="container">
          <h2 style={{ textAlign: "right" }}>{this.props.hebrewName}</h2>
          <div className="row">
            {this.state.articles
              .filter(
                (article, index) =>
                  article.description !== "0" &&
                  article.description !== "" &&
                  article.urlToImage != null
              )
              .filter((article, index) => index < 4)
              .map(({ title, description, publishedAt, url, urlToImage }) => (
                <ArticaleCard
                  title={title}
                  description={description}
                  publishedAt={publishedAt}
                  url={url}
                  urlToImage={urlToImage}
                  key={publishedAt}
                />
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default CategoryPreview;
