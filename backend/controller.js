
var response = require('./res');
var connection = require('../connection');

exports.siswa = function(req, res) {
    connection.query('SELECT * FROM tbl_siswa   ', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.findSiswa = function(req,res){
    var siswa_id = req.params.siswa_id

    connection.query('SELECT * FROM tbl_siswa where id = ?',
    [siswa_id], function (error,rows,fields){
        if(error){
            console.log(error)
        } else {
            response.ok(rows, res)
        }
    })
}

exports.createSiswa = function(req,res){
    var name = req.body.name
    var nim = req.body.nim

    connection.query('INSERT INTO tbl_siswa(name, nim) values (?,?)',
    [name, nim], function(error, rows, fields){
        if(error){
            console.log(error)
        }
        else{
            response.ok("Berhasil tambah siswa", res)
        }
    })
}

exports.updateSiswa = function(req,res){
    var siswa_id = req.body.siswa_id
    var first_name = req.body.first_name
    var last_name = req.body.last_name

    connection.query('UPDATE tbl_siswa SET first_name = ?, last_name = ? WHERE id = ?',
    [first_name, last_name, siswa_id], function (error, rows, fields){
        if(error){
            console.log(error)
        }
        else{
            response.ok("Berhasil Update Siswa", res)
        }
    })
}

exports.deleteSiswa = function(req, res){
    var id= req.body.id

    connection.query('DELETE FROM tbl_siswa WHERE id= ?',
    [id], function (error, rows,fields){
        if(error){
            console.log(error)
        } else {
            response.ok("Berhasil Delete Users", res)
        }
    })
}

exports.index = function(req, res) {
    response.ok("Hello from the Node JS RESTful side!", res)
};