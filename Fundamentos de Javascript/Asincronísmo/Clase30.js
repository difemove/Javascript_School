//Vamos ahora a crear un Script que recibe los 
//personajes 

const API_URL ='https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'




const opts = { crossDomain: true} 

const onPeopleResponse = function (persona){
   
    console.log(`Hola, yo soy ${persona.name}`)
}

function obtenerPersonaje(id) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $.get(url, opts, onPeopleResponse)
}

function solicitarPersonajes(cantidad){
    const personajes = new Array()
    var url 
    if (cantidad>1){
        for (var i=1; i<=cantidad;i++){
            url=`${API_URL}${PEOPLE_URL.replace(':id',i)}`
            $.get(url, opts, onPeopleResponse)
        }  
    }

    
}


//Al pedir varios personajes, no sabemos el órden en que 
//obtendremos las respuestas, debido al asincronísmo
//Depende del servidor y el tiempo de respuesta. 
//Cómo podemos ordenar los llamados? 
solicitarPersonajes(3)