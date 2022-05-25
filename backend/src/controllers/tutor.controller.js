const fs = require('fs-extra');
const cloudinary = require('../config/cloudinary');

// Importando modelos
const Tutor = require('../models/tutor');

// Método para crear o actualizar el perfil del tutor
const createTutor = async (req, res) => {
    const {
        name,
        surname,
        country,
        city,
        biography,
        network
    } = req.body;

    // Buscamos al tutor y actualizamos sus datos si es que existe
    let tutor = await Tutor.findOneAndUpdate({ user_id: req.params.id }, { 
        name,
        surname,
        country,
        city,
        biography,
        network }, { new: true });
    let msgResp = "Perfil de tutor actualizado exitosamente.";

    // Si es que el tutor no existe
    if (!tutor) {
        const newTutor = new Tutor({
            name,
            surname,
            country,
            city,
            biography,
            network,
            user_id: req.params.id
        });
        // Guardamos el perfil del tutor en la BD
        tutor = await newTutor.save();
        msgResp = "Perfil de tutor creado exitosamente.";
    }

    res.status(200).json({
        tutor,
        msg: msgResp
    });
};

// Método para subir la imagen del tutor
const uploadAvatar = async (req, res) => {
    let result = '';
    // Si se subio una imagen
    if (req.file) {
        // La cargamos a la base de datos
        result = await cloudinary.v2.uploader.upload(req.file.path);
        // Y la eliminamos del repositorio local
        await fs.unlink(req.file.path);
    }

    // Buscamos al tutor y actualizamos su avatar si es que existe
    let tutor = await Tutor.findByIdAndUpdate(req.params.id, { 
        image: result.secure_url
    }, { new: true });

    // Si es que el tutor no existe
    if (!tutor)
        return res.status(400).json({
            msg: "Tutor no existe."
        });

    res.status(200).json({
        tutor,
        msg: "Imagen cargada exitosamente."
    });
};

// Método para cargar perfil del tutor activo
const loadTutor = async (req, res) => {
    const tutor = await Tutor.findOne({ user_id: req.params.id });

    // Si es que el tutor no existe
    if (!tutor)
        return res.status(400).json({
            msg: "Tutor no existe."
        });

    res.status(200).json({
        tutor,
        msg: "Perfil de tutor cargado exitosamente."
    });
};

// Método para mostrar perfil de tutor
const viewTutor = async (req, res) => {
    const tutor = await Tutor.findById(req.params.id);

    // Si es que el tutor no existe
    if (!tutor)
        return res.status(400).json({
            msg: "Tutor no existe."
        });

    res.status(200).json({
        tutor,
        msg: "Perfil de tutor cargado exitosamente."
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
    uploadAvatar,
    loadTutor,
    viewTutor,
    listTutors
}