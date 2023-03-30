require("dotenv").config({ path: "./backend/config/.env" });

const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const app = express();
const httpserver = http.createServer(app);
const ChatController = require("./controllers/ChatController");

const port = process.env.PORT || 3000;

const io = new Server(httpserver, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

io.on("connection", (socket) => {
  ChatController(socket);
});

httpserver.listen(port, () => {
  console.log("Server is listening on port 3000");
});
