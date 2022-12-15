const {User} = require('../model');
const {Trip} = require('../model');
const qnaList = require('../data.js');

exports.home = (req, res)=>{res.send('home');}

exports.yap = async (req, res)=>{
    let result = await User.findAll();
    let result2 = await Trip.findAll();
    if(result[0].dataValues.mbti == result2[0].dataValues.mbti)
    console.log(result2[0].dataValues.info);
    res.send(`a님의 여행지는${result2[0].dataValues.info}입니다!`);
}

exports.test = (req, res) =>{
    console.log(qnaList);
    res.render('mbtiTest', {data: qnaList});
}

exports.test_type = (req, res) =>{
    console.log(req.body.type);
    res.send(true);
}