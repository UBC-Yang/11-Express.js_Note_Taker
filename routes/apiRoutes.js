const router = require('express').Router();
const fs = require('fs');
const uuid = require('../helpers/uuid')

// GET request
router.get('/notes', (req, res) => {
  const dbJSON = JSON.parse(fs.readFileSync('db/db.json', 'utf8'));
  res.json(dbJSON);
});

// POST request
router.post('/notes', (req, res) => {
  const dbJSON = JSON.parse(fs.readFileSync('db/db.json', 'utf8'));
  const newNote = {
    title: req.body.title,
    text: req.body.text,
    id: uuid(),
  };

  dbJSON.push(newNote);

  fs.writeFileSync('db/db.json', JSON.stringify(dbJSON), 'utf8');
  res.json(dbJSON);
});

// Bonus - DELETE request
router.delete('/notes/:id', (req, res) => {
  let data = fs.readFileSync('db/db.json', 'utf8');
  const dataJSON = JSON.parse(data);
  const newNotes = dataJSON.filter((note) => {
   return note.id !== req.params.id;
  });
  fs.writeFileSync('db/db.json', JSON.stringify(newNotes), 'utf8');
  res.json('Note deleted');
 });

module.exports = router;
