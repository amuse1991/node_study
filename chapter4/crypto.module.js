var crypto = require('crypto');

// 문자열 해시화 예제
var shasum = crypto.createHash('sha256');
shasum.update('crypto_hash');
var output = shasum.digest('hex');

console.log('crypto_hash : ',output);

// 문자열 암복호화 예제
var key = '아무도 모르는 비밀키';
var pwd = 'password';

var cipher = crypto.createCipher('aes192', key);
cipher.update(pwd,'utf8','base64');
var cipheredPwd = cipher.final('base64');

var decipher = crypto.createDecipher('aes192',key);
decipher.update(cipheredPwd, 'base64', 'utf8');
var decipheredPwd = decipher.final('utf8');

console.log('원래 문자열:'+pwd);
console.log('암호화된 문자열:'+cipheredPwd);
console.log('복호화된 문자열:'+decipheredPwd);