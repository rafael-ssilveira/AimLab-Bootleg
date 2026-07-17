let pontos = 0;
let pontuacao = document.getElementById("pontuacao");
let alvo = document.getElementById("alvo");
let tela = document.getElementById("tela");
export function mudaLugar(event){
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