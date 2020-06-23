var edad=18;

if (true){
    console.log("Hola");
}else{
    console.log("soy falso");
}

if (edad === 18){
    console.log("Puedes Votar, será tu primera votación ");
}else if (edad> 18) {
    console.log("Puedes votar");
}else{
    console.log ("no puedes votar)");
}

// ! sintaxis operador ternario condition ? true: false;

var numero=1;

var resultado= numero === 1 ? "Soy un uno" : "No sou uno";
