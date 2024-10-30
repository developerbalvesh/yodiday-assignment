const express = require("express");
const itemRoute = require("./routes/itemRoute.js");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "public/images")));
app.use("/api/v1/items", itemRoute);

app.get("/", (req, res) => {
  res.json("Hello");
});
// rest api
// rest api

// PORT
const PORT = 8080 || process.env.PORT;

app.listen(PORT, () => {
  console.log("App is running!");
});
