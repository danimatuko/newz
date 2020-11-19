const express = require("express");
const app = express();
require("dotenv").config();
const routes = require("./routes/routes");
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", routes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening to NEWZ server at http://localhost:${port}`);
});
