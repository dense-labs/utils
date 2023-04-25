const WebSocket = require('ws');
     
// 创建 WebSocket 服务器实例
const server = new WebSocket.Server({ port: 8080 });
     
// 服务器接收到连接请求时触发
server.on('connection', function (socket) {
    console.log('已连接客户端');
     
    // 监听客户端发送的数据
    socket.on('message', function (message) {
        console.log('接收到客户端发送的消息：' + message);
        // 将消息发送回客户端
        socket.send('已收到您的消息：' + message);
    });
     
    // 监听连接断开事件
    socket.on('close', function () {
        console.log('客户端已断开连接');
    });
});
