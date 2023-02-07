const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/prac1.html');
});

io.on('connection', (socket) => {
  console.log('Server Socket Connected', socket.id);

  // 데이터를 받고 보낸다
  socket.on('hello', (str) => {
    console.log(`client ${str}`);
    socket.emit('response1', { msg: '안녕하세요!' });
  });

  socket.on('study', (str) => {
    console.log(`client ${str}`);
    socket.emit('response1', { msg: '공부합시다!' });
  });

  socket.on('bye', (str) => {
    console.log(`client ${str}`);
    socket.emit('response1', { msg: '안녕히가세요!' });
  });

  //함수 하나로 구현하기
  let data = {
    hello: '안녕하세요!',
    study: '공부합시다!',
    bye: '안녕히가세요!',
  };
  socket.on('send', (msg) => {
    console.log(`client: ${msg}`);
    socket.emit('response', `${msg}: ${data[msg]}`);
  });
});

http.listen(8000, () => {
  console.log('Server port: ', 8000);
});
