//모델 불러오기
const Visitor = require('../model/Visitor');  // = model폴더의 Visitor.js

//첫 페이지 렌더하는 함수 visitor()
exports.visitor = (req, res)=>{
    Visitor.get_visitor(function(result){ // sql데이터 사용을 위해 연결해둔 모델의 get_visitor()함수의 인자로 콜백함수를 줌
        console.log(result);
        res.render("visitor", {data: result}); //매개변수 result = model get_visitor에서 넘겨준 인자 rows를 데이터로 넘겨줌
    }); // visitor.ejs 렌더, data로 result를 넘겨줌 => ejs에서 사용
}
//1. model에서 sql문 실행, 결과값=rows / cd(rows)명령에서 cb = controller에서 인자로 넘겨준 콜백함수.
//model의 sql 결과값을 콜백함수의 인자로 받아와서 실행
// functtion(rows){
//     console.log(rows);
//     res.render("visitor", {data : rows})
// }
//를 실행하게 됨.
// => 서버는 응답으로 visitor.ejs를 렌더하고 sql문 결과를 data로 넘겨줌.



//등록 페이지 렌더하는 함수 register()
//이름, 방명록을 입력한 클라이언트의 request에 대해 응답
//응답으로 페이지에 표시할 데이터를 넘겨주는 작업 필요
exports.register = (req, res)=> {
    //insert req.body
    //model에서 data사용할 수 있도록 req.body를 인자로 넘겨주기
    Visitor.register_visitor(req.body ,function(id){ //이 result는 query를 날려서 넘어온 결과값 = sql문 실행결과값 중 id만을 인자로 받아왔음.
        console.log(id); 
        res.send(String(id)); // int형이기 때문에 문자열로 변환
    })
}

exports.delete = (req, res)=>{
    //mysql에서 req.body.id에 해당하는 데이터를 delete해야함 => model에서 수행
    //서버응답 res.send
    Visitor.delete_visitor(req.body.id, function(){
        res.send(true);
    })
}


//router에서 지정한 함수 작성
exports.get_visitor_by_id = (req, res)=>{
    //req.query.id에 해당하는 데이터를 조회 => model에서 수행
    //서버 응답 = 조회한 데이터
    Visitor.get_visitor_by_id_model(req.query.id, function(rows){
        res.send(rows);
    });
}

exports.update_visitor = (req,res)=>{
    //req.body로 받아온 데이터를 MySQL에 update할 수 있도록 하기
    //서버 응답
    Visitor.update_visitor(req.body, function(){
        res.send(true);
    });
}