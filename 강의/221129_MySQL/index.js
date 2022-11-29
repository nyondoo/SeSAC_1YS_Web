const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');

const mysql = require('mysql');
const cnn = mysql.createConnection({// 옵션 객체
    host: 'localhost', // 혹은 '127.0.0.01'
    user: 'user', //sql 사용자 root 사용자는 외부에서 접근 허용 X 따라서 다른 계정 생성해야 함
    password: 'ndsqlpwd', // sql 비밀번호
    database: 'sesac_test'
})

app.get('/', (req, res) => {
    cnn.query("select * from user", (err, result)=>{
        if (err) throw err; 
        console.log(result); // 결과 출력
        res.render('index', { rows: result }); // client에 데이터 보내주기 키 맘대로 설정, 값은 result
    });
});



app.listen( port, ()=>{
    console.log('server open : ', port);
} ); 