const http = require("http");
const port = 8081;

http.createServer(requestListener).listen(port);
console.log("Server pocuva na ", port);

function requestListener(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    console.log("Request prisiel, odpovedam");
    res.end("Hello");
}
