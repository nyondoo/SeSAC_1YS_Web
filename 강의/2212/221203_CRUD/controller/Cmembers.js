const Member = require("../model/members");

exports.first_page = (req,res) => {
    res.render("first_page");
}

exports.register = (req, res) => {
    res.render('register_page')
}
exports.post_register = (req, res) => {
    //req.body를 보내서 sql문 사용
    //서버응답  = 회원가입 결과 
    Member.post_register(req.body, function(){
        res.send(true);
    });
}

exports.login = (req, res) => {
    res.render('login_page')
}
exports.post_login = (req, res) => {
    //req.body를 보내서 대조확인
    //서버응답 = 로그인 결과
    Member.post_login(req.body.id, req.body.pw, function(result){
        if (result.length > 0) res.send(true); 
        else res.send(false);
    });
}

exports.profile = (req, res) => {
    //user 정보를 가져와서
    //서버응답 = input창에 표시
    Member.get_user(req.body.id, function(result){
        //form_info.submit()으로 받은 data = req.body
        if (result.length > 0) {
            res.render('profile_page', {data : result[0]});
        }
        else {res.redirect('/login')}
    })
}

exports.profile_edit = (req, res) => {
    Member.profile_edit(req.body, function(){
        res.send(true)
    })
}
exports.profile_delete = (req, res) => {
    Member.profile_delete(req.body.id, function(){
        res.send(true)
    })
}