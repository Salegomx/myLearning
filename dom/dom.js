/*let texto = document.getElementById("h1");
let button = document.getElementById("button");

function agregarTexto() {
    let nuevoTexto = document.createElement("h1");
    nuevoTexto.innerText = "Hola mundo";
    document.body.appendChild(nuevoTexto);
}

button.addEventListener("click",agregarTexto);*/

// Nuevo ejemplo
/*let button = document.getElementById("button");

button.addEventListener("click", () => {
    let texto = document.querySelector("#h1");
    texto.innerHTML += "<h1>Imprimiendo texto</h1>"
});*/

// Primer ejemplo
/*let imagen = document.getElementById("card_img");

imagen.setAttribute("src", "../assets/img/images.jpg");*/

// Nuevo ejemplo
/*let imagen = document.getElementById("card_img");

imagen.src = "../assets/img/images.jpg";*/

/*let imagen = document.getElementById("card_img");

imagen.classList.add("borde", "border-radius");
imagen.classList.remove("borde");*/

/*let boton = document.getElementById("cambiar_color");
let caja = document.querySelector(".caja");

boton.addEventListener("click", ()=> {
    caja.classList.toggle("nuevo-color");
})*/

let boton = document.getElementById("cambiar_imagen");
let imagen = document.getElementById("new_card_img");
let contador = 1;
let img_css = "../assets/img/css.png";
let img_cats = "../assets/img/images.jpg";
let img_tigre = "../assets/img/tigre.jpg";
let img_mona = "../assets/img/mona.jpg";
let imagenes = [img_css, img_cats, img_tigre, img_mona];

boton.addEventListener("click", () => {
    //imagen.setAttribute("src", imagenes[contador]);
    //contador > 2 ? contador = 0 : contador++;

    if (imagen.src.includes("css.png")) {
        imagen.src = img_cats;
    } else if (imagen.src.includes("images.jpg")) { 
        imagen.src = img_tigre;
    } else if (imagen.src.includes("tigre.jpg")) { 
        imagen.src = img_mona;
    } else if (imagen.src.includes("mona.jpg")) { 
        imagen.src = img_css;
    }
});

console.log(imagen.getAttribute("src"));
console.log(imagen.src);