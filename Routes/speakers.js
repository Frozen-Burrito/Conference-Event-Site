const express = require('express');

const {
    speaker_list,

    render_add_speaker,
    handle_add_speaker,
} = require('../Controllers/speakerController');

const router = express.Router();

// Speaker list - GET /speakers/all
router.get('/all', speaker_list);

// Render new speaker form - GET /speakers/add
router.get('/add', render_add_speaker);

// Add new speaker - POST /speakers/add
router.post('/add', handle_add_speaker);

module.exports = router;