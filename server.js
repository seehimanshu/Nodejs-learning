const http = require("node:http");

const server= http.createServer(function (req,res){
    res.end("Hello World guyssss");
});

server.listen(7777);