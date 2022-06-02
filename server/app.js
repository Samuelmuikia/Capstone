// 'Import' the http module
const http = require("http");
// Initialize the http server
const server = http
  .createServer((request, response) => {
    // Handle the request from http://localhost:4040/status with HTTP GET method
    if (request.url === "/status" && request.method === "GET") {
      // Create the headers for response
      response.writeHead(200, { "Content-Type": "application/json" });
      // Create the response body
      response.write(JSON.stringify({ message: "Service healthy" }));
      // End and return the response
      response.end();
    }
  })
  // Tell the HTTP server to start listening
  .listen(4040);

// Let the humans know I am running and listening on 4040
console.log("Listening on port 4040");

// 'Import' the Express module instead of http
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
// Initialize the Express application
const app = express();

dotenv.config();

const PORT = process.env.API_PORT || 4040; // we use || to provide a default value

mongoose.connect(process.env.MONGODB);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error:"));
db.once(
  "open",
  console.log.bind(console, "Successfully opened connection to Mongo!")
);

const logging = (request, response, next) => {
  console.log(`${request.method} ${request.url} ${Date.now()}`);
  next();
};


// CORS Middleware
const cors = (req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Accept,Authorization,Origin"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
};

app.use(express.json());
app.use(logging);

// Handle the request with HTTP GET method from http://localhost:4040/status
app.get("/status", (request, response) => {
  // Create the headers for response by default 200
  // Create the response body
  // End and return the response
  response.json({ message: "Service healthy" });
});

app.post("/echo", (request, response) => {
  response.json({ "request.body": request.body });
});

app.route("/users/:id").get((request, response) => {
  // express adds a "params" Object to requests
  const id = request.params.id;
  console.log("request", request);
  // handle GET request for post with an id of "id"
  response.send(JSON.stringify({ user_id: id }));
});
// Tell the Express app to start listening
// Let the humans know I am running and listening on 4040
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
// 'Import' the Express module instead of http
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const pizzas = require("./routers/pizzas");
// Initialize the Express application
const app = express();

dotenv.config();

const PORT = process.env.API_PORT || 4040; // we use || to provide a default value

mongoose.connect(process.env.MONGODB);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error:"));
db.once(
  "open",
  console.log.bind(console, "Successfully opened connection to Mongo!")
);

const logging = (request, response, next) => {
  console.log(`${request.method} ${request.url} ${Date.now()}`);
  next();
};

app.use(express.json());
app.use(logging);


// Handle the request with HTTP GET method from http://localhost:4040/status
app.get("/status", (request, response) => {
   // Create the headers for response by default 200
   // Create the response body
   // End and return the response
  response.status(418).json({ message: "Service healthy" });
});

app.post("/echo", (request, response) => {
  response.json({ "request.body": request.body });
});

app.use("/pizzas", pizzas);

// Tell the Express app to start listening
// Let the humans know I am running and listening on 4040
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
