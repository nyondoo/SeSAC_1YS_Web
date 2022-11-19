const url = require("url");
// var obj = url.parse('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=sesac');
// console.log( obj );
// console.log( url.format(obj) );
// console.log( obj.protocol );

// var string = new url.URL("https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=sesac");
var string = new url.URL("http://localhost?name=sesac&name=코딩온&age=10");
// console.log(string.searchParams.getAll('name') );
// console.log(string.searchParams.keys() );
// string.searchParams.append('age','20');
console.log(string.searchParams.getAll('age') );
console.log(string.searchParams.has('age'));
