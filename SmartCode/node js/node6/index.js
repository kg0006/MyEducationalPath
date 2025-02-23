const http = require("http");
const fs = require("fs");

const server = http.createServer(function (request, response) {
  if (request.url === "/users")
    fs.promises.readFile(__dirname + "/users.json", "utf-8").then((data) => {
      response.writeHead(200, { "content-type": "application/json" });
      response.write(data);
      response.end();
    });
});

server.listen(3030, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server is running ${3030} port`);
  }
});
