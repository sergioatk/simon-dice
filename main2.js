let secuenciaMaquina = [];
let secuenciaUsuario = [];
const $cuadrosSimon = document.querySelectorAll('.cuadro');
const $botonEmpezar = document.querySelector('#boton-empezar');

$botonEmpezar.onclick = empezarJuego;


function empezarJuego(){
    turnoMaquina()
}



function turnoMaquina(){
    let nuevoCuadro = obtenerCuadro()
    secuenciaMaquina.push(nuevoCuadro);
    

    secuenciaMaquina.forEach(function(cuadro, i){
        setTimeout(function(){
            resaltar(cuadro)
        }, (i + 1) * 1000)
    })

    turnoUsuario();
}

function turnoUsuario(e){
    const nuevoCuadroUsuario = e.target;
    console.log(nuevoCuadroUsuario);
    resaltar(nuevoCuadroUsuario);
    //validarSeleccionUsuario()
    secuenciaUsuario.push(nuevoCuadroUsuario)
}

function validarSeleccionUsuario(elementoUsuario, elementoMaquina, i){
    if (elementoUsuario[i] === elementoMaquina[i]){
        resaltar(elementoUsuario[i]);
        setTimeout(turnoMaquina, 500);
    } else {
        perderJuego();
        return;
    }
}


function obtenerCuadro(){
    const indiceAleatorio = Math.floor(Math.random() * $cuadrosSimon.length);
    return $cuadrosSimon[indiceAleatorio]
}

function resaltar(cuadro){
    cuadro.style.opacity = 1;
    setTimeout(function(){
        cuadro.style.opacity = 0.5
    }, 500)
}

