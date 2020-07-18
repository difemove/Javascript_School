//Declaración de variable
var name='Diego', apellido = 'Mora';

var nameUperCase= name.toUpperCase();
var appellidoEnMinusculas= apellido.toLowerCase();

var primeraLetraNombre= name.charAt(0);
var cantidadDeLetrasDelNombre = name.length; 

//Interpolación de texto 

var nombreCompleto = `${name} ${apellido.toUpperCase()}`

var str = name.substr(1,2);

var lastChar = name.charAt(name.length-1);