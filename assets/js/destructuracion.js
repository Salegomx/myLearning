// Ejercicio de destructuracion
/*let objeto = {
    a:2,
    b:4
}

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

/*let {a,b} = objeto;

console.log(b);*/

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

// Destructuracion anidada

/*let producto = {
    nombre: "Pantalla",
    precio: 7500,
    disponibilidad: true,
    informacion: {
        medidas: {
            peso: "5kg",
            medida: "1metro"
        },
        fabricacion: {
            pais: "china"
        }
    }
};

let {nombre, precio, disponibilidad, informacion: {medidas}, informacion: {medidas: {peso}}, informacion: {medidas: {medida}}, informacion: {fabricacion: {pais}}} = producto;

console.log(nombre);
console.log(precio);
console.log(disponibilidad);
console.log(informacion);
console.log(medidas);
console.log(peso);
console.log(medida);
console.log(pais);*/