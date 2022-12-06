const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', function(req,res){
    res.render('axios-prac');
});

app.get('/form', function(req,res){
    console.log(req.query);
    res.send({
        msg: `이름: ${req.query.name}\n성별: ${req.query.gender}\n생년월일: ${req.query.b_year}년 ${req.query.b_month}월 ${req.query.b_date}일\n가입완료`
})
});

app.listen( port, ()=>{
    console.log('server open : ', port);
} ); 