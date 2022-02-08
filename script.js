const displayValorAnterior = document.getElementById('value_ant');
const displayValorActual = document.getElementById('value_act');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperador = document.querySelectorAll('.op');

const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

botonesOperador.forEach(boton =>{
    boton.addEventListener('click', () => display.computar(boton.value));
});