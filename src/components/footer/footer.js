import React from "react";
import categoriesData from "../categories/categories-data.js";
import "./footer.scss";
const Footer = () => {
  return (
    <footer class="page-footer blue-grey darken-4 right-align">
      <div class="container">
        <div class="row">
          <div class="col l4 ">
            <h5 class="white-text">עקבו אחרינו</h5>
            <div className="social-icons text-white">
              <a href="/" className="grey-text text-lighten-3">
                <i class="fab fa-facebook-square fa-2x"></i>
              </a>
              <a href="/" className="grey-text text-lighten-3">
                <i class="fab fa-twitter-square fa-2x"></i>
              </a>
              <a href="/" className="grey-text text-lighten-3">
                <i class="fab fa-instagram-square fa-2x"></i>
              </a>
            </div>
          </div>
          <div class="col l3">
            <h5 class="white-text">קטגוריות</h5>
            <ul>
              {categoriesData.map(({ hebrewName }) => (
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    {hebrewName}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div class="col l4">
            <h5 class="white-text">NEWZ</h5>
            <p class="grey-text text-lighten-4 ">
              כל החדשות הכתבות והעדכונים במקום אחד
            </p>
          </div>
        </div>
      </div>
      <div class="footer-copyright blue-grey darken-3">
        <div class="container">
          <span className="left">© 2020 NEWZ</span>
          <a class="grey-text text-lighten-4 right valign-wrapper " href="#!">
            <i class="material-icons">arrow_upward</i>
            לראש העמוד
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
