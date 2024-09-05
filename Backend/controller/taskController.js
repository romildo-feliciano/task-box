const Task = require('../model/taskModel');

exports.createTask = async (req, res) => {
  try {
    const { titulo, descricao, status, usuario_id } = req.body;
    await Task.create({ titulo, descricao, status, usuario_id });
    res.status(201).send('Tarefa criada com sucesso');
  } catch (error) {
    res.status(500).send('Erro ao criar tarefa');
  }
};

exports.getTasksByUser = async (req, res) => {
  try {
    const [tasks] = await Task.findByUserId(req.params.usuario_id);
    res.json(tasks);
  } catch (error) {
    res.status(500).send('Erro ao buscar tarefas');
  }
};

exports.getAllTasks = async (req, res) => {
  try {
    const [tasks] = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    res.status(500).send('Erro ao buscar todas as tarefas');
  }
};

exports.updateTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const { titulo, descricao, status } = req.body;

    const result = await Task.update({ titulo, descricao, status }, taskId);

    if (result.affectedRows === 0) {
      return res.status(404).send('Tarefa não encontrada');
    }

    res.send('Tarefa atualizada com sucesso');
  } catch (error) {
    res.status(500).send('Erro ao atualizar a tarefa');
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    
    const result = await Task.delete(taskId);

    if (result.affectedRows === 0) {
      return res.status(404).send('Tarefa não encontrada');
    }

    res.send('Tarefa deletada com sucesso');
  } catch (error) {
    res.status(500).send('Erro ao deletar a tarefa');
  }
};