//! Promises en paralelo





const API_URL ='https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'




const opts = { crossDomain: true} 

const onPeopleResponse = function (persona){
   
    console.log(`Hola, yo soy ${persona.name}`)
}



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

//* Se pueden hacer promesas en paralelo, usando arrays

var ids = [1,2,3,4,5,6]

var promises= ids.map((id)=> obtenerPersonaje(id))
//* Promise.all(iterable)
//* Devuelve una de dos promesas: una que se cumple cuando 
//* todas las promesas en el argumento iterable han sido 
//* cumplidas, o una que se rechaza tan pronto como una de 
//* las promesas del argumento iterable es rechazada. 

//* Si la promesa retornada es cumplida, lo hace con un
//* arreglo de los valores de las promesas cumplidas en el 
//* mismo orden definido en el iterable. 

//* Si la promesa retornada es rechazada, es rechazada 
//* con la razón de la primera promesa rechazada en el 
//* iterable. 
//* Este método puede ser útil para agregar resultados 
//* de múltiples promesas
Promise
    .all(promises)
    .then(personajes=>console.log(personajes))
    .catch(onError)

