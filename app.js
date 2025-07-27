let numeroSecreto = 0
let listaNumerosSorteados = [];
let intentos = 0;
let numeroMaximo = 10;


function  asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(numeroSecreto);
    console.log("Llevas " + intentos + " intentos.");

    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${intentos == 1? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else {
        //El usuario no acerto
        if (numeroDeUsuario> numeroSecreto) {
            asignarTextoElemento('p','El numero secreto es menor');
        }
        else {
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();

    }
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo+1);
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos lo snumeros posibles
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya no quedan mas numeros por sortear');
       // document.getElementById('reiniciar').removeAttribute('disabled');
        return;
        
    } else {
            //Si el numero generado esta incluido en la lista
         if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();

    }       else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    
    


    }
}

function limpiarCaja() {
   let valorCaja = document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
    return;

}

function reiniciarJuego() {
    //1. Limpiar la caja de texto
    limpiarCaja();
    //2. Indicar mensaje de intervalos de numeros
    condicionesIniciales();
    //3. Generar un nuevo numero secreto
    //4. Reiniciar los intentos
    //5. Deshabilitar el boton de reiniciar
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}


condicionesIniciales();
