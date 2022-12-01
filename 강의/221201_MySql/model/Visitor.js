

const mysql = require('mysql');
const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user', 
    password: 'ndsqlpwd',
    database: 'sesac_test'
})


//controller에서 함수로 넘겨줬기 때문에 인자 cb도 함수처럼 사용
//첫 페이지를 렌더할 때 데이터베이스에 있는 내용을 표시하기 위해 사용
exports.get_visitor = (cb)=>{
    let sql = 'SELECT * FROM visitor';//sql문

    cnn.query(sql, (err, rows)=>{ // 위의 sql문 결과를 row에 넘겨줌
        if (err) throw err; 
        console.log("visitor : ", rows);//sql문 실행 결과값 
        //visitor :  [ RowDataPacket { id: 1, name: '홍길동', comment: '내가 왔다' } ]
        cb(rows);
        //function(result){
        // console.log(result);
        // res.render("visitor", {data: result}); 콜백함수로 받은 cb에 인자로 결과값 rows를 넣음
        //}
    });
}

//등록 시 새로 등록된 데이터를 데이터베이스에 추가, 표시하기 위해 사용
exports.register_visitor = (info, cb) => { //controller의 함수 인자가 req.body, 콜백함수였음.
    // info = req.body, cb = 콜백함수
    let sql = `insert into visitor(name, comment) values('${info.name}', '${info.comment}')`//info.name, comment를 문자열로 감싸주기
    // sql문으로 데이터베이스에 추가 등록
    cnn.query(sql, (err, result)=>{
        if (err) throw err; 
        console.log("insert result : ", result);
        cb(result.insertId);//sql문 실행결과값 중 {insertId : id} 값만을 가져옴 
    });
}