const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', function(req,res){
    res.render('index-ajax');
});

app.get('/form', function(req,res){
    console.log(req.query); // ejs의 data: {name:form.name.value}
    res.send({msg:'이름'+req.query})
    //res.send({msg: 'get ajax - 이름은 : ' + req.query.name});
});

app.post('/form', function(req,res){
    console.log(req.body);
    res.send({msg:'이름'+req.body})
    //console.log(req.body);
    //res.send({msg: 'post ajax - 이름은 : ' + req.body.name});
});

app.listen( port, ()=>{
    console.log('server open : ', port);
} ); 

