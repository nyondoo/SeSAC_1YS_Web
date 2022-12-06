const member = require('../model/members');

exports.first = (req, res) => {
    res.render('join')
}

exports.join = (req, res) => {
    //회원가입 정보 데이터베이스에 등록
    //서버 응답 = 로그인페이지 렌더
    member.join_model(req.body, function(){
        res.send(true);
    });
}

exports.login = (req, res) => {
    //로그인 정보 데이터베이스에서 조회
    //서버응답 = 유효성 검사 후 결과 내보내기
    member.login_model(req.body.id, req.body.pw, function(rows){
        if (rows.length > 1 ) {
            res.send({msg: '<p style="color:blue">로그인 성공</p>'});
        }
        else {
            res.send({msg:'<p style="color:red">로그인 실패</p>'});
        };
    })
}

