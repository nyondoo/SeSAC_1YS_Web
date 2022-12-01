const model = require('../model/prac_test') //데이터 베이스에 저장되어있는 데이터

// 로그인 페이지 렌더 함수
exports.main = (req, res) => {
    res.render('practice_mvc')
}

//유효성 검사 후 응답 보내는 함수
exports.mainGet = (req, res) => {
    console.log(req.query);
    const info = model.send();

    if (req.query.id == info.id && req.query.pw == info.pw) {
        res.send({msg: "<p style='color:blue;'>로그인 성공</p>"})
    } else {
        res.send({msg: "<p style='color:red;'>로그인 실패</p>"})
    }
}


exports.mainGet2 = (req, res) => {
    console.log(req.query);
    let users = model.send2();
    let user_list = users.split('\n') // 리턴값 = 배열
    // user_list = ['nyondoo//ndpwd//뇬두', 'soogie//sgpwd//수기', 'ahfl//dkdsu//모리']
    let login_flag = false;
    let name = "";
    for(let i = 0; i < user_list.length; i++){
        let user = user_list[i].split('//');
        if (req.query.id == user[0] && req.query.pw == user[1]) { // 원칙적으로 서버는 응답을 한번 만 할 수 있음. 따라서 반복문 내에 응답을 넣으면 오류
            login_flag = true;
            name = user[2];
            break; // 로그인 성공시 반복문 중단
        }
    }
    if(login_flag) res.send({msg: `${name}님 환영합니다.`});
    else res.send(`로그인 실패`)
}

exports.mainPost = (req, res) => {
    console.log(req.body);
    const info = model.send();

    if (req.body.id == info.id && req.body.pw == info.pw) {
        res.send({msg: "<p style='color:blue;'>로그인 성공</p>"})
    } else {
        res.send({msg: "<p style='color:red;'>로그인 실패</p>"})
    }
}


exports.mainPost2 = (req, res) => {
    console.log(req.body);
    const info = model.send2();

    if (req.body.id == info.id && req.body.pw == info.pw) {
        res.send({msg: "<p style='color:blue;'>님 환영합니다</p>"})
    } else {
        res.send({msg: "<p style='color:red;'>로그인 실패</p>"})
    }
}
