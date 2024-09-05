const express = require('express');
const router = express.Router();
const taskController = require('../controller/taskController.js');

router.post('/tasks', taskController.createTask);
router.get('/tasks', taskController.getAllTasks);
router.get('/tasks/:usuario_id', taskController.getTasksByUser);
router.put('/tasks/update/:id', taskController.updateTask);
router.delete('/tasks/delete/:id', taskController.deleteTask);

module.exports = router;