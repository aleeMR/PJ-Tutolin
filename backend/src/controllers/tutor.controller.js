const Tutor = require('../models/tutor');

// Método para crear el perfil del tutor
const createTutor = async (req, res) => {
    const {
        name,
        surname,
        document,
        country,
        city,
        biography
    } = req.body;

    const tutor = new Tutor({
        name,
        surname,
        document,
        country,
        city,
        biography
    });
    // Guardamos el perfil del tutor en la BD
    const tutorSaved = await tutor.save();

    res.status(200).json({
        tutorSaved,
        msg: "Perfil de tutor creado exitosamente."
    });
};

// Método para listar todos los tutores
const listTutors = async (req, res) => {
    // Obtenemos todos los servicios registrados
    const tutors = await Tutor.find();

    res.status(200).json({
        tutors,
        msg: "Tutores cargados exitosamente."
    });
};

module.exports = {
    createTutor,
    listTutors
}