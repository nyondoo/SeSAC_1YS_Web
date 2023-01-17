const express = require('express');
const cors = require('cors');

const PORT = 8080;
const app = express();

app.use(cors()); // 어떤 주소로 요청을 보내도 cors 에러가 발생하지 않게 함

app.get('/', (req, res) => {
  const pororoObjArr = [
    {
      name: '뽀로로',
      age: '5',
      nickName: '사고뭉치',
    },
    {
      name: '루피',
      age: '4',
      nickName: '공주님',
    },
    {
      name: '크롱이',
      age: '5',
      nickName: '장난꾸러기',
    },
  ];
  res.status(200).send(JSON.stringify(pororoObjArr));
});

app.listen(PORT, () => {
  console.log(`백엔드 서버가 ${PORT}번에서 작동 중`);
});
