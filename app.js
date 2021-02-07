const { response } = require("express");
const express = require("express");
const path = require("path");
const { Script } = require("vm");

const port = 3000;
const app = express();

app.set("view engine",'hbs')
app.use('/assets',express.static(path.join(__dirname,"./assets")))
app.get("/", function (req,res) {
    res.render(`index`)
})

app.use('/js',express.static(path.join(__dirname, "./js")));

app.use('/js',express.static(__dirname + './../public/js'));

app.get('/about', function (req, res){
    response.send("My site")
})

app.listen(port, (err) => {
    if (err) { return console.log(err)}
    console.log(`działa na porcie ${port}`)
})