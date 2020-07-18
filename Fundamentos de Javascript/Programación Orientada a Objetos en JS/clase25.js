// todo es un prototipo
class Persona{
    constructor(nombre,apellido, altura) {
        this.nombre=nombre;
        this.apellido=apellido;
        this.altura= altura;

    }
    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    }
    comprobarAltura(){
        return this.altura >1.8
    }
    soyAlto(){
        if (this.comprobarAltura){
            console.log(`Soy alto`)
        }else{
            console.log(`No soy alto`)    
        }
    }

}

//Herencia
class Desarrollador extends Persona{
    constructor(nombre,apellido,altura){
        super(nombre,apellido,altura)
        
    }
    saludar(){
        console.log(`Hola soy ${this.nombre} y soy desarrollador`)
    }

}

var arturo = new Persona('Arturo', 'Fitness',1.9);
var erika = new Desarrollador('Erika', 'Fitness',1.6);
arturo.saludar();
erika.saludar();
