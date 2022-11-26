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
    storage: multer.diskStorage({
        destination(req, file, done){
            done( null, 'uploads/') 
        },
        filename(req, file, done) {
            console.log('filename : ', req.body)
            const ext = path.extname(file.originalname);
            const filename = req.body.id + ext;
            console.log(ext)
            done(null, filename);
        }
    }) 
});


app.get('/', (req, res) => {
    res.render('non')
});

app.post('/upload', upload.single('userfile'), (req,res)=> { 
    console.log(req.file) 
    console.log(req.body)
    res.render('result', {
        path: req.file.destination,
        file: req.file.filename})
})

app.listen( port, ()=>{
    console.log('server open : ', port);
} ); 