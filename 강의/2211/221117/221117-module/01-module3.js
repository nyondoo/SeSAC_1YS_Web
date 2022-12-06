const result = require('./01-module2.js');
//result = function(){return a + b;}
console.log( result );
console.log( result() );
// { add : Function } 이 형태로 넘어왔을 때는
// console.log( result.add() );