const express = require('express');
const SocketServer = require('ws').Server;
const uuid = require('uuid/v4');

const PORT = 3001;

// Creates a new express server
const server = express()
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Creates the WebSockets server
const wss = new SocketServer({ server });

// when a client connects, updates the number of users and sends it to all logged in clients
let numUsers = 0;
wss.on('connection', (ws) => {
  numUsers ++;
  wss.clients.forEach(client => {
    if (client.readyState === ws.OPEN) {
      client.send(JSON.stringify({numUsers: numUsers}));
    }
  })
  console.log('Client connected');

  // when a client disconnects, updates the number of users and sends it to all logged in clients
  ws.on('close', () => {
    numUsers --;
    wss.clients.forEach(client => {
      if (client.readyState === ws.OPEN) {
        client.send(JSON.stringify({numUsers: numUsers}));
      }
    })
    console.log('Client disconnected');
  });

  // when a message is being recieved: gives it a unique id and send to all clients
  ws.on('message', (newMessage) => {
    let incomingMessage = JSON.parse(newMessage);
    let outcomingMessage = {
      id: uuid(),
      username: incomingMessage.username,
      content: incomingMessage.content,
      type: incomingMessage.type
    }
    wss.clients.forEach(client => {
      if (client.readyState === ws.OPEN) {
       client.send(JSON.stringify(outcomingMessage));
      }
    })
  })
})
