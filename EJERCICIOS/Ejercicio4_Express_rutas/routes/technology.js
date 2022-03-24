const express = require('express');
const router = express.Router();

//localhost:3000/technology/:id/:prodcuto/:precio
router.get('/:id/:prodcuto/:precio', (req, res) => {
    let {id, prodcuto, precio} = req.params;
    res.send(`Estamos en technology, el id es ${id}, producto es ${prodcuto} y ${precio}`);
});

module.exports = router;