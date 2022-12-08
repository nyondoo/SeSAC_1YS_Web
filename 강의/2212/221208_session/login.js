const express = require('express');
const session = require('express-session');
const app = express();
const port = 8080;
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.set('view engine', 'ejs');

//세션에 대한 미들웨어 등록
app.use(session({
    secret: '1234',
    resave: false,
    saveUninitialized: true
}))
//메인페이지
app.get('/main', (req,res)=>{
    if(req.session.user) {
        console.log('main session : ', req.session.user);
        res.render('main', {isLogin:true});
    }
    else res.render('main', {isLogin:false})
});
//로그인페이지
app.get('/goLogin', (req,res)=>{
    res.render('login');
})

const user = {id : 'nyondoo', pw : '1234'};

app.post('/goLogin', (req, res)=>{
    if (req.body.id == user.id && req.body.pw == user.pw) {
        req.session.user = req.body.id;
        console.log('login session : ', req.session.user);
        res.send(true);
    }
    else {
        res.send(false);
    }
});


//로그아웃
app.delete('/goLogout', (req,res)=>{
    req.session.destroy(function(err){
        if (err) throw err;
        console.log('logout session : ', req.session)
        res.render('main', {isLogin:false})
    })
});

app.listen(port, ()=>{
    console.log('server open', port);
});