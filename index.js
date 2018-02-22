const express = require('express');
const app = express();
let users = require('./modules/users');
const mysql = require('mysql');
var bodyParser = require('body-parser');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'friendly'
});
connection.connect();

app.use(bodyParser.json());

app.get('/', function (req, res) {
   res.send('Hello World');
})

app.post('/add', async function (req, res) {

  res.setHeader('Content-Type', 'application/json');

  var user  = {
    name: 'Tessmann',
    id_external: '1234567990'
  };

  let exist = await users.existUser(user);
  if (!exist) {
    await users.createUser(user);
  }

  res.send(JSON.stringify({ success: false, message: 'usuário já cadastrado' }));
  res.end();
  
});

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})