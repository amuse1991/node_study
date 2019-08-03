console.log('output: %d', 273);
console.log('%d + %d = %d', 1,1,2);
console.log('%d + %d = %d', 1,1,2,9999);
console.log('%d + %d = %d', 1,1);

// 시간 측정 시작
console.time('timerName');

var output = 1;
for (var i=1 ; i<=10; i++){
    output *= i;
}
console.log("result:",output);

console.timeEnd('timerName');