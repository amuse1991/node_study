var url = require('url');
var queryString = require('querystring');

// 두번째 파라미터에 true를 전달하면 query 속성을 객체로 반환한다.
var parsedUrl = url.parse('http://www.hanbit.co.kr/store/books/look.php?p_code=B4250257160',true);
console.log(parsedUrl);
console.log(queryString.parse(parsedUrl.query));

