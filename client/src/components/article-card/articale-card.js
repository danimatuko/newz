import React from "react";
import "./article-card.scss";

const ArticaleCard = (props) => {
  // console.log("ArticaleCard ->" , this.props)

  const { title, description, publishedAt, url, urlToImage } = props;
  return (
    <div className="col s12 m6 l3  card-wrapper">
      <div className="card right-align medium">
        <div className="card-image">
          <img src={urlToImage} alt="" />
        </div>
        <h3 className="card-title">{title}</h3>
        {/* <div className="card-content">
          <p>{description}</p>
        </div> */}
        <div className="card-action">
          <a
            href={url}
            className="blue-grey darken-4 waves-effect waves-light btn-small readMore"
          >
            קרא עוד
          </a>
        </div>
      </div>
    </div>
  );
};

export default ArticaleCard;
