function async(fn, callback) {

    // code execution path breaks here

    setTimeout(function () {

        try {

            callback(null, fn());

        } catch (err) {

            callback(err);

        }
    }, 0);
}

async(null, function(err, data){

    if(err) {

        console.log('Error: %s', err.message);

    } else {
        // do sth
    }
}); 