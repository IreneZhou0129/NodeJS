
// 同步遍历
function travel(dir, callback) {
    
    // 以某个目录作为起点
    fs.readdirSync(dir).forEach(function(file){
        
        var pathname = path.join(dir,file);


        // 遇到一个子目录，就接着遍历子目录
        if(fs.statSync(pathname).isDirectory()){

            travel(pathname,callback);
        
        // 遇到一个文件时，就把文件的绝对路径传给回调函数-callback 
        }else{

            callback(pathname);

        }

    });
}