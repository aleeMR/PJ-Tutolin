const jwt = require('jsonwebtoken');
const User = require('../models/user');

// Environment Variables (Variables de entorno)
require('dotenv').config();

// Método para iniciar sesión
const signin = async (req, res) => {
    const {
        email,
        password
    } = req.body;

    // Buscamos el correo electrónico del usuario en la BD
    const user = await User.findOne({ email });

    // Si el usuario no está registrado
    if (!user)
        return res.status(400).json({
            msg: "Correo electrónico no registrado."
        });
    
    // Si el usuario está registrado, se verifica la contraseña
    const match = await new User().comparePassword(password, user.password)
    // Si la contraseña no coincide
    if (!match)
        return res.status(400).json({
            msg: "Contraseña incorrecta."
        });
    // Si la contraseña coincide
    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {
        expiresIn: 86400 // 24 hours
    });

    res.status(201).json({
        user,
        token,
        msg: "Usuario logeado exitosamente."
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

    const token = jwt.sign({id: userSaved._id}, process.env.JWT_SECRET, {
        expiresIn: 86400 // 24 hours
    });

    res.status(201).json({
        userSaved,
        token,
        msg: "Usuario registrado exitosamente."
    });
};

module.exports = {
    signin,
    signup
}