const express = require('express');
const router = express.Router();

const UserCtrl = require('../controllers/user.controller');

// Método para actualizar datos del usuario
router.post('/', UserCtrl.updateUser);

module.exports = router;