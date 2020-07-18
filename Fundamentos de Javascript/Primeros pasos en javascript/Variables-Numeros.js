var edad= 25

edad++;

var peso= 75

peso-=2;
var sandwich =1; 

peso = peso + sandwich;

var jugarAlFutbol=3;

var precioDeVino =200.3; 

//Result is 600.90000000000001
//Hay qué tener en cuenta los floats ya que no es muy preciso el 
//manejo de los floats.
var total= precioDeVino * 3;

//para solucionar hay qué hacer un truco
var total = Match.round(precioDeVino * 100 * 3) / 100;

//mostrar decimales
var totalStr = toal.toFixed(3);

//volver a float
var total2 = parseFloat(totalStr);

var pizza= 8; 
var persona = 2;

var porcionesPersona= pizza/persona;

