const mysql = require('mysql');
const connection = require('./connect');

module.exports = function (req, res) {
  let data = new Date;
  
  let ano = data.getYear() + 1900;

  let mes = data.getMonth() + 1;
  if(mes < 10){
    mes = "0" + mes;
  }

  let dia = data.getDate();

  console.log(ano, mes, dia);

  
  connection.getConnection(function (err, connection) {
  connection.query('INSERT INTO `imagem` VALUES (null,"'+ req.body.id +'","'+ ano +'-'+ mes +'-'+ dia +'","'+ req.body.url +'")', function (error, results, fields) {
  
      });  
  });
};
    


