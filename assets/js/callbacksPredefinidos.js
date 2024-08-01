// let array = [5, 6, 7, 23, 43, 20];

/*const encontrar = array.find(element => element > 10);

console.log(encontrar);*/

// El metodo find no modifica el array
// No ejecuta la funcion para elementos sin valor (arrays vacios)
// Detiene la ejecucion en cuanto un elemento cumple la condicion y no revisa el resto del array

/*const inventario = [{nombre: 'Fresa', cantidad: 20}, {nombre: 'Platano', cantidad: 25}, {nombre: 'Manzana', cantidad: 15}];

const resultado = inventario.find(objeto => objeto.nombre === 'Pera');

console.log(resultado)*/

// array.find(callback[,index[,array]])[,thisArg]

// Find toma un callback que toma hasta tres argumentos, el primero (element) es obligatorio
// Index es el segundo argumento, es opcional y es el indice del elemento actual del array
// array el tercer argumento, también opcional, es el array original
// thisArg es otro valor opcional que se usa como la palabra this al ejecutar el callback

/*const encontrar = array.find((elem, index, array) => {
    console.log('Elemento actual: ', elem);
    console.log('Indice actual: ', index);
    console.log('Array completo: ', array);
    return elem > 10
});

console.log('Elemento encontrado: ', encontrar);*/

/*let products = [
    {
        nombre: 'Platano',
        precio: 12
    },
    {
        nombre: 'Manzana',
        precio: 10
    },
    {
        nombre: 'Sandia',
        precio: 25
    }
]

let umbralDePrecio = { precioMaximo: 11 }

let productoEncontrado = function (product) {
    return product.price < this.precioMaximo
}

const foundProduct = products.find( productoEncontrado, umbralDePrecio );

console.log(foundProduct);*/

/*const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },
    { name: 'Tablet', price: 300 }
  ];
  
  const priceThreshold = { //humbral del precio
    maxPrice: 600
  };
  
  const findProductUnderPrice = function(product) {
    return product.price < this.maxPrice;
  };
  
  const foundProduct = products.find(findProductUnderPrice, priceThreshold);
  
  console.log(foundProduct); // Output: { name: 'Phone', price: 500 }
  
  //this se refiere a priceThreshold.
  //De esta manera, podemos acceder a this.maxPrice para comparar el precio del producto actual. */

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
];

const encontrarPostPorId = (id, callback) => {
    const post = posts.find( item => item.id === 1 );

    callback(post);
}

encontrarPostPorId( 1, (post) => {
    console.log(post);
})*/

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
];

const encontrarPostPorId = (id, callback) => {
    const post = posts.find( item => item.id === id );
    if (!post) {
        console.log('El post no ha sido encontrado');
        return
    } else {
        callback(post);
    }
}

encontrarPostPorId( 5, (post) => {
    console.log(post);
})*/

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
];

const encontrarPostPorId = (id, callback) => {
    const post = posts.find( item => item.id === id );
    console.log(typeof post);
    if (post) {
        callback(null, post);
    } else {
        callback('El ID ' + id + ' no existe');
    }
}

encontrarPostPorId( 2, (error, post) => {
    if (error) return console.log(error);
    console.log(post);
})*/


/*const fs = require('fs');

// Función que lee un archivo y usa un callback para manejar el resultado
function readFile(filePath, callback) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            // Si hay un error, pasamos el error al callback
            return callback(err);
        }
        // Si no hay error, pasamos null como primer argumento y los datos como segundo argumento
        callback(null, data);
    });
}

// Uso de la función readFile con un callback
readFile('example.txt', (err, data) => {
    if (err) {
        // Manejo del error
        console.error('Error reading file:', err);
        return;
    }
    // Procesamiento del resultado
    console.log('File content:', data);
});/

const cadenaDeTexto = 'Hola';
const numero = 20;
const indefinido = undefined;
const nulo = null;
const vector = [15, 'Texto extra'];
const vector1 = [];
const objeto = {nombre: 'Pepito', apellido: 'Perez'};
const funcion = function () {return 50};

/*if (funcion) {
    console.log('Imprime si eres verdadero')
} else {
    console.log('Imprime si eres falso')
}*/

/*function ejercicioParametros (param1, param2, callback) {
    callback(null, param2);
}

ejercicioParametros(5, {}, (error, post) => {
    if (error) {
        console.log('Hay un error')
    }
    console.log(post)
})*/

// La segunda razon pori la que se una esta convencion es el manejo de errores, Esto permite verificar la existencia de un error inmediatemente antes de procesar el resultado.
// La tercer razon es legibilidad y claridad. Se puede entender rapidamente la estructura de los callback y como se manejan los errores una vez que se acostumbra.
// La cuarta razon es por compatibilidad con librerias y frameworks, especialmente en NodeJS esperan que los callback sigan estan convencion. Esto garantiza que lass funciones tenga mucha compatibilidad.

const posts = [
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
];

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

// Ejemplo de ejecucion con promesas (refactorizando el codigo):

/*const findPostById = (postId) => new Promise((resolve, reject) => {
    const post = posts.find( item => item.id === postId);
    if (post) {
        resolve( post )
    } else {
        reject('El post con el ID: ' + postId + ' no se ha encontrado')
    }
})
    
findPostById(1)
    .then((post) => {
        console.log(post)
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log('Termina el programa')
    });

findPostById(2)
    .then((post) => {
        console.log(post)
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log('Termina el programa')
    });

findPostById(3)
    .then((post) => {
        console.log(post)
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log('Termina el programa')
    });

findPostById(4)
    .then((post) => {
        console.log(post)
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log('Termina el programa')
    });*/

// Promise Hell:

/*const findPostById = (postId) => new Promise((resolve, reject) => {
    const post = posts.find( item => item.id === postId);
    if (post) {
        resolve( post )
    } else {
        reject('El post con el ID: ' + postId + ' no se ha encontrado')
    }
})

findPostById(1)
    .then((post) => {
        console.log(post)
        return findPostById(2)
    })
    .then((post) => {
        console.log(post)
        return findPostById(3)
    })
    .then((post) => {
        console.log(post)
        return findPostById(4)
    })
    .catch((error) => {
        console.log(error)
    })*/

// Debe imprimir cuadrados cada 3 segundos causando un callback hell
/*function miFuncion(number, callback, callback2) {
    // Debe elevar al cuadrado el numero del primer parametro despues de 3 segundos
    setTimeout(() => {
        callback(number);
        if (!callback2) return
        callback2();
    }, 3000);
}

function elevarNumero(number) {
    console.log( number * number );
}

miFuncion(4, elevarNumero, () => {
    miFuncion(5, elevarNumero, () => {
        miFuncion(3, elevarNumero, () => {
            miFuncion(7, elevarNumero, null)
        })
    })
})*/

/*function cuadradoCallback(value, callback) {
    setTimeout(() => {
        callback(value, value * value)
    }, 3000);
}

cuadradoCallback(4, (value, resultado) => {
    console.log('Inicia callback');
    console.log(`Valor: ${resultado}`)
    cuadradoCallback(5, (value, resultado) => {
        console.log(`Valor: ${resultado}`);
        cuadradoCallback(6, (value, resultado) => {
            console.log(`Valor: ${resultado}`);
            cuadradoCallback(7, (value, resultado) => {
                console.log(`Valor: ${resultado}`);
                console.log('Termina callback');
            })
        })
    })
})*/
