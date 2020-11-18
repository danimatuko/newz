import React, { Component } from "react";
import Logo from "../../assets/icons/logo.png";
import categoriesData from "../categories/categories-data.js";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import "./navigation.scss";
import { Link } from "react-router-dom";

class Navigation extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var sideNav = document.querySelectorAll(".sidenav");
      M.Sidenav.init(sideNav, { edge: "right" });
    });
  }

  render() {
    return (
      <div>
        <nav className="grey lighten-5 ">
          <div className="nav-wrapper">
            <div className="container">
              <Link to="/" className="brand-logo">
                <img src={Logo} alt="site logo" />
              </Link>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                {categoriesData.map(({ categoryId,categoryName,hebrewName }) => (
                  <li key={categoryId}>
                    <Link className="blue-grey-text darken-4" to={`/category=${categoryName}`}>
                      {hebrewName}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="sidenav right-align" id="slide-out">
                <Link to="/" className="brand-logo-mobile">
                  <img src={Logo} alt="site logo" />
                </Link>
                {categoriesData.map(({ categoryId,categoryName,hebrewName}) => (
                  <li key={categoryId}>
                    <Link className="blue-grey-text darken-4" to={`/category=${categoryName}`}>
                      {hebrewName}
                    </Link>
                  </li>
                ))}
              </ul>
              <a href="#" data-target="slide-out" className="sidenav-trigger">
                <i className="material-icons blue-grey-text darken-4">menu</i>
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;
