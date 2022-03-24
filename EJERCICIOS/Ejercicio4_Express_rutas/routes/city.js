const express = require('express');
const router = express.Router();
const path = require('path');

//localhost:3000/city
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/../html/forty/index.html'));
});

//localhost:3000/city/mensaje
router.get('/mensaje', (req, res) => {
    res.send('Estamos en la ruta city');
 });

module.exports = router;