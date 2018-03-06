/* domain 模块可以简化异步代码的异常处理
域： JS运行环境 
通过 process 对象捕获全局异常*/

process.on('uncaughtException',function(err) {

    console.log('Error: %s', err.message);

});


setTimeout(function(fn){

    fn();

});










// HTTP server example
/* 在每处理一个请求时，使用 domain 模块创建一个子域。
   在子域内运行的代码可以随意抛出异常，
   而这些异常可以通过子域对象的 error 事件统一捕获*/
function async(request, callback) {
    //do sth
    asyncA(request, function(data){
        // do sth
        asyncB(request, function(data){
            // do sth
            asyncC(request, function(data){
                // do sth
                callback(data); 
            });
        });
    });
}

http.creatServer(function(request, response) {

    //创建一个子域
    var d = domain.create();

    d.on('error', function(){

        response.writeHead(500);

        response.end();
    });

    // 通过 .run 进入需要在子域中运行的代码的入口点 
    d.run(function(){

        async(request,function(data){

            response.writeHead(200);

            response.end(data);

        });
    });
});