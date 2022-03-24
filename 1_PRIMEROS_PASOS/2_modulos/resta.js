function restar() {
    return  10 - 5;
}

function restarTresNumeros(a, b,c){
    return a - b -c;
}

// SI SOLO TENEMOS SOLO UN ARCHIVO
// exports.restar = restar;


// module.exports = {
//     restar: restar,
//     restarTresNumeros: restarTresNumeros
// }; ES LO MISMO QUE LA DE ABAJO ASI QUE SE HACE COMO LA DE ABAJO


//MODULAMOS TODAS LAS FUNCIONES PARA EXPORTARLAS
module.exports = {
    restar,
    restarTresNumeros
};
