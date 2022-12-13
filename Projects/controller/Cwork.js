const { Works } = require("../model") // = ../model/index.js
// ../model/index.js에서 module.exports = db;로 db를 모듈로 내보냈었음.
// => { Works }는 딕셔너리 db에서 키 "Works"의 값임.
// db.Works = require('./works')(sequelize, Sequelize);
// = ./model/works.js에서 Works함수로 정의해준 Sequelize모델 
// => 테이블 생성 명령 실행 후 결과값 !

//routes에서 불러올 메소드 만들기
// `insert into works(work, time, attend) values('${data.work}', '${data.time}', '${data.attend}')`
exports.register_work = async (req, res) => {
    let data = {
        work : req.body.work,
        time : req.body.time,
        attend : req.body.attend
    }
    let result = await Works.create(data);
        console.log(result);
}







// //model 불러오기
// const Works = require('../model/works')

// //localhost:8080/home
// exports.home = (req, res) => {
//     res.render('home')
// };

// //localhost:8080/register
// exports.register = (req, res) => {
//     res.render('register')
// };
// exports.register_work = (req, res) => {
//     Works.register_work(req.body, function(){
//         res.send(true)
//     });
// }

// exports.admin = (req, res) => {
//     Works.get_work((result)=>{
//         res.render('admin', {data: result})
//     });

// };
// exports.inq_work = (req, res) => {
//     Works.inq_work(req.body.name, (result)=>{
//         console.log(result)
//         res.send({data: result})
//     });
// };