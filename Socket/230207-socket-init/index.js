const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

//클라이언트 소켓이 연결되면 콜백 함수가 실행된다.
// socket : 클라이언트 소켓과 연결되고 새로 생성된 소켓
// socket에는 id가 있음
// 인자로 준 socket을 사용하기 위해 io.on 안에서만 사용
// socket은 io.on 안에서 생성됨. io.on 밖에는 socket이 없음.
// socket에 연결된 클라이언트는 각각의 id를 갖는다.
// 연결이 새롭게 될 때마다 다르고, 여러 개 클라이언트가 연결될 경우 각각 다른 고유의 socket id를 갖게 된다.
io.on('connection', (socket) => {
  console.log('Server Socket Connected', socket.id);

  socket.emit('welcome', { msg: 'welcome' });

  socket.on('response', (str) => {
    console.log(str);
  });

  socket.on('disconnect', () => {
    console.log('Server Socket Disconnected');
  });
});

http.listen(8000, () => {
  console.log('Server port: ', 8000);
});
