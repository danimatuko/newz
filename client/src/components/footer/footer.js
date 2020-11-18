import React from "react";
import categoriesData from "../categories/categories-data.js";
import "./footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="page-footer blue-grey darken-4 right-align">
      <div className="container">
        <div className="row">
          <div className="col l4 m4 s6">
            <h5 className="white-text">עקבו אחרינו</h5>
            <div className="social-icons text-white">
              <a href="/" className="grey-text text-lighten-3">
                <i className="fab fa-facebook-square fa-2x"></i>
              </a>
              <a href="/" className="grey-text text-lighten-3">
                <i className="fab fa-twitter-square fa-2x"></i>
              </a>
              <a href="/" className="grey-text text-lighten-3">
                <i className="fab fa-instagram-square fa-2x"></i>
              </a>
            </div>
          </div>
          <div className="col l3 m4 s6">
            <h5 className="white-text">קטגוריות</h5>
            <ul>
              {categoriesData.map(
                ({ categoryId, categoryName, hebrewName }) => (
                  <li key={categoryId}>
                    <Link
                      className="grey-text text-lighten-3"
                      to={`/category=${categoryName}`}
                    >
                      {hebrewName}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="col l4 m4 s12">
            <h5 className="white-text">NEWZ</h5>
            <p className="grey-text text-lighten-4 ">
              כל החדשות הכתבות והעדכונים במקום אחד
            </p>
          </div>
        </div>
      </div>
      <div className="footer-copyright blue-grey darken-3">
        <div className="container">
          <span className="left">© 2020 NEWZ</span>
          <a
            className="grey-text text-lighten-4 right valign-wrapper "
            href="#!"
          >
            <i className="material-icons">arrow_upward</i>
            לראש העמוד
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
