const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
//{socket.id : username}
let list = {};

io.on('connection', (socket) => {
  console.log('Server Socket Connected', socket.id);
  socket.emit('info', socket.id);

  // io.emit('notice', `${socket.id}님이 입장하셨습니다.`);

  socket.on('username', (username) => {
    list[socket.id] = username;
    io.emit('list', list);
    io.emit('notice', `${username}님이 입장하셨습니다.`);
  });

  socket.on('send', (json) => {
    json['from'] = socket.id;
    json['username'] = list[socket.id];
    json['is_dm'] = false;
    if (json.to === '전체') io.emit('newMSG', json);
    else {
      json['is_dm'] = true;
      const socketID = Object.keys(list).find((key) => list[key] == json.to);
      io.to(socketID).emit('newMSG', json);
      socket.emit('newMSG', json);
    }
  });

  socket.on('disconnect', () => {
    console.log('Server Socket Disconnected');
    io.emit('notice', `${list[socket.id]}님이 퇴장하셨습니다.`);
    delete list[socket.id];
    io.emit('list', list);
  });
});

http.listen(8000, () => {
  console.log('Server port: ', 8000);
});
