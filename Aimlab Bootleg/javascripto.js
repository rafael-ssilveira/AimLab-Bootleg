let alvo = document.getElementById("alvo");
let iniciar = document.getElementById("iniciar");
let reiniciar = document.getElementById("reiniciar");
let tela = document.getElementById("tela");
let precisaoMenu = document.getElementById("precisao");
let temporizador = document.getElementById("tempo")
let pontuacao = document.getElementById("pontuacao");
let telaVitoria = document.getElementById("telavitoria");
let pontos = 0;
let tempo = 0;
let contadorTempo = null;
let rodar = false;
let acertos = 0;
let erros = 0;
let mediaPrecisao = 0;
function mudaLugar(event){
    if (event.button == 0){
        pontos++;
        pontuacao.innerHTML = (`Pontuação: ${pontos}`);
    }

    let altura = tela.clientHeight - alvo.clientHeight;
    let largura = tela.clientWidth - alvo.clientWidth;

    let vertical = Math.floor(Math.random()*altura);
    let horizontal = Math.floor(Math.random()*largura);
    alvo.style.transform =`translate(${horizontal}px, ${vertical}px)`;
}
alvo.addEventListener("click", mudaLugar);


function timer(event){
    rodar = !rodar;
    if (rodar){
        iniciar.innerHTML = ("Parar");
        contadorTempo = setInterval(()=>{
        tempo++;
        let segundo = tempo % 60;
        let minuto = Math.floor(tempo/60);
        temporizador.innerHTML = (`Tempo: ${minuto}:${segundo}`);
    },1000)
    }else{
        iniciar.innerHTML = ("Iniciar");
        clearInterval(contadorTempo);
        contadorTempo=null;
    }   
}
iniciar.addEventListener("click",timer);

function reiniciarJogo(){
    pontos = 0;
    tempo = 0;
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
reiniciar.addEventListener("click", reiniciarJogo);

function precisao(event){
    if (event.target.closest("#menu")){
        return 0;
    }else if (event.target.closest("#alvo")){
        acertos++;
    }else if (event.target.closest("#tela")){
        erros++;
    }
    let disparosTotais = acertos+erros;
    mediaPrecisao = (acertos/disparosTotais)*100;
    if (disparosTotais == 0){
        precisaoMenu.innerHTML = ("Precisão: 100%");
    }else{
        precisaoMenu.innerHTML = (`Precisão: ${mediaPrecisao.toFixed(1)}%`);
    }
}
tela.addEventListener("click",precisao);

/*function ganhou(){
        telaVitoria.textContent = ("você ganhou!")
        telaVitoria.style.display = "block";
        clearInterval(contadorTempo);
        alvo.removeEventListener("click", mudaLugar);
}

function verificacao(){
    if (pontos === 5 && tempo<=10){
        ganhou();
    }
}
*/