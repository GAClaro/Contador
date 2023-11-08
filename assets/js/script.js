var numeroAtualWrapper = document.getElementById('numeroAtual');
var numeroAtual = 0;

function somar() {
    numeroAtual = numeroAtual + 1;
    numeroAtualWrapper.innerHTML = numeroAtual;
}

function subtrair() {
    numeroAtual = numeroAtual - 1;
    numeroAtualWrapper.innerHTML = numeroAtual;
}