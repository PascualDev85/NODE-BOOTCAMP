const express = require('express');
const router = express.Router();
const path = require('path');

//localhost:3000/user
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/../html/formulario.html'));
});

router.post('/', (req, res) => {
    let {name, surname, age, alt, job} = req.body;
    // console.log(req.body);
    console.log(name, surname, age, alt, job);
    res.send('Su pedido se ha completado correctamente');
  });

module.exports = router;