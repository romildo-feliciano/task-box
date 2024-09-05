const db = require('../config/database.js');

const Task = {
  create: (data) => {
    const query = 'insert into tarefas (titulo, descricao, status, usuario_id) VALUES (?, ?, ?, ?)';
    return db.execute(query, [data.titulo, data.descricao, data.status, data.usuario_id]);
  },

  findByUserId: (userId) => {
    const query = 'select * from tarefas WHERE usuario_id = ?';
    return db.execute(query, [userId]);
  },

  findAll: () => {
    const query = 'select * from tarefas';
    return db.execute(query);
  },

  update: (data, taskId) => {
    const query = 'update tarefas set titulo = ?, descricao = ?, status = ? WHERE id = ?';
    return db.execute(query, [data.titulo, data.descricao, data.status, taskId]);
  },

  delete: (taskId) => {
    const query = 'delete from tarefas where id = ?';
    return db.execute(query, [taskId]);
  },
};

module.exports = Task;