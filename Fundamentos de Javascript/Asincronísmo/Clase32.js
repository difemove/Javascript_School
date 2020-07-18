//! Promises 

//* Promises son valores que (aún) no conocemos
//* Se incorporan en JS para evitar el callback hell
//* se puede usar un polyfill para evitar problemas de 
//* incompatibilidad. 

// Cuando una acción asíncrona suceda y se resuelva 
// el valor estará allí. 

//* Las promesas tienen tres estados posibles:
//! Pending: Estado inicial. 
//! Fulfilled: estado de resolución. Si es resuelta, se llama
//!     a .then (val=>...)
//! Rejected: estado de error. Si existe un error, se llama
//!     a .catch (err=>...) 


//* Una promesa se crea con el siguiente template: 
//*     new Promise (function (resolve,reject){
//*        ...
//*         }).then(value=>{
//*             ...
//*         }).catch(err=>{
//*             ...
//*         })
//*     })

//!Dentro del .then puede ser enviada una nueva promesa


const API_URL ='https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'




const opts = { crossDomain: true} 

const onPeopleResponse = function (persona){
   
    console.log(`Hola, yo soy ${persona.name}`)
}


/*
function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $.get(url, opts, function (persona){
   
        console.log(`Hola, yo soy ${persona.name}`)
    })
    if (callback){
        callback()
    }
}
*/

function onError(id){
    console.log(`Sucedió un error con ${id}`)
}


function obtenerPersonaje(id) {
   
    return new Promise ((resolve, reject)=>{
        const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
        $
        
        .get(url, opts, function (data){
   
            resolve(data)
        })

        .fail(()=>{
            reject(id)
        })

        
    } )
}
function obtenerPersonajeSerie (present, final){
    next=present + 1;

    obtenerPersonaje(present)
        .then((personaje)=>{
            console.log (`El personaje tiene nombre ${personaje.name}`)
        })
        .catch(onError)

    if (present<final){
        obtenerPersonajeSerie(next,final)
    }
 
}




function solicitarPersonajes(inicio,cantidad){
    
    obtenerPersonajeSerie(inicio,cantidad)

    
}


solicitarPersonajes(1,2)
