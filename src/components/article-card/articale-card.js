import React from "react";
import "./article-card.scss";

const ArticaleCard = (props) => {
  // console.log("ArticaleCard ->" , this.props)

  const { title, description, publishedAt, url, urlToImage } = props;
  return (
    <div class="col s12 m6 l3  card-wrapper">
      <div class="card right-align medium">
        <div class="card-image">
          <img src={urlToImage} alt="" />
        </div>
        <h3 class="card-title">{title}</h3>
        {/* <div class="card-content">
          <p>{description}</p>
        </div> */}
        <div class="card-action">
          <a
            href={url}
            class="blue-grey darken-4 waves-effect waves-light btn-small readMore"
          >
            קרא עוד
          </a>
        </div>
      </div>
    </div>
  );
};

export default ArticaleCard;
