const mongoose = require('mongoose');

const ex = new mongoose.Schema({
    field: {
        type: String,
        required: true,
    },
    files: [{type: mongoose.Schema.Types.ObjectId, ref: 'file'}]
}, {
    timestamps: true
})

module.exports = mongoose.model('ex', ex)