const mysql = require('mysql');
const connection = require('./connect');

module.exports = function (req, res) {
  connection.getConnection(function (err, connection) {
  connection.query('(SELECT * FROM imagem)', function (error, results, fields) {
        res.send(JSON.stringify(results));
        console.log(results);
      });  
  });
  
};
    