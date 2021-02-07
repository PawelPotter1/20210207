const http = require("http");

const handler = (request, response) => {
    response.end("<p> Hello OK </p>")
    console.log("działa")
    }

const server = http.createServer(handler);
const port = 3000;

server.listen(port, (err) => {
    if (err) {return console.log("błąd",err)}
})