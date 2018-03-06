function main(argv) {

    var config = JSON.parse(fs.readFileSync(argv[0],'utf-8')),
        root = config.root || '.',
        port = config.port || 80;

        server;

    server = http.createServer(function(request, response){
        
        var urlInfo = parseURL(root, request.url);

        validateFiles(urlInfo.pathnames, function(err,pathnames){
            if(err) {
                response.writeHead(404);
                response.end(err.message);
            }else{
                response.writeHead(200,{
                    'Content-Type':urlInfo.name
                });
                outputFiles(pathnames, response);
            }
        });
    }).listen(port);


    process.on('SIGTERM',funciton() {
        server.close(function() {
            process.exit(0);
        });
    });
}

function outputFiles(pathnames,writer){
    (function next(i,len){
        if(i<len){
            var reader = fs.createReaderStream(pathnames[i]);

            reader.pipe(writer,{end:false});
            reader.on('end',function(){
                next(i+1, len);
            });
        } else{
            writer.end();
        }
    }(0,pathnames.length));
}

function validateFiles(pathnames,callback) {
    (function next(i, len) {
        if (i < len){
            fs.stat(pathnames[i], function(err,stats) {
                if(err){
                    callback(err);
                }else if(!stats.isFile()){
                    callback(new Error());
                }else{
                    next(i+1, len);
                }
            });
        }else{
            callback(null,pathnames);
        }
    }(0,pathnames.length));
}