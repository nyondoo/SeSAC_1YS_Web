const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');
app.get('/', (req, res) => {
  res.sendFile();
});

io.on('connection', (socket) => {
  console.log('Server Socket Connected', socket.id);

  socket.emit('startChat', { msg: `${socket.id}님이 입장하셨습니다.` });

  socket.on('disconnect', () => {
    console.log('Server Socket Disconnected');
  });
});

http.listen(8000, () => {
  console.log('Server port: ', 8000);
});
