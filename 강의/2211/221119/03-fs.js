const fs = require("fs");//fs는 내장모듈
fs.readFile("./test.txt", function(err, data){//err = 에러, data = 파일을 읽은 것에 대한 정보
    if (err) throw err; // 에러가 있으면 throw err = err를 던져서 코드를 멈추겠다. 

    console.log("data : ", data);
    console.log("data2 : ", data.toString());
});

const fs2 = require("fs").promises;
fs2.readFile("./test.txt")
    .then((data) => {
        console.log( "promise - data : ", data);
    })

//파일 만드는 함수
fs2.writeFile("./write.txt", 'sesac') // (만들 파일명, 내용)
    .then(function(){ // 매개변수 적지 않아도 됨. writeFille은 return 하지 않기 때문
        return fs2.readFile('./write.txt')
    })
    .then(function(data){
        console.log(data.toString());
    });
//콜백
fs.writeFile('./write2.txt', 'codingon', function(err){
    if (err) throw err;
    console.log("writeFile sucess!");//에러가 없다면 = 실행이 잘 된다면 throw에서 끝나지 않고 출력
    fs.readFile("./write2.txt", function(err, data){
        if(err) throw err;
        console.log("write2File data : ", data.toString());
    }) 
});