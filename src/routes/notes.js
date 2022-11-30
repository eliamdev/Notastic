const express = require('express');
const router = express.Router();

const Note = require('../models/Note');

router.get('/', async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
}); 

router.post('/', async (req, res) => {
    const note = new Note(req.body);
    await note.save();
    res.json([{
        status: 'Note saved'
    }]);
  });

  router.put('/:id', async (req, res) => {
    await Note.findByIdAndUpdate(req.params.id, req.body);
    res.json({
      status: 'Note updated'
    });
  });
  
  router.delete('/:NoteId', async (req, res) => {
    await Note.findByIdAndRemove(req.params.NoteId);
    res.json({
      status: 'Note deleted'
    });
  });
  

module.exports = router;