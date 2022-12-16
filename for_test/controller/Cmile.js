const {User} = require('../model');
const {Trip} = require('../model');

exports.home = (req, res)=>{res.render('index');}

exports.idread = async (req,res)=>{
    let result = await User.findAll({ 
      where: {id: req.query.id}, 
      limit: 1
      });
    console.log(result);
    if(result !== null) res.send(true);
    else res.send(false);
  }
  
  exports.signup = async (req,res)=>{
      let data = {
          id: req.body.id,
          pw: req.body.pw,
          name: req.body.name
          //mbti_ok: req.body.mbti_ok 
          //auth: req.body.auth 
          //mbti 검사한 경우는 추후에 추가 
      }
      let result = await User.create(data);
        console.log(result);
        res.send({name : result.name});
  }
  
  exports.signin = async (req, res)=>{
      let result = await User.findOne({ 
        where: {id: req.query.id}
      });
      console.log(result); //배열에 안 담김
      if(result == null) res.send(false);
      else if(req.query.pw !== result.pw) res.send(false);
      else {console.log("true"); res.send({name: result.name});}
  }

exports.test_jp = (req, res) =>{
    res.render('jp_test');
}

exports.type_jp = async (req, res) =>{
    console.log('select type : ', req.body.type);
    //값을 받아서 그대로 배열에 추가
    const arr_jp = [];
    if (req.body.type == 'Y') {
        arr_jp.push(req.body.type);
    }
    else arr_jp.push(req.body.type);
    
    //값Y의 개수, 값P의 개수를 변수에 담기
    let Jcount = arr_jp.filter(element => 'Y' === element).length;
    let Pcount = arr_jp.filter(element => 'N' === element).length;
    //
    let data = {
        J : Jcount,
        P : Pcount
    }
    let result = await User.create(data);
    console.log( 'result : ', result)
    res.render('ei_test')
}