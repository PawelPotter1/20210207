const { response } = require("express");
const express = require("express");
const port = 3000;
const app = express();

app.get("/", function (req,res) {
    res.send("<h4>Strona o nas</h4>")
})

app.listen(port, (err) => {
    if (err) { return console.log(err)}
    console.log(`działa na porcie ${port}`)
})