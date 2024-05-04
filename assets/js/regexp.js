// Expresiones ergulares

/* Secuencia de caracteres que usan un patron de busqueda.
Cualquier lenguaje usa expreciones regulares, se usan para validar caracteres.*/

let lorem = "Lorem ipsum dolor sit amet Lorem ipsum 4 dolor Lorem, earum id, nobis ratione velit. Perferendis ipsam Lorem,"
let expreg = new RegExp('Lorem', 'ig') 
// la i sirve para decirle que ignore si es mayuscula o minuscula.
// la g sirve para buscar en todo el texto

/*console.log(expreg.test(lorem));
console.log(expreg.exec(lorem));*/

// RegExp es utilizado en combinacion con expresiones regulares para buscar una coincidencia n una cadena de texto. Cuando se ejecuta, busca la proxima, (osea solo una) coincidencia en la cadena de texto y devuelve un array con la posisicion y los detalles de esa coincidencia

let expreg3 = /\d/ig;

/*console.log(expreg3.test(lorem));
console.log(expreg3.exec(lorem));*/

let expreg4 = /[5-9]/ig;

console.log(expreg4.test(lorem));