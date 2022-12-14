const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', function(req,res){
    res.render('index');
});

app.get('/form', function(req,res){
    console.log(req.query);
    res.send({msg: 'get - 이름은 : ' + req.query.name});
});

app.post('/form', function(req,res){
    console.log(req.body);
    res.send({msg: 'post - 이름은 : ' + req.body.name});
});

app.listen( port, ()=>{
    console.log('server open : ', port);
} ); 

