// Problem: We need a simple way to look at a user's badge count and JS point from a web browser
// Solution: Use node.js to perform the profile look ups and server our template via HTTP

// 1. Create a web server

var http = require('http');
http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');

}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');

// 2. Handle HTTP route GET / and POST / i.e Home
