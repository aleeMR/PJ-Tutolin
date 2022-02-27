
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

// Environment Variables (Variables de entorno)
require('dotenv').config();

// Settings (Configuraciones)
// ---------------------------------------------------------------
app.set('port', process.env.PORT || 3000);

// Middlewares (Programas intermedios)
// ---------------------------------------------------------------
// Para ver las peticiones al servidor con un formateado de texto
app.use(morgan('dev'));
// Para verificar si los datos provienen en formato json
app.use(express.json());

// Routes (Rutas)
// ---------------------------------------------------------------
app.use('/api/services', require('./routes/service.routes'));

// Static files (Archivos estáticos)
// ---------------------------------------------------------------
app.use(express.static(path.join(__dirname, 'public')));

// Starting the server (Iniciando el servidor)
// ---------------------------------------------------------------
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
