const mysql = require('mysql');



const connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'imagens'
});

module.exports = function (req, res) {
  connection.getConnection(function (err, connection) {
  connection.query('INSERT INTO `imagem` VALUES (null,"'+ req.body.id +'","2023-01-09","'+ req.body.url +'")', function (error, results, fields) {
  
      });  
  });
  
};
    


