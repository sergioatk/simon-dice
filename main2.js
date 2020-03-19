let secuenciaMaquina = [];
let secuenciaUsuario = [];
let ronda = 0;


const $botonEmpezar = document.querySelector('#boton-empezar')
const $cuadrosSimon = document.querySelectorAll('.cuadro')
let $barraEstado = document.querySelector('#estado');



$botonEmpezar.onclick = function(){
    cambiarEstado('Empieza el juego')   
    empezarJuego();
}


function empezarJuego(){
    secuenciaUsuario = [];
    secuenciaMaquina = [];
    turnoMaquina()
}



function turnoMaquina(){

    cambiarEstado('JUEGA MAQUINA');

    ronda++;
    actualizarRonda(ronda);

    bloquearInputUsuario();

    const nuevoCuadro = obtenerCuadro()
    secuenciaMaquina.push(nuevoCuadro);



    const RETRASO_JUGADOR = (secuenciaMaquina.length + 1) * 1000

    secuenciaMaquina.forEach(function($cuadro, i) {

        const RETRASO_MS = (i + 1) * 1000

        setTimeout(function() {
            resaltar($cuadro)
        }, RETRASO_MS)
    } )
    
    setTimeout(function() {
        cambiarEstado('Turno jugador')
        desbloquearInputUsuario();
    }, RETRASO_JUGADOR)

}


function manejarInputUsuario(e) {
    
    const $cuadro = e.target;
    resaltar($cuadro);
    secuenciaUsuario.push($cuadro);
    
    
    const $cuadroMaquina = secuenciaMaquina[secuenciaUsuario.length - 1];

    console.log(`Cuadro maquina es: ${$cuadroMaquina.id}`);
    console.log(`Cuadro usuario es ${$cuadro.id}`);


    if ($cuadro.id != $cuadroMaquina.id) {
        perder();
        return;
    }

    if (secuenciaMaquina.length === secuenciaUsuario.length) {
        
        bloquearInputUsuario();

        secuenciaUsuario = [];
        
        setTimeout(function() {
            turnoMaquina();
        }, 1000)
    }
}




function obtenerCuadro(){
    const indiceAleatorio = Math.floor(Math.random() * $cuadrosSimon.length);
    return $cuadrosSimon[indiceAleatorio];
}

function cambiarEstado(nuevoEstado){
    $barraEstado.innerHTML = nuevoEstado;
}

function resaltar($cuadro){
    $cuadro.style.opacity = 1

    setTimeout(function(){
        $cuadro.style.opacity = 0.5
    }, 500)
}

function bloquearInputUsuario() {
    $cuadrosSimon.forEach(function($cuadro){
        $cuadro.onclick = function() {
        
        }
    })
}

function desbloquearInputUsuario() {
    $cuadrosSimon.forEach(function($cuadro){
        $cuadro.onclick = manejarInputUsuario;
        }
    )
}

function perder() {
    bloquearInputUsuario();
    secuenciaMaquina = [];
    secuenciaUsuario = [];
    cambiarEstado('PERDISTE!!')   

    setTimeout(function() {
        cambiarEstado('toca "empezar" para jugar');
    }, 1000)
}

function actualizarRonda(ronda) {
    document.querySelector('#ronda').innerText = ronda;
}