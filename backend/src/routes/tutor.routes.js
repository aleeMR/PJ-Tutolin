const express = require('express');
const router = express.Router();

// Importando middlewares
const { verifyToken } = require('../middlewares/verifyToken');
// Importando controladores
const TutorCtrl = require('../controllers/tutor.controller');

// Método para crear el perfil del tutor
router.post('/', verifyToken, TutorCtrl.createTutor);

module.exports = router;