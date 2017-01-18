'use strict'

let mongoose = require('mongoose')

module.exports = mongoose.model('User', new mongoose.Schema({

    name: {
        type: String,
        unique: true
    },
    surname: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [(email) => {
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        }, 'Please use a valid email address'],
    },
    age: {
        type: Number
    },
    description: {
        type: String
    },
    avatar: {
        type: String
    },
    companies: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Companie'
    }],
    companyName: {
        type: String
    }
}, {
    timestamps: true
}))
