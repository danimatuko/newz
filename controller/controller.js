const fetch = require("node-fetch");

exports.getTopHeadings = (request, response) => {
  fetch(
    `https://newsapi.org/v2/top-headlines?country=il&apiKey=${process.env.API_KEY}`
  )
    .then((res) => res.json())
    .then((res) => res.articles)
    .then((res) => response.json(res))
    .catch((err) => console.log("Controller > carousel -> error in fetch", err));
};


exports.getTopHeadingsByCategory = (request , response) => {
  fetch(
    `https://newsapi.org/v2/top-headlines?country=il&category=${request.params.category}&apiKey=${process.env.API_KEY}`
  )
    .then((res) => res.json())
    .then((res) => res.articles)
    .then((res) =>  response.json(res))
    .catch((err) => console.log("Controller > getTopHeadingsByCategory -> error in fetch", err));
};
