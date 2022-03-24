const express = require('express');
const router = express.Router();


// Ruta base: localhost:3000/car por que en el index la hemos declarado de esta
// manera

//localhost:3000/car/modelo/:color
router.get('/modelo/:color', (req, res) => {
    let color = req.params.color;
    res.send(`El color del coche es ${color}`);
});

module.exports = router;