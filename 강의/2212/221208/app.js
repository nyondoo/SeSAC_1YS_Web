const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8080;

app.use(cookieParser()); //미들웨어 등록


app.get('/', (req, res)=>{
    if (req.cookies.NM_POPUP) res.render('ejs파일명', {popup: 'none'}); //3일간 보지 않기를 눌렀을 때 생성된 쿠키가 있을경우 팝업창 display=none
    else {res.render('ejs파일명', {popup: 'display'})};//쿠키 없으면 팝업창 보여주기
    res.render("ejs파일명");
});

// 자바스크립트로 쿠키 접근하는 법
// document.cookies

//옵션객체 선언
const option = {
    httpOnly: false, //브라우저 상에서 서버에서 응답으로 보낸 쿠키가 보이지 않음 = 자바스크립트로 쿠키를 조작(접근)하는 것을 막음.
    // 클라이언트가 document.cookie로 접근할 수 없게 함
    maxAge: 30000, // 만들어진 순간부터 설정한 초 만큼 뒤에 만료(밀리초ms 단위) ex) 30000 -> 30초 뒤에 만료
    // expires: "2022-12-09T09:00:00", //GMT시간(2022-12-08T09:00:00 => 2022년12월08일 오전9시에 만료)에 만료
    // path: '/visitor', // localhost:8080 경로에서는 쿠키가 없음. localhost:8080/visitor/~~ /visitor가 포함된 모든 경로에만 쿠키가 있음. dafault = '/'
    // secure: false, // true일 경우 https => 보안서버에만 적용됨
    // signed: true일 경우 쿠키 암호화. default = false
}

//라우터 /set 설정
//쿠키는 서버의 응답으로 보냄 = res사용
// params1 = 
// params2 = 
// params3 = 옵션객체
app.get('/set', (req, res)=>{ // 팝업창 3일간 보지 않기를 눌렀을 때 /set으로 온다는 가정
    res.cookie('NM_popup', '1', option); //쿠키 만들 때 : 서버가 쿠키를 응답으로 보냄 = res객체의 cookie메소드로 응답
    res.send('쿠키 생성 성공');
});

app.get('/get', (req, res)=>{
    console.log(req.cookies); // 쿠키는 객체(딕셔너리)형태로 찍힘
    console.log(req.cookies.test);
    res.send(req.cookies); // 쿠키 가져올 때 : 클라이언트(브라우저)에 저장된 쿠키를 가져옴 = req객체로 쿠키에 접근
});

app.listen(port, ()=>{
    console.log('server open', port);
});