const express = require('express');
const app = express();
const port = 8080;

const multer = require('multer'); // multer 불러오기
const path = require('path') // path모듈 불러오기
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.json());


//////////////////////////파일 업로드////////////////////////
// const upload = multer({
//     dest: 'uploads/'
// }) // 파일 올릴 곳 (경로)지정

const upload = multer({
    storage: multer.diskStorage({// 하드디스크에 업로드된 파일을 저장하는 메소드
        destination(req, file, done){
            done( null, 'uploads/') //done메소드로 파일 저장 경로 지정, 첫번째 인자는 에러이기 때문에 null로 지정
        },
        filename(req, file, done) {
            console.log('filename : ', req.body)
            const ext = path.extname(file.originalname); // 파일 업로드시 data에 originalname의 키값으로 원래 파일명이 들어가있음
            const filename = req.body.name + ext; // name속성이 'name'인 input창에 입력한 값으로 파일명 설정
            done(null, filename);//done메소드로 파일명 지정
        }
    }) 
});

app.get('/file', (req, res) => {
    res.render('file')
});
app.post('/upload', upload.single('userfile'), (req,res)=> {  // name속성값 // ejs form의 action = /upload
    console.log(res.file) // upload.single() = 파일 업로드 하고 next()까지 실행하는 메소드
    // upload.single()에서 담아온 userfile 값을 받아와 사용
    console.log(req.body)
    res.send('upload complete')
})

app.post('/upload-array', upload.array('userfile'), (req,res)=> {  // multiple속성이 있는 input은 upload.array()로 받음
    console.log(req.files) // req.files로 받음 (복수)
    console.log(req.body)
    res.send('upload complete')
})

app.post('/upload-fields', upload.fields([{name:'userfile1'}, {name:'userfile2'}, {name:'userfile3'}]),(req,res)=>{ // 하나씩 여러번 하려면 fields() 사용하고 각각의 파일변수명을 지정해줘야 함
    console.log(req.files) // req.files로 받음 (복수)
    console.log(req.body)
    res.send('upload complete')
})

////////미들웨어 사용하기/////////
app.get('/', test, test2, function(req,res){ // url과 동작함수 사이에 미들웨어 함수 적어줌 : 클라이언트가 '/'로 요청을 보냈을 때 test함수를 먼저 실행시킨 후 응답 functuion을 실행시키겠다
    console.log('req.name : ', req.name) // next()이전 함수에 담긴 정보를 가져와 사용할 수 있음.
    console.log('hello')
    res.send('hello');
});

function test(req, res, next) {
    req.name = '12345'
    console.log( req.query )
    console.log('test 함수입니다.')
    next() // test 미들웨어 함수가 끝났고, 그 다음을 진행해라.
}

function test2 (req, res, next) {
    console.log('test2 함수입니다');
    next();// test2 미들웨어 함수 끝나고 그 다음(= 원래로직)을 진행해라 /// next()를 실행하지 않으면 그 다음으로 넘어가지 않음
}



app.listen( port, ()=>{
    console.log('server open : ', port);
} ); 