const express = require("express");
const app = express();
require("dotenv").config();
const routes = require("./routes/routes");
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Listening to NEWZ server at http://localhost:${PORT}`);
});
