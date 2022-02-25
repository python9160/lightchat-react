const express = require('express');
const app = express();
const server = require('http').createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

/*
Room structure:
{
  owner: Member,
  password: String,
  members: [Members],
  settings: {
    slurFilter: Boolean || true,
    curseFilter: Boolean || true,
  }
}
*/

let Room = class {
  constructor(owner, password, roomSettings) {
    this.owner = owner,
    this.password = password,
    this.members = [owner],
    this.settings = roomSettings
  }
  
}

//we fix server.js first?
class Message {
  constructor(message) {
    this.author = message.author;
    this.text = message.text;
    this.imgURL = message.imgURL;
    this.timestamp = message.timestamp;
  }


}

// defining what is a member
class Member { 
  constructor(name, id) {
    this.name = name; 
    this.id = id;
  }
  
  
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// User connected log
io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("Message", message => {
    message = new Message(message);
  });
});

server.listen(5000, () => {
  console.log("server is running on port 5000");
}); 
