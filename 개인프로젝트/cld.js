//use express module
const express = require('express');
const app = express();
//declare port
const port = 8080;

//use ejs tamplete
app.set('view engine', 'ejs');

//access image file directory
app.use('/static', express.static('static'));

//Form
app.use(express.urlencoded({extended: true}));
app.use(express.json());


//home page
app.get('/home', (req, res)=>{
    res.render( 'home'); // render home.ejs
});



//open server with listen method
app.listen( port, ()=>{
    console.log('server open : ', port);
} ); 