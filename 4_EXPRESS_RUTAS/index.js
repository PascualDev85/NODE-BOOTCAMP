const express = require('express');
const app = express();
const port = 3000;

//Ruta raíz del servidores es loaclhost:3000
const appRouter = require('./routes/app.js');
const userRouter = require('./routes/user.js');
const carRouter = require('./routes/car.js');

//Estas líneas son para poder capturar información de los formularios
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Indicamos a Node que tenemos una carpeta de arhivos estáticos
app.use(express.static(__dirname + 'public'));

//Establecemos las rutas base para cada uno de los arhivos de rutas
// loaclhost:3000
app.use('/', appRouter);

//localhost:3000/user
app.use('/user', userRouter);

//localhost:3000/car
app.use('/car', carRouter);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});