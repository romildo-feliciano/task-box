const User = require('../model/userModel.js');

exports.createUser = async (req, res) => {
  try {
    const { nome, email, senha } = req.body;
    await User.create({ nome, email, senha });
    res.status(201).send('Usuário criado com sucesso');
  } catch (error) {
    res.status(500).send('Erro ao criar usuário');
  }
};

exports.getUser = async (req, res) => {
  try {
    const [user] = await User.findById(req.params.id);
    res.json(user[0]);
  } catch (error) {
    res.status(500).send('Erro ao buscar usuário');
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const [user] = await User.findAll();
    res.json(user);
  } catch (error) {
    res.status(500).send('Erro ao buscar todos os usuários');
  }
};

exports.updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const { nome, email } = req.body;

    const result = await User.update({ nome, email }, userId);

    if (result.affectedRows === 0) {
      return res.status(404).send('Usuário não encontrado');
    }

    res.send('Usuário atualizado com sucesso');
  } catch (error) {
    res.status(500).send('Erro ao atualizar o usuário');
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const result = await User.delete(userId);

    if (result.affectedRows === 0) {
      return res.status(404).send('Usuário não encontrado');
    }

    res.send('Usuário deletado com sucesso');
  } catch (error) {
    res.status(500).send('Erro ao deletar o usuário');
  }
};