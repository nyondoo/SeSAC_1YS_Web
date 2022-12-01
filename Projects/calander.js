//use express module
const express = require('express');
const app = express();
//declare port
const port = 8080;

const path = require('path')

//use ejs tamplete
app.set('view engine', 'ejs');

//access static file directory
app.use('/static', express.static(__dirname + '/static'));

//Form
app.use(express.urlencoded({extended: true}));
app.use(express.json());


//home page
app.get('/home', (req, res)=>{
    res.render( 'home'); // render home.ejs
});

//render register page
app.post('/register', (req, res)=>{
    res.render('register');
})

//render success page
app.post('/success', (req, res)=>{
    res.render('success',
    { data : req.body });
})





//open server with listen method
app.listen( port, ()=>{
    console.log('server open : ', port);
} );