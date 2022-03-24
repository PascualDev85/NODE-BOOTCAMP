const express = require('express');
const app = express();
// const path = require('path');
const bodyParser = require('body-parser');
const port = 3000;

app.use(express.static(__dirname + '/public'));
// Con está línea le digo a node con el método .static, es un método de express 
// para pasarle la ruta de donde se encuentra los archivos estáticos

// Estas líneas son necesarias para poder capturar iformación de los formularios
// La librería bodyParser ya viene incluída con Express
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send('Hello Deivi!, how are you?');
});


//localhost:3000/mi_html
app.get('/mi_html', (req, res) => {
  // res.sendFile(path.join(__dirname, "/index.html"));
  // res.sendFile('C:/Users/dpmet/Desktop/Bootcamp-Code-on-the-water/NODE/3_EXPRESS/index.html');
  res.sendFile(__dirname + '/index.html');
});

//localhost:3000/sobre_nosotros
app.get('/sobre_nosotros', (req, res) => {
  // res.sendFile(path.join(__dirname, "/sobre_nosotros.html"));
  // res.sendFile('C:/Users/dpmet/Desktop/Bootcamp-Code-on-the-water/NODE/3_EXPRESS/sobre_nosotros.html');
  res.sendFile(__dirname + '/sobre_nosotros.html');
});


// path es una libreria de express que viene al instalarlo
// tenemos que requerirla,por tanto, crar una constante y requerirla.
// join es un método de la libería.

//localhost:3000/ruta-dinamica/:id
app.get('/ruta-dinamica/:id/:nombre/:apellido', (req, res) => {
  
  //console.log(req); Si vamos control + f, buscamos params y nos muestra nombre
  // del parametro dinámico y el valor que hemos dado. req es un objeto.
  // console.log(req.params.id);
  
  // let id = req.params.id; // guardamos esto en una variable
  // let nombre = req.params.nombre;
  // let apellido = req.params.apellido;

  //DESTRUCUTRAR o Destructuring
  let {id, nombre, apellido} = req.params;

  res.send(`Ha entrado en la ruta dinámica y los párametros dinámicos es ${id}
  y el nombre es ${nombre} y el apellido es ${apellido}`);
  // hemos interpolado el párametro dinámico para que nos muestre en la ruta.
});

//después de ruta-dinamica/: todo es dinámico, podemos agregar lo que queramos y
// tenemos que poner un párametro. CON RES.SEND.

app.get('/mi-ruta/:numero/:producto/', (req, res) => {
  let {numero, producto} = req.params;
  res.send(`Ha entrado en mi ruta y los párametros dinámicos, número es ${numero}
  y el producto es ${producto}`);
});


// **************************** MÉTODOS POST ******************************

// localhost:3000/datosFormularios
app.post('/datosFormularios', (req, res) => {
  // let nombre = req.body.name;
  // let apellido = req.body.surname;
  let {adress, number, province} = req.body;
  // console.log(req.body);
  console.log(adress, number, province);
  res.send('Su pedido se ha completado correctamente');
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// console.log(__dirname); // Al hacer este console.log de __dirname nos muestra 
// // toda la ruta hasta la carpeta padre, al poner __dirname es = a la ruta.