const express = require("express");
const itemRoute = require('./routes/itemRoute.js')
const path = require('path');
const cors = require('cors')

// Get the __filename and __dirname in ES module
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);


// rest object
const app = express();

app.use(cors())
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'public/images')));
app.use('/api/v1/items',itemRoute)

app.get('/',(req, res)=>{
  res.json("Hello")
})
// rest api
// rest api


// PORT
const PORT = 8080;

app.listen(PORT, ()=>{
    console.log("App is running!")
})