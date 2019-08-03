const fs = require('fs');

// ===== 동기적으로 파일 읽기 =====
let text = fs.readFileSync('textfile.txt','utf8');
console.log(text);

// ===== 비동기 파일 읽기 =====
fs.readFile('textfile.txt','utf8',(error,data)=>{
    console.log(data);
})

// ===== 파일 쓰기 =====
let writeText = "hello world!!";
// 비동기
fs.writeFile('TextFileOtherWrite.txt',writeText,'utf8',(err)=>{
    console.log("Write file ASYNC complete");
})
// 동기
fs.writeFileSync('TextFileOtherWrite.txt',writeText,'utf8');
console.log("Write file SYNC complete");
// 에러 처리
fs.writeFile('TextFileOtherWrite.txt',writeText,'utf8',(err)=>{
    if(err){return console.log(err);}
    console.log("Write file ASYNC complete");
})