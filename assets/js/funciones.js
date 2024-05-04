// Funcion declarada (se puede llamar antes de su declaracion)

/*saludar('Sergio', 'Gomez');

function saludar(nombre, apellido) {
    console.log(`Hola ${nombre + " " + apellido}`);    
}*/

// Funcion expresada (Debe ser llamada despues de su definicion, va adentro de una variable)

/*saludar(); -- Error

let saludar = function () {
    console.log("Hola mundo");
}*/

// Un callback es una funcion que llama a otra funcion y la ejecuta

// Ejemplo de un callback

// Caso 1 en el que se usa una funcion expresada

/*setTimeout(function () {
    console.log('Esto es un callback y se va a ejecutar en 5 segundos');
}, 5000)*/

// Caso 2 funciones anonimas. Son funciones que no tienen nombre

/*let saludar = function () {
    console.log("Hola mundo");
}*/

// Caso 3 Ejemplo con clausuras (clousures). Son funciones que capturan variables en un entorno circundante

// Clousure: Son funciones que 'capturan' variables en su entorno circundante. Esto puede ser util para crear funciones que mantienen un estado interno

/*function contador () {
    let count = 0;
    return function () {
        return ++count;
    }
}

let incrementar = contador();

console.log(incrementar());
console.log(incrementar());*/

// Caso 4 Ejemplo con asignacion dinamica

// Puedes asignar funciones expresadas a variables en tiempo de ejecucion. Lo que te permite cambiar que funcion se ejecutara, en funcion de las 'condiciones' del programa

/*let operacion;

if (false) {
    operacion = function (a, b) {
        return a + b;
    }
}
else {
    operacion = function (a, b) {
        return a * b;
    }
}

console.log(operacion(2, 5));*/


// Investigar funciones flecha, callbacks, como resumir el codigo de una funcion flecha.

// Ejercicio de funcion de suma con funcion flecha reduciendo el codigo

/*const suma = (num1, num2) => num1 + num2;

console.log(suma(5, 4));*/

// Retornando dos valores

/*const valores = () => {
    return [5, 7];
}

let imprimir = valores();

console.log(imprimir[1]);*/

// Ejercicio funcion flecha que retorna un objeto y luego resume ese objeto

/*
const persona = (nombre, apellido) => {
    return: { 
        nombre: nombre,  
        apellido: apellido
    }
}

const persona = (nombre, apellido) => ({ nombre,  apellido})

console.log(persona("Juan","Perez"));*/

// Agregar datos a un objeto desde fuer de un objeto

/*let objeto = { nombre: "Juan", apellido: "Perez", edad: 30};

objeto.email = objeto.nombre + objeto.apellido + "@hotmail.com";

console.log(objeto.email);*/

// Ejercicio llamar a una propiedad dentro de un objeto dentro de un array dentro de un objeto

/*let persona = {
    nombre: "Francisco",
    edad: 30,
    amigos: ["Pedro", "Antonio", "Horacio"],
    otrosAmigos: {
        secundaria: ["Ernesto", "Alonso", "Esteban"],
        prepa: ["Juan", "Vicente", "Oscar"]
    }
}

console.log(persona.otrosAmigos.prepa[1]);*/

// Ejercicio, borre un dato de un array, de un objeto, un array completo y un objeto completo

/*let persona = {
    nombre: "Francisco",
    edad: 30,
    amigos: ["Pedro", "Antonio", "Horacio"],
    otrosAmigos: {
        secundaria: ["Ernesto", "Alonso", "Esteban"],
        prepa: ["Juan", "Vicente", "Oscar"]
    }
}

delete persona.otrosAmigos;

console.log(persona);*/

// Modificar datos de un objeto fuera del objeto

/*let persona = {
    nombre: "Francisco",
    edad: 30,
    amigos: ["Pedro", "Antonio", "Horacio"],
    otrosAmigos: {
        secundaria: ["Ernesto", "Alonso", "Esteban"],
        prepa: ["Juan", "Vicente", "Oscar"]
    }
}

persona.otrosAmigos.secundaria[1] = "Javier";

console.log(persona);*/

