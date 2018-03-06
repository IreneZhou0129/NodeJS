var fs = require('fs');

function copyLarge(src, dst){

    // fs.createReadStream 创建了源文件的只读数据流
    // fs.createWriteStream ..只写数据流
    fs.createReadStream(src).pipe(fs.createWriteStream(dst));

}

function main(argv){

    copyLarge(argv[0],argv[1]);

}

main(process.argv.slice(s));