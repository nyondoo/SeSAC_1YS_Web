//mysql을 사용할 때는 model과 연결

const mysql = require('mysql');
const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user', 
    password: 'ndsqlpwd',
    database: 'sesac_test'
})


//controller에서 함수로 넘겨줬기 때문에 인자 cb도 함수처럼 사용
//첫 페이지를 렌더할 때 데이터베이스에 있는 내용을 표시하기 위해 사용
exports.get_visitor = (cb)=>{ // controller에서 콜백함수로 넘겨준 인자
    let sql = 'SELECT * FROM visitor';//sql문

    cnn.query(sql, (err, rows)=>{ // 위의 sql문 결과를 row에 넘겨줌. cnn의 데이터베이스에 접근해서 퀴리를 사용
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
    cnn.query(sql, (err, result)=>{//sql문 실행, 실행 완료되면 콜백함수로 할 일 넘겨줌
        if (err) throw err; 
        console.log("insert result : ", result);
        cb(result.insertId);//sql문 실행결과값 중 {insertId : id} 값만을 가져옴 
    });
}

exports.delete_visitor = (id, cb)=>{//콜백함수를 매개변수로 받아야 함 + req.body에서 받아온 id를 사용하기 위해 id도 매개변수로 받음
    let sql = `delete from visitor where id = ${id}`//req.body의 id와 같은 id를 삭제하는 명령이기 때문에 req.body의 데이터를 사용해야 함
    cnn.query(sql, (err, result)=>{//에러와 sql실행 결과값을 매개변수로 받는다
        if (err) throw err;
        console.log("delete result : ", result);
        cb();
    })
}

exports.get_visitor_by_id_model = (id, cb)=>{
    let sql = `select * from visitor where id = ${id}`
    cnn.query(sql, (err, rows)=>{
        if (err) throw err;
        console.log('select by id: ', rows);
        cb(rows[0]);//결과값이 배열 + primary key인 id로 조회한 결과값은 어차피 하나 뿐
    })
}

exports.update_visitor = (info, cb)=>{
    let sql = `update visitor set name = '${info.name}', comment = '${info.comment}' where id = ${info.id}`
    cnn.query(sql, (err, result)=>{
        if (err) throw err;
        console.log('update result: ', result);
        cb();
    })
}