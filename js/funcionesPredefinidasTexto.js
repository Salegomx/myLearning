/*let saludo = "Hola!";
let nombre = "Sergio";
let mensaje = saludo.concat("----", nombre);

console.log(mensaje);*/

/*let texto = "Hola Mundo";
console.log(texto.toLowerCase());*/

/*let texto = "Hola Mundo";
console.log(texto.toUpperCase());*/

/*let texto = "      Hola Mundo     ";
console.log(texto.trim());*/

/*let texto = "Javascript";
console.log(texto.substring(4, 10));*/

/*let texto = "Hola como estas?";
let palabra = texto.split(" ");
console.log(palabra[2]);*/

/*let texto = "Hola, hola mundo, juanito";
console.log(texto.indexOf("juanito"));*/

/*let texto = "Hola, hola mundo, hola juanito, hola";
console.log(texto.lastIndexOf("hola"));*/

/*let texto = "  hola como estas?      ";
let palabras = texto.length;
console.log(texto);
console.log(palabras);
console.log(texto.trimStart());
console.log(palabras);*/

/*let texto = "  hola como estas?      ";
let palabras = texto.length;
console.log(texto);
console.log(palabras);
console.log(texto.trimEnd());
console.log(palabras);*/

/*let texto = "      Hola como estas?       ";
console.log(texto);
console.log(texto.trimStart().trimEnd());*/

/*let texto = "Hola mundo";
console.log(texto.replace("Hola", "Hello"));*/

/*let texto = "Hola como estas?";
console.log(texto.slice(2)); // la como estas? */

/*let texto = "Hola como estas?";
console.log(texto.charAt(0)) // H */

/*let frase = "Monitor de 20 pulgadas";
let frase2 = "OFERTA!!! ".repeat(3);
console.log(`${frase} ${frase2}`); // Monitor de 20 pulgadas OFERTA!!! OFERTA!!! OFERTA!!! */

/*let numero = 8;
let convertir = numero.toString();
console.log(typeof convertir); // string */

/*let resultado = Math.PI;
console.log(resultado);*/

/*let resultado = Math.round(8.49);
console.log(resultado); // 8 */

/*let numero = Math.ceil(8.000001);
console.log(numero); // 9 */

/*let numero = Math.floor(8.99999);
console.log(numero); // 8 */

/*let raiz = Math.sqrt(81);
console.log(raiz) // 9 */

/*let absoluto = Math.abs(-5);
console.log(absoluto); // 5 */

/*let potencia = Math.pow(4, 3);
console.log(potencia); // 64 */

/*let minimo = Math.min(5, 15, 42, -7, 82, -123);
console.log(minimo); // -123 */

/*let maximo = Math.max(5, 15, 42, -7, 82, -123)
console.log(maximo); // 82 */

/*let aleatorio = Math.random() * 50; // Genera un numero entre 0.01 y 0.99
let redondeo = Math.floor(aleatorio); // redeondeo hacia abajo
console.log(redondeo); // numero entero aleatorio */

/*let numero = 15;
console.log(numero++);
console.log(numero);
console.log(++numero);*/

/*for(let i = 0; i <= 100; i += 5) {
    console.log(i);
}*/

/*let string = "20.1";
console.log(typeof Number.parseInt(string)); - para enteros
console.log(typeof Number.parseFloat(string)); // number */

/*let nulo = null;
console.log(typeof nulo);

Originalmente, en JS, typeof null devolvia "object", lo cual era incorrecto. Este fue un error en la implementación inicial de JS en los navegadores de netscape y fue replicado en otras implementaciones para mantener compatibilidad.
Sin embargo esto se considera un error de diseño de JS y no es representativo de como se trata a null en el lenguaje. En realidad null es un valor primitivo de JS y no un objeto, la funcion typeof null ahora devuele object por razones de compatibilidad con versiones anteriores, pero en terminos precisos null es un tipo de dato primitivo y no un objeto.

*/

/*let variable = null;
if (variable === null) {
    console.log("null es un null"); // este es verdadero
} else {
    console.log("null es otro tipo de dato que no es null");
}*/

/*let variable = new String(2);
console.log(typeof variable);

let variable2 = new Boolean("true");
let variable3 = new Array(5);
let variable4 = new Number("45");

console.log(variable2.valueOf());
console.log(variable3.valueOf()); */

/*let variable4 = new Number("45");
let variable4Primitivo = +variable4;

console.log(typeof variable4);*/

/*

Cohercion implicita:
La cohercion implicita en JS es el proceso mediante el cual el motor de JS convierte automaticamente un valor de un tipo de dato a otro en ciertas operaciones. Esto occure cuando se intenta realizar una operacion entre valores de tipos distintos. JS intenta hacer que los tips de datos sean compatibles para realizar la operacion.
Por ejemplo: en una operacion aritmetica como la suma si uno de los operandos es un string y el otro es un numero JS realizara una cohercion implicita convirtiendo el string en un numero antes de realizar la suma.

Ejemplo:

let numero = 10;
let texto = "20";
let resutlado = texto + numero;

console.log(resutlado);*/

/*let autentificar = true;
if(autentificar) {
   console.log("Puedes entrar");
} else {
    console.log("No tienes acceso");
}*/

/*let autentificar = true;

let acceso = autentificar ? "Tienes accesso" : "No tienes acceso";

console.log(acceso);*/

let producto = {
    nombre: "Coca-cola",
    precio: 45,
    presentacion: "3L"
}

let {nombre, precio, presentacion, color} = producto;

console.log(presentacion);
console.log(color.toUpperCase());

// Destructuring ademas de extraer el valor crea una variable