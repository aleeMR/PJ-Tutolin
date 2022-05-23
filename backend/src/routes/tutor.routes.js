const express = require('express');
const router = express.Router();

// Importando middlewares
const { uploadImage } = require('../middlewares/uploadImage');
const { verifyToken } = require('../middlewares/verifyToken');
// Importando controladores
const TutorCtrl = require('../controllers/tutor.controller');

// Ruta para crear o actualizar el perfil del tutor
router.post('/:id', verifyToken, TutorCtrl.createTutor);

// Ruta para subir la imagen del tutor
router.put('/:id', verifyToken, uploadImage, TutorCtrl.uploadAvatar);

// Ruta para cargar perfil del tutor
router.get('/:id', TutorCtrl.loadTutor);

// Ruta para listar todos los tutores
router.get('/', TutorCtrl.listTutors);

module.exports = router;