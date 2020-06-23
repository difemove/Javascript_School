var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];

console.log(frutas);

//*longitud 

console.log(frutas.length);

//* index 2 "Cereza"
console.log(frutas[2]);

//* push: agrega elementos al final
//* retorna la cantidad de elementos
console.log (frutas.push("Piña"));
console.log (frutas);

//* pop: elimina el último elemento
//* retorna el elemento eliminado 
console.log (frutas.pop());
console.log (frutas);

//* unshift: el elemento lo agrega al inicio del array
//* retorna la nueva longitud
console.log(frutas.unshift("Uvas"));
console.log(frutas);

//* shift: se elimina el elemnto del inicio
//* retorna el valor eliminado (si existe)
console.log(frutas.shift("Platano"));
console.log(frutas.shift());

console.log(frutas);

//* The indexOf() method returns the first index at 
//*which a given element can be found in the array, 
//*or -1 if it is not present
console.log(frutas.indexOf("Cereza"));
console.log(frutas);
