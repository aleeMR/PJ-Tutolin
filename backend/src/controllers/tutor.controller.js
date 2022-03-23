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

module.exports = {
    createTutor
}