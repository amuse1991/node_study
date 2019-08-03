/*
    # 모듈 검색 순서
    1. __dirname 에 해당하는 경로에서 module.js 파일을 찾는다.
    2. __dirname 에 해당하는 경로에서 module 폴더를 찾는다.
       module 폴더를 찾은 경우, 해당 폴더 내부의 index.js를 찾는다.

    # 모듈을 찾았다면 해당 파일의 export 객체를 추출한다.
*/

var myModule = require('./module.js');

console.log(`abs(-273) = ${myModule.abs(-273)}`);
console.log(`circleArea(3) = ${myModule.circleArea(3)}`);
