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

function turnoUsuario(){
    const nuevoCuadroUsuario = //aca va el input del usuario
    secuenciaUsuario.push(nuevoCuadroUsuario);
    validarInputUsuario(secuenciaMaquina, secuenciaUsuario);

}

function validarInputUsuario(secuenciaMaquina, secuenciaUsuario){ 
    secuenciaMaquina.forEach(function(cuadro, i){  // no se si aca podria ir iterando pero con cada click del usuario, es decir que evalue cada click en tiempo real y no al finalizar la secuencia
        if (secuenciaMaquina[i] === secuenciaUsuario[i]) {
            return turnoMaquina(); // aca no se si se puede hacer eso y tampoco lo puedo probar en esta etapa
        } else {
            perder(); // funcion todavia no existe
        }
    })
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

