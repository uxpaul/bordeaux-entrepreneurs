'use strict'

let mongoose = require('mongoose')

module.exports = mongoose.model('Companie', new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    secteur: String,
    logo: String,
    social: [mongoose.Schema.Types.Mixed],
    tag: [],
    siteweb: String,
    introduction: String,
    presentation: {
        type: String,
        required: true
    },
    gerants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
}, {
    timestamps: true

}))
