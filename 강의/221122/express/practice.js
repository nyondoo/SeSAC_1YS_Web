const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');

app.use(express.static('static'));

app.get('/img', (req, res)=>{
    res.render( 'img', {
        name: [1,2,3]
    } );
});

app.listen( port, ()=>{
    console.log('server open : ', port);
} ); 