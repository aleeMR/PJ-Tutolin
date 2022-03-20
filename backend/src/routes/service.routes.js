const express = require('express');
const router = express.Router();

const ServiceCtrl = require('../controllers/service.controller');

// Método para listar todos los servicios
router.get('/', ServiceCtrl.listServices);

// Método para crear servicios
router.post('/', async (req, res) => {
    const {
        title,
        description,
        price
    } = req.body;

    const service = new Service({
        title,
        description,
        price
    });
    await service.save();

    res.json({status: 'Servicio creado exitosamente.'});
});

module.exports = router;