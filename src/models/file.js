const mongoose = require('mongoose')

const file = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },
}, {
    timestamps: true,
    toObject: {}
})