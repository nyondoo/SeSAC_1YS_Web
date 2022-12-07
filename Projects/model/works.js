//DB 데이터 처리

//mysql 사용을 위한 설정
const mysql = require('mysql');
const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user', 
    password: 'ndsqlpwd',
    database: 'sesac_test'
})

//등록 시 새로 등록된 데이터를 데이터베이스에 추가, 표시하기 위해 사용
exports.register_work = (data, cb) => {
    // info = req.body, cb = 콜백함수
    let sql = `insert into works(work, time, attend) values('${data.work}', '${data.time}', '${data.attend}')`
    cnn.query(sql, (err)=>{
        if (err) throw err;
        cb();
    });
}

exports.get_work = (cb) => {
    let sql = `SELECT * FROM works;`
    cnn.query(sql, (err, rows) => {
        if (err) throw err;
        cb(rows);
    })
}

exports.inq_work = (data, cb) => {
    let sql = `SELECT work, time, attend FROM works WHERE work='${data}';`
    cnn.query(sql, (err, rows) => {
        if (err) throw err;
        cb(rows);
    })
}