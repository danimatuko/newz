import React from "react";
import Logo from "../../assets/icons/logo.png";
import "./navigation.scss";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="grey lighten-5 ">
      <div className="nav-wrapper">
        <div className="container">
          <Link to="/" className="brand-logo">
            <img src={Logo} alt="site logo" />
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link className="blue-grey-text darken-4" to="sass.html">
                עסקים
              </Link>
            </li>
            <li>
              <Link className="blue-grey-text darken-4" to="badges.html">
                מדע
              </Link>
            </li>
            <li>
              <Link className="blue-grey-text darken-4" to="collapsible.html">
                ספורט
              </Link>
            </li>
            <li>
              <Link className="blue-grey-text darken-4" to="collapsible.html">
                בריאות
              </Link>
            </li>
            <li>
              <Link className="blue-grey-text darken-4" to="collapsible.html">
                בידור
              </Link>
            </li>
            <li>
              <Link className="blue-grey-text darken-4" to="collapsible.html">
                טכנולוגיה
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
