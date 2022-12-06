const mysql = require('mysql');
const cnn = mysql.createConnection({// 옵션 객체
    host: 'localhost', // 혹은 '127.0.0.01'
    user: 'user', //sql 사용자 root 사용자는 외부에서 접근 허용 X 따라서 다른 계정 생성해야 함
    password: 'ndsqlpwd', // sql 비밀번호
    database: 'sesac_test'
})

// cnn.query("insert into user values('abc', '1234', '홍길동', 'M', '1995-03-21', 28)", (err, result)=>{
//     if (err) throw err; 
//     console.log(result); // 결과 출력
// });

cnn.query("select * from user", (err, result)=>{
    if (err) throw err; 
    console.log(result); // 결과 출력
});