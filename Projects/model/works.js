//table 생성 sql문
// create table works (
// 	work varchar(100) not null primary key,
//     time int not null,
//     attend int not null
//     );
const Works = (Sequelize, DataTypes) => { // Works라는 함수를 실행하면 Sequelize를 정의한다
    return Sequelize.define(
        "works",
        {
            work : {
                type : DataTypes.STRING(10),
                allowNull : false,
                primaryKey : true
            },
            time : {
                type : DataTypes.INTEGER,
                allowNull : false
            },
            attend : {
                type : DataTypes.INTEGER,
                allowNull : false
            }
        },
        {
            tablename : "works",
            freezeTableName: true,
            timestamps : false
        }
    )
}
//테이블 생성
module.exports = Works;


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