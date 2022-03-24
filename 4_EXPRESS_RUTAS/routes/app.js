const express = require('express');
const router = express.Router();

// Ruta base: localhost:3000, por que en el index la hemos declarado de esta
// manera

// A partir de ahora es router. lo que sea por la constante que hemos guardado
// que es un método de express

router.get('/', (req, res) => {
    res.send('Hello, Deivi!');
  });

  module.exports = router;