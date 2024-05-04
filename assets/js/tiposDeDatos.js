/* Diferencia entre var y let
var puede sobrescribir palabras del lenguaje de javascript

alert("Hola mundo"); 

let saludar = "Hola mundo";

var alert = "Hola mundo";

alert("Hello world"); */

// True = true = 1; false = false = 0
// 0 !== nada
// null !== undefined
// null: Se utiliza especificamente para indicar la ausencia de un valor asignado de manera intencional (por el programador). Null es diferente de undefined. Undefined se utiliza cuando una variable no tiene un valor asignado.
// Infinity: Es un valor especial que se utiliza para representar matemáticamente cualquier numero que es mayor que cualquier numero que se puede representar en JS. Es un timpo de valor primitivo y es un number.


/*console.log(1 + 2 + 3);

console.log('1' + 2 + 3);

console.log(1 + 2 + '3');

console.log(1 + 2 + '3' + 4 + 5 + 6); //33456

console.log(('1' + 4) + 2 + 3); //1423

console.log(('1' + 5) + (2 + 3)); //155

console.log(('1' + 6) + (2 + 4) + (5 + '7')); //16657

console.log(true + '1'); //true1

console.log((false + 3) + '4' + false + (8 + 9)); //34false17

console.log(false * 2); // 0

console.log(false + 1); // 0 + 1 = 1

console.log(true * 8); // 8

console.log('hola' * 2); // NaN

console.log(true - 'mundo'); // NaN

console.log(2 * 4 - ('hola')); // NaN

console.log(NaN - true); // NaN

console.log(null + true); // 1

console.log(null + 'Hola'); //nullHola

console.log(null + 4); // 4

console.log(null + 0); // 0

console.log(true - '1'); // 0

console.log(true * '1'); // 1

console.log(false * '1'); // 0

console.log(true + 1); // 2

console.log(false + 1); // 1

console.log(true + undefined); // NaN

console.log(true + NaN); // NaN

console.log(true + null); // 1

console.log(true + true); // 2

console.log(true + false); // 1

console.log(true * false); // 0

console.log(true / false); // Infinity

console.log(true / 0); // Infinity

console.log(true / null); // Infinity*/

// Pasando valores que son objetos y poniendo valores por default

/*let persona = {
    nombre: "Juan",
    apellido: "Gomez",
    hobbies: ["Correr", "TV"]
}

let imprimir = ({nombre,apellido,hobbies,edad}) => {
    edad = edad || 35;
    console.log({nombre});
    console.log({apellido});
    console.log({hobbies});
    console.log({edad});
}

imprimir(persona);*/

// Variacion del ejercicio de arriba. Solo consumes los datos que necesitas

/*let persona = {
    nombre: "Juan",
    apellido: "Gomez",
    hobbies: ["Correr", "TV"]
}

let imprimir = ({nombre,apellido,edad = 35}) => {
    console.log({nombre});
    console.log({apellido});
    console.log({edad});
}

imprimir(persona);*/

// Ejercicio pasando un valor por parametro con funcion flecha

/*let saludar = (param = 'anonimo') => {
    return `Hola ${param}`
}

console.log(saludar());*/

// Funcion anonima autoinvocada clasica

/*(function () {
    console.log('Hola mundo');
})()*/

// Funcion anonima crockford

/*((function () {
    console.log("Hola mundo")
})())*/

// Funcion anonima autoejecutable estilo META

/*!function() {
    console.log("Hola mundo");
}()*/

// Estudiar callbacks y estudiar ejercicos de console.log

/*console.log(undefined + 'hola'); // undefinedhola

console.log(undefined * 'hola'); // NaN

console.log(undefined + true); // NaN

console.log(undefined - true); // NaN

console.log(undefined - 0); // NaN

console.log(undefined + null); // NaN

console.log(undefined + undefined); // NaN

console.log(undefined + []); // undefined *Un array vacio es equivalente a nada

console.log(undefined + {}); // undefined[object Object]

console.log(undefined * []); // NaN

console.log(undefined * {}); // NaN

console.log(null + 'hola'); // nullhola

console.log(null * 1); // 0

console.log(null + true); // 1

console.log(null + false); // 0

console.log(null * []); // 0

console.log(null * {}); // NaN

console.log(null + null); // 0

console.log(null + undefined); // NaN

console.log(null + []); // null

console.log(null + {}); // null[object Object]

console.log([] + 'hola'); // hola

console.log([] * 'hola'); // NaN

console.log([] + 1); // 1

console.log([] * 1); // 0

console.log([] + false); // false

console.log([] + true); // true

console.log([] + null); // null

console.log([] * null); // 0

console.log([] + undefined); // undefined

console.log([] * undefined); // NaN

console.log([] + {}); // [object Object]

console.log({} + 'hola'); // [object Object]hola

console.log({} * 'hola'); // NaN

console.log({} + 2); // [object Object]2*/

/*'use strict'

let x = 20;

console.log(x)*/