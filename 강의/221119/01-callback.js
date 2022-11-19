function func1(callback) {
    // callback
    console.log(callback);
    console.log("func1");
    callback('asdfasdfasdf');
}
function func2() {
    console.log("func2");
}
// var a = 1;
// test(a);
// test(1);
// func1(func2);
func1(function (aa){
    console.log("func2");
})

function test(a){
    console.log(a);
}
test(12);
// func1(function() {
//     console.log("func2")
// })
// func1();
// func2();

// function func2(name) {
//     console.log("func2");
//     console.log("name : ", name);
// }
// func1(function (name) {
//     console.log("func2");
//     console.log("name : ", name);
// })
