const express = require('express');
const router = express.Router();
const path = require('path');

//localhost:3000/
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/../html/pretty/index.html'));
  });

//localhost:3000/mensaje
 router.get('/mensaje', (req, res) => {
    res.send('Estamos en la ruta index');
 });

  module.exports = router;