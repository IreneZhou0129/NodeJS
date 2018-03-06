// 需要指定目标 server 的位置，并发送 HEAD 和 BODY
var options = {

    hostname: 'www.example.com',

    port: 80,

    path: '/upload',

    method: 'POST',

    headers: {

        'Content-Type' : 'application/x-www/form-urlencoded'
    
    }
};

var request = http.request(options, function(response) {});


request.write('Hello World');

request.end();




// 把response对象当作一个只读数据流来访问 body 数据
http.get('http://www.example.com',function(response){

    var body = [];


    console.log(response.statusCode);

    console.log(response.headers);


    response.on('data', function(chunk){

        body.push(chunk);
    });

    response.on('end',function(){

        body = Buffer.concat(body);

        console.log(body.toString());

    });

});