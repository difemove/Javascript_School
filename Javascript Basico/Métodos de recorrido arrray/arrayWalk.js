var articulos = [
    {nombre : "Bici", costo: 3000},
    {nombre : "TV", costo: 2500},
    {nombre : "Libro", costo: 320},
    {nombre : "Celular", costo: 1000},
    {nombre : "Laptop", costo: 20000},
    {nombre : "Teclado", costo: 200},
    {nombre : "Audífonos", costo: 170},
];

//* filter genera un nuevo arreglo de acuerdo a la function 
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo<=500

});

console.log(articulosFiltrados);

//* map genera un map de acuerdo a la function 
nombreArticulos= articulos.map(function(articulo){
    return articulo.nombre
});

console.log(nombreArticulos);

//* find encuentra un articulo

var encuentraArticulo= articulos.find(function(articulo){
    return articulo.nombre==="Laptop"
});
console.log(encuentraArticulo);

//* forEach filtra pero no genera un nuevo array 
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

//* Some valida verdadero o falso para una validación. genera un nuevo array
var articulosBaratos = articulos.some (function(articulo){
    return articulo.costo<=700;
});

console.log(articulosBaratos);

