const express = require("express");
const itemRoute = require('./routes/itemRoute.js')
const path = require('path');

// Get the __filename and __dirname in ES module
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);


// rest object
const app = express();

app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'public/images')));
app.use(express.static(path.join(__dirname, './client/dist'))); //middleware for build


app.use('/api/v1/items',itemRoute)

// rest api
// rest api
app.use('*',function(req, res){
    res.sendFile(path.join(__dirname, './client/dist/index.html'))
  })


// PORT
const PORT = 8080;

app.listen(PORT, ()=>{
    console.log("App is running!")
})