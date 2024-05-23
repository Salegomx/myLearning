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

document.getElementById('divUno').addEventListener('click', () => {
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
}, true)