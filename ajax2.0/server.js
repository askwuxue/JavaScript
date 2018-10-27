const http = require('http');

let allowOriginHeader = ['http://localhost'];
let httpServer = http.createServer((request, response) => {
    // 根据请求头判断 origin 
    let req_headers = request.headers;
    // console.log(req_headers.origin);
    // console.log(allowOriginHeader.indexOf(req_headers.origin) !== -1);
    if (allowOriginHeader.indexOf(req_headers.origin) !== -1) {
        // 允许跨域的头
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.write('请求成功');
        response.end();
    }
})

httpServer.listen(3000, () => {
    console.log('server is runing .... port 3000');
})