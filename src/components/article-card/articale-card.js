import React from "react";

const ArticaleCard = () => {
  return (
    <div class="card">
      <div class="card-image">
        <img src="https://lorempixel.com/800/400/food/1" alt="" />
        <span class="card-title">Card Title</span>
      </div>
      <div class="card-content">
        <p>
          I am a very simple card. I am good at containing small bits of
          information. I am convenient because I require little markup to use
          effectively.
        </p>
      </div>
      <div class="card-action">
        <a href="/">This is a link</a>
      </div>
    </div>
  );
};

export default ArticaleCard;
