'use strict'
const persona = {
    nombre: "Sergio",
    edad: 25
}

// "Congela" un objeto
//Object.freeze(persona);

// modificando un dato
persona.edad = 52;

console.log(persona);

// añadiendo un dato
persona.sexo = "Masculino";

console.log(persona);

delete persona.nombre;

console.log(persona);

console.log(Object);