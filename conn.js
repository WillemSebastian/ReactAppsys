// var client = require('mysql');
const client = require('pg').Pool

// var connection = client.createConnection({
//   host: "localhost" ,
//   user: "root",
//   password: "123456",
//   database: "appsys"
// });

var connection = new client({
    host: 'ec2-23-23-184-76.compute-1.amazonaws.com',
    user: 'aodvfybcvvnjko',
    password: '438b2197dc0a81be3fbcd44f1d6921eaddf681df30e8630c50d24d476253d86d',
    database: 'd79d8tvtl1g3es',
    port: 5432,
    ssl: 'require'
})

connection.connect(function (err){
    if(err) throw err
});

module.exports = connection;