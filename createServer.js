// http 作为服务端使用时
var http = require('http');

// 创建一个server，监听http客户端请求并返回响应
http.createServer(function(request, response){
    
    response.writeHead(200,{'Content-Type':'text-plain'});
    
    response.end('Hello World\n');

    //监听8124端口 http://127.0.0.1:8124/ 
}).listen(8124);
// 每当来了一个client request，创建server时传入的
// 回调函数就被调用一次


// HTTP请求 = headers + body


//把request对象当作一个只读数据流来访问 body
http.createServer(function(request,response){

    var body = [];


    console.log(request.method);
    
    console.log(request.headers);


    request.on('data',function(chunk){

        body.push(chunk);

    });

    request.on('end',function(){

        body = Buffer.concat(body);

        console.log(body.toString());

    });
}).listen(80);




// 把response对象当作一个只写数据流来写入 body 数据
http.createServer(function(request,response){

    response.writeHead(200,{'Content-Type':'text/plain'});


    request.on('data',function(chunk){

        response.write(chunk);

    });

    request.on('end',function(){

        response.end();
    });
}).listen(80);