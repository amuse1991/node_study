var http = require("http");

http.createServer((request, response)=>{
    response.writeHead(200,{'Content-Type':'text/html'});
    response.end('<h1>Hello World...!</h1>');
}).listen(1122, ()=>{
    console.log('Server running at http://localhost:1122');
});
