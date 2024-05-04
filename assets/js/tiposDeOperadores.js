// Operadores Aritmeticos.

// Suma +, Resta -, Multiplicacion *, Division /, Modulo %, Agrupacion ()

// Jerarquia de operadores:
// 1. Se realiza primero lo que esta entre ( )
// 2. Potenica y raiz
// 3. Multiplicacion y division
// 4. Suma y resta

/*console.log(5 + 5); // 10
console.log(5 + 5 - 10); // 0
console.log(5 + (5 - 10)); // 0
console.log(5 - (10 + 15 - 20) - 8); // -8
console.log(3 - 5 + (18 - 28 + 36) - (-36 + 48 - 56)); // -68
console.log(7 + 8 - 26 - (-36 + 45 - 56) - (-80 + 50)); // 66
console.log((-20 + 16) - 4 + (-40 - 26) - (-36 - 48 - 50)); // 60
console.log(20 + 100 -35 + (-36 + 8 + 4) - (-24 + 12) + (-12 - 24)); // 37*/

// Operadores relacionales

// Mayor >, Menor <, Mayor o igual >=, Menor o igual <=, Diferente !=, Super diferente !==
// Diferencia entre = (asignacion), == (evalua el valor) y === (evalua el valor y el tipo de dato). 
// TIP: la buena practica siempre debes usar el ===

/*console.log(8 > 10); // false
console.log(9 > 8); // true
console.log(9 >= 8); // true
console.log(7 < 7); // false
console.log(7 <= 7); // true
console.log(7 >= '7'); // true
console.log(0 == true); // false
console.log(0 === true); // false
console.log(7 === '7'); // false
console.log(0 === true); // false
console.log(1 === true); // false
console.log('2' > '12'); // true
console.log('2' > []); // true
console.log('2' > {}); // false JS intenta convertir el objeto a un dato primitivo
console.log('2' > NaN); // false No hay forma de hacer una comparación
console.log('2' > false); // true
console.log('2' > true); // true
console.log('0' > true); // false*/

/*let i = 5;
console.log(i += 10);

let j = 20;
console.log(j -= 10);*/

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