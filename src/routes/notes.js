const express = require('express');
const router = express.Router();

const Note = require('../models/Note');

router.get('/', async (req, res) => {
    const notes = await Note.find()
    res.json(notes);
}); 

module.exports = router;