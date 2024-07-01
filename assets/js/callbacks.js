// Los callbacks son funciones que podemos pasar como parametro a otra funcion

/*document.querySelector('#btn').addEventListener('click', () => {
    console.log('Has dado click y se ha activado la funcion callback que dispara este console.log')
})*/

/*function fecha () {
    document.getElementById('fecha').addEventListener(
        this.innerHTML = Date();
    )
}*/

/*document.getElementById('fecha').addEventListener('click', () => {
        alert('Hola mundo');
    }
);*/

// Las dos funciones se ejecutan en el mismo click
/*let x = document.getElementById('dosFunciones');
x.addEventListener('click', funcion1);
x.addEventListener('click', funcion2);

function funcion1() {
    console.log('Soy la primera funcion');
}

function funcion2() {
    console.log('Me ejecuto después de la funcion 1');
}

console.log(x);*/

// Imprimir texto en el HTML
/*let x = document.getElementById('variasFunciones');
x.addEventListener('mouseover', myFunction);
x.addEventListener('click', mySecondFunction);
x.addEventListener('mouseout', myThirdFunction);

function myFunction() {
    document.getElementById('imprimir').innerHTML += 'El cursor está sobre mi <br>';
};

function mySecondFunction() {
    document.getElementById('imprimir').innerHTML += 'He dado click <br>';
}

function myThirdFunction() {
    document.getElementById('imprimir').innerHTML += 'He quitado el cursor de encima del boton <br>';
}*/

// Imprimiendo el tamaño del navegador
/*window.addEventListener('resize', () => {
        let width = window.innerWidth;
        let height = window.innerHeight;

        document.getElementById('medidasNavegador').innerHTML = 'Width: ' + width + 'px. ' + 'Height: ' + height + 'px';
    }
);*/

/*(function () {
    let width = window.innerWidth;
    let height = window.innerHeight;

    document.getElementById('medidasNavegador').innerHTML = 'Width: ' + width + 'px. ' + 'Height: ' + height + 'px';
})();*/

// Boton para sumar
/*let a = 5;
let b = 16;

document.getElementById('suma').addEventListener('click', () => {
    miFuncion(a, b);
});

function miFuncion(a, b) {
    document.getElementById('suma1').innerHTML = a + b;
}*/

/*document.getElementById('suma').addEventListener('click', () => {
    let a = 5;
    let b = 16;
    
    document.getElementById('suma1').innerHTML = a + b;
});*/

/*function uno(dos) {
    setTimeout(() => {
        console.log('primero');
        dos();
    }, 3000);
    
}

function dos() {
    console.log('segundo');
}

uno(dos);*/

/*function suma (a, b) {
    console.log(a + b);
}

function resta (a, b) {
    return a - b;
}

suma(10, resta(15, 10));*/

/*let obtenerPost = (usuario, callback) => {
    console.log(`Obteniendo los post de ${usuario}`);
    setTimeout(() => {
        let posts = ['post1', 15, {nombre: 'Juan', correo: 'juan@gmail.com'}]
        callback(posts[2].correo);
    }, 3000);
}

obtenerPost('Pedro', (post) => {
    console.log(post)
})*/

/*document.getElementById('divUno').addEventListener('click', () => {
    alert('Has clickeado el div uno');
}, false)

document.getElementById('divDos').addEventListener('click', () => {
    alert('Has clickeado el div dos');
}, true)

document.getElementById('parrafoUno').addEventListener('click', () => {
    alert('Has clickeado el parrafo uno');
}, false)

document.getElementById('parrafoDos').addEventListener('click', () => {
    alert('Has clickeado el parrafo dos');
}, true)*/

//let nombres = ["pepe", "Marcelo", "Antonio", "Luis"];

/*nombres.forEach((nombre) =>{
    console.log(nombre);
});*/

/*function forSergio(callback) {
    for (let i = 0; i < .lenght; i++) {
        callback()
    }
}*/

/*const bucleSergio = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        const elemento = array[i];
        callback(elemento);
    }
}

bucleSergio(nombres, (nombre) => {
    console.log(nombre)
})*/

/*const miPropioForEach = (array,callback) =>{
    for (let i= 0; i < array.length; i++) {
      const element = array[i];
      callback(element);
    }
  }*/

/*miPropioForEach(nombres,(nombre)=>{
    console.log(nombre)
  })*/

/*Tarea: 
  que hace el codigo?
*/
  /*const tareaSimple = (tarea) => console.log(tarea);

    const tareaPesada = (tarea) =>{
        console.log(`Empezando tarea ${tarea}...`)
        //el for solo es para que calcule y se tarde mucho
        for (let i = 0; i < 100000000; i++) {
            Math.random() - Math.random() * Math.random();
        }
        console.log(`Tarea ${tarea} terminada`);
    }

    const tareaFulanito = (tarea,callback,tiempo) =>{
        console.log(tarea);
        setTimeout(callback, tiempo);
    }

    const laboresYoutuber = [
        () => tareaSimple("escribir un guión"),
        () => tareaFulanito("hacer una imagen miniatura para el video",()=>tareaSimple("revisar miniatura"),3000),
        () => tareaPesada("grabar el vídeo"),
        () => tareaFulanito("Editar el vídeo",()=>tareaSimple("revisar el vídeo"),5000)
    ];

    for (const labor of laboresYoutuber) {
        labor()
    }*/


/*
    escribir un guión
    hacer una imagen miniatura para el video
    Empezando tarea grabar el video
    Tarea grabar el video terminada
    Editar el video
    revisar miniatura
    revisar el video
*/

// Un call back que reciba dos valores y uno de los valores sea mi nombre

