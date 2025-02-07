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

// Estados de la promesa: Pending: la operacion no se ha completado. Fulfillled: Cumplida. Reject: Rechazada.

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

// Crear una promesa que imprima la raiz cuadrada de un numero, despues de 3 segundos debe imprimir el primer numero y despues su raiz cuadrada, despues de tres segundos se imprime otro numero y su raiz y despues de tres segundos otra vez

/*raizCuadrada(5)
    .then((raiz) => {
        console.log(raiz)
    })
    .then(() => {
        raizCuadrada(3)
        
            .then(((raiz) => {
                console.log(raiz)
            }))
    })*/

/*const raizCuadrada = value => new Promise(resolve => setTimeout(() => {
    resolve( {
            value,
            result: value * value 
            }
        );
    }, 3000)
)*/

/*const raizCuadrada = value => {
    if (typeof value !== 'number') {
        return Promise.reject('El dato DEBE ser un numero')
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve( {
                    value,
                    result: value * value 
                }
            )
        }, 3000);
    })
}

raizCuadrada(5)
    .then(obj => {
        console.log(`Valor: ${obj.value}, Resultado: ${obj.result}`)
        return raizCuadrada(3)
    })
    .then(obj => {
        console.log(`Valor: ${obj.value}, Resultado: ${obj.result}`)
        return raizCuadrada(4)
    })
    .then(obj => {
        console.log(`Valor: ${obj.value}, Resultado: ${obj.result}`)
        return raizCuadrada(15)
    })
    .then(obj => {
        console.log(`Valor: ${obj.value}, Resultado: ${obj.result}`)
        return raizCuadrada({})
    })
    .then(obj => {
        console.log(`Valor: ${obj.value}, Resultado: ${obj.result}`)
        return raizCuadrada(3)
    })
    .then(obj => {
        console.log(`Valor: ${obj.value}, Resultado: ${obj.result}`)
        return raizCuadrada('')
    })
    .catch((mensaje) => {
        console.log(mensaje);
    })*/

/*const estudiantes = [
    {
        name: "fulano",
        age: 25
    },
    {
        name: "mengana",
        age: 28
    }
]*/

/*const datos = () => {
    setTimeout(() => {
        return estudiantes
    }, 50);

    return estudiantes
}*/

/*let datos = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(() => estudiantes);
        }, 50);
    });
}

datos()
    .then(estudaintes => console.log(estudiantes))*/

/*function firstOperation(callback) {
    setTimeout(() => {
        console.log("Primera operación completada");
        callback();
    }, 1000);
}
function secondOperation(callback) {
    setTimeout(() => {
        console.log("Segunda operación completada");
        callback();
    }, 1000);
}
function thirdOperation(callback) {
    setTimeout(() => {
        console.log("Tercera operación completada");
        callback();
    }, 1000);
}
    // Uso de callbacks anidados (callback hell)
firstOperation(() => {
    secondOperation(() => {
        thirdOperation(() => {
            console.log("Todas las operaciones completadas");
        });
    });
});*/

/*let operation1 = ()=>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve()
            console.log('Primera operacion completada');
        }, 1000);
    })
}
let operation2 = ()=>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve()
            console.log('Segunda operacion completada')
        }, 1000);
    })
}
let operation3 = ()=>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve()
            console.log('Tercera operacion completada')
        }, 1000);
    })
}

operation1()
    .then(() => operation2())
    .then(() => operation3())*/

/*let raizCuadrada = (value) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                value,
                result: value * value
            })
        }, 1000);
    })
}

raizCuadrada(5)
    .then((result)=>{
        console.log(result)
        return raizCuadrada(15)
    })
    .then((result)=>{
        console.log(result)
    })*/

// Crear dos promesas. La primera ejecutará a la segunda. Debe tener un retraso de 2s y va a imprimir solo texto

/*const promesa1 = function() {
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve(console.log('Primera promesa cumplida'));
        }, 2000);
    })
}

const promesa2 = function() {
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve(console.log('Segunda promesa cumplida'))
        }, 2000);
    })
}

promesa1()
    .then(()=>promesa2())*/

// Crear una funcion que retorne una promesa que despues de 2s cuent cuantos caracteres tiene una palabra dada y debe decir si tiene mas de 10 o menos de 10 chars.

