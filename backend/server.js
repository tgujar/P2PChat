const express = require("express");
const { Server } = require("socket.io");
const http = require("http");
const registerRTCEvents = require("./routes/rtcEvents");

const colors = require("colors");

const port = process.env.PORT || 3001;

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  registerRTCEvents(io, socket);
});

server.listen(port, () =>
  console.log(`Server running on port ${port}`.underline.cyan)
);
