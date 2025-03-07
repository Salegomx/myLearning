// ASYNC AWAIT

// Funciones asincronas
// - Las promesas asincronas NO vienen a sustituir a las  promesa, sino que trabajan en conjunto
// - Las funciones asincronas van a esperar a que algo se cumpla parra poder seguir ejecutando el proceso que estamos trabajando
// - Una funcion "async" siempre va a devolver una promesa
// - async await se puede usar en conjunto con als promesas
// - El aync await nos evita usar muchos .then() y no tener problemas con als llaves (del .then())

// NO es un reemplazo de las promesas
// Las promesas SI vinieron a reemplazar a los callbacks, pero el aync await NO reemplaza a las promesas sino que trabajan en conjunto

// Funcion tradicional VS async await
/*function traditionalFn() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response=>response.json())
        .then(response=>console.log('Consumiendo API con fecth()', response))
        console.log('Hola mundo')
}

traditionalFn()*/

/*async function asyncFn() {
    await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response=>response.json())
        .then(response=>console.log('Consumiendo API con fecth()', response))
        console.log('Hola mundo')
}

asyncFn();*/

/*async function getTheAnswer() {
    return 42
}*/

//let answer = getTheAnswer();
//answer.then(answer=>console.log(answer));
//console.log(answer)

/*async function logAnswer() {
    let answer = await getTheAnswer();
    console.log(answer)
}

logAnswer()*/

// Para el manejo de errores, lo que nos conviene es trabajar un bloque try catch

/*async function getArticleById(id) {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    if (!response.ok) {
        throw 'Algo salio mal'
    }
    let data = await response.json();
    console.log(data)
}

getArticleById(200)*/

// Transofrmando una promesa a asyn await

function getUser(id) {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response)=>{
        if (response.ok) {
            return response.json()
        }
        throw "Ocurrió un error";
        
    }).then((data)=>{
        console.log(data)
    }).catch((error)=>{
        console.log(error)
    })
}
getUser(3)

async function getAsyncUser(id) {
    let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!response.ok) throw 'Ocurrio un error';
    let data = await response.json();
    console.log(data);
}
getAsyncUser(4)