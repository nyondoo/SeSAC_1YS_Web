const mysql = require("mysql");
const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'ndsqlpwd',
    database: 'sesac_test'
});

exports.post_signup = (data, cb) => {
    let sql = `INSERT INTO member(id, name, pw) VALUES('${data.id}','${data.name}','${data.pw}');`;
    cnn.query( sql, function(err){
        if ( err ) throw err;
        cb();
    });
}

exports.post_signin = (id, pw, cb) => {
    let sql = `SELECT * FROM member WHERE id='${id}' and pw='${pw}' limit 1;`;
    cnn.query( sql, function(err, rows){
        if ( err ) throw err;
        cb(rows);
    });
}
exports.get_user = (id, cb) => {
    let sql = `SELECT * FROM member WHERE id='${id}' limit 1;`;
    cnn.query( sql, function(err, rows){
        if ( err ) throw err;
        cb(rows);
    });
}

exports.update_profile = (data, cb) => {
    let sql = `UPDATE member SET name='${data.name}', pw='${data.pw}' WHERE id='${data.id}'`;
    cnn.query( sql, ( err ) => {
        if ( err ) throw err;
        cb();
    })

}
exports.delete_user = (id, cb) => {
    cnn.query(`DELETE FROM member WHERE id='${id}'`, (err) => {
        if ( err ) throw err;
        cb();
    });
}