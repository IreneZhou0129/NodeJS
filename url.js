// .parse 转化 URL 字符串->对象

http.createServer(function (request,response){

    var tmp = request.url; // "/foo/bar?a=b"

    url.parse(tmp);
}).listen(80);

/* =>
    { protocol: null,
      slashes: null,
      auth: null,
      host: null,
      port: null,
      hostname: null,
      hash: null,
      search: '?a=b',
      query: 'a=b',
      pathname: '/foo/bar',
      path: '/foo/bar?a=b',
      href: '/foo/bar?a=b' }
    */





// 反过来，URL 对象->字符串
url.format({

    protocol: 'http:',

    host: 'www.example.com',

    pathname: '/p/a/t/h',

    search: 'query=string'

});

/* =>
'http://www.example.com/p/a/t/h?query=string'
*/



// .resolve 用于拼接 URL
url.resolve('http://www.example.com/foo/bar', '../baz');
/* =>
http://www.example.com/baz
*/