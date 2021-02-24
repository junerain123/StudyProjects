'use strict';
// 引入http模块
var http = require('http');
var port = process.env.PORT || 1337;


// req url的信息
// res 给浏览器响应的信息
http.createServer(function (req, res) {
    console.log(req.url);
    // 设置响应头
    res.writeHead(200, { 'Content-Type': "text/html;charset='utf-8'" });
    // 页面上面输出一句话，并结束响应
    res.write('<h2>这是第一句话</h2>');
    res.end('Hello World\n');    // 如果不end，页面一直加载
}).listen(port);    // 端口

