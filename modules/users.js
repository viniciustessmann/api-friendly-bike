const mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'friendly'
});

connection.connect();

module.exports = {
    async createUser (user) {
      return new Promise((resolve, reject) => {
        var query = connection.query('INSERT INTO users SET ?', user, function (error, results, fields) {
          if (error) reject(err);
  
          var data = JSON.stringify({ 
            success: true, 
            message: "Success"
          });
          resolve(data);
        });
      })
    },
    async existUser (user) {
      return new Promise((resolve, reject) => {
        var sql = "select COUNT(*) from users where id_external = " + user.id_external;
        connection.query(sql, function (err, result) {
          if (err) reject(err);
          if (JSON.stringify(result[0]) == '{"COUNT(*)":0}') {
            resolve(true);
          }
          resolve(false);
        });
      })
    }
}
