// new Promise( function(resolve, reject) {
    // resolve : 함수형태. 성공했을 때 실행할 친구
    // reject : 함수형태. 실패 또는 에러를 처리할 때 사용되는 친구
// });

function func1() {
    return new Promise(function(resolve, reject) {
        resolve("성공");
    });
}

var a = func1();
console.log(a);
func1().then(function(result) {
    console.log("result : ", result);
});
//then 앞이 promsie일 때 앞 프로미스에서 성공적인 = resolve 된 함수를 받아옴

function func2() {
    return new Promise(function(resolve, reject) {
        setTimeout(function(){resolve("성공");}, 1000);
    });
}
func2().then(function(result) {
    console.log("result2 : ", result);
    return 'a';
})
.then(function(abc){
    console.log("abc : ", abc);
}); // 같은 라인에서 실행됨 = chaining
var b = func2();
console.log(b);


function func3(flag) {
    return new Promise(function(resolve, reject) {
        if (flag) {
            resolve("flag는 true");
        }
        else {
            reject("flag는 false");
        }
    });
}
// func3(true).then(
//     function(msg) {
//         console.log("msg1 : ", msg);
//     },
//     function(msg){
//         console.log("msg2 : ", msg);
//     }
// );

func3(true).then(
    function(msg) {
        console.log("msg1 : ", msg);
    }
).catch (
    function(msg){
        console.log("msg2 : ", msg);
    }
); //then에서 먼저 처리하면 catch로 가지 않음. then에서 처리하지 않으면 catch에서 처리할 수 있다.

