function multiplicar1() {
    return 10 * 2;
}

function multiplicar2(a,b) {
    return a * (-b);
}

function multiplicar3(a, b, c) {
    return a * b * c;
}


//MODULAMOS TODAS LAS FUNCIONES PARA EXPORTARLAS
module.exports = {
    multiplicar1,
    multiplicar2,
    multiplicar3
};
