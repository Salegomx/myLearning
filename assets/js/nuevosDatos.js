// SET

// Es una estructura de tipo array, pero de datos unicos (datos primitivos)
// En la memoria de JS, cada objeto es una referencia única.
// Se usa para guardar datos, pero que el programador no quiere que se repitan esos datos, por ejemplo una base de datos de correos electronicos.

/*const set = new Set([1,2,3,3,4,5,true,false,false,{},{},'hola','HOLA']);

console.log(set.size);

set.add(8);

console.log(set.size);

console.log(typeof set);

console.log(set);

for (const elem of set) {
    console.log(elem)
}

set.forEach( elem => console.log(elem));

console.log(set[5]); // No se puede acceder por indice

const caja = Array.from(set);

console.log(caja[5]);

console.log(set.has('HOLA'));

set.delete('hola');

console.log(set);

set.clear();

console.log(set);*/

// SYMBOL

// Es un tipo de dato primitivo, cuando se crea su valor se va a mantener privado y de uso interno.
// Generalmente los symbol suelen agregarse como si fueran un a propiedad de un objeto.
// También nos permiten crear identificadores unicos.
// Normalmente se usan para mantener datos que no quieres que se cambien porque internamente los necesitas.

let id1 = 'hola';
let id2 = 'hola';
let id3 = Symbol('mundo');
let id4 = Symbol('mundo');

//console.log(id3 === id4);

const nombre = Symbol();

const persona = {
    [nombre]: 'Juan',
    edad: 30,
    profesion: 'Desarrollador',
    musica: 'Rock'
}

persona.nombre = 'Pedro';

/*for (const propiedad in persona) {
    console.log(persona[propiedad]);
}*/

//console.log(persona);

const saludar = Symbol();

persona[saludar] = function() {console.log('Hola mundo')};

/*for (const propiedad in persona) {
    console.log(persona[propiedad]);
}*/

//console.log(persona);

// Ejecutando un metodo privado Symbol()
//persona[saludar]();

// Una manera de detectar los symbols:
//console.log(Object.getOwnPropertySymbols(persona));

// Map

// Son objetos que nos sirven para almacenar valores asociados.
const mapa = new Map();

mapa.set('nombre', 'Juan');
mapa.set('edad', 30);
mapa.set(1, 'Uno');
mapa.set(true, 'Verdadero');

console.log(mapa.has('correo'));

mapa.delete('edad');

console.log(mapa);

mapa.set('nombre', 'Sergio');

console.log(mapa);

for (const [llave, valor] of mapa) {
    console.log(llave, valor);
}

const llaves = [...mapa.keys()];
const valores = [...mapa.values()];

console.log(llaves, valores);