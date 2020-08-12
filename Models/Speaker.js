const mongoose = require('mongoose');

const SpeakerSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    biography: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Speaker', SpeakerSchema);