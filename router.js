var Profile = require("./profile.js");
var renderer = require("./renderer.js")

function home(request, response) {
    // if url == "/" && GET
    if (request.url === "/") {
        //show search
        response.writeHead(200, {'Content-Type': 'text/plain'});
        renderer.view("header", {}, response);
        response.write("Search\n");
        response.end('Footer\n');
    }
    // if url == "/" && POST
    // redirect to /:username
}

//3. Handle HTTP route GET /:username i.e. /calebking3
function user(request, response) {
    // if url == "/...."
    var username = request.url.replace("/", "");
    if (username.length > 0){
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write("Header\n");

        // get json from treehouse
        var studentProfile = new Profile(username);
        // on "end"
        studentProfile.on("end", function(profileJSON){
            // show profile

            var values = {
                avatarUrl: profileJSON.gravatar_url,
                username: profileJSON.profile_name,
                badges: profileJSON.badges.length,
                javascriptPoints: profileJSON.points.JavaScript
            }
            // simple response
            response.write(username + "\n");
            response.end('Footer\n');

        });

        // on "error"
        studentProfile.on("error", function(error){
            response.write(username + "\n");
            response.end('Footer\n');
        });


        //get json from Treehouse
        // on "end"
        // show profile
        // on "error"
        // show error
    }
}

module.exports.home = home;
module.exports.user = user;