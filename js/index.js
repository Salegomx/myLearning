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

//Ejercicio donde imprimimos las calificaciones usando la propiedad length

/*let alumno = [
    [5, 6, 2, 8, 3],
    [8, 9, 10, 5, 7],
    [3, 5, 8, 7, 8],
    [10, 9, 8, 10, 10],
    [6, 7, 9, 8, 9]
];

for (let i = 0; i < alumno.length; i++) {
    for (let j = 0; j < alumno[i].length; j++) {
        console.log(alumno[i][j]);
    }
};*/

// Reprobado o aprobado segun calificacion

/*let calificaciones = [
    [5, 6, 2, 8, 3],
    [8, 9, 10, 5, 7],
    [3, 5, 8, 7, 8],
    [10, 9, 8, 10, 10],
    [6, 7, 9, 8, 9]
];

for (let i = 0; i < calificaciones.length; i++) {
    for (let j = 0; j < calificaciones[i].length; j++) {
        if (calificaciones[i][j] < 6) {
            console.log(calificaciones[i][j] + " Reprobado");
        }
        else {
            console.log(calificaciones[i][j] + " Aprobado");
        }
    }
}*/

// Promediando calificaciones

/*let array = [
    [8, 10, 9, 8, 8],
    [7, 8, 9, 9, 7],
    [5, 7, 9, 8, 9],   
    [10, 9, 8, 9, 9],
    [5, 9, 8, 6, 8]
];

let suma = 0;
let materias = 0;

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
        suma = suma + array[i][j];
        materias++;
    }
}

// Promedio =
console.log(suma / materias);*/

// Imprimir cuantas materias reprobo el alumno y despues imrpimir "reprobaste n materias"

/* let calificaciones = [
    [8, 10, 9, 8, 8],
    [7, 8, 5, 9, 7],
    [5, 7, 9, 6, 9],   
    [10, 9, 8, 9, 5],
    [5, 5, 8, 6, 8]
]; 

let reprobadas = [];

for (let i = 0; i < calificaciones.length; i++) {
    for (let j = 0; j < calificaciones[i].length; j++) {
        if (calificaciones[i][j] < 6) {
            reprobadas.push("calificaciones[" + i +"]" + "[" + j + "]")
        }
    }
}

console.log("Reprobaste " + reprobadas.length + " materias");
console.log("Las posiciones en el array de tus materias reprobadas son: ");

for (let i = 0; i < reprobadas.length; i++) {
    console.log(reprobadas[i]);
}*/

// Destructurando un array y poniendole un valor por defecto en su destructuracion

/*let persona = ['Sergio', 25, 'Mexico'];

let [nombre, edad, nacionalidad, profesion = "programador"] = persona;

console.log(profesion);*/

// Imprimiendo un valor que esta adentro de un arreglo, ejecutandolo con una funcion

// Modo 1:
/*let persona = ['Sergio', 25, 'Mexico'];

let imprimirDato = (dato) => {
    console.log(dato)
}

imprimirDato(persona[0])*/

// Modo 2:
/*let persona = ['Sergio', 25, 'Mexico'];

let [nombre, edad, nacionalidad] = persona;

let imprimirDato = ([nombre, edad, nacionalidad]) => {
    console.log(nombre)
}

imprimirDato(persona);*/

// Modo 3:
/*let persona = ['Sergio', 25, 'Mexico'];
let [nombre, edad, nacionalidad] = persona;

let imprimirDato = (persona) => {
    console.log(nacionalidad)
}

imprimirDato(persona);*/

// Modo 4:
/*let persona = ['Sergio', 25, 'Mexico'];
let [nombre, edad, nacionalidad] = persona;

let imprimirDato = (persona) => console.log(edad)

imprimirDato(persona);*/

// Destructurando un objeto (no estoy obligado a destructurar todas las propiedades del objeto)
/*let persona = {
    nombre: 'Arturo',
    apellido: 'Gonzalez',
    edad: 30, 
    pais: 'Mexico',
    profesion: 'carpintero'
}

let {nombre, apellido, profesion} = persona;

let imprimirDato = (persona) => {
    console.log(`Hola soy ${nombre} y soy ${profesion}`)
}

imprimirDato();*/

/*let array1 = ['Sergio', 25, 'Mexico'];
let array2 = ['Juan', 20, 'Guatemala'];
let objeto1 = {nombre: 'Pedro', edad: 40, pais: 'Canada'};

let [nombre1, edad1, pais1] = array1;
let [nombre2, edad2, pais2] = array2;
let {nombre3, edad3, pais3} = objeto1;

let imprimir = ({nombre3, edad3, pais3}) => {
    console.log(nombre3, edad3, pais1);
}

imprimir(objeto1)*/

