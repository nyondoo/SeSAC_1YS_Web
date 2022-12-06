const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');

app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//라우터 불러오기
const router = require('./routes/practice_mvc')
app.use('/', router); // 미들웨어 등록 : / 뒤에 뭐가 오든 router를 거칠 것

app.listen( port, ()=>{
    console.log('server open : ', port);
} ); 