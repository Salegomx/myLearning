/* 

Diferencia entre var y let
var puede sobrescribir palabras del lenguaje de javascript

alert("Hola mundo"); 

let saludar = "Hola mundo";

var alert = "Hola mundo";

alert("Hello world"); */

let amigos = ["Pedro","Juan","Arturo","Lupe"];

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
}*/

// Ejercicio de destructuracion
let objeto = {
    a:2,
    b:4
}

let {a,b} = objeto;

console.log(b);


// Ejercicio parametros  rest - spread
let numeros = [1, 2, 3, 4, 5];

console.log(...numeros);