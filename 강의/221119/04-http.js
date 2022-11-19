const http = require('http'); // http 모듈 불러오기 = 서버 만들기
const fs = require('fs').promises; // fs모듈 불러오기 = 파일 읽어오기
const server = http.createServer(function(req,res){ // req=클라이언트의 요청 res=서버의 응답
    fs.readFile('./test.html')
    .then(function(data){
        res.end(data.toString());
    });
}); // server는 서버 여는 객체가 됨

// server.on() // on()은 이벤트를 등록하는 함수
// server.listen() //서버를 실행하고 클라이언트를 기다리는 함수

server.listen(8080, function(){
    console.log('8080번 포트로 실행');
});