const express = require('express');
const session = require('express-session');
const app = express();
const port = 8080;

//세션에 대한 미들웨어 등록
app.use(session({
    secret: '1234',//암호화 결정. 임의의 문자열을 기준으로 세션을 암호화
    resave: false,// 변경사항이 없어도 다시 저장할지 말지. true일 경우 모든 요청마다 session에 변화가 없어도 session을 다시 저장함.
    saveUninitiallized: true//초기화되지 않은 session을 저장할지 말지 true:초기화 되지 않아도 서버에 접속하면 세션 저장
    // cookie:{ // session id 쿠키에 대한 옵션
    //     httpOnly : true,
    //     maxAge: 
    // },
    // secure: // true일 경우보안서버에서만 작동
}))

app.get('/', (req,res)=>{
    if(req.session.user) res.render('index', {isLogin : true}) // 로그인여부 판단 후 로그인 되어있으면 다른 버튼 보여주기 등 설정
    else res.render('index', {isLogin : false})
    res.send('세션 수업')
});

const user = {id : 'a', pw : '1'};

app.post('/login', (req,res)=>{
    // req.session = {}
    if (req.body.id == user.id && req.body.pw == user.pw) {
        req.session.user = req.body.id;//클라이언트마다 가지고 있는 고유의 session id를 가져오기(가져와서 구분하기) 위해 req.session으로 접근
        //클라이언트마다 각각의 세션이 있음. 세션에 정보 저장
        res.send("로그인 성공");
    }
    else {
        res.send("로그인 실패");
    }
    res.send('세션 생성 성공') 
});

//세션 삭제
app.destroy('/logout', (req,res)=>{
    req.session.destroy(function(err){
        if (err) throw err;
        res.send('로그아웃 성공');
    })
});

app.listen(port, ()=>{
    console.log('server open', port);
});