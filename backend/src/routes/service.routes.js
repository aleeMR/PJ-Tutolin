const express = require('express');
const router = express.Router();

const Service = require('../models/service');

// Método para traer todos los servicios
router.get('/', async (req, res) => {
    const services = await Service.find();
    res.json(services);
});

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