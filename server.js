const express = require("express");
const app = express();
require("dotenv").config();
const routes = require("./routes/routes");
const bodyParser = require("body-parser");
const path = require("path");
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", routes);

if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  app.use(express.static("client/build"));

  // Express will serve up the front-end index.html file if it doesn't recognize the route
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname,"client", "build", "index.html"))
  );
}

app.listen(PORT, () => {
  console.log(`Listening to NEWZ server at http://localhost:${PORT}`);
});
