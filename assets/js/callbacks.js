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