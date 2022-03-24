const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = 3000


app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// app.use(express.urlencoded({extended:false}));
// app.use(express.json());
// está incluído ya en express y la constante no haría falta de bodyParser.


app.get('/home/:casa/:metros/:habitaciones', (req, res) => {
    let {casa, metros, habitaciones} = req.params;
    res.send(`Está en la ruta home y los párametros dinámicos son: el nombre de la casa es ${casa}, tiene ${metros}m^2 y el nº de habitaciones es ${habitaciones}`);
  });

  app.get('/inquilinos/:numero/:precio', (req, res) => {
    let {numero, precio} = req.params;
    res.send(`El número de inquilinos es ${numero} y el precio es ${precio}€`);
  });

  app.get("/formulario", (req, res) => {
    res.sendFile(__dirname + "/html/formulario.html");
});

  app.post('/formulario', (req, res) => {
    let {adress, number, province} = req.body;
    // console.log(req.body);
    console.log(adress, number, province);
    res.send('Su pedido se ha completado correctamente');
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})