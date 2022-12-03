const express = require('express');
const controller = require("../controller/Cmembers");
const router = express.Router();

//회원가입 페이지 렌더
router.get('/', controller.first);

//가입 버튼 클릭 시 알림창+로그인 페이지 렌더
router.post('/join', controller.join)

//로그인 페이지 렌터
router.post('/login', controller.login)

module.exports = router;