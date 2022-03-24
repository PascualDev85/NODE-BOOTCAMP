const express = require('express');
const router = express.Router();

// Ruta base: localhost:3000/user por que en el index la hemos declarado de esta
// manera

//endpoint o método

//localhost:3000/user/perfil
router.get('/perfil', (req, res) => {
    res.send('Estamos en el perfil del usuario');
});

module.exports = router;