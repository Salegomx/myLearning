// Son funciones "callback" ya que reciben una funcion

// Ejecuta algo despues de cierto tiempo
/*setTimeout(() => {
   console.log("Hola mundo"); 
}, 3000);*/

// Ejecuta algo indefinidamente cada cierto tiempo
/*setInterval(() => {
   console.log("Hola mundo"); 
}, 2000);*/

console.log("Voy primero")

let intervalo = setInterval(() => {
   console.log(new Date().toLocaleTimeString()); 
}, 5000);

clearTimeout(intervalo);