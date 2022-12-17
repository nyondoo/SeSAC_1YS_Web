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
  
  //유형별 개수를 변수에 담기
  let Jcount = 0;
  for (let i = 0; i < req.body.type.length; i++) {
    if (req.body.type[i] === 'J') {
      Jcount++;
    }
  }

  let Pcount = 0;
  for (let i = 0; i < req.body.type.length; i++) {
    if (req.body.type[i] === 'P') {
      Pcount++;
    }
  }

  console.log('J : ', Jcount, 'P : ', Pcount)

  // //DB에 값 등록 (User2 table)
  // let data = {
  //     J : Jcount,
  //     P : Pcount
  // }
  // let result = await User.create(data);
  // console.log( 'result : ', result)

  // //유형검사 결과
  // res.render('ei_test')
}