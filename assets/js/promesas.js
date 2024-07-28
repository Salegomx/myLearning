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

// Callback hell vs promesas:

/*const posts = [
    {
        userID: 1,
        id: 1,
        title: 'lorem ipsum 1',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime dolorem facere rerum doloribus architecto soluta molestiae doloremque, dignissimos saepe eaque ea eum vero cupiditate sed esse voluptates officia ut perspiciatis?'
    },
    {
        userID: 1,
        id: 2,
        title: 'lorem ipsum 2',
        body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non nemo, debitis aspernatur sed minus eaque repellendus velit, placeat aut sequi optio nam dolorum laborum minima, dolore reprehenderit odio eos? Culpa!'
    },
    {
        userID: 1,
        id: 3,
        title: 'lorem ipsum 3',
        body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore aspernatur eligendi doloremque at eius, ex asperiores repellat omnis reprehenderit, sed, facere ea dolores quos quis quo ad sequi aliquam vel!'
    }
];*/

/*const encontrarPostPorId = (id, callback) => {
    const post = posts.find( item => item.id === id );
    if (post) {
        callback(null, post);
    } else {
        callback('El ID ' + id + ' no existe');
    }
}*/

// Ejemplo de ejecucion con callback hell:

/*encontrarPostPorId( 1, (error, post) => {
    if (error) return console.log(error);
    console.log(post);
    encontrarPostPorId(2, (error, post) => {
        if (error) return console.log(error);
        console.log(post);
        encontrarPostPorId(3, (error, post) => {
            if (error) return console.log(error);
            console.log(post);
            encontrarPostPorId(4, (error, post) => {
                if (error) return console.log(error);
                console.log(post);
            })
        })
    })
})*/

// Ejemplo de ejecucion con promesas:

/*const findPostById = (id) => {
    const post = posts.find( item => item.id === id);
    return new Promise((resolve, reject) => {
        if (post) {
            resolve( post )
        } else {
            reject('El post con el ID: ' + id + ' no se ha encontrado')
        }
    })
}

findPostById(1)
    .then((post) => {
        console.log(post);
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log('Termina el programa')
    })*/