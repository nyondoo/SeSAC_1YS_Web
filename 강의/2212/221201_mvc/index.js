const express = require('express');
const app = express();
const port = 8080;


app.set('view engine', 'ejs');

app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// 라우터 불러오기
const router = require('./routes');
//routes 폴더 불러오기
// 폴더만 지정, 파일은 지정 X => 해당 폴더 안에 index.js 파일이 있으면 알아서 불러옴. 
// index.js가 아닌 경우에는 파일명까지 지정해줘야 함 : './routes/test'
// routes/index.js에서 export한 router가 담겨옴.

app.use ('/', router);
// localhost:8080/
// localhost:8080/flkda;sjd~~ app.use() : 그 어떤 라우터로 와도 다 이동시키겠다


//404 Error 라우팅
app.get('*', (req, res)=>{ // * = 모든 라우터.    !!모든 라우터를 전부 정의한 후 마지막에 작성!!
    //res.render('error'); // 정의해둔 라우터가 아닌 주소로 접속했을 경우 에러페이지 렌더
    res.send('주소가 존재하지 않습니다. 다시 한 번 확인해주세요.');
});

app.listen( port, ()=>{
    console.log('server open : ', port);
} ); 