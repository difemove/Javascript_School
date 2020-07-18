//Javascript solo puede hacer una tarea a la vez
//javascript puede delegar la ejecución de ciertas funciones a otros procesos
//Se llama event loop 
//JS tiene la pila de ejecución (Callstack) según el órden de
//ejecución de nuestro programa. 
//cuando la hace la saca de la pila y la elimina 

//En algún momento un script puede hacer una solicitud
//Estas solicitudes se llaman callback. El navegador 
//se lleva la solicitud y JavaScript la ejecutará cuando 
//reciba la respuesta. 

//JS continúa ejecutando el programa principal 
//y cuando llegue la respuesta se encolará a la 
//cola de tareas. Todo evento asíncrono se pondrá en esta
//cola. 

//Solo se revisan si la pila de ejecución se ha terminado. 
//No hay que bloquear el event Loop

//Cómo funciona ell tiempo en JS 
//JS realizza ciertas operaciones de forma asíncrona

//supongamos el siguiente script 

console.log('a')
//SetTimeOut espera dos parámetros, el primero es una función
//El segundo es un delay esperado para ejecutar esa función
//expresado en ms. 
setTimeout(function() {
    console.log('b1')
},2000)

//! No es lo mismo hacer lo siguiente 
////setTimeout(console.log('b2'),2000)
//*En este caso, la expresión  console.log('b') se ejecuta
//*en la misma línea de código. 
//*setTimeout espera que la función sea declarada dentro
//*del primer parámetro, por lo que en este caso se puede 
//*solucionar creando un arrow function

setTimeout(() => console.log('b3'),2000) //Este es el delay mínimo 

console.log('c')

//! Qué pasaría si hacemos lo siguiente: 
setTimeout(() => console.log('b4'),0)

//! Quién se ejecutará primero? 
//* En este caso ese timeout con 'delay' 0 se ejecutará
//* al final, ya que JS enviará esa función a la cola 
//* de tareas para ejecutarla más adelante. 

//! Es importantísimo no bloquear el event loop 

