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

//router setting
//use router in /routes/index.js
//localhost:8080/ 포함하는 모든 경로
const router = require('./routes');
app.use('/', router);


//open server with listen method
app.listen( port, ()=>{
    console.log('server open : ', port);
} );