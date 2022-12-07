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
exports.register_work = (req, res) => {
    Works.register_work(req.body, function(){
        res.send(true)
    });
}

exports.admin = (req, res) => {
    Works.get_work((result)=>{
        res.render('admin', {data: result})
    });

};
exports.inq_work = (req, res) => {
    Works.inq_work(req.body.name, (result)=>{
        console.log(result)
        res.send({data: result})
    });
};