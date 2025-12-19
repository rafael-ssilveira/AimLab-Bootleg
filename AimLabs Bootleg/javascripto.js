let alvo = document.getElementById("alvo");
let iniciar = document.getElementById("iniciar");
let reiniciar = document.getElementById("reiniciar");
let tela = document.getElementById("tela");
let precisaoMenu = document.getElementById("precisao");
let temporizador = document.getElementById("tempo")
let pontuacao = document.getElementById("pontuacao");
let pontos = 0;
let tempo = 0;
let contadorTempo = null;
let rodar = false;
let acertos = 0;
let erros = 0;
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

    if (event.target.closest("#alvo")){
        acertos++;
    }else{
        erros++;
    }
    let disparosTotais = acertos+erros;
    let mediaPrecisao = (acertos/disparosTotais)*100;
    if (disparosTotais == 0){
        precisaoMenu.innerHTML = ("Precisão: 100%");
    }else{
            precisaoMenu.innerHTML = (`Precisão: ${mediaPrecisao.toFixed(1)}%`);
    }

}
tela.addEventListener("click",precisao);