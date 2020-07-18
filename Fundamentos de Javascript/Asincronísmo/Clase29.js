//Usaremos Swapi y Jquery para hacer peticiones a un API
//OJO: JQuery fue agregado al HTML 
const API_URL ='https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

//Permite hacer request
//Primer parámetro es la URL
const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`
//El request se hace hacia otra página
const opts = { crossDomain: true} 

//Para más información, ver documentación de Jquery
//Un callback es una función que se va a ejecutar en un futuro 
//Puede que nunca se complete o nunca se llame 

//Function es el callback y get se encarga de llamarla. 
//*jQuery.get( url [, data ] [, success ] [, dataType ] )
//*Type: Function( PlainObject data, String textStatus, jqXHR jqXHR )
//*A callback function that is executed if the request succeeds. 
//*Required if dataType is provided, but you can use null or jQuery.noop
//* as a placeholder.
$.get(lukeUrl, opts, function (luke){
    //!arguments is an Array-like object accessible inside functions that contains the values of the arguments passed to that function.


    ////console.log(arguments)
    console.log(`Hola yo soy, ${luke.name}`)
}) 

//* Es normal definir el callback antes 

const onPeopleResponse = function (persona){
   
    console.log(`Hola yo soy, ${persona.name}`)
}

$.get(lukeUrl, opts, onPeopleResponse)