const { createServer } = require("http");

const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello world");
});

server.listen(port, () => {
  console.log("Server is running on port: ", port);
});
