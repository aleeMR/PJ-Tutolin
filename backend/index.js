
const express = require('express');
const morgan = require('morgan');
const app = express();

// Settings (Configuraciones)
app.set('port', process.env.PORT || 3000);

// Middlewares (Programas intermedios)
// Para ver las peticiones al servidor con un formateado de texto
app.use(morgan('dev'));
// Para verificar si los datos provienen en formato json
app.use(express.json());

// Routes (Rutas)


// Static files (Archivos estáticos)


// Starting the server (Iniciando el servidor)
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
