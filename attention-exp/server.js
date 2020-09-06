var express = require('express');
var app = express();

var start = new Date();

app.use('/public', express.static('public'));

app.get('/index.html', function (req, res) {
    res.sendFile( __dirname + "/" + "index.html" );
    start = new Date();
});


var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("checkout http://localhost:8081");
});
