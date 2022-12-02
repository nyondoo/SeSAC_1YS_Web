//express모듈 불러오기
let express = require('express')

//controller와 연결
let controller = require('../controller/Cwork');

//라우터 정의
const router = express.Router();

//render home page
router.get('/home', controller.home);
// app.get('/home', (req, res)=>{
//     res.render('home'); // render home.ejs
// });

//render register page
router.get('/register', controller.register);
// app.post('/register', (req, res)=>{
//     res.render('register');
// })

//render success page
router.post('/success', controller.success);
// app.post('/success', (req, res)=>{
//     res.render('success',
//     { data : req.body });
// })

module.exports = router;