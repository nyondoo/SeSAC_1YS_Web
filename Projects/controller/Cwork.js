//model 불러오기
const Works = require('../model/works')

//localhost:8080/home
exports.home = (req, res) => {
    res.render('home')
};

//localhost:8080/register
exports.register = (req, res) => {
    res.render('register')
};

//localhost:8080/success
exports.success = (req, res) => {
    Works.register_work(req.body, (name) =>{
        res.send({msg: `${name}의 등록이 완료되었습니다.`});
    })
};