const secuenciaMaquina = [];
const secuenciaUsuario = [];
const cuadrosSimon = ['rojo', 'verde', 'azul', 'amarillo'];


function empezarJuego(){
    turnoMaquina()
}



function turnoMaquina(){
    let nuevoCuadro = obtenerCuadro()
    secuenciaMaquina.push(nuevoCuadro);
    

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
    return cuadrosSimon[indiceAleatorio];
}



