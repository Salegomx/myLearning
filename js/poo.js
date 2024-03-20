/*let caja = {
    nombre: "Carton",
    material: "Madera"
}

// Funcion constructora
function Animal (nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
} // Esta es una funcion construcora que asigna los metodos al prototipo.

Animal.prototype.sonar = function() { // prototype "liga" una funcion para las instancias de un objeto constructor
    console.log("Hago sonidos porque estoy vivo");
}

Animal.prototype.saludar = function() {
    console.log(`Hola me llamo ${this.nombre}`);
}

const Snoopy = new Animal("Snoopy", "Macho");

console.log(caja);
console.log(Snoopy);

const Lolabunny = new Animal("Lola Bunny", "Hembra");

console.log(Lolabunny);
Lolabunny.saludar();

Snoopy.saludar();*/

// Constructor: Es un metodo especial que se ejecuta cuando se crea una instancia de ese objeto
// Herencia prototipica: Es la capacidad de poder heredar caracterizticas de un padre a un hijo se da con las clases, pero en JS se da en cadena prototipica
// Super(): Es un metodo que manda a llamar el constructor de la clase padre

/*function Animal (nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
}

Animal.prototype.sonar = function() {
    console.log("Hago sonidos porque estoy vivo");
}

Animal.prototype.saludar = function() {
    console.log(`Hola me llamo ${this.nombre}`);
}

// Herencia prototipica

function Perro (nombre, genero, tamanio) {
    // Aqui le decimos que el elemento padre es Animal(), invocas al constructor
    this.super = Animal;
    this.super(nombre, genero);
    this.tamanio = tamanio;
}

Perro.prototype = new Animal();

Perro.prototype.constructor = Perro;

Perro.prototype.sonar = function () {
    console.log("Soy un perro y mi sonido es un ladrido");
}

Animal.prototype.ladrar = function () {
    console.log("Guau guau");
}

const snoopy = new Perro("Snoopy", "Macho", "Grande");

const lolaBunny = new Animal("Lola Bunny", "Hembra");

console.log(snoopy);
console.log(lolaBunny);

snoopy.sonar();
snoopy.saludar();
snoopy.ladrar();

lolaBunny.sonar();
lolaBunny.saludar();*/

/*function Animal (nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
    this.sonar = function() {
        console.log("Hago sonidos porque estoy vivo");
    }
    this.saludar = function() {
        console.log(`Hola me llamo ${this.nombre}`);
    }
}*/

/*class Animal {
    // Tienen un metodo especial que se llama constructor que se ejecuta en el momento de instanciar la clase
    constructor(nombre, genero) {
        this.nombre = nombre;
        this.genero = genero;
    }
    // Los metodos si pueden recibir parametros
    sonar() {
        console.log("Hago sonidos porque estoy vivo")
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre}`)
    }
}

const mimi = new Animal("Mimi", "Hembra");
const scooby = new Animal("Scooby Doo", "Macho");

console.log(mimi);
console.log(scooby);*/

/* class Animal {
    constructor(nombre, genero) {
        this.nombre = nombre;
        this.genero = genero;
    }
    sonar() {
        console.log("Hago sonidos porque estoy vivo")
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre}`)
    }
}

class Perro extends Animal {
    constructor(nombre, genero, tamanio) {
        super(nombre, genero);
        this.tamanio = tamanio;
    }   
    sonar() {
        console.log("Soy un perro y mi sonido es un ladrido")
    }
    ladrar() {
        console.log("Guau guau")
    }
}

const mimi = new Animal("Mimi", "Hembra");
const scooby = new Perro("Scooby Doo", "Macho", "Gigante");

console.log(mimi);
mimi.saludar();
mimi.sonar();

console.log(scooby);
scooby.saludar();
scooby.ladrar();
scooby.sonar();*/

// Metodos estaticos: Son aquellos que se pueden ejecutar sin nesecidad de instanciar la clase
// Metodo especiales, getters y setters: Nos permiten establecer o modificar el valor de una propiedad dentro de una clase

