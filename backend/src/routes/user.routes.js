const express = require('express');
const router = express.Router();

// Importando controladores
const UserCtrl = require('../controllers/user.controller');

// Método para actualizar datos del usuario
router.put('/:id', UserCtrl.updateUser);

module.exports = router;