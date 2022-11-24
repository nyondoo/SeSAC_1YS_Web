const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', function(req,res){
    res.render('check_login');
});

app.get('/form', function(req,res){
    console.log(req.query);
    const ID = 'nyondoo';
    const PW = 'ndpwd';
    if (req.query.id == ID && req.query.pw == PW) {
        res.send({msg: "<p style='color:blue;'>로그인 성공</p>"})
    } else {
        res.send({msg: "<p style='color:red;'>로그인 실패</p>"})
    }
});

app.post('/form', function(req,res){
    console.log(req.body);
    const ID = 'nyondoo';
    const PW = 'ndpwd';
    if (req.body.id == ID && req.body.pw == PW) {
        res.send({msg: "<p style='color:blue;'>로그인 성공</p>"})
    } else {
        res.send({msg: "<p style='color:red;'>로그인 실패</p>"})
    }
});

app.listen( port, ()=>{
    console.log('server open : ', port);
} ); 
