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

// Otra forma de crear una promesa y consumirla (Promesa anonima)
/*new Promise((resolve, reject) => {
    const numero = Math.random();
    if (numero < 0.5) {
        reject('El numero es menor a 0.5')
    } 
        resolve('El numero es mayor a 0.5')
}).then(result=>console.log(result)).catch(error=>console.log(error))*/

/*/fetch('https://jsonplaceholder.typicode.com/ussers')
    .then(response=>console.log(response))*/

/*********************/
/*** MALA PRACTICA ***/
/*********************/

// Crear una funcion que retorne una promesa.
/*let getWeather = function() {
    return new Promise((resolve, reject) => {
        reject('Sunny')
    })
};

let miPromesa = getWeather();
    miPromesa.then(result=>console.log(`First param ${result}`),data=>console.log(`Second param ${data}`))*/

// reestructurando la mala practica
/*let getWeather = function() {
    return new Promise((resolve, reject) => {
        reject('Sunny')
    })
};

let onSuccess = function(param) {
    console.log(`First Param ${param}`)
}

let onError = function(param) {
    console.log(`Second Param ${param}`)
}

getWeather()
    .then(onSuccess,onError)*/

// Ejecutando promesas para obtener el clima y un icono
/*const getWeather = function() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Cloudy')
        }, 1000);
    }) 
}

const getWeatherIcon = function(weather) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            switch (weather) {
                case 'Sunny':
                    resolve('☀️')
                    break;
                case 'Cloudy':
                    resolve('☁️')
                    break;
                case 'Rainy':
                    resolve('🌧️')
                    break;
                default:
                    reject('Icon not found')
            }
        }, 1000);
    })
}*/

// Mi solucion
/*let onSuccess = function(param) {
    getWeatherIcon(param)
        .then(icon=>console.log(icon))
}

let onError = function(param) {
    getWeatherIcon(param)
        .catch(error=>console.log(error))
}

getWeather()
    .then(result=>result)
    .then(onSuccess)
    .catch(onError)*/
// Profe rick:
/*let onSuccess = function(param) {
    console.log(`Success ${param}`)
}

let onError = function(param) {
    console.log(`Error ${param}`)
}

getWeather()
    .then(getWeatherIcon)
    .then(onSuccess,onError)*/

// JSON placeholder
/*fetch('https://jsonplaceholder.typicode.com/users')
    .then(x=>x.json())
    .then(x=>console.log(x))*/

/*
    Primero se ejecuta funUno(), que es un reject, por lo tanto se ejecutará EL SEGUNDO PARAMETRO DEL PRIMER .then() que es onError().
    En el primer .then() se ejecuta la funcion onError() que espera un dato en un parametro, el parametro data recibirá el 404 que esta dentro del reject.
    Después de todo eso, se ejecuta el segundo .then()porque el error no lo hicismo con un .catch(), sino con un .then() ENTONCES NO SE DETIENE.
    SI TODO ESTÁ CORRECTOEN LA FUNCION UNO SE EJECUTA LA FUNCION DOS EN EL PRIMER .then() Y EL TEXTO DENTRO DEL RESOLVE SE VA A PASAR COMO PARAMETRO EN LA FUNCION onSuccess()
*/

/*let funUno = function() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve('404')
        }, 1000);
    })
}

let funDos = function() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve('Resuelto')
        }, 1000);
    })
}

let onSuccess = function(param) {
    console.log(`Success ${param}`)
}

let onError = function(param) {
    console.log(`Error ${param}`)
}

funUno()
    .then(funDos)
    .then(onSuccess)
    .then(onError)*/

/*let funUno = function() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            reject('404')
        }, 1000);
    })
}

let funDos = function() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve('Resuelto')
        }, 1000);
    })
}

let onSuccess = function(param) {
    console.log(`Success ${param}`)
}

let onError = function(param) {
    console.log(`Error ${param}`)
}

funUno()
    .then(funDos,onError)
    .then(onSuccess)
    //.then(onError)
    .catch(onError)*/

/**********************/
/*** /MALA PRACTICA ***/
/**********************/

/*fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.text())
    .then(param=>console.log(param))*/

//  Transormar callbacks en promesas y  asegurarse que se ejecuten en orden
/*( function () {
    function getUsers() {
        setTimeout(() => {
        console.log("Users are ready!!")
        }, 3000);
    }
    function getProjects(params) {
        setTimeout(() => {
        console.log("Projects are ready!!")
        }, 1000);
    }
    function getIssues(params) {
        setTimeout(() => {
        console.log("Issues are ready!!")
        }, 2000);
    }
    
    getUsers();
    getProjects();
    getIssues();
} )()*/

