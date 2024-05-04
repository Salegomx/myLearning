// Metodos de objetos

/*
    Object.keys(objeto);

    Devuelve un array con las propiedades del objetos como elementos

    Object.values(objeto);

    Devuelve un array con los valores de las propiedades del objeto como elementos

    Object.entries(objeto);

    Devuelve un array de arrays, cada uno de los cuales representa una propiedad del objeto

    Object.assign(objeto1, objeto2);

    Une las propiedades de dos objetos en uno solo

    Object.hasOwnProperty(objeto);

    Devuelve un boleano que indica si el objeto tiene una propiedad especifica

    Object.getOwnPropertyNames(objeto);

    Devuelve un array con todas las propiedades del objeto

    Object.defineProperty(objeto, propiedad, descriptor);

    Define una nueva propiedad en el objeto o modifica una propiedad existente

    JSON.stringify(objeto);

    Convierte un objeto en una cadena JSON

    Estos metodos se llaman metodos funcion. Se pueden utilizar con .nombre(), los metodos de objeto se escriben: Object.metodo()

    call();

    Este metodo llama a una funcion con un valor this y argumentos dados

    apply();

    llama a una funcion con un valor this y un array de argumentos

    bind();

    Crea una nueva funcion que cuando es llamada tiene un valor this filo al valor pasado, con una secuencia determinada de argumentos precediendo a cualquier otro que se proporcione cuando se llame a la nueva funcion.


*/

/*let persona = {
    nombre: "Pablo",
    edad: 45,
    ciudad: "Monterrey",
    profesion: "Contador"
}

Object.seal(persona);

persona.nombre = "Pedro";

console.log(persona.nombre);

persona.email = "pedro@gmail.com";

console.log(persona.email);

delete persona.edad;

console.log(persona);

console.log(Object.isSealed(persona));*/

/*let persona = {
    nombre: "Juan",
    apellido: "Perez",
    esProgramador: false
}

console.log(Object.keys(persona));
console.log(persona);*/

/*let persona = {
    nombre: "Juan",
    apellido: "Perez",
    esProgramador: false
}

let persona2 = {
    profesion: "Albanil",
    sueldo: 8000,
    edad: 30
}

let mezcla = Object.assign(persona, persona2);

console.log(mezcla);*/

/*let mascota = {
    nombre: "Firulais",
    edad: 8,
    raza: "Pastor aleman",
    color: "Negro"
}

console.log(mascota.hasOwnProperty("color"));*/

/*let mascota = {
    nombre: "Firulais",
    edad: 8,
    raza: "Pastor aleman",
    color: "Negro",
    amigos: ["chilaquil", "scooby", "snoopy"],
    otrosAmigos: {
        gato: "Satanas",
        perico: "Juan",
        raton: "Micky"
    }
}

let variable = Object.entries(mascota);

console.log(variable);*/

// Metodos funcion

// call
/*let sumar = (a, b) => {
    return a + b;
}

let resultado = sumar.call(null, 5, 3);

console.log(resultado);


// bind
let sumaDiez = sumar.bind(null, 10);

console.log(sumaDiez(5));*/

/*let persona = {
    nombre: "Raul",
    apellido: "Gomez",
    edad: 70,
    sexo: "Masculino"
}

let propiedades = Object.getOwnPropertyNames(persona);

console.log(propiedades);*/

/*let persona = {
    nombre: "Raul",
    apellido: "Gomez",
    edad: 70,
    sexo: "Masculino"
}

let valores = Object.values(persona);

console.log(valores);*/