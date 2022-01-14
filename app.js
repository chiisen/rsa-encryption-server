var http = require("http")
http
  .createServer(function (request, response) {
    var result;
    switch (req.method) {
    case 'POST':
    break;
    case 'GET':
    break;
    case 'DELETE':
    break;
    }
    
    response.writeHead(200, { "Content-Type": "text/plain" })
    response.write("Hello World")
    response.end()
  })
  .listen(30000)
