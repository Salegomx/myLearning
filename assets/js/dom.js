/*function saludar() {

}*/

/*var nuevaVentana = window.open("https://www.google.com", "nuevaVentana", "width=400, heigth=300");

nuevaVentana.open();*/

// console.log(window.document); - Imprime el documento en la consola

// console.log(window); - Imprime el objeto window que contiene todas las funciones de JS

// console.log(document); - Es igual que poner window.document

// console.log(document.documentElement) - Es igual a document y window.document

// let doc = document.documentElement; Asignando un elemento a una variable

// let doc = document.documentElement;

// console.log(doc.outerHTML) outherHTML contiene todo el archivo HTML que muestra el navegador

// console.log(document.head); Puedes seleccionar partes especificas del HTML

// console.log(document.body); Puedes seleccionar directamente el body

// console.log(document.doctype); Muestra el tipo de documento con el que estas trabajando

// console.log(document.charset); Muestra el tipo de caracteres que puedes usar que por default es UTF-8

// console.log(document.links); Muestra los links en el HTML

// Tarea: crear una cuenta de gitlab y subir este mismo repositorio

// console.log(document.title); Imprime el titulo del documento

// console.log(document.images); Imprime las imagenes contenidas en el documento

// console.log(document.forms); Imprime etiquetas form en el documento

// console.log(document.styleSheets); Imprime las propiedades de el archivo CSS

// El DOM es una API que tiene JS para interpretar documentos HTML y XML

// document.write('hola mundo'); Sirve para escribir dentro del DOM

// console.log(document.getElementsByTagName('li')); Selecciona etiquetas con un nombre especifico de HTML

/* Nodos, hay diferentes tipos de nodos: HTMLCollection y nodeList. Los comentarios de HTML son un nodo, las etiquetas son otro tipo de nodos, los parrafos y lo encabezados también son nodos, no confundir una etiqueta de HTML con un nodo */

// console.log(document.getElementsByClassName('card')); Selecciona todas las etiquetas con una clase

// console.log(document.getElementsByName('nombre')); Selecciona etiquetas por nombre

// console.log(document.getElementById('menu')); Selecciona etiquetas por un ID especifico

// console.log(document.querySelector('#menu')); Selecciona elementos usando selectores de CSS

// console.log(document.querySelector('.card')); Selecciona el primer elemento con la clase card

// console.log(document.querySelector('li')); Selecciona la primer etiqueta li

// console.log(document.querySelectorAll('a')); Selecciona todas las etiquetas a

// console.log(document.querySelectorAll('li')); Selecciona todas las etiquetas li

// let caja = document.querySelectorAll('a'); Esto crea un objeto. HTMLCollection o NodeList

// console.log(typeof caja);

// document.querySelectorAll('a').forEach((element)=> console.log(element)); Los tres métodos mas usado en el DOM son querySelector, querySelectorAll y getElementByID. querySelectorAll y querySelector devuelven nodeList

// console.log(document.querySelectorAll('#menu li')); selecciona los li dentro del #menu

// console.log(document.querySelectorAll('.card')[2]); Imprime el tercel elemento figure con la clase card

// console.log(document.querySelectorAll('.card:nth-child(3)')); Imprime un NodeList que contiene al tercer elemento figure con la clase card

// console.log(document.documentElement.lang); Obteniendo el valor de el atributo lang del html

// Usando callbacks para interactuar con el DOM

/*let send = document.querySelector('#enviar').addEventListener('click', () => {
    let num1 = parseInt(document.querySelector('#inputUno').value);
    let num2 = parseInt(document.querySelector('#inputDos').value);

    sumar(num1, num2, () => console.log(num1 + num2))
    }
);

function sumar (num1, num2, callback) {
    callback(num1, num2);
}*/

// cambiando color de un boton de dos formas diferentes

/*let boton = document.querySelector('.botonClick');

setTimeout(() => {
    boton.classList.add('botonClickRojo');
}, 1000);

function toggle () {
    boton.classList.toggle('botonClickRojo')
}

toggle();*/

/*let boton = document.querySelector('.botonClick');

boton.addEventListener('click', () => {
    boton.classList.add('botonClickRojo');
})*/

// Seleccionando el ultimo <a>

/*const links = document.querySelectorAll('a');

console.log(links[links.length - 1]);*/

//console.log(document.querySelectorAll('a')[2])

//console.log(document.querySelectorAll('#prueba li')[1]);

// Comprobar si hay un atributo
// hasAttribute()

// Remover si hay un atributo
// removeAttribute()

console.log(typeof document.querySelector('[data-description]').getAttribute('data-description'));

let $link = document.querySelector('a');
let $caja = document.querySelector('[data-description]');
let $titulo = document.querySelector('#empresas');

$caja.dataset.description = 'Hello world';

console.log($caja.dataset.description);

//$caja.style.backgroundColor = 'red';

console.log(window.getComputedStyle($caja));
console.log(getComputedStyle($caja).getPropertyValue('background-color'));

$link.style.setProperty('text-decoration', 'none');
$titulo.style.width = '50%';
$titulo.style.textAlign = 'center';
$titulo.style.marginLeft = 'auto';
$titulo.style.marginRight = 'auto';
$titulo.style.padding = '1rem';
$titulo.style.borderRadius = '1rem';

let $html = document.documentElement;
let $body = document.body;

let variableOscura = getComputedStyle($html).getPropertyValue('--color-dark');
let variableAmarilla = getComputedStyle($html).getPropertyValue('--color-yellow');

console.log(variableAmarilla, variableOscura);

$body.style.backgroundColor = variableOscura;

$html.style.setProperty('--color-dark', 'orange');
$body.style.setProperty('background-color', 'blue');