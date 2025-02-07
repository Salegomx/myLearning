// Tanto fectch como ajax son formas de hacer peticiones http, la ventaja es que no neceistas recargar toda la pagina, sino solo una porcion

// JSON es un formato ligero de intercambio de datos. Es un objeto de JS que acepta muchos tipos de datos. Las propiedades llevan comillas dobles.

/* PARSE */
/*let dato = JSON.parse("true");
let datosJson = JSON.parse('{"nombre": "sergio","edad": 26,"amigos": ["Pepe", "Antonio", "Luis"]}');

console.log(JSON);
console.log("{}");
console.log(JSON.parse("{}"));
console.log(JSON.parse("[1,2,3]"));
console.log(JSON.parse("true"));
console.log(typeof dato);
console.log(datosJson);*/

/* STRINGIFY */
/*let dato2 = JSON.stringify({nombre: "Sergio"});

console.log(typeof dato2);*/

// AJAX se ejecuta en un servidor web, porque trabaja tanto en el cliente como en el servidor y usa el protocolo http
// API: Application Programming Interface.

// Crear una instancia de XMLHttpRequest
// Asignar un evento (addEventListener)
// Abrir una peticion
// Envio de datos

// Buscar APIs de usd, euro, cop, mxn, uruguayo.

/*(() => {
    const xhr = new XMLHttpRequest();
    $xhr = document.getElementById('xhr');
    $fragment = document.createDocumentFragment();

    xhr.addEventListener('readystatechange', e => {
        //console.log(xhr);
        if (xhr.readyState !== 4) return;
        if (xhr.status >= 200 && xhr.status < 300) {
            // console.log('exito!');
            // console.log(xhr.responseText);
            // $xhr.innerHTML = xhr.responseText;
            // console.log(json)
            let json = JSON.parse(xhr.responseText);

            json.forEach((elem) => {
                const $li = document.createElement('li');
                $li.innerHTML = `${elem.name} ${elem.phone} ${elem.email}`;
                $fragment.appendChild($li);
            });

            $xhr.appendChild($fragment);
        } else {
            console.log('error');
        };
    });

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

    xhr.send();
})();*/

// Estados de una peticion asincrona
// 1 ready_state_uninitialized: 0
// 2 ready_state_login: (cargando)
// 3 ready_state_loaded: (cargado)
// 4 ready_state_interactive: (JS ya empieza a interactuar porque ya tiene los datos)
// 5 ready_state_complete


let showCountries = ()=>{
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://restcountries.com/v3.1/all');

    xhr.onload = function() {
        if(xhr.status === 200) {
           //console.log('Exito');
           let paises = JSON.parse(this.response);
            paises.forEach((pais)=>{
                console.log(pais);
                let countryCard = document.createElement('div');
                let countryCardImg = document.createElement('img');

                countryCard.innerHTML = pais.name.common;
                countryCardImg.src = pais.flags.png;
                countryCard.appendChild(countryCardImg);
                document.getElementById('feed').appendChild(countryCard);
            })
        }
    };

    xhr.send();
}

showCountries();