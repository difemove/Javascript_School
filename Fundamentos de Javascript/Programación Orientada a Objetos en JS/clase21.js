//Prototipos 

//En javascript no existen las clases como tal, al final del día
//terminan siendo prototipos. 

//Definición del prototipo 
//Prototipo es como un constructor
function persona(nombre,apellido, altura) {
    this.nombre=nombre;
    this.apellido=apellido;
    this.altura= altura;

}
//Creación de funciones para prototipos 
persona.prototype.soyAlto = function() {
    if (this.comprobarAltura){
        console.log(`Soy alto`)
    }else{
        console.log(`No soy alto`)    
    }
}
persona.prototype.comprobarAltura= () => this.altura >1.8

persona.prototype.saludar = function (){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)

}
//La palabra reservada new, seguida del prototipo genera un
//nuevo objeto y asigna el prototipo. 
//Javascript returna this implicitamente cuando llamamos a new
//No se debe retornar el objeto 
var sacha = new persona('Sascha', 'Fitness',1.9);
sacha.saludar();
sacha.soyAlto();