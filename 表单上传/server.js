const http = require('http');

let server = http.createServer((request, response) => {
    let str = '';
    // 分多次接收
    request.on('data', data => {
        str += data;
    })
    // 接收完成
    request.on('end', () => {
        console.log(`数据接收完毕: ${str}`);
        // 跨域
        response.writeHead(200, {"Content-Type": "text/plain", "Access-Control-Allow-Origin":"*"});
        response.end();
    })
})

server.listen(3000, () => {
    console.log('server is running port 3000');
})