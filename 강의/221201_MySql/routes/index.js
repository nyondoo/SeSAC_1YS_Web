const express = require('express');
const controller = require("../controller/Cvisitor");
const router = express.Router();

//라우터 정의
//첫 페이지 렌더
// controller에 visitor라는 함수로
router.get('/', controller.visitor);

//등록페이지 post 방식으로 렌더
//controller에 register라는 함수로
router.post('/register', controller.register);



module.exports = router;