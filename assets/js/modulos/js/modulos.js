// el ./ quiere decir, "busca en la carpeta donde me encuentro"
import saludar/* Este es un default */, {texto, nombre, animales, personas, operaciones as op /* Esto es un alias */} from "./constantes.js";
import Saludar3, {saludar2, password} from "./funciones.js";


console.log(texto);
nombre();
console.log(animales[3]);
console.log(personas.edad);

console.log(op.sumar(10, 15));

saludar();

saludar2();

console.log(password);

let saludo = new Saludar3();

saludo;