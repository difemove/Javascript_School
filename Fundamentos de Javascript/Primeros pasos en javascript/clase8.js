//Desestructurar Objetos. 

//Dado el objeto 
var dario= {
    nombre: 'Dario',
    apellido: 'Sunisky',
    edad:27 
}


function imprimirNombreEnMayusculas(persona){
   
    // var nombre = persona.nombre;
    var {nombre} = persona;
    console.log(nombre.toUpperCase());
}

function imprimirNombreYEdad(persona){
    //Hola, me llamo sacha y tengo 28 años

    var{nombre, edad }= persona;
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`);
}

imprimirNombreYEdad(dario);

//Objetos se pasan por referencia, 
function cumpleanos (persona){
    return{
        //... desestructura la persona dentro
        ...persona,
        edad: persona.edad+1
    };
    
}

