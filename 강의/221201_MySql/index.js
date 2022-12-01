const express = require('express');
const app = express();
const port = 8080;


app.set('view engine', 'ejs');

app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());



// 라우터 불러오기
const router = require('./routes');
//localhost:8080/visitor 이 포함된 주소로 접속해야 router 렌더
app.use ('/visitor', router);

//404 Error 라우팅
app.get('*', (req, res)=>{ // * = 모든 라우터.    !!모든 라우터를 전부 정의한 후 마지막에 작성!!
    //res.render('error'); // 정의해둔 라우터가 아닌 주소로 접속했을 경우 에러페이지 렌더
    res.send('주소가 존재하지 않습니다. 다시 한 번 확인해주세요.');
});

app.listen( port, ()=>{
    console.log('server open : ', port);
} ); 