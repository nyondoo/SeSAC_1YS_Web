const express = require('express');
const app = express();
const port = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json()); 

app.set('view engine', 'ejs');

app.get('/getForm', (req,res)=>{
    res.render('get-prac-form');
})

app.get('/getResult', (req,res)=>{
    console.log(req.query);
    res.render('getResult', {data : req.query})
})

app.get('/postForm', (req,res)=>{
    res.render('post-prac-form')
})

app.post('/postResult', (req,res)=>{
    console.log(req.body);
    res.render('postResult', {data : req.body})
})

app.listen( port, ()=>{
    console.log('server open : ', port);
} ); 