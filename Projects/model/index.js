//모듈 시퀄라이즈 불러오기
const Sequelize = require("sequelize");
//설정한 config 불러오기
const config = require("../config/config.json")["development"];

const db = {};

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
);

//db안에 sequelize, Sequelize 값을 넣어주기
db.sequelize = sequelize;
db.Sequelize = Sequelize;
//db안에 Works값을 넣어준다 : ./model/works.js에서 Works함수로 정의해준 Sequelize모델을 불러온다
db.Works = require('./works')(sequelize, Sequelize);

//db exports
module.exports = db;