/*( function() {
    const getPromiseUsers = function() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Users are ready')
                resolve()
            }, 3000);
        })
    }
    const getPromiseProjects = function() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Projects are ready')
                resolve()
            }, 1000);
        })
    }
    const getPromiseIssues = function() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Issues are ready')
                resolve()
            }, 2000);
        })
    }

    // Mi solucion
    getPromiseUsers()
        .then(result=>{
            console.log(result)
            getPromiseProjects()
                .then(result=> {
                    console.log(result)
                    getPromiseIssues()
                        .then(result=>console.log(result))
                })
        })

    // Optimizacion
    getPromiseUsers()
        .then((response)=>{
            return getPromiseProjects()
        })
        .then(getPromiseIssues)
        .catch(err=>console.log('Ocurrio un error'))

})()*/

//Crear dos funciones que retornen promesas. Cada una con un retraso de 2s. La primer promesa deberá ejecutar a la segunda y la seungda funcion debe devolver un texto que diga 'Hola mundo'
/*const promesaUno = function() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(promesaDos())
        }, 2000);
    })
}

const promesaDos = function() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Hola mundo')
        }, 2000);
    })
}

promesaUno()
    .then(response=>console.log(response))*/

/*function traditionalFn() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response=>response.json())
        .then(data=>console.log('Traditional fetch', data));
    console.log('Traditional message')
}
traditionalFn()*/

// Crea dos funciones que retornen una promesa. La primer funcion al ejecutarse debe retornar un objeto (telefono{color, brand}) con dos parametros cada uno.
// Pero al ejecutarse ese objeto que retorno debe usarse como valor en la ejecucion de la segunda funcion, y esa segunda funcion debe escribir un texto y concatenar algun parametro

/*const promesaUno = function () {
    return new Promise((resolve, reject)=>{
        let telefono = {color: 'Rojo', brand: 'Samsung'}
        resolve(telefono)
    })
}

const promesaDos = function (telefono) {
    const {brand, color} = telefono;
    return new Promise((resolve, reject)=>{
        resolve(`Gracias por comprar tu ${brand} ${color}`)
    })
}

promesaUno()
    .then(promesaDos)
    .then(response=>console.log(response))*/

/*const mostrarTelefono = function(mensaje) {
    return new Promise((resolve, reject) => {
        if (mensaje) {
            resolve('Obtuviste un ' + mensaje.brand)
        } else {
            reject('Error')
        }
    })
}

const miPromesa = function() {
    return new Promise((resolve, reject) => {
        let tarea = true;
        if (tarea === true) {
            let phone = {
                color: 'Amarillo',
                brand: 'Apple'
            }
            resolve(phone)
        } else {
            reject('No obtuviste un iPhone')
        }
    })
}

miPromesa()
    .then(mostrarTelefono)
    .then(response=>console.log(response))*/

/*Promise.all([
    fetch('https://jsonplaceholder.typicode.com/users'),
    fetch('https://jsonplaceholder.typicode.com/posts')
]).then(responses=>{
    return Promise.all(responses.map(response=>{
        return response.json()
    }))
}).then(data=>console.log(data))*/

/*******************/
/** EJERCICIO 23 ***/
/*******************/
// Crea dos funciones que retornen una promesa cada una, ejecuta una promesa que te diga si existe un id y que te diga si existe el numero de telefono y la persona.
/*let usuarios = [
    {
        id: 1,
        nombre: 'fulanito'
    },
    {
        id: 2,
        nombre: 'sotano'
    }
]

let telefonos = [
    {
        id: 1,
        telefono: 5123456789
    },
    {
        id: 2,
        telefono: 9876543210
    }
]

const getId = function(id) {
    return new Promise((resolve, reject) => {
        let userFound = usuarios.find((obj)=>obj.id == id);
        let telephoneFound = telefonos.find((obj)=>obj.id == id);

        if (userFound && telephoneFound) {
            resolve('ID: '+ id + userFound + telephoneFound)
        } else {
            reject('ID no encontrado')
        }
    })
}

const getInfo = function(id) {
    return new Promise((resolve, reject) => {
        //resolve(`Nombre: ${}, Telefono: ${}`)
    })
}

getId(1)
    .then(res=>console.log(res))*/