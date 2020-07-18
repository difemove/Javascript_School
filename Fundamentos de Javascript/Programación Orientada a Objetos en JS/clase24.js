//Javascript no soporta las clases y no existe un sistema de
//herencias, existe la herencia prototipal.

//prorotype es un objeto que es un atributo de todos los objetos

//Contiene los meétodos y el constructor 

//Esto es antiguo 
function heredaDe(prototipoHijo, prototipoPadre) {
    var fn= function (){}
    fn.prototype=prototipoPadre.prototype
    prototipoHijo.prototype= new fn
    prototipoHijo.prototype.constructor=prototipoHijo
}


function Persona(nombre,apellido, altura) {
    this.nombre=nombre;
    this.apellido=apellido;
    this.altura= altura;

}
//Creación de funciones para prototipos 
Persona.prototype.soyAlto = function() {
    if (this.comprobarAltura){
        console.log(`Soy alto`)
    }else{
        console.log(`No soy alto`)    
    }
}


Persona.prototype.comprobarAltura= function() {
    return this.altura >1.8
}
this.altura >1.8
Persona.prototype.saludar = function (){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)

}

//

// var sacha = new Persona('Sascha', 'Fitness',1.72);
// var arturo = new Persona('Arturo', 'Fitness',1.9);
// var erika = new Persona('Erika', 'Fitness',1.6);
// sacha.saludar();
// sacha.soyAlto();
// arturo.soyAlto();
// erika.soyAlto();

function Desarrollador(nombre,apellido){
    this.nombre = nombre
    this.apellido=apellido
}
heredaDe(Desarrollador,Persona)

Desarrollador.prototype.saludar= function(){
    console.log(`Hola soy ${this.nombre} y soy desarrollador`)
}



var arturo = new Persona('Arturo', 'Fitness',1.9);
var erika = new Desarrollador('Erika', 'Fitness',1.6);
arturo.saludar();
erika.saludar();