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

/******************/
/* Método forEach */
/******************/

/*let miArray = [5, 215, "Hola", 5, 215, "Adios", 56];

function findUniqueElements(array) {
    let uniqueElements = [];

    array.forEach(elem => {
        if (uniqueElements.includes(elem)) {
            uniqueElements.splice(uniqueElements.indexOf(elem), 1);
        } else {
            uniqueElements.push(elem);        
        }
    });

    return uniqueElements
}

console.log(findUniqueElements(miArray));*/ // ["Hola", "Adios", 56]

/**************/
/* Método for */
/**************/

/*let miArray = [5, 215, "Hola", 5, 215, "Adios", 56];

function findUniqueElements(array) {
    let uniqueElements = [];

    for (let i = 0; i < array.length; i++) {
        if (uniqueElements.includes(array[i])) {
            uniqueElements.splice(uniqueElements.indexOf(array[i]), 1);
        } else {
            uniqueElements.push(array[i]);        
        }
    }

    return uniqueElements;
}

console.log(findUniqueElements(miArray))*/;

/*****************/
/* Método filter */
/*****************/

/*let miArray = [5, 215, "Hola", 5, 215, "Adios", 56];

function findUniqueElements(array) {
    let uniqueElements = array.filter( (elem, index, thisArray) => {
        return thisArray.indexOf(elem) === index;
    });

    return uniqueElements;
}

console.log(findUniqueElements(miArray))*/;

/*****************/
/* Método for of */
/*****************/

let miArray = [5, 215, "Hola", 5, 215, "Adios", 56];

function findUniqueElements(array) {
    let uniqueElements = [];

    for (elem of array) {
        if (uniqueElements.includes(elem)) {
            uniqueElements.splice(uniqueElements.indexOf(elem), 1);
        } else {
            uniqueElements.push(elem);        
        }
    }

    return uniqueElements
}

console.log(findUniqueElements(miArray));