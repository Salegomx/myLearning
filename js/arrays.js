let saludo = "Hola mundo";

console.log(saludo.length); // length retorna la longitud de un array o cadena de texto. Para una cadena de texto también cuenta el espacio

let paises = ["Mexico", "Brasil", "Peru"];

paises.push("Bolivia"); // push agrega un dato a un array en la ultima posicion

console.log(paises);

let cadena = Array.of("Hola mundo", 25, ["Mexico", "Brasil"], frase); // Arrayof crea un array con los parametros

console.log(cadena);

let mascotas = ["Perro", "Gato", "Hamster"];

mascotas.unshift("Tortuga"); // unshift funciona como push, pero el dato lo coloca al inicio

console.log(mascotas);

let borrar = mascotas.pop(); // pop funciona igual que push, pero es para eliminar datos

console.log(mascotas);