const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const { Schema } = mongoose;

const TutorSchema = new Schema({
    name: { 
        type: String, 
        required: true 
    },
    surname: { 
        type: String, 
        required: true 
    },
    document: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    country: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    biography: {
        type: String,
        required: true
    },
    network: {
        website1: { 
            type: String 
        },
        website2: { 
            type: String 
        },
        linkedin: { 
            type: String 
        },
        facebook: { 
            type: String 
        },
        youtube: { 
            type: String 
        },
        github: { 
            type: String 
        }
    }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('Tutor', TutorSchema);