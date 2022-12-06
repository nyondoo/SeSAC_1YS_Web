// const Visitor = require("../model/Visitor");
// 객체구조분해 할당으로 sql문 실행 결과값 'Visitor' 가져오기
const { Visitor } = require("../model");//model폴더 안의 index.js
// model의 index.js에서 module.exports = db;로
// db = {
//     "Sequelize" : Sequelize,
//     "sequelize" : sequelize
//     "Visitor" : "Visitor.js에서 return 받은 값"
// }
// 를 쏴줌.

// const { Visitor } = {
//         "Sequelize" : Sequelize,
//         "sequelize" : sequelize
//         "Visitor" : "Visitor.js에서 return 받은 값"
//     }
// => 이 중 "Visitor" : "Visitor.js에서 return 받은 값"을 가져오는 것
// 따라서 const { Visitor } = require("../model") = "Visitor.js에서 return 받은 값"

exports.visitor = async (req, res) => {
    let result = await Visitor.findAll(); // Visitor.findAll();가 프로미스 객체이기 때문에 await 사용 가능
    //Visitor.findAll()
    //select * from visitor;
    // .then((result)=>{
    //     console.log(result);
    //     console.log(result[0].id) 
    res.render("visitor", {data: result});
    // })

        //자동으로 dataValues에 접근 가능하기 때문에 dataValues.id로 접근하지 않아도 됨.
        // 배열 안에 다음 결과들이 주르륵 나열됨.
        // visitor {
        //     dataValues: { id: 4, name: '수정', comment: '수정' },
        //     _previousDataValues: { id: 4, name: '수정', comment: '수정' },
        //     uniqno: 1,
        //     _changed: Set(0) {},
        //     _options: {
        //       isNewRecord: false,
        //       _schema: null,
        //       _schemaDelimiter: '',
        //       raw: true,
        //       attributes: [Array]
        //     },
        //     isNewRecord: false
        //   }

    // Visitor.get_visitor(function(result){
    //     console.log(result);
    //     res.render("visitor", {data: result});
    // })
}

exports.register = async (req, res) => {
    let data = { //키가 컬럼이름과 같아야 함
        name : req.body.name,
        comment : req.body.comment
    } 
    let result = await Visitor.create(data)//객체 인자가 하나 들어가야 함
        console.log(result);
        res.send(String(result.id));

//  result =    {
//   dataValues: { id: 12, name: '안녕', comment: '안녕' },
//   _previousDataValues: { name: '안녕', comment: '안녕', id: 12 },
//   uniqno: 1,
//   _changed: Set(0) {},
//   _options: {
//     isNewRecord: true,
//     _schema: null,
//     _schemaDelimiter: '',
//     attributes: undefined,
//     include: undefined,
//     raw: undefined,
//     silent: undefined
//   }

    // `insert into visitor(name, comment) values('${info.name}', '${info.comment}')`;
    // Visitor.register_visitor( req.body, function(id){
    //     console.log(id);
    //     res.send(String(id));
    // })
}

exports.delete = async (req, res) => {
    let result = await Visitor.destroy({
        where : { id : req.body.id }
    })
        console.log(result);
        res.send(true);
    // `delete from visitor where id = ${id}`
    // mysql req.body.id에 해당하는 데이터를 delete
    // 서버 응답 res.send 
    // Visitor.delete_visitor(req.body.id, function(){
    //     res.send(true);
    // })
}

exports.get_visitor_by_id = async (req, res) => {
    let result = await Visitor.findAll({
        attributes : ["id", "name", "comment"], // select id, name, comment from visitor order by id ASC(DESC) limit 1
        where : { id: req.query.id }, // where id = req.query.id
        order : [['id', 'DESC']],//id를 기준으로 내림차순 정렬하겠다
        limit : 1 // arrtibutes, order, limit은 select문(findAll, findOne)에만 사용 가능
    })
    res.send(result);
    
    // Visitor.findOne({
    //     where : { id: req.query.id }
    // })
    // .then((result)=>[
    //     res.send(result);
    // ])


    // req.query.id 에 해당하는 데이터를 조회
    // 서버 응답 > 조회한 데이터

    // select * from visitor where id=req.query.id;
    // Visitor.get_visitor_by_id_model(req.query.id, function(rows){
    //     res.send(rows);
    // });
}

exports.update_visitor = async (req, res) => {
    let data = {
        name: req.body.name,
        comment : req.body.comment,
    }
    let result = await Visitor.update(data, {
        where : { id : req.body.id }
    }) // 인자1 = 업데이트할 내용, 인자2 = 옵션
        console.log(result);
        res.send(true);

    // `update visitor set name = '${req.body.name}', comment = '${req.body.comment}' where id = ${req.body.id}`
    // req.body 데이터를 mysql 에 update 할 수 있도록
    // 서버의 응답 
    // Visitor.update_visitor(req.body, function(){
    //     res.send(true);
    // });
}