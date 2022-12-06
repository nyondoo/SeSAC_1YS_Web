const express = require('express');
const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", function(req,res) {
    res.render("login");
});
app.get("/login", function(req,res){
    if ( req.body.id == "1" && req.body.pw == "1234" ){
        res.send({msg: "<p style='color:blue'>get 로그인 성공</p>"});
    } else {
        res.send({msg:"<p style='color:red;'>get 로그인 실패 ( 아이디 또는 비밀번호가 틀렸습니다.)"});
    }
})

app.post("/login", function(req,res){
    if ( req.body.id == "1" && req.body.pw == "1234" ){
        res.send({msg: "<p style='color:blue'>post 로그인 성공</p>"});
    } else {
        res.send({msg:"<p style='color:red;'>post 로그인 실패 ( 아이디 또는 비밀번호가 틀렸습니다.)"});
    }
})
app.listen(port, ()=>{
    console.log( "Server Port : ", port );
});