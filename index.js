var express = require('express');
var http = require('http');
var socket = require('socket.io')

var app = express();

app.use(express.static('./client/build'))

var server = http.Server(app);
var websocket = socket(server);

var port = 3000;

var amount = [];

server.listen(port, () => {
  console.log('Listening on port '+port);
})

websocket.on('connection', (socket) => {

  amount.map((value) => {
    socket.emit('coin', value);
  });

  console.log('Socket connection established #'+socket.id);

  socket.on('coin', (value) => {

    console.log('Received a coin with the value '+value);

    socket.broadcast.emit('coin', value);

    amount.push(value)

  });
});
