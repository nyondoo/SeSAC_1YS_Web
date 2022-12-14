function func1() {
    return new Promise(function(resolve, reject) {
        resolve('성공');
    });
}
//프로미스 함수 선언

let a = func1();
console.log(a); // Promise{ '성공' } 출력

func1().then(function(result) {
    console.log('result : ', result);
})
//Promise 다음에 .then 메소드 사용가능
//프로미스에서 resolve 된 결과값을 파라미터로 가져옴 (result)
//출력 결과//
// Promise { '성공' }
// result :  성공
// => func1() 실행 후 콜백함수 실행

//파라미터를 콜백함수로 받는 프로미스 선언
function func2() {
    return new Promise(function(resolve, reject){
        setTimeout(function(){resolve('성공');}, 1000);
    });
}

func2().then(function(result){
    console.log('result2: ', result)
    return 'a';
})
.then(function(abc){ // 위에서의 리턴값 a를 매개변수로 받음
    console.log('abc: ', abc);
});

let b = func2();
console.log(b);

function func3(flag) {
    return new Promise(function(resolve, reject) {
        if (flag) {
            resolve('flag는 true');
        }
        else {
            reject('flag는 false')
        }
    });
}

func3(true).then(
    function(msg) {
        console.log("msg1: " ,msg);
    },
    function(msg) {
        console.log("msg2: ", msg);
    }
);
