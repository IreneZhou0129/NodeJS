//-------- read stream ---------

var fs = require ( "fs" ) ;
var data = '' ;

// create readable stream
var readerStream = fs.createReadStream ( 'input.txt' ) ;

readerStream.setEncoding( 'UTF8' ) ;

// deal with stream event : data, end, and error
readerStream.on ( 'data', function ( chunk ) {
    data += chunk;
} ) ;

readerStream.on ( 'end', function () {
    console.log( data );
} ) ;

readerStream.on ( 'error', function (err) {
    console.log (err.stack);
} ) ;

console.log ( "finish" ) ; 





//-------- write stream ---------

var fs = require ( 'fs' ) ;
var data = ' happy test ' ;

// create a stream
var writeStream = fs.createWriteStream ( 'output.txt' ) ;

writeStream.write ( data, 'UTF8' );

writeStream.end ();

writeStream.on ( 'finish', function () {
    console.log ( "write successfully" ) ;
} ) ;

writeStream.on ( 'error', function (err) {
    console.log ( err.stack ) ;
} ) ;

console.log ( "finish" ) ;




//-------- pipe 管道流 ---------

var fs = require ( "fs" );

// read stream
var readerStream = fs.createReadStream ( 'input.txt' ) ;

// write stream
var writerStream = fs.createWriteStream ( 'output.txt' ) ;


// pipe read and write
readerStream.pipe ( writerStream ) ;

console.log ( "finish" ) ;





//-------- chain 链式流 ---------

var fs = require ( "fs" ) ;

var zlib = require ( 'zlib' ) ;



// compress .txt to .txt.gz
fs.createReadStream ( 'input.txt' )

    .pipe ( zlib.createGzip () )

    .pipe ( fs.createWriteStream ( 'input.txt.gz' ) ) ;




console.log ( "finish" ) ;