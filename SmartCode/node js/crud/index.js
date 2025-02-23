const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      myWrite("index.html", req.method);
      break;

    case "/users":
      myWrite("users.json", req.method);
      break;

    case "/users/1":
  }
});

server.listen(3500, (err) => {
  if (err) console.log(err);
  else console.log("server is running on 3500 port");
});

//////////////////////////////////////

function myWay(...args) {
  return path.join(__dirname, args.join(",").replaceAll(",", "/"));
}

function myWrite(file, method, param = null) {
  if (file[file.length - 1] === "l" && method === "GET") {
    myTyping("html");
  } else if (
    file[file.length - 1] === "n" &&
    method === "GET" &&
    param === null
  ) {
    myTyping("json");
  } else if (file[file.length - 1] === "n" && method === "GET" && param) {
  }
}

function myTyping(type, parametr = null) {
  if (!parametr) {
    let x = "";
    type === "html"
      ? (x = "text/html")
      : type === "json"
      ? (x = "application/json")
      : (x = "text/plain");

    let fileName = "";
    x === "text/html"
      ? (fileName = "index.html")
      : x === "application/json"
      ? (fileName = "users.json")
      : (fileName = "");

    fs.promises
      .readFile(myWay(fileName), "utf-8")
      .then((data) => {
        res.writeHead(200, { "content-type": `${x}` });
        res.write(data);
        res.end();
      })
      .catch((err) => console.log(err));
  }
}
