/*como trabajar con js
--------------------------
1ro Capturamos los elementos del DOM
2do. Funciones para manejar eventos
3ro. Agregar funciones para actualizar el DOM
$to. Funciones para el manejo de datos

TIPs:
1. usa let y const
2. usa nombres descriptivos para variables y funciones
3. usa funciones pequeñas y específicas
4. comenten su codigo
5. queryselector(capturamos los elementos como css)

*/

/*
Cual es el criterio para capturar elementos del DOM
Capturemos los elementos que interactuan o vamos a usarlos o actualizarlos
*/
let nombreInpt = document.getElementById("nombre");

let pesoInpt = document.getElementById("peso");
let estaturaInpt = document.querySelector(`#estatura`);

let btnLimpiar = document.querySelector(`#limpiar`);
let btnCalcular = document.querySelector(`#calcularIMC`);

let resultadoTxt = document.querySelector(`#resultado`);

let rangoIMC = document.querySelector(`#rangoIMC`);

let valorNombre = document.querySelector(`#valorNombre`);


resultadoTxt.textContent = "0.00"
valorNombre.innerHTML = nombreInpt.value
rangoIMC.innerHTML = "Estas en rango de: "

/*

addEventListener : permite controlar los eventos
eventos mas usados:
click
change : cambia valor en un formulario, hecho por el usuario
submit :
keyup :
keydown :

*/

/*
IMPORTANTE
Cuando trabajamos con FORMULARIOS y tenemos botones 
(y no especificamos el tipo de boton), 
todos los botones son de tipo submit.
¿ Como soluciono que estos se refresquen automaticamente?
1. Especificar el tipo de boton en el HTML (type="button")
2. Usar el metodo preventDefault() en el evento
*/

btnLimpiar.addEventListener("click", function () {
    //Aqui viene toda la logica para limpiar los input´s
    /*
    en los inputs podemos acceder al value (valor)
    */
    nombreInpt.value = "";
    pesoInpt.value = "";
    estaturaInpt.value = "";

    valorNombre.innerHTML = " "
    resultadoTxt.textContent = "0.00"
   
    rangoIMC.textContent = "Estas en rango de: "


})

btnCalcular.addEventListener("click", function (event) {

    /*que es el event
    el event es un objeto qeu contiene informacion
    */
    event.preventDefault(); //evitamos el comportamiento por defecto
    let pesoValue = pesoInpt.value;
    let estaturaValue = estaturaInpt.value;

    //IMC = peso (kg) / estatura2 
    let resultadoIMC = pesoValue / ((estaturaValue / 100) * (estaturaValue / 100))
    resultadoIMC = Number(resultadoIMC.toFixed(2));

    /*
 Para manipular un texto
 - textContent : sirve para agregar texto plano (texto oculto)
 - innerHTML :  sirve para agregar html
 - innerText : similar a textcontent pero con algunas diferencias

 ¿cuales son las diferencias?
 textContent: no respeta estilos css

    */

    valorNombre.innerHTML = nombreInpt.value

    resultadoTxt.textContent = resultadoIMC
   


    switch (true) {
        case resultadoIMC < 18.5:
            rangoIMC.innerHTML = "Estas en rango de <strong>Peso Bajo </strong>"
            break;

        case resultadoIMC < 25:
            rangoIMC.innerHTML = "Estas en rango de <strong>Normalidad</strong>"
            break;

        case resultadoIMC < 30:
            rangoIMC.innerHTML = "Estas en rango de <strong>Sobrepreso</strong>"
            break;

        case resultadoIMC >= 30:
            rangoIMC.innerHTML = "Estas en rango de <strong>Obesidad</strong>"

            break;

    }


})