const express = require('express');
const controller = require("../controller/Cmain");
const router = express.Router();

//라우터 정의
router.get('/', controller.main);
router.get('/test', controller.test);
router.post('/postForm', controller.post);

//상위 index.js에서 모듈로 불러온 router를 정의 = 현재 파일에서 정의한 router가 상의 index파일의 변수 router에 담긴다.
module.exports = router;