// Requerimos la funcionalidad de la liberia http (node que ya viene instalada) y la guardamos en la constante con el mismo nombre
const http = require('http');
// console.log(http); 

// El host es una dirección, que está en nuestro servidor, y en nuestro ordenador y se utiliza para trabajar en local
const hostname = '127.0.0.1'; 
// const hostname = 'localhost;
const port = 3000;
// Es el puerto al que nos conectamos. Hay muchos más puertos, lo más comunes para trabajar de manera local son:
// 3000, 3001, 4000 o 8080.


// El servidor va a recibir peticiones (req o request) y va a enviar respuestas (res o response)
// Con estas líneas configuramos la respuesta que dará mi servidor cuando nos conectamos correctamente al mismo
//createServer (método, dentro hay funciones, métodos,etc...) recibe recibe un callback (que es otra función)
// Se envía la petición para que esté todo bien
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Buenos días, máquina');
});


//Con el método listen mantenemos el serivdor escuchando en el puerto y hostname que nosotros le indiquemos, para que pueda recibir todas las peticiones entrantes y mandar una respuesta
server.listen(port, hostname, () => {
  console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});


// tumbamos el servidor comando control + c
// cada vez que hagamos un cambio en el servidor tendremos que tirar y luego levantarlo de nuevo
// framework https://expressjs.com/es/