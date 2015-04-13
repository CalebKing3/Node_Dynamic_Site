// Problem: We need a simple way to look at a user's badge count and JS point from a web browser
// Solution: Use node.js to perform the profile look ups and server our template via HTTP

// 1. Create a web server

var http = require('http');
http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    setInterval(function(){
        response.write(new Date() + "\n");
    }, 1000);
    response.write("This is before the end\n");
    response.end('Hello World\n');
    response.write("This is after the end\n")
}).listen(1337);
console.log('Server running at http://127.0.0.1:1337/');

// 2. Handle HTTP route GET / and POST / i.e Home
    // if url == "/" && GET
        //show search
    // if url == "/" && POST
        // redirect to /:username

//3. Handle HTTP route GET /:username i.e. /chalkers
    // if url == "/...."
        //get json from Treehouse
        // on "end"
        // show profile
        // on "error"
        // show error

// 4. Function that handles the reading of fiels and merge in value
    // read from file and get a string
    // merge values in to string
