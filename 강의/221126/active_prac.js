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
            const ext = path.extname(file.originalname);
            const filename = req.body.id + ext;
            done(null, filename);
        }
    }) 
});


app.get('/', (req, res) => {
    res.render('active_prac')
});

// {
//     path: req.file.destination,
//     file: req.file.filename}
app.post('/', upload.single('userfile'), (req,res)=> { 
    console.log(req.file.path);
    res.send({path: req.file.path});
})

app.listen( port, ()=>{
    console.log('server open : ', port);
} ); 