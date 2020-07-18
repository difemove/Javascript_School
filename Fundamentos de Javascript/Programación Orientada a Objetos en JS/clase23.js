//Quién es this?

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

//En las Arrow functions this se refiere a window
//*this no es siempre quien esperamos, lo que sucede 
//con los arrow functions es que dentro de ellas el this
//va a apuntar al this que esté fuera de la función
//*En este caso this globalmente es window

////Persona.prototype.comprobarAltura= () => this.altura >1.8
Persona.prototype.comprobarAltura= function() {
    return this.altura >1.8
}
this.altura >1.8
Persona.prototype.saludar = function (){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)

}
//Cuando hay un error JS detiene la ejecución 

var sacha = new Persona('Sascha', 'Fitness',1.72);
var arturo = new Persona('Arturo', 'Fitness',1.9);
var erika = new Persona('Erika', 'Fitness',1.6);
sacha.saludar();
sacha.soyAlto();
arturo.soyAlto();
erika.soyAlto();