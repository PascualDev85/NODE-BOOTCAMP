const express = require('express');
const app = express();
const port = 3000;

//Ruta raíz del servidores es loaclhost:3000
const indexRouter = require('./routes/index.js');
const userRouter = require('./routes/user.js');
const cityRouter = require('./routes/city.js');
const tecnoRouter = require('./routes/technology.js');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(express.static(__dirname + '/public'));

//Establecemos las rutas base para cada uno de los arhivos de rutas
// loaclhost:3000
app.use('/', indexRouter);

// loaclhost:3000/user
app.use('/user', userRouter);

// loaclhost:3000/city
app.use('/city', cityRouter);

// loaclhost:3000/technology
app.use('/technology', tecnoRouter);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});