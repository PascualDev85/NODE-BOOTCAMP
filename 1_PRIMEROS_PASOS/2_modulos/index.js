const sumar = require("./suma.js");
const restar = require("./resta.js");
const multiplicar = require("./multi.js");


console.log("Buenos días");

// EJECUTO FUNCIONES DEL SUMA MULTI CONST SUMAR
console.log(sumar.suma());


// EJECUTO FUNCIONES DEL ARHIVO RESTA CONST RESTAR
console.log(" el resultado de la resta es = ", restar.restar());
console.log(restar.restarTresNumeros(20,5,9));


// EJECUTO FUNCIONES DEL ARHIVO MULTI CONST MULTIPLICAR
console.log(multiplicar.multiplicar1());
console.log(multiplicar.multiplicar2(10,5));
console.log(multiplicar.multiplicar3(10,5,4));


