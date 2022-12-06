const express = require('express'); // 모듈 불러오기
const app = express(); // express모듈로 객체 만들기
const port = 8080; // 포트 정의

app.set('view engine', 'ejs'); //(html이 아닌)ejs템플릿을 view engine으로 사용하겠다는 의미

//html파일에서 표시한 이미지파일을 보여주기위해
// 클라이언트가 특정 폴더에 접근할 수 있도록 해줘야 함
// 미들웨어를 등록하는 메소드 use()
app.use('/static', express.static( 'static'));//첫번째 파라미터=가상경로 아무거나 입력
//두번째 파라미터 ecpress.static('폴더명')
// => static이라는 실제 존재하는 폴더에 static이라는 경로로 접근할 수 있도록 함
// <img src="static/img/cat.jpg">

//app.use(express.static('static'));
// <img src="/img/cat.jpg">


//form
app.use(express.urlencoded({extended: true}));//폼 타입 중 x-www-urlencoded 형태의 데이터를  해석하겠다는 뜻
app.use(express.json()); // json형태로 parsing하겠다는 뜻 / json : 딕셔너리 형태와 비슷
// {
//     key : value
// }


//local host:8080 로 접속시
app.get('/', (req, res)=>{ // response : 서버가 클라이언트에 보내는 답변, request : 클라이언트가 서버에 보내는 요청
    res.send('hello express');// local host에 접속했을 때 할 행동 (보여줄 것)
});

//local host:8080/test로 접속시
app.get('/test', (req, res)=>{
    res.sendFile(__dirname + "/views/index.html");//sendFile(파일의 "절대경로")
    //__dirname : 현재 작성중인 index.js파일이 있는 위치까지 표시
}); // 백엔드 언어 = 현재 파일 수정시 서버 껐다 켜야함, 그 외 html같은 파일 수정시는 그럴필요 없음

//local host:8080/ejs
app.get('/ejs', (req, res)=>{
    res.render( 'index',//views폴더가 자동으로 기본 디렉토리로 지정, 확장자 .ejs도 필요X 
    {
        title: "index page",
        data: ['a','b','c']
    } ); // render의 두번째 인자는 딕셔너리 형태로 입력
});

app.get('/form', (req,res)=>{
    res.render('form');
})

app.get('/getForm', (req,res)=>{ // ejs에서 지정한 라우터로 바꿔줌
    console.log(req.query); // 터미널에 쿼리(url의 ? 뒷부분) { id: 'nyondoo', pw: 'pwdpwdpwd' } 찍힘
    res.send('get 요청 성공') // get요청은 쿼리에 정보를 담아옴
})
///get 요청은 form을 통하지 않고 그냥 주소창에 url찍고 들어갈 수 있음
///url에 쿼리에 정보를 넣을 수도 있음

app.post('/postForm', (req,res)=>{
    console.log(req.body); // post는 query가 아닌 body에 정보가 담겨옴
    res.render('result', {data : req.body})
})
///post 요청은(=라우터를 post메소드로 선언했을 경우) url치고 들어갈 수 없음. form을 통해서만 가능
/// 주소창에 url 직접 치는 것은 무조건 get요청임


// listen 메소드로 서버 열기
app.listen( port, ()=>{
    console.log('server open : ', port);
} ); 

