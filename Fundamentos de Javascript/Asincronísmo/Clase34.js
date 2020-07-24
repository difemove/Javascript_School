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

//* Esta misma tarea se puede resolver con Async Await 
//* Se usa la palabra reservada async, para indicar que
//* la función es asíncrona. No es soportada por todos 
//* los navegadores. 
async function obtenerPersonajes(){
    var ids = [1,2,3,4,5,6]

    var promises= ids.map((id)=> obtenerPersonaje(id))

    //* Usando sync await el código se asemeja más a uno 
    //* tradicional
    try {
        var personajes = /*await es una palabra clave */
                        await /*Detiene el proceso aquí y 
                        retorna el valor cuando  ha terminado*/  
                        Promise.all(promises)
        console.log(personajes)
    } catch (id) {
        onError(id)
        
    }
    
    

}

obtenerPersonajes()



