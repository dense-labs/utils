// 创建 WebSocket 实例
const socket = new WebSocket('ws://localhost:8080');

// 连接打开时触发
socket.addEventListener('open', function (event) {
    console.log('WebSocket 连接已打开');
    // 发送数据
    socket.send('Hello, WebSocket!');
});

// 接收到服务器端发送的消息时触发
socket.addEventListener('message', function (event)  {
        console.log('从服务器端接收到消息：' +    event.data);
});

// 连接关闭时触发
socket.addEventListener('close', function (event) {
    console.log('WebSocket 连接已关闭');
});
