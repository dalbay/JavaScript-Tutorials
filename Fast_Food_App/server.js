/** Creating the SERVER
 * - the server is created here as a separate module - it will be exported and imported in the app.js file!
 * - Include the http-module
 * - Include the url-module
 * - Include the fs-module
 */

var http = require("http");

var fs = require("fs");

class Server {
  createAppServer() {
    // excepting any type of request
    const server = http.createServer((req, res) => {
      fs.readFile("index.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });
    });
    server.listen(8000, "127.0.0.1", () => {
      console.log("Listening on port 8000");
    });
  }
}
module.exports = Server;
