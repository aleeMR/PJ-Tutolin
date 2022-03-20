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

// Método para registrar un usuario
const signup = async (req, res) => {
    const {
        name,
        surname,
        email,
        password
    } = req.body;

    // Buscamos el correo electrónico del usuario en la BD
    const user = await User.findOne({ email });

    // Si el usuario ya está registrado
    if (user)
        return res.status(400).json({
            msg: "Correo electrónico ya registrado."
        });
    // Si el usuario no está registrado
    const newUser = new User({
        name,
        surname,
        email,
        password: await new User().encryptPassword(password)
    });
    // Guardamos el usuario en la BD
    const userSaved = await newUser.save();

    const token = jwt.sign({id: userSaved._id}, process.env.JWT_SECRET);

    res.status(200).json({
        userSaved,
        token,
        msg: "Usuario registrado exitosamente."
    });
};

module.exports = {
    listServices,
    signup
}