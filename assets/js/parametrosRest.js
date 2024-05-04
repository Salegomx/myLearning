// Ejercicio parametros  rest - spread
/*let numeros = [1, 2, 3, 4, 5];

console.log(...numeros); */

/*let numeros = [1, 2, 3, 4, 5];
let paises = ['China', 'Japon', 'Mexico', 'Canada', 'Korea']

let numeros2 = [1, ...numeros, 5];
let paises2 = ['Peru', ...paises, 'Guatemala']

console.log(numeros2);
console.log(paises2);*/

// Ejercicio de una funcion que imprime valores pasando datos por parametro usando el parametro 'rest'

/*let mostrarDatos = (...datos) => {
    console.log(...datos);
}

mostrarDatos('Sergio', 'Gomez', 'Mexico', 25);*/

// Ejercicio imprimiendo datos con una funcion usando el parametro 'spread'

/*/*let arreglo = ['Sergio', 'Gomez', 'Mexico', 25, 'sergioagmoreno@gmail.com'];

let mostrarDatos = (...datos) => {
    console.log(...datos);
}

mostrarDatos(...arreglo);*/


// Uniendo dos arrays usando el parametro 'spread'

/*let cadena1 = [1, 2, 3, 4 , 5];
let cadena2 = [6, 7, 8, 9, 10];

let cadena3 = [...cadena1, ...cadena2];

console.log(...cadena3);*/

// Imprimir del 15 al 5 pasando por todos los puntos decimales

// Usando ciclos for para imprimir del 15 al 5

/*for (let i = 15; i >= 5; i--) {

    if (i >= 15) {
        console.log(i);
    } else {
        for (let j = 9; j >= 0; j--) {
            console.log(i + '.' + j);
        }
    }
}*/

// Destructuracion de un array utilizando un parametro spread

/*let mascotas = ['perro', 'gato', 'hamster', 'pez', 'perico', 'gallo'];

let [mascota1, , , ...restoDeMascotas] = mascotas;

console.log(...restoDeMascotas)*/

// Ejercicio de destructuracion de texto

/*let palabra = 'hola';

let {length} = palabra;

console.log(length)*/

// Definicion de parametros rest y spread

// rest y spread son dos caracterizticas de JS. Se introdujeron en la version ecma script 6 (ES6)
// tambien es conocida como ES2015. Permiten trabajar con arrays y objetos de una manera mas facil y elegante.

// spread operator: se denota con tres puntos (...) y se utiliza para expandir (desempaquetar) elementos de un iterable como un array. En situaciones 'donde se esperan multiples argumentos/elementos', para indicar que queremos desempaquetar los elementos

// parametros rest: permite empaquetar elementos de un array.
// el parametro rest "recoje" multiples elementos/argumentos y los coloca "en un UNICO array". En una funcion, el rest permite aceptar "cualquier numero/monto/cantidad de argumentos" y empquetarlos en un array.
// se utiliza el operador de tres puntos, para indicar que queremos empaquetar los elemetos restantes de un array.

// Ejemplo de operador spread
/*let numeros = [1, 2, 3, 4, 5];

console.log(numeros);*/

// el operador spread se utiliza para expandir o esparcir los elementos del array como argumentos individuales.
// asi, en lugar de pasar el array completo como un unico argumento, lo que haces es pasar cada elemento del array como un argumento separado

// Ejercicio de operador rest. Copiando un obejto
/*let persona = {nombre: 'Antonio', edad: 28};

let clonar = {...persona};

console.log(clonar);*/

// Ejemplo de operador spread
/*let array = [1, 2, 3, 4];
let array2 = [...array, 5];

console.log(array2)*/

/*let array1 = [1, 2, 3, 4];
let array2 = [5, 6, 7, 8];

console.log(...array1, ...array2);*/

// Ejercicio de spread con objetos
/*let objeto1 = {edad: 25, año: 1998};
let objeto2 = {...objeto1, salario: 2000};

console.log(objeto2);*/

// Ejercicio pasando argumentos de un array utilizando el parametro rest e imprimiendo y sumando con una funcion
/*let array1 = [1, 2, 3];

let sumar = (dato1, dato2, dato3) => {
    console.log(dato1 + dato2 + dato3);
}

sumar(...array1);*/

/*let mostrarDatos = (...datos) => {
    console.log(datos); // Imprime un array
    console.log(...datos); // Imprime datos sueltos
}

mostrarDatos('Juan', 25, 'Mexico', 'juan@gmail.com');*/

/*let mostrarDatos = (...datos) => {
    console.log(datos); // Imprime un array
    console.log(...datos); // Imprime datos sueltos
}

let array1 = ['Juan', 25, 'Mexico', 'juan@gmail.com'];

mostrarDatos(...array1);*/

/*let juan = {nombre: 'juan'};

let ana = juan;

ana.nombre = 'ana';

console.log(juan, ana)*/

/*let juan = {nombre: 'juan'};
let ana = {...juan}; // Esta linea crea un nuevo objeto, utilizando la sintaxis de propagacion (spread syntax). Lo que hace es copiar todas la propiedades del objeto juan en el objeto ana, ana es un objeto distinto de juan, pero con las mismas propiedades y valores

ana.nombre = 'ana'; // Aqui se modifica la propiedad nombre del objeto ana. Esto solo cambia el objeto ana, pero no afecta al objeto juan, ya que ana y juan son objetos diferentes en la memoria

console.log(juan, ana);*/

// Escribe una funcion que use el parametro rest para tomar varios argumentos y devuelva la suma de todos esos numeros

/*let suma = (...numeros) => {
    let total = 0;

    for (i = 0; i < numeros.length; i++) {
        total = total + numeros[i]
    }
    console.log(total);
}

suma(1, 5, 10, 50, 100, 500)*/

// concatenacion de cadenas

// crea una funcion que use el parametro rest para aceptar varias cadenas de texto y que las concatene

/*let concatenar = (...textos) => {
    let concatenado = '';

    for (i = 0; i < textos.length; i++) {
        concatenado = concatenado + ' ' + textos[i];
    }
    console.log(concatenado);
}

concatenar('hola', 'mundo', 'perro', 'ratos', 'gato', 'vaca');*/

// crea una funcion con parametros rest. Pasar 4 argumetnos a la funcion, pero la funcion debe retornar solo dos valores. En esos dos valores deben venir los 4 valores iniciales

/*let retornar = (...valores) => {
    let array1 = [valores[0], valores[1]];
    let array2 = [valores[2], valores[3]];

    console.log(array1, array2)
}

retornar(2, 'perro', 10, 'gato')*/

/*let persona = (nombre, ...args) => {
    return [nombre, ...args];
}
console.log(persona("Ricardo", true, 32, ["Perro", "Canada"]));*/