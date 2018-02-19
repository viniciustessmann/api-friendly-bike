var http  = require('http');

var server = http.createServer(function(req, res){
    res.end('Hello World');
});

var port = process.env.PORT || 8000;

server.listen(port, function() {
    console.log("App is running on port " + port);
});