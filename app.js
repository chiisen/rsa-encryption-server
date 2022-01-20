var http = require("http")
const { inspect } = require("util")

const port = 3333
console.log(`listen port=${port}`)

http
  .createServer(function (request, response) {
    switch (request.method) {
      case "POST":
        console.log("header= " + inspect(request.header))
        console.log("body= " + request.body)
        break
      case "GET":
        break
      case "DELETE":
        break
    }

    response.writeHead(200, { "Content-Type": "application/json" })
    //response.write("Hello World")
    //response.write(`\nlisten port=${port}`)
    response.end()
  })
  .listen(port)
