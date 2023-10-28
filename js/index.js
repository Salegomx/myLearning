/* 

Diferencia entre var y let
var puede sobrescribir palabras del lenguaje de javascript

alert("Hola mundo"); 

let saludar = "Hola mundo";

var alert = "Hola mundo";

alert("Hello world"); */

/* let amigos = ["Pedro","Juan","Arturo","Lupe"];

console.log(amigos[3]);

let persona = {
    nombre: "Pedro",
    edad: 15,
    amigos: ["Ricardo", "Luis", "Gerardo"]
}

console.log(persona.amigos[1]);

for (let i = 0; i < 10; i++) {
    console.log(i);
}

if (persona.edad >= 18) {
    console.log("Puedes entrar al bar");
}
else {
    console.log("No puedes entrar al bar")
}

let animales = ["Perro", "Gato", "Perico", ["Pez", "Rana", "Tortuga", "Conejo"], "gallo", "caballo", "puerco"];

console.log(animales[3][2]);

function saludar() {
    console.log("Hola mundo");
}

// saludar();

function sumar(num1, num2) {
    return num1 + num2;
}

sumar();

/*for (let j = 0; j < 10; j++) {
    for (let k = 0; k < 10; k++) {
        console.log(j + "." + k);
    }
}

// Ejercicio de destructuracion
let objeto = {
    a:2,
    b:4
}

let {a,b} = objeto;

console.log(b);


// Ejercicio parametros  rest - spread
let numeros = [1, 2, 3, 4, 5];

console.log(...numeros); */

/*

Ejercicio de destructuracion

let sergio = ["Sergio", , 25, "Mexico"];
let [nombre, estadoCivil, edad, pais] = sergio;

console.log(nombre, pais);*/

// La destructuracion es una sintaxis que permite extraer valores de arreglos y objetos y así asignarlos a variables de una forma mas sencilla. La desctructuracion es muy usada con objetos y arreglos en frameworks y librerias modernas

/*

Ejercicio de destructuracion con valor por defecto

let sergio = ["Sergio", , 25, "Mexico"];
let [nombre, estadoCivil, edad, pais, empleo = "Programador"] = sergio;

console.log(nombre, empleo);*/

/*

Destructuracion con constantes con valor por defecto

const objeto = {};
const {a = 1000} = objeto;

console.log(a);*/

/* Ejercicio de destructuracion con valores por defecto
const objeto = {a: 4, b: 6};
const {a = 1000, b = 2000, c = 3000, d = 4000} = objeto;

console.log(a, b, c, d);

console.log(typeof a);*/

// Ejercicio con operador !==

/* let uno = 1;
let numero = 1;

if (uno !== numero) {
    console.log("Los numeros son DIFERENTES en valor o tipo");
}
else {
    console.log("Los numeros son IGUALES en valor y en tipo");
}*/

// Ejercicio con operador !=

/* let numeroUno = 6;
let numeroDos = "6";

if (numeroUno != numeroDos) {
    console.log("Los numeros son DIFERENTES en valor (sin considerar el tipo de dato)");
}
else {
    console.log("Los numeros son IGUALES en valor (sin considerar el tipo de dato)");
} */

// Ejercicio con un if short

/* let amigo = false;

let amigos = [
    "Pedro", 
    "Juan", 
    "Pablo", 
    "Arturo",
    amigo ? "Carlos" : "Pedro"
];

console.log(amigos); */

// Sintaxis de if else usando la tecla de tabulador

/* let efectivo = 500;
let carrito = 300;

if (efectivo > carrito)
    console.log("Puedes pagar");
else
    console.log("Te falta dinero"); */

// Ejercicio de if short anidados

/* let calificacion = 68;

let grado = calificacion >= 95 ? "A+" :
    calificacion >= 90 ? "A" :
    calificacion >= 85 ? "B+" :
    calificacion >= 80 ? "B" :
    calificacion >= 75 ? "C+" :
    calificacion >= 70 ? "C" :
    calificacion >= 65 ? "D+" :
    calificacion >= 60 ? "D" : "F";

    console.log(calificacion, grado); */

// Recorriendo un array con for sin propiedades

/*let paises = ["Japon", "Mexico", "Australia", "China", "Canada"];

for (let i = 0; i < 10; i++) {
    console.log(paises[i]);
};*/

// contando caracteres de texto usando length

/* let nombre = "Sergio";

console.log(nombre.length); */

// contando posiciones de memoria de un array usando la propiedad length

/*let amigos = ["Juan", "Pedro", "Arturo", "Ivan", "Pepe"];

console.log(amigos.length);*/

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