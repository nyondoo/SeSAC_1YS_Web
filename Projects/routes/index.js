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
router.post('/register', controller.register_work);

router.get('/admin', controller.admin);
router.post('/admin', controller.inq_work);

module.exports = router;