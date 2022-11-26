const express = require('express');
const app = express();
const port = 8080;

const multer = require('multer'); // multer 불러오기
const path = require('path') // path모듈 불러오기
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/uploads', express.static('uploads'));

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

app.get('/', (req, res) => {
    res.render('active')
});

app.post('/upload', upload.single('userfile'), (req,res)=> {  // name속성값 // ejs form의 action = /upload
    const path = req.file.
    res.render('result')
})

app.listen( port, ()=>{
    console.log('server open : ', port);
} ); 