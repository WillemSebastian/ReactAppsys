
module.exports = function(app) {
    var todoList = require('./controller');

    app.route('/')
        .get(todoList.index);

    app.route('/siswa')
        .get(todoList.siswa);

    app.route('siswa/:user_id')
        .get(todoList.findSiswa)

    app.route('/siswa')
        .post(todoList.createSiswa)

    app.route('/siswa')
        .put(todoList.updateSiswa)

    app.route('/siswa')
        .delete(todoList.deleteSiswa)
};