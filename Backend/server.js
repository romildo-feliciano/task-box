const app = require('./app.js');
require('dotenv').config();
const db = require('./config/database.js');

const port = process.env.PORT || 3000;

const testDbConnection = async () => {
  try {
    await db.query('SELECT 1');
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
    return true;
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
    return false;
  }
};

const startServer = async () => {
  const isDbConnected = await testDbConnection();
  
  if (isDbConnected) {
    app.listen(port, () => {
      console.log(`Servidor rodando na porta ${port}`);
    });
  } else {
    console.error('Falha na conexão com o banco. O servidor não foi iniciado.');
  }
};

startServer();