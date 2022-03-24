// Un callback es una función que se pasa como parámetro a otra función

function hacerAlgo(cb, a) {
    console.log("Estoy en la función hacerAlgo");
    cb(a);
    // callback();
}

// function saludar(){
//     console.log("Buenos días, campeón");
// }

let saludar = (a) => console.log(`Hola, buenos días ${a}`); 

//llamo a la función y le meto como parametro la segunda (callback) y 
// le meto el segundo parametro
// Se ejecuta la primera función y después la segunda

hacerAlgo(saludar, "David");

// hacerAlgo(saludar.bind(this, "Carlos"));

