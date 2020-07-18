//Comparaciones en Javascipt 
var x=4, y='4';

//Comparación de contenido
console.log(x==y);
//Comparación de tipo y contenido 
console.log(x===y);

//Comparación de Objetos ( se comportan de forma similar a Java)
var sacha={
    nombre: 'sacha'
}

var otroSacha={
    nombre: 'sacha'
}

//Compara las direcciones de memoria con == o ===
console.log(sacha==otroSacha);
//Cuando se desglosa un nuevo objeto es creado 
var otraPersona ={
   ...sacha
}
console.log(sacha==otraPersona);