// Ejecuta una funcion que esta dentro de un aray y que devuelve otro array y muestra un solo valor

/*let datos = [15, "Arturo", false, function pais() {return ["Mexico", "Colombia", "Canada"]}];

console.log(datos[3]()[2]);*/

// Ejecutando una funcion que esta dentro de un objeto

/*let nombre = "Pedro";

const persona = {
    nombre: "Juan",
    edad: 30,
    frase: function (saludo) {
        console.log(saludo);
    }
}

persona.frase(nombre);*/

// Todas las funciones en JS tienen un return implicito

/*const persona = {
    nombre: "Juan",
    edad: 25,
    redesSociales: ["Facebook", "Instagram", "Twitter"],
    amigos: {
        secundaria: "Antonio",
        prepa: "Ernesto",
        universidad: "Francisco",
        accion: function () {
            return "Hola Mundo";
        }
    }
}

console.log(persona.amigos.accion());*/

// Tarea: Investigar "this" en JS

// Ejercicio con this imprimiendo el numbre desde un metodo

/*let persona = {
    nombre: "Arturo",
    edad: 30,
    redesSociales: ["Facebook", "Twitter", "Instagram"],
    amigos: {
        secundaria: "Ernesto",
        prepa: "Raul",
        universidad: "Esteban"
    },
    saludar: function () {
        console.log("Hola mundo");
    },
    varios: function () {
        console.log(`Mi nombre es ${this.nombre}`);
    }
}

console.log(persona.varios());*/

// Ejercicio accediendo al objeto amigos desde un metodo, utilizando la palabra reservada this

/*let persona = {
    nombre: "Arturo",
    edad: 30,
    redesSociales: ["Facebook", "Twitter", "Instagram"],
    amigos: {
        secundaria: "Ernesto",
        prepa: "Raul",
        universidad: "Esteban"
    },
    saludar: function () {
        console.log("Hola mundo");
    },
    varios: function () {
        console.log(`Mi nombre es ${this.amigos.universidad}`);
    }
}

console.log(persona.varios());*/

// Ejercicio accediendo a una propiedad que contiene un array

/*let persona = {
    nombre: "Arturo",
    edad: 30,
    redesSociales: ["Facebook", "Twitter", "Instagram"],
    amigos: {
        secundaria: "Ernesto",
        prepa: "Raul",
        universidad: "Esteban"
    },
    saludar: function () {
        console.log("Hola mundo");
    },
    varios: function () {
        console.log(`Mi nombre es ${this.redesSociales[0]}`);
    }
}

console.log(persona.varios());*/

// Mostrando un metodo accediendo desde otro metodo utilizando this

/*let persona = {
    nombre: "Arturo",
    edad: 30,
    redesSociales: ["Facebook", "Twitter", "Instagram"],
    amigos: {
        secundaria: "Ernesto",
        prepa: "Raul",
        universidad: "Esteban"
    },
    saludar: function () {
        console.log("Hola mundo");
    },
    varios: function () {
        console.log(`${this.saludar() + this.redesSociales[0]}`);
    }
}

console.log(persona.varios());*/

// Ejercicio ver que tipo de dato es this

//console.log(typeof this);

// Ejercicio viendo a que hace referencia el objeto this

//console.log(this);

// "this" - La palabra clave this se refiere al objeto al que pertenece la funcion que la esta utilizando.
// El valor de this se determina en tiempo de ejecucion y depende de como se llama la funcion

/*let objeto = {
    nombre: "Juan",
    amigos: ["Esteban","Ivan","Jose"],
    nombreYApellido: function (parametro) {
        if (parametro >= 0 && parametro < this.amigos.length) {
            return this.amigos[parametro]; //el nombre de un amigo
        } else {
            return "Amigo no encontrado"
        }
    }
}

console.log(objeto.nombreYApellido(5));*/

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