const db = require('../config/database.js');

const User = {
  create: (data) => {
    const query = 'insert into usuarios (nome, email, senha) VALUES (?, ?, ?)';
    return db.execute(query, [data.nome, data.email, data.senha]);
  },
  
  findById: (id) => {
    const query = 'select * from usuarios WHERE id = ?';
    return db.execute(query, [id]);
  },

  findAll: () => {
    const query = 'select * from usuarios';
    return db.execute(query);
  },

  update: (data, userId) => {
    const query = 'update usuarios SET nome = ?, email = ? where id = ?';
    return db.execute(query, [data.nome, data.email, userId]);
  },

  delete: (userId) => {
    const query = 'delete from usuarios where id = ?';
    return db.execute(query, [userId]);
  },
};

module.exports = User;