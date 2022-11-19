function call(name) {
    console.log("사용자는 " + name);
    return "call";
}
function back() {
    return "back";
}
function hell() {
    return "hell";
}

let a = call('kim');
console.log( "시작은 " + a);
let b = back();
console.log( "두번째는 " + b );
let c = hell();
console.log( "세번째는 " + c);