const express = require('express');
const controller = require("../controller/prac_main"); // 경로를 controller와 연결지어 설정
const router = express.Router();

module.exports = router;

//라우터 정의

//로그인 페이지 렌더
// controller의 main() 함수는 로그인 페이지를 렌더하는 함수
router.get('/', controller.main); 
//본래 mvc를 나누기 이전 js파일 한 곳에서 app.get으로 동작했던 내용을 controller와 연결
//controller 함수에 해당 내용 있음



//get요청으로 받을 시
//router.get('/form', controller.mainGet);

router.get('/form2', controller.mainGet2);


//post요청으로 받을 시
// controller의 mainPost() 함수는 서버 응답
// 클라이언트 요청에 대해 서버에서 유효성을 검사한 후 응답할 것
//router.post('/form', controller.mainPost);

router.post('/form2', controller.mainPost2);
