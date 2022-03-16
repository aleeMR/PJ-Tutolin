const mongoose = require('mongoose');

const { Schema } = mongoose;

const ServiceSchema = new Schema({
    title: { 
        type: String, 
        required: true 
    },
    description: {
        type: String, 
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('Service', ServiceSchema);