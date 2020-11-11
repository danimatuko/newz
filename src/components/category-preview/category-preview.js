import React, { Component } from "react";
import ArticaleCard from "../article-card/articale-card";

class CategoryPreview extends Component {
  constructor(props) {
    super();
    this.state = {
      articles: [],
    };
  }

  componentWillMount() {
    fetch(
      `http://newsapi.org/v2/top-headlines?country=il&category=${this.props.categoryName}&apiKey=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((res) => res.articles)
      .then((res) => {
        this.setState({ articles: res });
        // console.log(this.state.articles);
        // console.log("props",this.props.categoryName);
      })
      .catch((err) => console.log("category-preview -> error in fetch", err));
  }

  render() {
    return (
      <div className="category-preview">
        <div className="container">
          <h2 style={{ textAlign: "right" }}>{this.props.categoryName}</h2>
          <div className="row">
            {this.state.articles
              // filter articles with empty decription or empty image
              .filter(
                (article, index) =>
                  article.description !== "0" &&
                  article.description !== "" &&
                  article.urlToImage != null
              )
              // filter to show 4 results
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
