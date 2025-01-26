let numeroSecreto = 0;
let intentos = 1;
let numerosSorteados = [];
let numeroMaximo = 10;
function asignarTextoElemento(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    // console.log(intentos);
    if(numeroUsuario === numeroSecreto){
       asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}`); 
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // Cuando el usuario no acerto
        asignarTextoElemento('p',
            numeroUsuario > numeroSecreto 
            ? 'El numero secreto es menor'
            : 'El numero secreto es mayor');
    }
    intentos++;
    limpiarCaja();
}


function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random() * numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(numerosSorteados);
    // Si ya sorteamos todos los numeros
    if (numerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    } else {
        // Si el numero generado ya está en la lista
        if(numerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto(); // Recursividad
        } else {
            numerosSorteados.push(numeroGenerado)
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Secret Number');
    asignarTextoElemento('p', `Ingrese un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    // Limpiar la caja
    limpiarCaja();
    // Invocar las condiciones iniciales
    condicionesIniciales();
    // Deshabilitar boton
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}

condicionesIniciales();