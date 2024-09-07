/*let saludo = "Hola mundo";

console.log(saludo.length); // length retorna la longitud de un array o cadena de texto. Para una cadena de texto también cuenta el espacio

let paises = ["Mexico", "Brasil", "Peru"];

paises.push("Bolivia"); // push agrega un dato a un array en la ultima posicion

console.log(paises);

let cadena = Array.of("Hola mundo", 25, ["Mexico", "Brasil"], frase); // Arrayof crea un array con los parametros

console.log(cadena);

let mascotas = ["Perro", "Gato", "Hamster"];

mascotas.unshift("Tortuga"); // unshift funciona como push, pero el dato lo coloca al inicio

console.log(mascotas);

let borrar = mascotas.pop(); // pop funciona igual que push, pero es para eliminar datos

console.log(mascotas);*/

/*let autos = [
    {
        modelo: "Honda Civic", 
        anio: 2008
    },
    {
        modelo: "Honda Civic", 
        anio: 2008
    },
    {
        modelo: "Honda Civic", 
        anio: 2008
    }
];

let nuevoAuto = autos[2].modelo = "Ford fiesta";

console.log(nuevoAuto);
console.log(autos);*/

// Tarea: Hacer varios codigos, no hacerlos super complejos, pero usar cosas que ya vimos
// - Encontrar elementos unicos en un array (utilizar los metodos filter, foreach, for of)

// crear un nuevo array vacio --
// empezar al recorrer el array original uno por uno --
// comprar el elemento actual del array original con los elementos del array nuevo
// si no se encuentra el elemento, añadirlo
// si el elemento SÍ se encuentra entonces eliminar el elemento que ya está en el nuevo array debido a que es repetido
// devolver el nuevo array con los elementos unicos --

let miArray = [5, 215, "Hola", { objeto: 'Soy un objeto' }, 5, 215, "Adios", {}, 56, 56, 56];

function isRepeat(array, thisElem) {
    for (let i = 0; i < array.length; i++) {
        if (thisElem === array[i]) return true
    }
}

function findUniqueElements(array) {
    let uniqueElements = [];

    array.forEach(elem => {
        if (isRepeat(uniqueElements, elem)) {
            let index = uniqueElements.indexOf(elem);

            if (index > -1) uniqueElements.splice(index, 1);

        } else {
            uniqueElements.push(elem);        
        }
    });

    return uniqueElements
}

console.log(findUniqueElements(miArray))// ["Hola", { objeto: 'Soy un objeto' }, "Adios", {}]