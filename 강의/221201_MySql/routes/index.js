const express = require('express');
const controller = require("../controller/Cvisitor");
const router = express.Router();

//라우터 정의
//첫 페이지 렌더
// controller에 visitor라는 함수로
router.get('/', controller.visitor);
//localhost:8080/visitor

//등록페이지 post 방식으로 렌더
//controller에 register라는 함수로
router.post('/register', controller.register);
//localhost:8080/visitor/register

//controller에서 정의되지 않은 함수를 불러오면 오류
//이미 존재하는/만들어져있는 함수를 써야 함

router.delete('/delete', controller.delete);

router.get('/get_visitor', controller.get_visitor_by_id);
//views에서 지정한 url로 router 정의
//controller에서 동작할 함수명 지정

router.patch('/update', controller.update_visitor);

module.exports = router;