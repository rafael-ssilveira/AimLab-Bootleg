import { mudaLugar } from "./Modulos/mudaLugar.js";
import { timer } from "./Modulos/timer.js";
import { reiniciarJogo } from "./Modulos/reiniciarJogo.js";
import { precisao } from "./Modulos/precisao.js";
alvo.addEventListener("click", mudaLugar);
iniciar.addEventListener("click",timer);
reiniciar.addEventListener("click", reiniciarJogo);
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