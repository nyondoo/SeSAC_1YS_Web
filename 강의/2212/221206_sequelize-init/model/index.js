const Sequelize = require("sequelize");//시퀄라이즈 불러오기
const config = require("../config/config.json")["development"]; //config.json에 적어놓은 객체
// js파일 외에는 확장자까지 적어야 함, json파일도 require로 불러옴, development까지 접근
// "development" : {
//     "host" : "localhost",
//     "database" : "sesac_test",
//     "username" : "user",
//     "password" : "ndsqlpwd",
//     "dialect" : "mysql"
// }

//빈 딕셔너리 db를 선언
const db = {};

const sequelize = new Sequelize(
    config.database,//데이터베이스 이름
    config.username,//이름
    config.password,//비밀번호
    config // 데이터베이스 전체 정보
);//Sequelize함수에 인자 4개 넣어 줌

//빈 객체 db에 키와 값을 추가하기
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Visitor = require('./Visitor')(sequelize, Sequelize)//함수 불러오고 실행시키기. 모델 정의가 함수 안에 있기 때문에 함수를 실행시켜야 함
// Visitor.js에서 정의해준 Sequelize모델을 불러옴
db.User = require('./User')(sequelize, Sequelize);
db.Product = require('./Product')(sequelize, Sequelize);
db.Payment = require('./Payment')(sequelize, Sequelize);

//foreign key 연결
db.User.hasMany(db.Payment, {
    foreignKey : 'user_id',//foreign key를 거는 컬럼. Payment table의 user_id컬럼
    sourceKey : 'user_id',//참조하는 컬럼. User table의 user_id컬럼
    onDelete : 'cascade'
});
db.Payment.belongsTo(db.User, { //db.User를 참조하고 있다~
    foreignKey : 'user_id',
    sourceKey : 'user_id',
    onDelete : 'cascade'
}); //=> 하나 걸 때 두개의 함수 사용

db.Product.hasMany(db.Payment, {
    foreignKey : 'product_id',//foreign key를 거는 컬럼. Payment table의 payment_id컬럼
    sourceKey : 'product_id',//참조하는 컬럼. User table의 payment_id컬럼
    onDelete : 'cascade'
});
db.Payment.belongsTo(db.Payment, {  
    foreignKey : 'product_id',
    sourceKey : 'product_id',
    onDelete : 'cascade'
});

//다음과 같이 됨
// db = {
//     "Sequelize" : Sequelize,
//     "sequelize" : sequelize
//     "Visitor" : "Visitor.js에서 return 받은 값"
// }

module.exports = db;

