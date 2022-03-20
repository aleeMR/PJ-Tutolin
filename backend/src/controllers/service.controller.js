const Service = require('../models/service');

// Método para listar todos los servicios
const listServices = async (req, res) => {
    // Obtenemos todos los servicios registrados
    const services = await Service.find();

    res.status(200).json({
        services,
        msg: "Servicios cargados exitosamente."
    });
};

// Método para crear un servicio
const createService = async (req, res) => {
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
    // Guardamos el servicio en la BD
    const serviceSaved = await service.save();

    res.status(200).json({
        serviceSaved,
        msg: "Servicio creado exitosamente."
    });
};

module.exports = {
    listServices,
    createService
}