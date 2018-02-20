const express = require('express');
const app = express();
const users = require('./modules/users');
const mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'friendly'
});

connection.connect();

app.get('/', function (req, res) {
   res.send('Hello World');
})

app.post('/add', function (req, res) {
  var post  = {
    name: 'Tessmann', 
    id_external: 'dsdsjdsjhds76s7ds'
  };
  var query = connection.query('INSERT INTO users SET ?', post, function (error, results, fields) {
    if (error) throw error;
    res.send('Success!');
  });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})