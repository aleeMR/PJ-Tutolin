const express = require('express');
const router = express.Router();

// Importando middlewares
const { verifyToken } = require('../middlewares/verifyToken');
// Importando controladores
const ServiceCtrl = require('../controllers/service.controller');

// Método para listar todos los servicios
router.get('/', ServiceCtrl.listServices);

// Método para crear un servicio
router.post('/', verifyToken, ServiceCtrl.createService);

module.exports = router;