/*const masDeDiez = (string) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            if(string.length < 10) {
                resolve('La palabra tiene menos de 10 caracteres')
            } else {
                reject('La palabra tiene más de 10 caracteres')
            }
        }, 2000);
    } )
}

masDeDiez('Parangaricutirimicuaro')
    .then(result=>console.log(result))
    .catch(err=>console.log(err))*/

// Crear una promesa que procese un objeto. Ese objeto se debe convertir a JSON. Una vez convertido a JSON, el JSON se debe convertir de nuevo a objeto.

/*const masDeDiez = (string) => {
    let thisJson = {};

    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            if(string.length < 10) {
                resolve((function(){
                    thisJson.response = 'La palabra tiene menos de 10 caracteres';
                    thisJson.status = true;
                    JSON.stringify(thisJson);
                    return thisJson
                })())
            } else {
                reject((function(){
                    thisJson.response = 'La palabra tiene más de 10 caracteres';
                    thisJson.status = false;
                    JSON.stringify(thisJson);
                    return thisJson
                })())
            }
        }, 2000);
    } )
}

masDeDiez('Parangaricutirimicuaro')
    .then(result=>console.log(result))
    .catch(err=>console.log(err))*/

// Segunda solucion:
/*const masDeDiez = (string) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            if(string.length < 10) {
                let data = {
                    'respuesta': 'ok'
                };
                resolve(JSON.stringify(data))
            } else {
                reject('La palabra tiene más de 10 caracteres')
            }
        }, 2000);
    } )
}

masDeDiez('Paranga')
    .then(result=>result)
    .then(result=>{
        const data = JSON.parse(result)
        console.log(data)
    })
    .catch(err=>console.log(err))*/

// Crear una promesa que reciba un numero y que al ejecutarse (la promesa) se le sume 5 y despues muestre el resultado

/*const masCinco = function(num) {
    return new Promise(resolve=>{
        resolve(num)
    })
}

masCinco(10)
    .then(result=>console.log(result + 5))*/

/*const masCinco = Promise.resolve(10);

//console.log(masCinco)

masCinco
    .then(result=>result + 5) // Almacena el resultado
    .then(result=>Promise.resolve(result + 5)) // Sigue almacenando el nuevo resultado
    .then(result=>console.log(result))*/ // Imprime el resultado final

/*const masCinco = Promise.resolve(10);

masCinco
    .then(result=>result + 5) // Almacena el resultado
    .then(result=>Promise.resolve(result + 5)) // Sigue almacenando el nuevo resultado
    .then(result=>Promise.reject('Error! Algo salió mal')) // El hecho de tener un reject() hace que se trate como un error
    .then(result=>console.log('Esto no se va a ejecutar'))
    .catch(error=>console.log(error))*/

// Crear una function que retorne una promesa y que tenga un retraso de 2s. Ejecutar la promesa pasanadole un numero al que despues se le sumara el numero 7.
// Despues de dos segundos se debe ejecutar el primer valor y dos segundos despues el valor + 7.

/*const masSiete = function(num) {
    return new Promise(resolve => {
        setTimeout(() => {
            //console.log(num)
            resolve(num)
        }, 2000);
    })
}

masSiete(5)
    .then(result => {
        console.log(result)
        return masSiete(result + 7)
    })
    .then(result => console.log(result))*/

/*const estudiantes = [
    {
        name: "fulano",
        age: 25
    },
    {
        name: "mengana",
        age: 28
    }
]
const datos = () => {
    setTimeout(() => {
        return students
        //hay un retrazo pequeñisimo, pero el console.log se ejecuta al instante
    }, 50);
    
    return estudiantes
}
console.log(datos())
//sale "undifine" porque hay un retrazo al usar el setTimeout, y el console.log se ejecuta al instante
//POR LO TANTO, AUN NO TIENE LOS DATOS DE LA EJECUCION y por eso sale undifine
//Si quitas el setTimeout, si te muestra los datos
console.log(datos())*/

/*const estudiantes = [
    {
      name: "fulano",
      age: 25
    },
    {
      name: "mengana",
      age: 28
    }
]
const datos = () => {
    return new Promise( (resolve,reject) => {
        setTimeout(() => {
            resolve(estudiantes) 
            //hay un retrazo pequeñisimo, pero el console.log se ejecuta al instante
        }, 50);
    })
}
datos()
    .then( (datos)=>{
      console.log(datos)
    })*/

/*fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then((json) => {
        let paises = json
        console.log(paises)
    })*/