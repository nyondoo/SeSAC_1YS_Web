// dotenv = 환경변수

const dotenv = require('dotenv');
dotenv.config({path : path.join(__dirname, './common.env')}); // .env를 환경변수로 등록
//폴더 이동, 이름 설정시 path적어줘야 함

console.log(process.env.PORT);
console.log(process.env);

//Postman 백엔드 개발시 테스트용으로 설치