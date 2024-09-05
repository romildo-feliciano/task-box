const express = require('express');
const router = express.Router();
const userController = require('../controller/userController.js');

router.post('/users', userController.createUser);
router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUser);
router.put('/users/update/:id', userController.updateUser);
router.delete('/users/delete/:id', userController.deleteUser);

module.exports = router;