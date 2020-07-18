//Modificación de Prototipos 

//El prototipo es un objeto más de Javascript, entonces si es modificado
//En alguna parte del código, los cambios se verán reflejados
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
Persona.prototype.comprobarAltura= () => this.altura >1.8

Persona.prototype.saludar = function (){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)

}
//Cuando hay un error JS detiene la ejecución 

var sacha = new Persona('Sascha', 'Fitness',1.9);
var arturo = new Persona('Sascha', 'Fitness',1.9);
var erika = new Persona('Sascha', 'Fitness',1.9);
sacha.saludar();
sacha.soyAlto();