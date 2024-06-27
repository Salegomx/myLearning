// Mi primera promesa

/*let miPromesa = new Promise((gato, reject) => {
    let success = false;

    if (success) {
        gato('Operación exitosa');
    } else {
        reject((function () {
            return "Hubo un error"
        })());
    }
});

miPromesa
    .then((mensaje) => {
        console.log(mensaje);
    })
    .catch((mensajeDeError) => {
        console.log(mensajeDeError);
    })

// Callback hell:

/*function primeraOperacion (callback) {
    setTimeout(() => {
        console.log('Primera operacion completada');
        callback();
    }, 1000);
}

function segundaOperacion (callback) {
    setTimeout(() => {
        console.log('segunda operacion completada');
        callback();
    }, 1000);
}

function terceraOperacion (callback) {
    setTimeout(() => {
        console.log('tercera operacion completada')
        callback();
    }, 1000);
}

primeraOperacion(() => {
    segundaOperacion(() => {
        terceraOperacion(() => {
            console.log('Todas las operaciones han sido completadas')
        })
    })
});*/

// Optimizando callback hell con promesas

/*function primeraOperacion () {
    return new Promise((resolve) => {
        setTimeout(() => {
           console.log('Primera operacion completada')
           resolve();
        }, 1000);
    })
}

function segundaOperacion () {
    return new Promise((resolve) => {
        setTimeout(() => {
           console.log('segunda operacion completada')
           resolve();
        }, 1000);
    })
}

function terceraOperacion () {
    return new Promise((resolve) => {
        setTimeout(() => {
           console.log('tercera operacion completada')
           resolve();
        }, 1000);
    })
}

primeraOperacion()
    .then(() => segundaOperacion())
    .then(() => terceraOperacion())
    .then(() => console.log('Todas las operaciones se han completado'))*/

// Una promesa en JS es un objeto que representa una la resolucion o rechazo de una operacion.
// Las promesas son una forma de manejar operaciones asincronas en JS de manera mas legible, evitando problemas como el callback hell

// Estados de la promesa: Pending: la oeracion no se ha completado. Fulfillled: Cumplida. Reject: Rechazada.

//Metodos principales: then() registra callbacks para manejar los casos en que la promesa se cumple o se rechaza. catch(): registra un callback cuando la promesa se rechaza. finally(): Se ejecuta al final de la promesa sin importar el resultado.

// Practicando promesas
/*let miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
       resolve('La promesa se ha resuelto') 
    }, 1000);
})

miPromesa
    .then((mensaje) => {
        console.log(mensaje)
    })
    .catch((mensajeReject) => console.log(mensajeReject))*/

/*const asincroniaConCallback = (num1, num2, callback) => {
    const resultado = num1 + num2;
    return setTimeout(() => {
       callback(resultado) 
    }, 1000);
}

asincroniaConCallback(5, 23, (resultado) => {
    console.log(resultado)
})*/

/*const asincroniaConPromesa = (num1, num2) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num1 + num2)
        }, 1000);
    })
}

asincroniaConPromesa(5, 23)
    .then(resultado => console.log(resultado))*/