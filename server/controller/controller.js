const fetch = require("node-fetch");

exports.getTopHeadings = (req, response) => {
  fetch(
    `https://newsapi.org/v2/top-headlines?country=il&apiKey=${process.env.API_KEY}`
  )
    .then((res) => res.json())
    .then((res) => res.articles)
    .then((res) => response.json(res))
    .catch((err) => console.log("carousel -> error in fetch", err));
};
