const express = require('express');
const router = express.Router();

// Importando middlewares
const { verifyToken } = require('../middlewares/verifyToken');
// Importando controladores
const UserCtrl = require('../controllers/user.controller');

// Método para actualizar datos del usuario
router.put('/:id', verifyToken, UserCtrl.updateUser);

module.exports = router;