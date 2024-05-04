// Imprimiendo del 0 al 10 pasando por los puntos decimales
/*for (let j = 0; j < 10; j++) {
    for (let k = 0; k < 10; k++) {
        console.log(j + "." + k);
    }
}

// Deteniendo un bucle

/* for (let i = 0; i < 10; i++) {
    if (i == 5) {
        break;
    }
    console.log(i);
}*/

// Saltando un dato con continue

/* for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i);
} */

/* 
    Explicacion del for of

    Se utiliza para iterar sobre elementos iterables, como arrays, strings, maps, conjuntos, etc.
    Proporciona una forma más sencilla y legible de recorrer los elementos de una estructura iterable.

    No proporciona acceso directo a los indices, sino a los valores de los elementos.
*/

/*let array = ["a", "b", "c"];

for(let value of array) {
    console.log("Valor: " , value);
}

for(let index in array) { 
    console.log("Indice: ", index, "Valor: ", array[index]);
}*/

/*let cadena = [1, 2, 3, 4, 5];

for(let iterador of cadena) {
    console.log(iterador);
}

let paises = ["Alemania", "China", "Corea del norte", "Rusia"];

for(let i of paises) {
    console.log(i);
}*/

/*
    Explicacion del for in

    La eleccion mas comun para utilizar for in es para iterar sobre las propiedades de un objeto.
    Se utiliza para iterar sobre la propiedades ennumerables de un objeto incluyendo propiedades heredadas del prototipo.
    Devuelve los indices (en el caso de los arrays) en lugar de los valores.
*/

/*const objeto = {
    nombre: "Pedro",
    apellido: "Perez",
    edad: 45
}

for(let index in objeto) {
    console.log(`Key: ${index} , Value: ${objeto[index]}`);
}

for(let j in paises) {
    console.log(paises[j]);
}*/