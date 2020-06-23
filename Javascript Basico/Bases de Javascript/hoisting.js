//* El Hoisting ocurre en versiones antiguas de JS (Ecmascript 5 o menor)

var miNombre;

miNombre="Diego";

//*En funciones 

hey();

function hey(){
    console.log("hello " + miNombre);
}
