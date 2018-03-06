(function next(i, len, callback) {

    if(i < len) {

        async(arr[i], function(value){

            arr[i] = value;
            
            next( i + 1, len, callback);

        });
    } else {

        callback();

    }

}(0, arr.length, function(){

    // All array items have processed

}));



//如果数组成员可以并行处理，但后续代码仍然需要所有数组成员处理完毕后才能执行的话，则异步代码会调整成以下形式：

(function (i, len, count, callback) {
    for (; i < len; ++i) {
        (function (i) {
            async(arr[i], function (value) {
                arr[i] = value;
                if (++count === len) {
                    callback();
                }
            });
        }(i));
    }
}(0, arr.length, 0, function () {
    // All array items have processed.
}));