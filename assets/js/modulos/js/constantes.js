export const texto = "Hola mundo";

export const nombre = () => {
    console.log('Sergio');
}

export const animales = ["Perro", "Vaca", "Juaguar", "Toro"];

export const personas = {nombre: "Juan", apellido: "Perez", edad: 40};

let sumar = (a, b) => {
    return a + b;
}

let restar = (a, b) => {
    return a - b;
}

export const operaciones = {
    sumar,
    restar
}

export default function saludar() {
    console.log("Hello");
}