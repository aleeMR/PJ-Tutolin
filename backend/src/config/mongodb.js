const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('DB is connected on host ' + db.connection.host))
    .catch(er => console.error('DB no connected ' + er));

module.exports = mongoose;