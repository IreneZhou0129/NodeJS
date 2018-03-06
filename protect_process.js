// 守护子进程
/* daemon.js */

function spawn(mainModule) {

    var worker = child_process.spawn('node', [mainModule]);


    worker.on('exit', function(code){

        // 进程非正常退出时，重启进程
        if(code !== 0) {

            spawn(mainModule);

        }
    });
}

spawn('worker.js');