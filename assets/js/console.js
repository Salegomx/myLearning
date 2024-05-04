console.group("tecnologias");

console.log("SASS");
console.log("Typescript");
console.log("React");
console.log("php");
console.log("mySql");

console.groupEnd();

// console.log(console);

console.table(Object.entries(console).sort());

const perro = {
    nombre: "Pluto",
    color: "negro",
    raza: "Criollo"
};

console.table(perro);

console.clear();

const arreglo = new Array(1000000);

console.time("Cuanto tarda mi codigo");

for(let i = 0; i < arreglo.length; i++) {
    arreglo[i] = i;
}

console.timeEnd("Cuanto tarda mi codigo");

console.count();

for(let i = 0; i <= 100; i++) {
    console.count("codigo for");
    console.log(i);
}

let x = 3;
let y = 2;
let pruebaxy = "X debe ser siempre menor que y";

// console.asser() recibe una condicion y un objeto.
console.assert(y > x, {x, y, pruebaxy});