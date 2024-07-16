// let array = [5, 6, 7, 23, 43, 20];

/*const encontrar = array.find(element => element > 10);

console.log(encontrar);*/

// El metodo find no modifica el array
// No ejecuta la funcion para elementos sin valor (arrays vacios)
// Detiene la ejecucion en cuanto un elemento cumple la condicion y no revisa el resto del array

/*const inventario = [{nombre: 'Fresa', cantidad: 20}, {nombre: 'Platano', cantidad: 25}, {nombre: 'Manzana', cantidad: 15}];

const resultado = inventario.find(objeto => objeto.nombre === 'Pera');

console.log(resultado)*/

// array.find(callback[,index[,array]])[,thisArg]

// Find toma un callback que toma hasta tres argumentos, el primero (element) es obligatorio
// Index es el segundo argumento, es opcional y es el indice del elemento actual del array
// array el tercer argumento, también opcional, es el array original
// thisArg es otro valor opcional que se usa como la palabra this al ejecutar el callback

/*const encontrar = array.find((elem, index, array) => {
    console.log('Elemento actual: ', elem);
    console.log('Indice actual: ', index);
    console.log('Array completo: ', array);
    return elem > 10
});

console.log('Elemento encontrado: ', encontrar);*/