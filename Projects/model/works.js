//DB 데이터 처리

//mysql 사용을 위한 설정
const mysql = require('mysql');
const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user', 
    password: 'ndsqlpwd',
    database: 'sesac_test'
})

//첫 페이지를 렌더할 때 데이터베이스에 있는 내용을 표시하기 위해 사용
exports.get_work = (cb)=>{
    let sql = 'SELECT * FROM works';

    cnn.query(sql, (err, rows)=>{
        if (err) throw err; 
        console.log("works : ", rows);
        cb(rows);
    });
}

//등록 시 새로 등록된 데이터를 데이터베이스에 추가, 표시하기 위해 사용
exports.register_work = (info, cb) => {
    // info = req.body, cb = 콜백함수
    let sql = `insert into work(name, time, attend) values('${info.name}', '${info.time}', '${info.attend}')`
    cnn.query(sql, (err, result)=>{
        if (err) throw err; 
        console.log("insert result : ", result);
        cb(result.insertId);
    });
}