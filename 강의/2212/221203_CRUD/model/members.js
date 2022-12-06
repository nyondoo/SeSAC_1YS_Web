const mysql = require("mysql");
const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'ndsqlpwd',
    database: 'sesac_test'
});

exports.post_register = (data, cb) => {
    let sql = `INSERT INTO members(id, name, pw) VALUES('${data.id}','${data.name}','${data.pw}');`;
    cnn.query( sql, function(err){
        if ( err ) throw err;
        cb();
    });
}

exports.post_login = (id, pw, cb) => {
    let sql = `SELECT * FROM members WHERE id='${id}' and pw='${pw}' limit 1;`;
    cnn.query( sql, function(err, rows){
        if ( err ) throw err;
        console.log('result :', rows.length)
        cb(rows);
    });
}

exports.get_user = (id, cb) => {
    let sql = `SELECT * FROM members WHERE id='${id}' limit 1;`;
    cnn.query( sql, function(err, rows){
        if ( err ) throw err;
        cb(rows);
    });
}

exports.profile_edit = (data, cb) => {
    let sql = `UPDATE members SET name='${data.name}', pw='${data.pw}' WHERE id='${data.id}';`;
    cnn.query(sql, function(err){
        if ( err ) throw err;
        cb();
    })
}

exports.profile_delete = (id, cb) => {
    let sql = `DELETE FROM members WHERE id='${id}';`;
    cnn.query(sql, function(err){
        if ( err ) throw err;
        cb();
    })
}