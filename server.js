var app, express, http, io;

express = require('express');

app = express();

http = require('http').Server(app);

io = require('socket.io')(http);

app.use(express["static"](__dirname + "/"));

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

io.on('connection', function(socket) {
  console.log('a user connected');
  socket.on('next', function() {
    socket.broadcast.emit('next');
  });
  socket.on('prev', function() {
    socket.broadcast.emit('prev');
  });
});

http.listen(3000, function() {
  console.log('listening on port 3000');
});
