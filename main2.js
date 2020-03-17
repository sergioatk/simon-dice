let secuenciaMaquina = [];
let secuenciaUsuario = [];
const cuadrosSimon = ['rojo', 'verde', 'azul', 'amarillo'];


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
    secuenciaMaquina.forEach(funtcion(color, index)){
        if (color === secuenciaUsuario[i]){
            
        } else {
            perder();
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

