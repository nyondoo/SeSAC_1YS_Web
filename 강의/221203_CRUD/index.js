const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// router를 미들웨어로 불러오기
const router = require('./routes');
app.use('/', router);

app.listen( port, ()=>{
    console.log('server open : ', port);
} ); 