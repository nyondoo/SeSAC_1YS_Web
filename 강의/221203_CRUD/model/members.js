const mysql = require('mysql');
const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user', 
    password: 'ndsqlpwd',
    database: 'sesac_test'
})

exports.join_model = (info, cb)=>{
    let sql = `INSERT INTO MEMBER(id, pw, name) VALUES('${info.id}', '${info.pw}', '${info.name}')`;
    cnn.query(sql, (err, result)=>{
        if (err) throw err;
        console.log("insert result : ", result);
        cb();
    })
}

exports.login_model = (info, cb)=>{
    let sql = `SELECT * FROM member`
    cnn.query(sql, (err, rows)=>{
        if (err) throw err;
        cb(rows);
    })
}