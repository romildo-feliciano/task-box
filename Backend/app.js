const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes.js');
const taskRoutes = require('./routes/taskRoutes');

app.use(express.json());  // Para aceitar requisições JSON
app.use('/api', userRoutes);
app.use('/api', taskRoutes);

module.exports = app;