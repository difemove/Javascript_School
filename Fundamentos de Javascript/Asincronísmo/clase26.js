//Las funciones en JS pueden ser pasadas como parámetros


class Persona{
    constructor(nombre,apellido, altura) {
        this.nombre=nombre;
        this.apellido=apellido;
        this.altura= altura;

    }
    //Si no se pasa un parámetro, este se recibe como undefined
    saludar(fn){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
        //viene algo desde la función?
        if (fn) {
            fn(this.nombre,this.apellido)
        }
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
    saludar(fn){
        console.log(`Hola soy ${this.nombre} y soy desarrollador`)
        
        if (fn) {
            fn(this.nombre,this.apellido, true)
        }
    }

}

function responderSaludo(nombre,apellido, esDev) {
    console.log( `Buen día ${nombre} ${apellido}`)
    if (esDev) {
        console.log (`Ah! Eres desarrollador`)
    }
}

var arturo = new Persona('Arturo', 'Fitness',1.9);
var erika = new Desarrollador('Erika', 'Fitness',1.6);
arturo.saludar(responderSaludo);
erika.saludar(responderSaludo);
