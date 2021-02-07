const { response } = require("express");
const express = require("express");
const path = require("path");
const fromAnotherFile = require("./functions");

const port = process.env.PORT || 3000;
const app = express();

app.set("view engine",'hbs')
const sample = () => {
    return 'proba'
}

app.use('/assets',express.static(path.join(__dirname,"./assets")))
app.get("/", function (req,res) {
    res.render('index',{
        pageTitle: "dzisiejsza lekcja",
        subTitle: fromAnotherFile.title,
        subSubTitle: sample()
    })
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