var http  = require('http');

var server = http.createServer(function(req, res){

    res.end('Hello World');
});

var port_number = server.listen(process.env.PORT || 3000);

// server.listen(process.env.PORT || 3000, function(){
//     console.log('Server run in http://localhost:3000');
// });
