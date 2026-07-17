let pontos = 0;
let segundo = 0;
let minuto = 0;
let erros = 0;
let acertos = 0;
let pontuacao = document.getElementById("pontuacao");
let temporizador = document.getElementById("temporizador");
let precisaoMenu = document.getElementById("precisaoMenu");
let iniciar = document.getElementById("iniciar");
let alvo = document.getElementById("alvo");
let reiniciar = document.getElementById("reiniciar");
export function reiniciarJogo(){
    pontos = 0;
    segundo = 0;
    minuto = 0;
    erros = 0;
    acertos = 0;
    pontuacao.innerHTML = ("Pontuação: 0");
    temporizador.innerHTML = ("Tempo: 00:00");
    precisaoMenu.innerHTML = ("Precisão: 100%");
    clearInterval(contadorTempo);
    contadorTempo = null;
    iniciar.innerHTML = ("Iniciar");
    alvo.style.transform = "translate(0px, 0px)";

}