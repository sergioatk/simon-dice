let secuenciaMaquina = [];
let secuenciaUsuario = [];
const cuadrosSimon = ['rojo', 'verde', 'azul', 'amarillo'];


function empezarJuego(){
    turnoMaquina()
}



function turnoMaquina(){
    let nuevoCuadro = obtenerCuadro()
    secuenciaMaquina.push(nuevoCuadro);
    
    console.log(`La secuencia de la maquina es: ${secuenciaMaquina}`)


}

function inputUsuario(cuadro){
    secuenciaUsuario.push(cuadro);
    validarInputUsuario(secuenciaMaquina, secuenciaUsuario);

}



function validarInputUsuario(secuenciaMaquina, secuenciaUsuario){ 
    
    for (let i = 0 ; i < secuenciaMaquina.length; i++){ //lo hago con for ya que no tengo la certeza de recorrer todas las iteraciones
       
        if (secuenciaMaquina[i] != secuenciaUsuario[i]){
           
            console.log('perdiste!');
            secuenciaMaquina = [];
            secuenciaUsuario = [];
        
        } else if ( (i+1) === secuenciaUsuario.length){
           
            console.log('siguiente ronda!');
            secuenciaUsuario = [];

        
        }
    }
    
}


function obtenerCuadro(){
    const indiceAleatorio = Math.floor(Math.random() * cuadrosSimon.length);
    return cuadrosSimon[indiceAleatorio];
}