/*class Animal {
    constructor(nombre, genero) {
        this.nombre = nombre;
        this.genero = genero;
        this.raza = null;
    }
    sonar() {
        console.log("Hago sonidos porque estoy vivo")
    }
    saludar() {
        console.log(`Hola me llamo ${this.nombre}`)
    }
}

class Perro extends Animal {
    constructor(nombre, genero, tamanio) {
        super(nombre, genero);
        this.tamanio = tamanio;
    }
    ladrar() {
        console.log("Guau guau")
    }
    static queEres() {
        console.log("Los perros somos animales mamiferos")
    }
    // Los setters y getters son metodos especiales que nos permiten establecer y obtener los valores y atributos de nuestra clase1; en los metodos obtenedores y establecedores le anteponemos el verbo "get" y "set"
    get getRaza() {
        return this.raza;
        // un metodo obtenedor solo retorna
    }
    set setRaza(raza) {
        this.raza = raza;
        // al valor de raza, asignale el parametro que estamos recibiendo entre parentesis
    }
}

const mimi = new Animal("Mimi", "Hembra");
const scooby = new Perro("Scooby", "Macho", "Gigante");

console.log(mimi);
mimi.sonar();
mimi.saludar();

console.log(scooby);
scooby.sonar();
scooby.ladrar();

Perro.queEres();

console.log(scooby.getRaza);

scooby.setRaza = "Gran Danes";

console.log(scooby.getRaza);
// Aqui ya me imprime "Gran Danes"

console.log(scooby)
// Si revisamos el prototipo scooby encontramos el metodo getRaza que esta entre las propiedades; este setter modifica el valor de null que tiene la propiedad raza. Si revisamos lo metodo en la console, en el prototipo Perro, ahi estan los metodos setRaza y getRaza, pero de tipo get y set*/

/*class Persona {
    constructor(nombre, edad) {
        this._nombre = nombre; // _nombre es una convencion para indicar que es una propiedad privada
        this._edad = edad;
    }
    // getter para obtener el nombre
    get getNombre() {
        return this._nombre;
    }
    // setter para modificar el nombre con validacion
    set setNombre(nuevoNombre) {
        if(typeof nuevoNombre === 'string' && nuevoNombre.length > 0) {
            this._nombre = nuevoNombre;
        } else {
            console.error('Error:El nombre debe ser una cadena no vacia');
        }
    }
    // getter para obtener la edad
    get getEdad() {
        return this._edad;
    }
    // setter para modificar la edad con validacion
    set setEdad(nuevaEdad) {
        if(typeof nuevaEdad === 'number' && nuevaEdad > 0) {
            this._edad = nuevaEdad;
        } else {
            console.error('Error:La edad debe ser un numero positivo');
        }
    }
}

const persona1 = new Persona('Sergio', 25);

// Obtener valores usando getter
console.log(`Nombre: ${persona1.nombre}`);
console.log(`Edad: ${persona1.edad}`);

// modificar valores usando setters con validacion
persona1.nombre = "Pedro";
persona1.edad = 30;

// intentando asignar un valor no valido
persona1.nombre = "";

// mostrar los valores actualizados
console.log(`Nombre: ${persona1.nuevoNombre}`);
console.log(`Edad: ${persona1.nuevaEdad}`);*/

