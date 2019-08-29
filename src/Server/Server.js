const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const axios = require("axios");
const port = process.env.PORT || 4001;
const index = require("./index");
const app = express();

app.use(index);

const server = http.createServer(app);
const io = socketIo(server); // < Interesting!



io.on("connection", socket => {
    console.log("New client connected")
    socket.emit("recieve", "nm")

    socket.on("disconnect", () => console.log("Client disconnected"));
  });

  

  server.listen(port, () => console.log(`Listening on port ${port}`));
  
 