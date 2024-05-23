/*
    JS es un lenguaje "single threat". Solo se ejecuta una vez.
    Simplifica la escritura de codigo porque no tenemos que preocuparnos por concurrencia y el recolector de basura.

    Concurrencia.
    Es la capacidad de un programa de ejecutar multiples tarea en manera simultanea.
    Puede haber concurrencia en un entorno sincrono y asincrono.

    Lenguajes multi-hilo:
        Go
        C#
        c++ (con bibliotecas)
        JAVA
        Swift
        Kotlin
        Python (con bibliotecas)
        Javascript (con webworkers)

    Recolector de basura.
    Es un componente fundamental. Maneja la gestion/administracion de la memoria (libera memoria que ya no esta en uso).

    JS trabaja con un modelo asincrono no bloqueante
    Es altamente concurrente a pesar de trabajar solamente con un hilo

    Paralelismo
    Es cuando dos o mas tareas se ejecutan al mismo tiempo, y tambiien existe en single thread

    En la concurrencia las tareas progresan simultaneamente, en el paralelismo se ejecutan al mismo tiempo.

    Operacion bloqueante y no bloqueante
    Se refiere a la fase de espera, la operacion bloqueante no devuelve el control a la aplicacion hasta que termina su tarea.
    La no bloqueante se ejecuta y devuelve inmediatamente el control a la aplicacion.

    Operaciones sincronas y asincronas
    Se refiere a cuando tiene lugar la respuesta, pensando en presente, pasado y futuro.

    Sincrono se refiere cuando la respuesta sucede en tiempo presente.
    En forma asincrona, la respuesta sucede en el futuro, la operacion se ejecuta y no espera los resultados y regresa al control al hilo principal

    En JS hay dos tipos de codigo: sincrono bloqueante y asincrono no bloqueante
*/

// Codigo sincrono bloqueante
/*(function() {
    console.log('Codigo sincrono');
    console.log('Inicio');
    function funcion2() {
        console.log('Dos');
    }
    function funcion1() {
        console.log('Uno');
        funcion2();
        console.log('Tres');
    }
    funcion1();
    console.log('Fin');
})();*/

/*
    condigo sincrono
    Inicio
    Uno
    Dos
    Tres
    Fin
*/

// Codigo asincrono no bloqueante
(function() {
    console.log('Codigo asincrono');
    console.log('Inicio');
    function funcion2 () {
        setTimeout(function() {
            console.log('Dos');
        }, 1000);
    }
    function funcion1 () {
        setTimeout(function () {
            console.log('Uno')
        }, 0);
        funcion2();
        console.log('Tres');
    }
    funcion1();
    console.log('Fin');
})();

/*
    Codigo asincrono
    Inicio
    Tres
    Fin
    Uno
    Dos
*/