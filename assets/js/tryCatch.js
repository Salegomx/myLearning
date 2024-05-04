/*try {
    console.log(dato)
} catch (error) {
    console.log('El catch captura el error')
}*/

/*try {
    console.log('hola')
} catch (error) {
    console.log('El catch captura el error')
} finally {
    console.log('finally siempre se ejecutara')
}*/

// El codigo siempre se ejecutara hasta el momento en que haya un error, en ese momento se ejecuta el catch

/*try {
    console.log('dato')
    console.log(dato)
    console.log('segundo mensaje despues del try')
} catch (error) {
    console.log('El catch captura el error')
} finally {
    console.log('finally')
}*/

// Ejercicio imprimiendo un error en consola, el catch imprimer el error en vez de que lo muestre el navegador

/*try {
    clientes()
} catch (error) {
    console.log(error)
} finally {
    console.log('finally')
}

function clientes() {
    console.log('descargando...')
    setTimeout(function () {
        console.log('Completado');
    }, 5000)
}

let clientes = () => {
    console.log('descargando')
    setTimeout(function () {
        console.log('Completado');
    }, 5000)
}*/

// Personalizando el mensaje de error

/*try {
    let numero = 'hola';
    if (isNaN(numero)) {
        throw new Error ('El caracter no es un numero')
    };
    console.log(numero * numero);
} catch (error) {
    console.log(`Algo salio mal ${error}`);
} finally {
    console.log('finally')
}*/

// La destructuracion fue creada para no tener que nombrar el espacio de memoria de una array

/*const numero = [1, 2, 3];

//console.log(numero[0], numero[1], numero[2]);

//console.log(typeof numero[0]);

const [posicion1, posicion2, posicion3] = numero;

console.log(posicion3);*/

// Destructuracion de objeto

/*let objeto = {
    a: 'Este dato es a',
    b: 'Este dato es b'
}

let {a, b} = objeto;

console.log(a)*/