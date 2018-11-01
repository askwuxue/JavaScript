const net = require('net');
const crypto = require('crypto');

// 1 创建tcp服务器
let server = net.createServer(socket => {
    // console.log('请求连接到达...');
    // 接受传递的内容
    socket.once('data', data => {
        let str = data.toString();
        let headers = str.split('\r\n');
        headers.shift();
        headers.pop();
        headers.pop();
        // console.log(headers);
        // 将头信息转换为json数据
        let header = {};
        headers.forEach(item => {
            let [key, value] = item.split(': ');
            header[key] = value;
        })
        
        // 2. 检验
        if (header['Connection'] != 'Upgrade' || header['Upgrade'] != 'websocket') {
            console.log('接受到了websocket以外的一个连接');
            // 结束连接
            socket.end();
            // 3 c处理websocket 专有头
        } else {
            if (header['Sec-WebSocket-Version'] != 13) {
                console.log('出现了以外的websocket 版本');
                socket.end();
            } else {
                // 4. 处理 Key
                let hash = crypto.createHash('sha1');

                // guid 258EAFA5-E914-47DA-95CA-C5AB0DC85B11 不是固定的
                hash.update(header['Sec-WebSocket-Key'] + '258EAFA5-E914-47DA-95CA-C5AB0DC85B11');

                // 转base64 编码
                let base64Key = hash.digest('base64');

                socket.write(`HTTP/1.1 101 Switching Protocols\r\nUpgrade: websocket\r\nConnection: Upgrade\r\nSec-WebSocket-Accept: ${base64Key}\r\n\r\n`);

                 console.log('握手完成...');
            }
            // 进行后续的传输
            socket.on('data', data => {
                // data = data.toString();
                console.log(`接收到数据${data}`);
            });

            // 发送数据
            // socket.send
        }
    })

    // 连接断开
    socket.on('end', () => {
        console.log('连接断开');
    })
})

server.listen(3000, () => {
    console.log('net server is runing port 3000');
})