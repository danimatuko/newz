import React from "react";
import Logo from "../../assets/icons/logo.png";
import "./navigation.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="blue-grey lighten-5 ">
      <div class="nav-wrapper">
        <div className="container">
          <Router>
            <Link to="/" class="brand-logo">
              <img src={Logo} alt="site logo" />
            </Link>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
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
          </Router>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
