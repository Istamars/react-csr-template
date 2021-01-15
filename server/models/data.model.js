const db = require('../config');

class DataModel {
  createNewData(name, stock, callback) {
    db.query(
      `insert into books (name, stock) values (($1), ($2)) returning *`,
      [name, stock],
      callback
    );
  }

  deleteData(id, callback) {
    db.query(`delete from books  where id = ($1) returning *`, [id], callback);
  }

  editData(id, stock, callback) {
    db.query(
      `update books set stock = ($1) where id = ($2) returning *`,
      [stock, id],
      callback
    );
  }

  getAllData(callback) {
    db.query(`select * from books`, callback);
  }

  getOneData(id, callback) {
    db.query('select * from books where id = ($1)', [id], callback);
  }
}

module.exports = new DataModel();
