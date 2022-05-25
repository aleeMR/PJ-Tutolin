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
        type: String
    },
    image: {
        type: String
    },
    country: {
        type: String
    },
    city: {
        type: String
    },
    biography: {
        type: String
    },
    network: {
        mobile: {
            type: String
        },
        webemail: {
            type: String
        },
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
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('Tutor', TutorSchema);