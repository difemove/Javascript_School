//Vamos ahora a crear un Script que recibe los 
//personajes 

const API_URL ='https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'




const opts = { crossDomain: true} 

const onPeopleResponse = function (persona){
   
    console.log(`Hola, yo soy ${persona.name}`)
}


//Vamos a agregar una variable llamada callback 
//que nos permitirá controlar el órden el el que llegarán las respuestas
//Hay que asegurarse que se llaman las funciones con 
//callbacks. Esto es, hacerlos en serie y no en paralelo
function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $.get(url, opts, function (persona){
   
        console.log(`Hola, yo soy ${persona.name}`)
    })
    if (callback){
        callback()
    }
}

function obtenerPersonajeSerie (present, final){
    next=present + 1;
    if (present===final){
        obtenerPersonaje(present)
    }else{
        obtenerPersonaje(present, function(){
            obtenerPersonajeSerie(next,final)
        })
        
    }
}


function solicitarPersonajes(inicio,cantidad){
    
    const root=1
    
    obtenerPersonajeSerie(inicio,cantidad)

    
}



//solicitarPersonajes(7)