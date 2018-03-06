// 进程之间的通讯

/* parent.js */

var child = child_process.spawn('node',['child.js']);

// .kill 用来发送信号
child.kill('SIGTERM');


/* child.js*/
// 监听 process 对象的 SIGTERM 事件响应信号
process.on('SIGTERM', function() {

    cleanUp();

    process.exit(0);
});









/* 如果父子进程都是NodeJS进程的，就可以通过 IPC
   双向传递数据 */

/* parent.js */

var child = child_process.spawn('node',['child.js'],{
    // 开启 IPC 通道
    stdio:[0,1,2,'ipc']

});

child.on('message', function(msg){

    console.log(msg);

});

child.send({hello:'hello'});

/* child.js */

process.on('message',function(msg){

    msg.hello = msg.hello.toUpperCase();

    process.send(msg);

});