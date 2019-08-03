process.argv.forEach((item,idx)=>{
    console.log(`${idx} : ${typeof(item)} : ${item}`);

    // 실행 매개변수에 --exit time 이 있을 때,
    // time 만큼 대기한 후 프로그램을 종료
    if(item == '--exit'){
        var exitTime = Number(process.argv[idx+1]);
        setTimeout(()=>{
            process.exit(0);
        },exitTime);
    }
});

console.log(`- process.env: ${process.env}`);
console.log(`- process.version: ${process.version}`);
console.log(`- process.versions: ${process.versions}`);
console.log(`- process.arch: ${process.arch}`);
console.log(`- process.platform: ${process.platform}`);
console.log(`- process.connected: ${process.connected}`);
console.log(`- process.execArgv: ${process.execArgv}`);
console.log(`- process.exitCode: ${process.exitCode}`);
console.log(`- process.mainModule: ${process.mainModule}`);
console.log(`- process.relase: ${process.release}`);
console.log(`- process.memoryUsage: ${process.memoryUsage()}`);
console.log(`- process.uptime(): ${process.uptime()}`);
console.log(`- process.uptime(): ${process.uptime()}`);
console.log(`- process.uptime(): ${process.uptime()}`);