/*class Persona {
    constructor(nombre, edad) {
        this._nombre = nombre;  // _nombre es una convención para indicar que es una propiedad privada
        this._edad = edad;
    }

    // Getter para obtener el nombre
    get nombre() {
        return this._nombre;
    }

    // Setter para modificar el nombre con validación
    set nombre(nuevoNombre) {
        if (typeof nuevoNombre === 'string' && nuevoNombre.length > 0) {
            this._nombre = nuevoNombre;
        } else {
            console.error('Error: El nombre debe ser una cadena no vacía.');
        }
    }

    // Getter para obtener la edad
    get edad() {
        return this._edad;
    }

    // Setter para modificar la edad con validación
    set edad(nuevaEdad) {
        if (typeof nuevaEdad === 'number' && nuevaEdad > 0) {
            this._edad = nuevaEdad;
        } else {
            console.error('Error: La edad debe ser un número positivo.');
        }
    }
}

// Crear una instancia de Persona
const persona1 = new Persona('Juan', 30);

// Obtener valores usando getters
console.log(`Nombre: ${persona1.nombre}`);
console.log(`Edad: ${persona1.edad}`);

// Modificar valores usando setters con validación
persona1.nombre = 'Carlos';
persona1.edad = 25;

// Intentar asignar un valor no válido (no se modificará)
persona1.nombre = '';  // Esto imprimirá un error en la consola

// Mostrar los valores actualizados
console.log(`Nuevo Nombre: ${persona1.nombre}`);
console.log(`Nueva Edad: ${persona1.edad}`);*/

/*class Animal {
    constructor(nombre, genero) {
        this.nombre = nombre;
        this.genero = genero;
        this.raza = null;
    }
    sonido() {
        console.log("Hago sonidos porque estoy vivo");
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre}`);
    }
}

class Perro extends Animal {
    constructor(nombre, genero, tamanio) {
        super(nombre, genero);
        this.tamanio = tamanio;
    }
    saludar() {
        console.log("Sobreescribiendo la clase");
    }
    ladrar() {
        console.log("Wuau wuau");
    }
    static estatico(param) {
        console.log(param);
    }
    get getRaza() {
        return this._raza;
    }
    set setRaza(nuevaRaza) {
        this._raza = nuevaRaza;
    }
}

const conejo = new Animal("Bunny", "Macho");
const snoopy = new Perro("Snoopy", "Masculino", "Chico");

conejo.sonido();
conejo.saludar();
snoopy.saludar();
snoopy.ladrar();
Perro.estatico("Hola");
snoopy.setRaza = "Criollo";
console.log(snoopy.getRaza); // getRaza se ejecuta sin parentesis por ser una propiedad*/

/*class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    obtenerEdad() {
        return this.edad;
    }
    get getObtenerNombre() { // No estas obligado a tener un setter
        return this.nombre;
    }
}

const persona1 = new Persona("Pedro", 56);

console.log(persona1.obtenerEdad());
console.log(persona1.getObtenerNombre);
persona1.getObtenerNombre = "Juan";
console.log(persona1.getObtenerNombre);
persona1.nombre = "Ricardo";
console.log(persona1.nombre);*/

// El verdadero proposito de una getter es permitir un acceso controlado a una propiedad.
// Esto significa que puedes realizar validaciones, calculos u otras acciones cada vez que alguien intente acceder a la propiedad.

class Animal {
    constructor(nombre, genero) {
        this.nombre = nombre;
        this.genero = genero;
        this.raza = null;
    }
    sonido() {
        console.log("Hago sonidos porque estoy vivo");
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre}`);
    }
}

class Perro extends Animal {
    constructor(nombre, genero, tamanio) {
        super(nombre, genero);
        this.tamanio = tamanio || "El tamanio no importa";
    }
    saludar() {
        console.log("Sobreescribiendo la clase");
    }
    ladrar() {
        console.log("Wuau wuau");
    }
    static estatico(param) {
        console.log(param);
    }
    get getRaza() {
        return this._raza;
    }
    set setRaza(nuevaRaza) {
        this._raza = nuevaRaza;
    }
}

const conejo = new Animal("Bunny", "Macho");
const scooby = new Perro("Scooby", "Masculino");

conejo.sonido();
conejo.saludar();
scooby.saludar();
scooby.ladrar();
Perro.estatico("Hola");
console.log(scooby.tamanio);
scooby.setRaza = "Gran danes";
console.log(scooby.getRaza);