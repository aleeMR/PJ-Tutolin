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
    console.log(req.body);
});

module.exports = router;