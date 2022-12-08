const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');


app.use(cookieParser());

app.get('/', (req, res)=>{
    //req.cookies.TEST_popup의 값을 비교해서 1이 아니면 팝업창 띄우기
    if (req.cookies.TEST_popup == '1') res.render('popup', {popup:'none'});
    else res.render('popup',{popup:'display'});
    // res.render("popup");
});

const option = {
    httpOnly: false,
    maxAge: 1000*60*60*24
}

app.post('/setpopup', (req, res)=>{
    console.log("aaa")
    //1. '오늘 하루 열지 않음'을 클릭했음을 구분하는 쿠키 생성 => 실질적 서버응답 X. 서버 응답의 header를 변경하기 위함
    //2. 서버 응답
    res.cookie('TEST_popup', '1', option); //쿠키생성
    res.send(true); // 서버응답
});

app.get('/get', (req, res)=>{
    console.log(req.cookies);
    res.send(req.cookies); // 클라이언트에서 쿠키 가져옴
});

app.listen(port, ()=>{
    console.log('server open', port);
});