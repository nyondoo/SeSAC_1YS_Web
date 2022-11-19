/* os 모듈 - 운영체제
 */
const os = require("os");
// console.log( "os.type : ", os.type() );
// console.log( "os.cpus : ", os.cpus() );

console.log( "os.freemem : ", os.freemem() );
console.log( "os.totalmem : ", os.totalmem() );
console.log( "os.homedir : ", os.homedir() );
console.log("--------------------------------------");
/**
 * path 모듈
 */
const path = require("path");
const file = __filename;
// console.log( "path.extname : ", path.extname(file) );
// console.log( "path.parse : ", path.parse(file) );

console.log('path.sep(경로구분자): ', path.sep); // 경로 구분자 출력하기
console.log('path.dirname(__filename)(현재파일의 확장자):', path.extname(file));
console.log('path.dirname(__filename).sep(현재 파일의 경로): ',path.dirname(file));
console.log(typeof(path.dirname(file)));
const pathDir = path.dirname(file);

console.log(pathDir.split('\\'));
