function auto(marca, modelo, anio) {
    this.marca=marca;
    this.modelo=modelo;
    this.anio=anio;
    
}


var miAuto= new auto("Toyota","Corolla",2015 );
console.log(miAuto);

/*Reto */

function generadorAutos(marca,modelo,annio,cantidad){
    var autosGenerados= [];
    for (var i=0; i<cantidad; i++){
        autosGenerados.push(new auto(marca,modelo,annio));
    }
    return autosGenerados;
}

console.log (generadorAutos("Toyota","Corolla",2020,7));