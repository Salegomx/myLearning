let caja = {
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

Snoopy.saludar();