/*let obtenerDatos = (nombre, callback) => {
    callback(nombre);
}

obtenerDatos('Sergio', (nombre) => {
    console.log(`Obteniendo datos de ${nombre}`)
})*/

// Tarea: crear cuenta de codewars

// Funcion map (recibe hasta 4 parametros) elemento, indice, array original
// Crea un nuevo array con los resultados de la funcion pasada como parametro

/*let numeros = [5, 20, 2024, 25, 42];

const multiplicacion = numeros.map((numero)=>{
    return numero * 2;
});

console.log(multiplicacion);*/

/*let numeros = [5, 20, 2024, 25, 42];

const multiplicacion = numeros.map((numero, indice)=>{
    console.log('Elemento: ', numero);
    console.log('Indice: ', indice);
    //console.log('Array: ', array);

    return numero * 2;
});

console.log(multiplicacion);*/

/*let multiplicador = {factor: 3};
let numeros = [5, 20, 2024, 25, 42];

const resultado = numeros.map(function (numero) {
    //console.log(this)
    return numero * this.factor;
}, multiplicador);

console.log(resultado);*/

// funcion callback que sume dos digitos

/*let sumador = (num1, num2, callback) => {
    callback(num1, num2);
}

sumador(2, 4, (num1, num2) => {
    console.log(num1 + num2);
})*/

/*let imprimir = (nombre,callback) => {
    callback(nombre);
}

imprimir('fulanito',(nombre)=>{
    console.log(`Hola ${nombre}`);
})*/

/*let getUsers = () => {
    setTimeout(() => {
        let users = [{id:1,nombre:"Sergio"},{id:2,nombre:"ivan"}];
        return users;
    }, 500);
}

let users = getUsers();

console.log('users: ', users )*/

// Callbacks asincronos

/*let getUsers = (callback) => {
    setTimeout(() => {
        let users = [{id:1,nombre:"Sergio"},{id:2,nombre:"ivan"}];
        callback(users);
    }, 500);
}

getUsers((users)=>{
    console.log('users: ', users );
});*/

/*let parrafo = document.getElementById('resultado');

let sumar = (num1, num2, callback) => {
    let resultado = num1 + num2;
    callback(resultado)
}

sumar(4, 5, (resultado)=>{
    parrafo.textContent = resultado;
});*/

// Debe recibir objetos y funciones y recorrerlos
// si no recibe un objeto o una funcion debe mostrar error
// cada objeto o dato del objeto debe agregarse a un array

/*let funcionCallback = (...params) => {
    for(let i = 0; i < params.length; i++) {
        if (typeof params[i] !== 'object') {
            return console.log('No has pasado un objeto como parametro');
        } else if (typeof params[i] !== 'function') {
            return console.log('No has pasado una funcion como parametro');
        } else {
            console.log(params[i]);
        }
    }
}

funcionCallback({});*/

/*let usuarios = [];

let logeo = (data) => {
    if ('strings' == typeof data) {
        return console.log(data);
    }
    if ('object' == typeof data) {
        for (const key in data) {
            console.log(key + ': ' + data[key]);
        }
    }
}

let ingresar = (input, callback) => {
    usuarios.push(input);
    if ('function' == typeof callback) {
        callback(input.nombre, input.tecnologia);
    } else {
        console.log('El dato ingresado no es una funcion')
    }
}

ingresar({nombre: 'Sergio', tecnologia: 'Javascript'}, (nombre, tecnologia)=>{
    console.log('nombre: ' + nombre, 'Tecnologia: ' + tecnologia);
});*/

/*let primeraOperacion = (callback) => {
    setTimeout(() => {
        console.log('Primera operacion completada');
        callback();
    }, 1000);
}

let segundaOperacion = (callback) => {
    setTimeout(() => {
        console.log('segunda operacion completada');
        callback();
    }, 1000);
}

let terceraOperacion = (callback) => {
    setTimeout(() => {
        console.log('tercera operacion completada');
        callback();
    }, 1000);
}

primeraOperacion(()=>{
    segundaOperacion(()=> {
        terceraOperacion(()=>{
            console.log('Todas las operaciones han sido completadas')
        });
    })
});*/

/*let operaciones = (callback, time) => {
    return new Promise((resolve)=>{
        resolve(()=>{
            setTimeout(() => {
                callback()
            }, time);
        })
    })
}

operaciones(()=>{
    console.log('Primera operacion completada')
}, 1000)

    .then(()=>{
        console.log('Segunda operacion completada')
    }, 1000)

    .then(()=>{
        console.log('Tercera operacion completada')
    }, 1000)

    .finally(()=>{
        console.log('Todas las operaciones se han completado')
    }, 0);*/

/*let primeraOperacion = () => {
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log('Primera operacion completada')
            resolve();
        }, 1000);
    })
}

let segundaOperacion = () => {
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log('segunda operacion completada')
            resolve();
        }, 1000);
    })
}

let terceraOperacion = () => {
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log('tercera operacion completada')
            resolve();
        }, 1000);
    })
}

primeraOperacion()

    .then(()=>segundaOperacion())

    .then(()=>terceraOperacion())

    .then(()=>console.log('todas las operaciones fueron completadas'))
*/
// Codigo a arreglar:

/*function firstAction() {
    console.log("I'm the first action")
    setTimeout(callback,5000)
  }
  
  function secondAction() {
    console.log("I'm the second action")
  }
  
  setTimeout(,3000);*/

// Codigo arreglado:

/*function firstAction(callback) {
    setTimeout(()=> {
        console.log("I'm the first action")
        callback()
    },5000)
    
}
    
function secondAction() {
    setTimeout(()=>console.log("I'm the second action"),3000);
}
    
firstAction(secondAction);*/
