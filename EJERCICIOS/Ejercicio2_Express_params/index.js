const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.send('Hello Deivi!, how are you?');
  });

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/productos/:id/:nombre', (req, res) => {
    let {id, nombre} = req.params;
    res.send(`Esta es la segunda ruta y estos son los parámetros dinámicos
    ${id} y ${nombre}`);
});

app.get('/lista', (req, res) => {
    res.sendFile(__dirname + '/lista.html');
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});