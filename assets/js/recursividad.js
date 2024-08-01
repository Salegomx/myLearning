// Recursividad:

// Es una tecnica donde una funcion se llama a si misma para resolver un problema, es util para resolver subproblemas que pueden resolverse de forma similar
// La clave es definir correctamente una CONDICION base que detenga la recursion (Puede ser un if)

// Consta de dos elementos, la condicion base y el caso recursivo.

// La primera es lo que detiene la recursion sin ella la funcion se llama de forma indefinida y causa un stack overflow
// El caso recursivo: es la parte de la funcion en al que se llama a si misma con un subproblema mas pequeño.

// Consideraciones:

// 1. Eficiencia 2. Stack overflow 3. Legibilidad

// La recursion puede ser menos eficiente que las soluciones iterativas debido al consumo de memoria de la pila de llamadas.

// Sin una CONDICION base correcta, una funcion recursiva puede causar un stack overflow bloqueando el programa.

// La recursion puede hacer el codigo mas legible y elegante, especialmente para problemas que son naturalmente recursivos (como recorrer estructuras de datos gerarquica).

// Factorial de 5:
/*const factorial = (numero, numeroAnterior) => {
    let resultadoActual = numero * numero;
    let siguienteNumero = numero - 1;
    if (siguienteNumero === 0) return
    factorial(siguienteNumero, resultadoActual);
}

console.log(factorial(5, null));*/

/*const factorial = (numero) => {
    for (let i = numero; i <= 0; i--) {
        return numero * i;
    }
}

console.log(factorial(5))*/

/*const factorial = (n) => {
    if (n === 0) return 1
    // Caso recursivo: n! = n * (n - 1)
    return n * factorial(n - 1)
}

console.log(factorial(4))*/

// Sumar todos los elementos de un array
const sumarArray = (array) => {
    array.length
    if (array.length === 0) return 0
    //sumarArray(/* Parametro */)
    return array[0] + sumarArray(array.slice(1))
}

console.log(sumarArray([5, 20, 40, 27, 16]))