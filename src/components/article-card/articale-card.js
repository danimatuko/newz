import React from "react";
import "./article-card.scss";

const ArticaleCard = (props) => {
  // console.log("ArticaleCard ->" , this.props)

  const { title, description, publishedAt, url, urlToImage } = props;
  return (
    <div class="col s12 m6 l3  card-wrapper">
      <div class="card right-align medium ">
        <div class="card-image">
          <img src={urlToImage} alt="" />
        </div>
        <span class="card-title">{title}</span>

        {/* <div class="card-content">
          <p>{description}</p>
        </div> */}
        <div class="card-action">
          <a href={url}>This is a link</a>
        </div>
      </div>
    </div>
  );
};

export default ArticaleCard;
