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
    fetch(`/top-headings/?category=${this.props.categoryName}`)
      .then((res) => res.json())
      .then((res) => this.setState({ articles: res }))
      .catch((err) => console.log("category-preview -> error in fetch", err));
  };

  componentWillMount() {
    this.getTopHeadingsByCategory();
  }


  render() {
    return (
      <div className="category-preview">
        <div className="container">
          <h2 style={{ textAlign: "right" }}>{this.props.hebrewName}</h2>
          <div className="row">
            {this.state.articles
            /* IMPORTANT: sometimes the API returns objects with empty fields */
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
