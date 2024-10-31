const express = require("express");
const itemRoute = require("./routes/itemRoute.js");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv")

// rest object
const app = express();
dotenv.config();

app.use(cors({ origin: process.env.FRONTEND_URL }));
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "public/images")));

app.use("/api/v1/items", itemRoute);

// rest api
app.get("/", (req, res) => {
  res.send({
    message: "welcome to Yodiday",
  });
});

// PORT
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("App is running!");
});
